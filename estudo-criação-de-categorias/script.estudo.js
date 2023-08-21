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


Function CreateForm() {
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

   newForm += `
   <h2>Nome: ${name}</h2>
   <p>Telefone: ${numberCell} </p>
   <p>cpf: ${cpf} </p>
   `


}

