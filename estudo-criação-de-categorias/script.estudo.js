 class Form {
    constructor (name, numberCell, cpf, gender, oursWork, date) {
        this.name = name;
        this.numberCell = numberCell;
        this.cpf = cpf;
        this.gender = gender;
        this.ours = oursWork;
        this.date = date;
    }
 }

class FormServices {
    constructor() {
        this.infomations = [];
        this.nextForm = 0;
    }

    addForm(name, numberCell, cpf, gender, oursWork, date) {
        const id = this.nextForm ++;
        const form = new Form(id, name, numberCell, cpf, gender, oursWork, date, );
        this.nextForm.push(form);
    }
}

const productList = new FormServices();

function CreateForm() {
   const name = document.getElementById("inpt-name").value;
   const numberCell = document.getElementById("inpt-numberCell").value;
   const cpf = document.getElementById("inpt-CPF").value;
   const gender = document.getElementById("select-gender").value;
   const oursWork = document.getElementById("inpt-Carga-horária").value;
   const date = document.getElementById("inpt-date").value;
   let newForm;

   productList.addForm(name, numberCell, cpf, gender, oursWork, date);

   newForm = document.getElementById("show-waiting-list");

   newForm.classList.remove("hidden");
   newForm.classList.add("style-show-waiting-list");

   newForm.innerHTML += `
   <h2>Nome: ${name}</h2>
   <p>Telefone: ${numberCell} </p>
   <p>cpf: ${cpf}</p>
   <p>gênero: ${gender}</p>
   <p>Horas Disponíveis: ${oursWork}</p>
   <p>Data: ${date} </P>`;
}

function ShowWaitingList() {
    
    let principalMain;
    let divForm;
    let h1Form;
    let divShowList;

    principalMain = document.getElementById("main-principal").value;
    divForm = document.getElementById("div-pai").value;
    h1Form = document.getElementById("h1-form").value;
    divShowList = document.getElementById("show-waiting-list").value;

    principalMain.classList.add("hidden-principalMain");
    divForm.classList.remove("hidden-div-pai");
    divForm.classList.add("style-div-pai");
    h1Form.classList.remove("hidden-h1-form");
    h1Form.classlist.add("style-h1-form");
    divShowList.classlist.remove("hidden-show-waiting-list");
    divShowList.classList.add("style-show-waiting-list");
}

function contAge() {
    const age =document.getElementById("inpt-date").value;

    age.split("-").reverse();

    

    const contador = 2023 - 
}

function verificateSigno() {
    
}

function timeOut() {

}

function validCPF() {

}

function Sucess() {

}

function CleanFields() {

}

