class Game {
    constructor(title, price, description, plataform, linkImg) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.plataform = plataform;
        this.linkImg = linkImg;
    }
}

class GamesList {
    constructor() {
        this.arrayJogos = [];
    }

    add(game) {
        this.arrayJogos.push(game);
    }
}

const libaryGames = new GamesList();

function registerGame() {

    let nameGame = document.getElementById("title-game").value;
    let price = document.getElementById("price-game").value;
    let desc = document.getElementById("description-game").value;
    let platf = document.getElementById("plataform-game").value;
    let urlImage = document.getElementById("link-image").value;

    const game = new Game(nameGame, price, desc, platf, urlImage);

    if (verifyCleanInputs()) {
        mensageError("Preencha os campos acima");
    } else {
        if (!verifyLinkImg(game.linkImg)) {
            mensageError("Imagem não encontrada")
        } else {
            mensageSucess("Jogo cadastrado")
            libaryGames.add(game)
            clearFields();
            showGame();
        }
    }
}

function verifyCleanInputs() {
    let nameGame = document.getElementById("title-game").value;
    let price = document.getElementById("price-game").value;
    let desc = document.getElementById("description-game").value;
    let platf = document.getElementById("plataform-game").value;
    let urlImage = document.getElementById("link-image").value;

    if (nameGame == "" || price == "" || desc == "" || platf == "" || urlImage == "") {
        return true;
    } else {
        return false;
    }
}

function mensageError(msg) {

    document.getElementById("msg-error").innerHTML = msg;
    document.getElementById("msg-error").classList.remove("hidden");
    document.getElementById("msg-error").classList.add("style-mensage-error");

    setTimeout(function () {
        document.getElementById("msg-error").classList.remove("style-mensage-error");
        document.getElementById("msg-error").classList.add("hidden");
    }, 3000);
}

function mensageSucess(msg) {

    document.getElementById("msg-sucess").innerHTML = msg;
    document.getElementById("msg-sucess").classList.remove("hidden");
    document.getElementById("msg-sucess").classList.add("style-mensage-sucess");

    setTimeout(function () {
        document.getElementById("msg-sucess").classList.remove("style-mensage-sucess");
        document.getElementById("msg-sucess").classList.add("hidden");
    }, 3000);
}

function clearFields() {

    document.getElementById("title-game").value = "";
    document.getElementById("price-game").value = "";
    document.getElementById("description-game").value = "";
    document.getElementById("plataform-game").value = "";
    document.getElementById("link-image").value = "";
}

function showGame() {

    let showGame = document.getElementById("container2");

    libaryGames.arrayJogos.forEach(game => {
        showGame.innerHTML += `
    <h1 id="style-title-game">${game.title}</h1>
    <p id="style-price-game">$ ${game.price}</p>
    <p id="style-description-game">${game.description}</p>
    <p id="style-plataform-game">${game.plataform}</p>
    <img class="style-img" id="img" src="${game.linkImg}">`;
    });

    let divShowGame = document.getElementById("container2");
    divShowGame.classList.remove("hidden");
    divShowGame.classList.add("style-container2");
}

function verifyLinkImg(url) {

    if (url.match(/\.(Jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }

}