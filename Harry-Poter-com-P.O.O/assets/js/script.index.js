class witch {
    constructor(name, patron, house, colorEyes) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }
    getName() {
        return `O nome do bruxo(a) é: ${this.name}`;
    }

    gethouse() {
        return `Ele(a) está na casa ${this.house}`;
    }

    getPatron() {
        return `Seu patrono é: ${this.patron}`;
    }
}

const witch1 = new witch('Harry Potter', 'Deer', 'Grynffindor', 'green');

console.log(witch1);


class TypeWitch extends witch {
    constructor (name, patron, house, colorEyes, TypeWitch) {
        super(name, patron, house, colorEyes);
        this.TypeWitch = TypeWitch;
    }

    getTypeWitch() {
        if(this.TypeWitch === 'P') {
            return `Este Bruxo é sangue puro`;
        }else if (this.TypeWitch === 'M') {
            return `Este Bruxo é mestiço`
        }else {
            return `Este é um trouxa`;
        }
    }
}

const harry = new TypeWitch('Harry Potter', 'Cervo', 'Grynffindor', 'verde', 'M');
console.log(harry.getTypeWitch);