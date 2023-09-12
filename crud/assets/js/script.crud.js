class Team {
    constructor(name, holders) {
        this.name = name;
        this.holders = holders;
        this.id =  this.generateId();
        this.reservations = this.calculateReservation();
        this.totalPlayers = this.calculatePlayers();
    }

    generateId() {
        return Math.floor(Math.random() * 1000);
    }

    calculateReservation() {
        return Math.floor(this.holders / 2);
    }

    calculatePlayers() {
        return Math.floor(this.holders + this.reservations);
    }
}

class Teams {
    constructor() {
        this.arrayTeams = [];
    }

    addTeam(team) {
        if (isAnyInputEmpty()) {
            envieMsg("preencha todos os campos", "error");
        } else {
            this.arrayTeams.push(team);
            register();
        }
    }

    listTeam() {
        return this.arrayTeams;
    }

    getId(id) {
        return this.arrayTeams.find((team) => team.id == id);
    }

    updateTeam(id, holders, name) {
        const team = this.getId(id);

        team.name = name;
        team.holders = holders;
        team.reservations = team.calculateReservation();
        team.totalPlayers = team.calculatePlayers();

        return team;
    }

    removeTeam(id) {
        return this.arrayTeams = this.arrayTeams.filter((team) => team.id != id);
    }
}

const teamList = new Teams();

function catchValues() {
    let teamName = document.getElementById("equip-name").value;
    let numberPlayers = Number (document.getElementById("number-players").value);

    const team = new Team(teamName, numberPlayers);

    teamList.addTeam(team);

    clearInputs();
}

function isAnyInputEmpty() {
    if (document.getElementById("equip-name").value == "" || document.getElementById("number-players").value == "") {
        return true;
    } else {
        return false;
    }
}

function envieMsg(msg, tipoMsg) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
        <p class='${tipoMsg}'>${msg}</p>
    `
    msgDiv.innerHTML = msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}

function clearInputs() {
    document.getElementById("equip-name").value = "";
    document.getElementById("number-players").value = "";
}

function register() {
    const teams = teamList.listTeam();

    let listHTML = document.getElementById("small-card");

    teams.forEach(team => {
        listHTML.innerHTML += `
            <div class="bigCard" onclick="renderInformations(${team.id})">
                    <b><p>Nome da equipe: ${team.name}</p></b>
            </div>
        `
    });
}

function renderInformations(id) {
    const team = teamList.getId(id);
    let bigCard = document.getElementById("big-card");

    bigCard.innerHTML += `
                <h1>Detalhes do contato:</h1>
                <section class="other-informations">
                    <p><b>ID:</b> ${team.id}</p>
                    <p><b>Nome da equipe:</b> ${team.name}</p>
                    <p><b>Titulares:</b> ${team.holders}</p>
                    <p><b>Reservas:</b> ${team.reservations}</p>
                    <p><b>Total de jogadores:</b> ${team.totalPlayers}</p>
                    <button onclick="updateTeam(${team.id})">Editar</button>
                    <button onclick="removeTeam(${team.id})">Remover</button>
                </section>
            `
}

let aux = null;

function updateTeam(id) {
    const team = teamList.getId(id);

    document.getElementById("equip-name").value = team.name;
    document.getElementById("number-players").value = team.holders;

    document.getElementById("btn-register").classList.add("hidden");
    document.getElementById("btn-edit").classList.remove("hidden");

    aux = id;
}

function editTeam() {
    const name = document.getElementById("equip-name").value;
    const holders = document.getElementById("equip-name").value;

    teamList.updateTeam(aux, name, holders);
    
    register();

    document.getElementById("btn-register").classList.remove("hidden");
    document.getElementById("btn-edit").classList.add("hidden");

    document.getElementById("big-card").classList.add("hidden");

    aux = null;
    clearInputs();
}

function removeTeam(id) {
    teamList.removeTeam(id);
}
