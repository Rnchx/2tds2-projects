class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`)
    }
}

const user1 = new User('João', 30); // Criando instâncias
user1.introduce();