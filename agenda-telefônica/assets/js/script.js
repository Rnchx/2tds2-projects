class User {
    constructor(name, telFix, telCell, urlImage, birthday, email, cep, city, instagram, github) {
        this.name = name;
        this.telFix = telFix;
        this.telCell = telCell;
        this.urlImage = urlImage;
        this.birthday = birthday;
        this.sign = this.getZodiacSign(this.birthday);
        this.age = getAge();
        this.email = email;
        this.cep = cep;
        this.city = city;
        this.instagram = instagram;
        this.github = github;
    }

    getZodiacSign() {
        let birthdate = new Date(this.birthayDate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

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

    getAge() {
        let nowDate = new Date();
        let nowYear = nowDate.getFullYear();
        let nowMonth = nowDate.getMonth();
        let birthdate = new Date(this.birthday);
        let year = birthdate.getFullYear();
        let month = birthdate.getMonth();
        let day = birthdate.getDay();

        console.log(birthdate);
        console.log(month);
        console.log(day);

        let counter = nowYear - year;

        if (nowMonth < month || nowMonth == month && nowDate < day) {
        }

        return counter < 0 ? 0 : counter;
    }
}

const links = new User();

class ListUser {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    createContact() {
        if (isAnyInputEmpty()) {
            sendErrorMsg("Preencha os campos vazios");
        }else if (verifyUrlImage()) {
            sendErrorMsg("Imagem não encontrada!")
        }else if(verifyUrlSocialNetwork(links.instagram)) {
            sendErrorMsg("Não é uma URL válida do Instagram.");
        }else if(verifyUrlSocialNetwork(links.github)){
            sendErrorMsg("Não é uma URL válida do GitHub.");
        }else {
            sendSucessMsg('Contato adicionado a biblioteca');
            LibaryUsers.addUser(this.users);
            clearInputs();

            let showCardUser = document.getElementById("container2");
            showCardUser.innerHTML = '';

            LibaryUsers.users.forEach(user => {
                showCardUser.innerHTML += `
            <div class="contact" onclick="showInformation()">
            <img class="style-img" id="img" src="${user.urlImage}">
            <p id="style-name">${user.name}</p>
            <p id="style-telFix">${formatedCellphone(user.telFix)}</p>
            <p id="style-telCell">${formatedCellphone(user.telCell)}</p>
            </div>`
            });
        }
    }
}

const LibaryUsers = new ListUser();

function formatedTelFix(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

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

    if (url.match(/\.(Jpeg|jpg|gif|png|webp)$/) != null) {
        return true;
    } else {
        return false;
    }

}

function verifyUrlSocialNetwork(url) {
    if(url == "https://github.com/" + github || url == "https://www.instagram.com/" + instagram) {
        return true;
    }else {
        return false;
    }
}

function showInformation() {
    let showUser = document.getElementById("container3");
    showUser.innerHTML = '';

    LibaryUsers.users.forEach(user => {
        showUser.innerHTML += `
        <img class="style-img" id="img" src="${user.urlImage}">
        <p id="style-name">${user.name}</p>
        <p id="style-id">${user.id}</p>
        <p id="style-telCell">${user.telCell}</p>
        <p id="style-telFix">${user.telFix}</p>
        <p id="style-birthday">${user.birthdate}</p>
        <p id="style-age">${user.age}</p>
        <p id="style-sign">${user.sign}</p>
        <p id="style-email">${user.email}</p>
        <p id="style-cep">${user.cep}</p>
        <p id="style-city">${user.city}</p>
        <p id="style-instagram">${user.instagram}</p>
        <p id="style-github">${user.github}</p>
        <button type="button" id="btn-edit" class="btnEdit" onclick="edit"><i class="fa-solid fa-pencil" style="color: #000000;"></i></button>
        <button type="button" id="btn-remove" class="btnRemove" onclick="remove"><i class="fa-solid fa-pencil" style="color: #000000;"></i></button>`
    });
}