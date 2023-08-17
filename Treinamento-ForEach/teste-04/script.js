class Car {
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class CarsList {
    constructor() {
        this.cars = []; // Erro estava aqui, o nome era listCar, o mesmo nome da instancia
        // alterei para cars
    }

    addCar(car) {
        // ai precisei alterar o nome do array aqui tbm
        this.cars.push(car);
    }
}

function cleanFields() {
    document.getElementById("car-brand").value = "";
    document.getElementById("car-model").value = "";
}

const listCar = new CarsList ();

function brandModelCars() {
    let brand = document.getElementById("car-brand").value;
    let model = document.getElementById("car-model").value;

    const car = new Car(brand, model);

    listCar.addCar(car);

    console.log(listCar);

   listCar.cars.forEach(car => {
    // depois coloquei aqui, pq ia ficar listCar.listCar.forEach e assim 
    //daria o erro
    console.log(`Nome: ${car.brand}`)
   });

    cleanFields();
}


