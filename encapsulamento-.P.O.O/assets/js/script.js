class  CamaraSecreta {
    constructor (name, pwd) {
        this.name = name;
        let _pwd = pwd;

        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd;
        }

        this.acessChamber = () => {
            let pwdInput = prompt("Digite sua senha");

            if(this.verifyPwd(pwdInput)) {
                console.log(`Bem vindo a camara Secreta ${this.name}.`);
            }else {
                console.log(`Não entra trouxa na camara secreta!`);
            }
        };
    }

    showName() {
        console.log(`Olá ${this.name}`);
    }
}

const myAcess1 = new CamaraSecreta('Harry Potter', 'senha');

myAcess1.showName();
myAcess1.name = 'HP';
myAcess1.acessChamber();