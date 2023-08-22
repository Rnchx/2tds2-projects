class User {
    constructor(name, email, birthayDate, city, cellphone, cpf) {
        this.name = name;
        this.email = email;
        this.birthayDate = birthayDate;
        this.city = city;
        this.cellphone = cellphone;
        this.cpf = cpf;
        this.age = this.calculateAge();
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

    calculateAge() {
        // Datas de hoje
        let nowDate = new Date();
        let nowYear = nowDate.getFullYear();
        console.log(nowYear);

        // Datas do usuário
        let birthdate = new Date(this.birthayDate);
        let year = birthdate.getFullYear();
        //console.log("Data completa: " + birthdate);
        console.log("Apenas ano: " + year);
        let counter = nowYear - year;
        console.log(counter);
    }
}

class ListUser {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }
}

const listUsers = new ListUser();
const sign = new User();
const age = new User();

function createUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthayDate = document.getElementById("birthdate").value;
    const city = document.getElementById("address").value;
    const cellphone = document.getElementById("phone").value;
    const cpf = document.getElementById("cpf").value;
    //let createNewUser;

    const user = new User(name, email, birthayDate, city, cellphone, cpf);
    listUsers.addUser(user)
    //sign.getZodiacSign()

    //isAnyInputEmpty();
    clearInputs();
    //showRegister();
    //valida_cpf();

    createNewUser = document.getElementById("user-list");
    createNewUser += `
    <h1>${name}</h1>
    <p>${email}</p>
    <p>${age.calculateAge}</p>
    <p>${city}</p>
    <p>${cellphone}</p>
    <p>${sign.getZodiacSign}</p>
  `
}

function showUsers() {
    document.getElementById("sub-div").classList.remove("hidden");
    document.getElementById("title-page").classList.add("hidden");
    document.getElementById("main-div").classList.add("hidden");
    console.log("Passou pela funcao showUsers()");
}

function showRegister() {
    document.getElementById("sub-div").classList.add("hidden");
    document.getElementById("title-page").classList.remove("hidden");
    document.getElementById("main-div").classList.remove("hidden");
    console.log("Passou pela funcao showRegister()");

}

function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}

function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {    
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function sendSucessMsg(msg) {
    console.log("Passou pela funcao sendSucessMsg()");

    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
}

function isAnyInputEmpty() {
    const iname = document.getElementById("name").value;
    const iemail = document.getElementById("email").value;
    const ibirthayDate = document.getElementById("birthdate").value;
    const icity = document.getElementById("address").value;
    const icellphone = document.getElementById("phone").value;
    const icpf = document.getElementById("cpf").value;

    if (iname == "" && iemail == "" && ibirthayDate == "" && icity == "" && icellphone == "" && icpf == "") {
        sendErrorMsg("Escreva algo nos campos acima");
    }else {
        sendSucessMsg("Formulário enviado com sucesso!");
    }
}

function clearInputs() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("birthdate").value = "";
        document.getElementById("address").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("cpf").value = "";
}

