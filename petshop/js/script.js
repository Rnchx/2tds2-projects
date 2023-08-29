class Pet {
    constructor(tutor, nomePet, especie, fotoPet, dataNascimento) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.especie = especie;
        this.fotoPet = fotoPet;
        this.dataNascimento = dataNascimento;
    }
}

class ListaPets {
    constructor() {
        this.arrayPets = [];
    }
}

const pets = new ListaPets();


//Função para fazer a verificação dos inputs vazios
function verifyInputys() {
    let tutor = document.getElementById("tutor").value;
    let nomePet = document.getElementById("nome-pet").value;
    let especie = document.getElementById("especie").value;
    let fotoPet = document.getElementById("foto").value;
    let dataNascimento = document.getElementById("data-nascimento").value;

    if (tutor == "" || nomePet == "" || especie == "" || fotoPet == "" || dataNascimento == "") {
        return true;
    } else {
        return false;
    }
}