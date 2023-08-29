class Car {
    constructor (brand, model, year, color, km, price, image) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.km = km;
        this.price = price;
        this.image = image;
    }
}

class ListCar {
    constructor() {
        this.arrayCars = [];
    }

    addCar(car) {
        this.arrayCars.push(car);
    }
}

const libaryCars = ListCar();

function registerCar() {

    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;
    let color = document.getElementById("color").value;
    let km = document.getElementById("km").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;

    const car = new Car(brand, model, year, color, km, price, image);

    if (verifyInputs()) {
        mensageError("Preencha os campos acima");
    } else {
        if (!verifyLinkImg(car.image)) {
            mensageError("Imagem não encontrada")
        } else {
            mensageSucess("Jogo cadastrado")
            libaryGames.add(car)
            clearFields();
            showGame();
        }
    }
}

function verifyInputs() {
    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;
    let color = document.getElementById("color").value;
    let km = document.getElementById("km").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;

    if (brand == "" || model == "" || year == "" || color == "" || km == "" || price == "" || image == "") {
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
    }, 2000);
}

function mensageSucess(msg) {

    document.getElementById("msg-sucess").innerHTML = msg;
    document.getElementById("msg-sucess").classList.remove("hidden");
    document.getElementById("msg-sucess").classList.add("style-mensage-sucess");

    setTimeout(function () {
        document.getElementById("msg-sucess").classList.remove("style-mensage-sucess");
        document.getElementById("msg-sucess").classList.add("hidden");
    }, 2000);
}