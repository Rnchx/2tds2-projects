class book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.borrowedBooks = [];
    }

    pickUpBook(book) {
        this.borrowedBooks.push(book);
        console.log(`${this.name} pegou o livro ${book.title}`);
    }

    takenBooks() {
        let takenBooks = "";

        if (this.borrowedBooks.length == 0) {
            console.log(`${this.name} não tem livros emprestados`);
        } else {
            this.borrowedBooks.forEach((index) => {
                takenBooks += index.title;
            });
            console.log(`${this.name} pegou tais livros: ${takenBooks}`);
        }
    }
}

class Libary {
    constructor() {
        this.registeredPeople = [];
        this.avaliableBooks = [];
    }

    addBook(book) {
        this.avaliableBooks.push(book);
        console.log(`foi adicionado o livro ${book.title} com ${book.pages} páginas`);
    }

    addPerson(person) {
        this.registeredPeople.push(person);

        if(person.name == 'João') {
            console.log(`${person.name} foi cadastrado`);
        }else {
            console.log(`${person.name} foi cadastrada`);
        }
        
    }

}

const book1 = new book('Vivalá', 'Pedro Medeiros', 633);
const book2 = new book('Monster in Ohio', 'Karlen Medson', 265);
const book3 = new book('Harry Potter a Camara Secreta', 'J.K Rowlling', 403);
const book4 = new book('Missão Impossível', 'Jackson Morrow', 278);
const book5 = new book('Buraco do inferno', 'Fillip Doiewl', 349);
const person1 = new person('João', 16);
const person2 = new person('Lívia', 16);
const person3 = new person('Sophia', 16);

const libary = new Libary();

libary.addBook(book1);
libary.addBook(book2);
libary.addPerson(person1);
libary.addPerson(person2);

person1.pickUpBook(book1);
person2.pickUpBook(book3);
person3.pickUpBook(book4);

person1.takenBooks();
person2.takenBooks();
person3.takenBooks();