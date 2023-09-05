class User {
    constructor(name, telFix, telCell, urlImage, birthday, email, cep, city, instagram, github) {
        this.name = name;
        this.telFix = telFix;
        this.telCell = telCell;
        this.urlImage = urlImage;
        this.birthday = birthday;
        this.sign = this.getZodiacSign(this.birthday);
        this.age = this.getAge(this.birthday);
        this.email = email;
        this.cep = cep;
        this.city = city;
        this.instagram = instagram;
        this.github = github;
        this.id = (Math.random() * 9999);
    }

    getZodiacSign(birth) {
        let birthdate = new Date(birth);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }

    getAge(birth) {
        let today = new Date();
        let birthdate = new Date(birth);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    }
}

class ListUser {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        if (isAnyInputEmpty(user)) {
            sendErrorMsg("Preencha todos campos!");
        }else if(verifyUrlImage(user.urlImage)) {
            sendErrorMsg("link da imagem inválido");
        }else {
            sendSucessMsg('Contato adicionado à biblioteca');
            this.users.push(user);
            clearInputs();
            createUser();
        }
    }

    VerifyIdExist(id){
        return this.users.find(user => user.id === id)
    }
}

const libaryUsers = new ListUser();

function createContact() {
    const name = document.getElementById("name").value;
    const telFix = document.getElementById("telFix").value;
    const telCell = document.getElementById("telCell").value;
    const urlImage = document.getElementById("urlImage").value;
    const birthday = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const city = document.getElementById("city").value;
    const instagram = document.getElementById("instagram").value;
    const github = document.getElementById("github").value;

    const user = new User(name, telFix, telCell, urlImage, birthday, email, cep, city, instagram, github);

    libaryUsers.addUser(user);
}


function sendErrorMsg(msg) {

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    document.getElementById("sucess-msg").classList.add("style-error-msg");
    setTimeout(function () {
        document.getElementById("sucess-msg").classList.remove("style-error-msg");
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function sendSucessMsg(msg) {
    console.log("Passou pela funcao sendSucessMsg()");

    document.getElementById("sucess-msg").innerHTML = msg;
    document.getElementById("sucess-msg").classList.remove("hidden");
    document.getElementById("sucess-msg").classList.add("style-sucess-msg");
    setTimeout(function () {
        document.getElementById("sucess-msg").classList.remove("style-sucess-msg");
        document.getElementById("sucess-msg").classList.add("hidden");
    }, 4000);
}

function isAnyInputEmpty() {
    const name = document.getElementById("name").value;
    const telFix = document.getElementById("telFix").value;
    const telCell = document.getElementById("telCell").value;
    const urlImage = document.getElementById("urlImage").value;
    const birthday = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const city = document.getElementById("city").value;
    const instagram = document.getElementById("instagram").value;
    const github = document.getElementById("github").value;

    if (name == "" || telFix == "" || telCell == "" || urlImage == "" || birthday == "" || email == "" || cep == "" || city == "" || instagram == "" || github == "") {
        return true
    } else {
        return false
    }
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("telFix").value = "";
    document.getElementById("telCell").value = "";
    document.getElementById("urlImage").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("city").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("github").value = "";
}

function verifyUrlImage(url) {
    if (url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null) {
        return false;
    } else {
        return true;
    }
}

function formatedCellphone(cellphone) {

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function formatedCEP(value) {
    let cep = String(value).split("");
    let cepNew = cep[0] + cep[1] + cep[2] + cep[3] + cep[4] + "-" + cep[5] + cep[6] + cep[7];

    return cepNew;
}

function dateBr(date) {
    const dateArray = date.split("-");
    const datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

function createUser() {
    let showCardUser = document.getElementById("container2");
    showCardUser.innerHTML = '';

        libaryUsers.users.forEach(user => {
        showCardUser.innerHTML += `
        <div class="carContact" onclick="showInformation(${user.id})">
        <img src="${user.urlImage} alt="${user.name}-photo">
        <div class="information-card">
        <p>${user.name}</p>
        <p>Telefone fixo: ${formatedCellphone(user.telFix)}</p>
        <p>Telefone Celular: ${formatedCellphone(user.telCell)}</p>
        </div>
        </div>`
    });
}

function showInformation(id) {
    const user = libaryUsers.VerifyIdExist(id);
    let showUser = document.getElementById("container3");
    showUser.innerHTML = '';

        showUser.innerHTML += `
        <h1>Detalhes</h1>
        <main class="big-card">
        <img class="style-img" id="img" src="${user.urlImage}">
        <p id="style-name">${user.name}</p>
        <p id="style-id">${user.id}</p>
        </div>
        <div class="big-card2">
        <p id="style-telCell">${formatedCellphone(user.telCell)}</p>
        <p id="style-telFix">${formatedCellphone(user.telFix)}</p>
        <p id="style-birthday">${dateBr(user.birthday)}</p>
        <p id="style-age">${user.age}</p>
        <p id="style-sign">${user.sign}</p>
        <p id="style-email">${user.email}</p>
        <p id="style-cep">${formatedCEP(user.cep)}</p>
        <p id="style-city">${user.city}</p>
        <p id="style-instagram">${user.instagram}</p>
        <p id="style-github">${user.github}</p>
        </div>
        <div class="socialMedias">
        <a href="https://wa.me/55${user.telCell}"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/${user.instagram}/"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://github.com/${user.github}"><i class="fa-brands fa-github"></i></a>
        </div>
        </main>`
}