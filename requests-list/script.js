class Order {
    constructor(client, table, desc) {
        this.client = client;
        this.table = table;
        this.desc = desc;
        this.id = this.generateId();
    }

    generateId() {
        return Math.floor(Math.random() * 1000);
    }
}

class Requests {
    constructor() {
        this.listRequests = [];
    }

    addOrder(order) {
        this.listRequests.push(order);
    }

    tableCounter() {
        return this.listRequests.length;
    }

    listRequestsById(param) {
        return this.listRequests.find(order => order.id == param);
    }

    updateOrder(id, client, table, desc) {
        const order = this.listRequestsById(id);

        order.client = client;
        order.table = table;
        order.desc = desc;

        return order;
    }

    deletOrder(param) {
        return this.listRequests = this.listRequests.filter((order) => order.id != param);
    }

    listAllRequests() {
        return this.listRequests
    }
}

const requestsService = new Requests();

function createOrder() {
    let client = document.getElementById("client").value;
    let table = document.getElementById("table").value;
    let desc = document.getElementById("desc").value;

    const order = new Order(client, table, desc);
    requestsService.addOrder(order);

    if(verifyInputs()) {
        mensageError("Preencha todos os campos");
    }else {
        listRequests();
        clearFields();
    }
}

function listRequests() {
    const requests = requestsService.listAllRequests();

    const listElement = document.getElementById("container-requests2");
    listElement.innerHTML = '';

    requests.forEach(order => {
        listElement.innerHTML += `
        <div>
            <p>ID: ${order.id}</p>
            <p>Cliente: ${order.client}</p>
            <p>Mesa: ${order.table}</p>
            <p>Descrição: ${order.desc}</p>
            <button id="btn-update" class="" onclick="updateOrder(${order.id})">Editar</button>
            <button onclick="removeOrder(${order.id})">Excluir</button>
        </div>
        `
    });
}

let aux = null;

function updateOrder(id) {
    const order = requestsService.listRequestsById(id);

    document.getElementById("client").value = order.client;
    document.getElementById("table").value = order.table;
    document.getElementById("desc").value = order.desc;

    document.getElementById("btn-update").classList.add("hidden");
    document.getElementById("btn-edit").classList.remove("hidden");

    document.getElementById("btn-createOrder").classList.add("hidden");

    aux = id;
}

function editOrder() {
    const client = document.getElementById("client").value;
    const table = document.getElementById("table").value;
    const desc = document.getElementById("desc").value;

    requestsService.updateOrder(aux, client, table, desc);

    listRequests();

    document.getElementById("btn-update").classList.remove("hidden");
    document.getElementById("btn-edit").classList.add("hidden");

    document.getElementById("btn-createOrder").classList.remove("hidden");

    aux = null;
    clearFields();
}

function removeOrder(id) {
    requestsService.deletOrder(id);

    listRequests();

    document.getElementById("container-requests2").classList.add('hidden');
}

function clearFields() {
    document.getElementById("client").value = '';
    document.getElementById("table").value = '';
    document.getElementById("desc").value = '';
}

function verifyInputs() {
    if (document.getElementById("client").value == "" || document.getElementById("table").value == "" || document.getElementById("desc").value == "") {
        return true;
    } else {
        return false;
    }
}

function mensageError(msg) {

    document.getElementById("msg").innerHTML = msg;
    document.getElementById("msg").classList.remove("hidden");
    document.getElementById("msg").classList.add("msg-error");

    setTimeout(function () {
        document.getElementById("msg").classList.remove("msg-error");
        document.getElementById("msg").classList.add("hidden");
    }, 3000);
}
