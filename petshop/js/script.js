class Pet {
    constructor(tutor, nomePet, especie, fotoPet, dataNascimento) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.especie = especie;
        this.fotoPet = fotoPet;
        this.dataNascimento = dataNascimento;
    }

    getAge() {
        let nowDate = new Date();
        let anoAtual = nowDate.getFullYear();
        let aniversario = new Date(this.dataNascimento);
        let ano = aniversario.getFullYear();
        let counter = anoAtual - ano;
    
        return counter;
    }
}

class ListaPets {
    constructor() {
        this.arrayPets = [];
    }

    add(pet) {
        this.arrayPets.push(pet);
    }
}

const pets = new ListaPets();


//Função para fazer a verificação dos inputs vazios
function verificarInputs() {
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

//Função para mostrar a mensagem de erro para o usuário
function mensagemErro(msg) {

    document.getElementById("msg-error").innerHTML = msg;
    document.getElementById("msg-error").classList.remove("esconder");
    document.getElementById("msg-error").classList.add("mensagem-erro");

    setTimeout(function () {
        document.getElementById("msg-error").classList.remove("mensagem-erro");
        document.getElementById("msg-error").classList.add("esconder");
    }, 3000);
}

//Função para mostrar a mensagem de sucesso para o usuário
function mensagemSucesso(msg) {

    document.getElementById("msg-sucess").innerHTML = msg;
    document.getElementById("msg-sucess").classList.remove("esconder");
    document.getElementById("msg-sucess").classList.add("mensagem-sucesso");

    setTimeout(function () {
        document.getElementById("msg-sucess").classList.remove("style-mensage-sucess");
        document.getElementById("msg-sucess").classList.add("esconder");
    }, 3000);
}

//Função para limpar os campos quando o usuário terminar de preencher o formulário
function limparCampos() {

    document.getElementById("title-game").value = "";
    document.getElementById("price-game").value = "";
    document.getElementById("description-game").value = "";
    document.getElementById("plataform-game").value = "";
    document.getElementById("link-image").value = "";
}

//Função para verificar se a imagem existe
function verificarImagem(url) {

    if (url.match(/\.(Jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }

}

//Função que cria o cadastro do Pet no HTML
function mostrarAnimal() {

    let mostrarAnimal = document.getElementById("container-mostrar-animais");

    pets.arrayPets.forEach(pet => {
        mostrarAnimal.innerHTML += `
    <img class="style-img" id="img" src="${pet.fotoPet}">
    <p id="style-title-pet">${pet.tutor}</p>
    <p id="style-nome-pet">$ ${pet.nomePet}</p>
    <p id="style-especie-pet">${pet.especie}</p>
    <p id="style-nscimento-pet">${getAge(pet.dataNascimento)}</p>`;
    });

    let divMostrarAnimal = document.getElementById("container-mostrar-animais");
    divMostrarAnimal.classList.remove("esconder");
    divMostrarAnimal.classList.add("style-container-mostrar-animal");
}

//Função para registrar o animal
function registrarAnimal() {
    let tutor = document.getElementById("tutor").value;
    let nomePet = document.getElementById("nome-pet").value;
    let especie = document.getElementById("especie").value;
    let fotoPet = document.getElementById("foto").value;
    let dataNascimento = document.getElementById("data-nascimento").value;

    const pet = new Pet(tutor, nomePet, especie, fotoPet, dataNascimento)

    if (verificarInputs()) {
        mensagemErro("Preencha os campos acima");
    } else {
        if (!verificarImagem(pet.fotoPet)) {
            mensagemErro("Imagem não encontrada")
        } else {
            mensagemSucesso("Animal cadastrado")
            pets.add(pet)
            limparCampos();
        }
    }
}

function pageCadastro() {
    let tituloSite = document.getElementById("titulo-site");
    let tituloCadastrados = document.getElementById("titulo-cadastrados");
    let containerMostrarAnimais = document.getElementById("container-mostrar-animais");
    let main = document.getElementById("main-principal");

    tituloSite.classList.add("hidden");
    tituloCadastrados.classList.remove("hidden");
    tituloCadastrados.classList.add("style-titulo-site");
    containerMostrarAnimais.classList.remove("hidden");
    containerMostrarAnimais.classList.add("style-container-mostrar-animais");
    main.classList.add("hidden")
}