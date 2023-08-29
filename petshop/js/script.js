class Pet {
    constructor(tutor, nomePet, especie, fotoPet, dataNascimento) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.especie = especie;
        this.fotoPet = fotoPet;
        this.dataNascimento = dataNascimento;
        this.age = this.getAge();
    }

    getAge() {
        const nowDate = new Date();
        const aniversario = new Date(this.dataNascimento);
    
        const diferenca = nowDate - aniversario;
    
        const dias = diferenca / (1000 * 60 * 60 * 24);
    
        const anos = Math.floor(dias / 365);
        const meses = Math.floor((dias % 365) / 30);
        const diasRestantes = Math.floor((dias % 365) % 30);
    
        return `${anos} anos, ${meses} meses, ${diasRestantes} dias`;
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

const libaryPets = new ListaPets();


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

    document.getElementById("tutor").value = "";
    document.getElementById("nome-pet").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("data-nascimento").value = "";
}

//Função para verificar se a imagem existe
function verificarImagem(url) {

    if (url.match(/\.(Jpeg|jpg|gif|png|webp)$/) != null) {
        return true;
    } else {
        return false;
    }

}

//Função que cria o cadastro do Pet no HTML
function mostrarAnimal() {
    let mostrarAnimal = document.getElementById("container-mostrar-animais");
    mostrarAnimal.innerHTML = '';

    libaryPets.arrayPets.forEach(pet => {
        mostrarAnimal.innerHTML += `
        <img class="style-img" id="img" src="${pet.fotoPet}">
        <p id="style-title-pet">${pet.tutor}</p>
        <p id="style-nome-pet">${pet.nomePet}</p>
        <p id="style-especie-pet">${pet.especie}</p>
        <p id="style-nscimento-pet">${pet.age}</p>`;
    });

    let divMostrarAnimal = document.getElementById("container-mostrar-animais");
    divMostrarAnimal.classList.remove("esconder");
    divMostrarAnimal.classList.add("style-mostrar-animais");
}

//Função para registrar o animal
function cadastrarPet() {
    let tutor = document.getElementById("tutor").value;
    let nomePet = document.getElementById("nome-pet").value;
    let especie = document.getElementById("especie").value;
    let fotoPet = document.getElementById("foto").value;
    let dataNascimento = document.getElementById("data-nascimento").value;

    const pet = new Pet(tutor, nomePet, especie, fotoPet, dataNascimento);

    if (verificarInputs()) {
        mensagemErro("Preencha os campos acima");
    } else {
        if (!verificarImagem(pet.fotoPet)) {
            mensagemErro("Imagem não encontrada")
        } else {
            mensagemSucesso("Animal cadastrado");
            libaryPets.add(pet);
            limparCampos();
        }
    }
}

//Função para a página se transformar e mostrar os animais cadastrados
function pageExibicao() {
    let tituloSite = document.getElementById("titulo-site");
    let tituloCadastrados = document.getElementById("titulo-cadastrados");
    let main = document.getElementById("main-principal");
    tituloSite.classList.remove("style-titulo-site");
    tituloSite.classList.add("esconder");
    tituloCadastrados.classList.remove("esconder");
    tituloCadastrados.classList.add("style-titulo-site");
    main.classList.remove("style-main-principal")
    main.classList.add("esconder");
    mostrarAnimal();
}

//Função para voltar para a página inicial
function pageCadastro() {
    let tituloSite = document.getElementById("titulo-site");
    let tituloCadastrados = document.getElementById("titulo-cadastrados");
    let main = document.getElementById("main-principal");
    let mostrarAnimal = document.getElementById("container-mostrar-animais");

    mostrarAnimal.classList.remove("style-mostrar-animais");
    mostrarAnimal.classList.add("esconder");
    tituloSite.classList.add("style-titulo-site");
    tituloSite.classList.remove("esconder");
    tituloCadastrados.classList.add("esconder");
    tituloCadastrados.classList.remove("style-titulo-site");
    main.classList.add("style-main-principal")
    main.classList.remove("esconder");
}