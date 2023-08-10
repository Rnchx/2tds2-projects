class Pizza {
    constructor(size, base, sauce, toppings, cheese) {
        
        this.size = size;
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription() {
        return `A delicious pizza with ${this.size} pieces and with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, ${this.cheese} cheese.`;
    }

    getSizePizza() {
        if (this.size == 'Small') {
            return 4;
        }else if(this.size == 'Medium') {
            return 8;
        }else if(this.size == 'Big') {
            return 16;
        }else {
            return 'This size does not exist';
        }
    }

    getTimerBase() {
        if (this.base == 'Traditional') {
            return 10;
        } else if (this.base == 'Integral') {
            return 15;
        } else {
            return 'This base does not exist';
        }
    }

    getTimerSauce() {
        if (this.sauce == 'Tomato') {
            return 5;
        } else if (this.sauce == 'Pezzo') {
            return 8;
        } else {
            return 'This Sauce does not exist';
        }
    }

    getTimerToppings() {
        if (this.toppings == 'Pepperoni') {
            return 8;
        } else if (this.toppings == 'Smoked parma ham') {
            return 15;
        } else {
            return 'This Toppings does not exist';
        }
    }

    getTimerCheese() {
        if (this.cheese == 'Mozzarella') {
            return 2;
        } else if (this.cheese == 'Provolone') {
            return 5;
        } else {
            return 'This Cheese does not exist';
        }
    }

    getValueBase() {
        if (this.base == 'Traditional') {
            return 50;
        } else if (this.base == 'Integral') {
            return 80;
        } else {
            return 'This base does not exist';
        }
    }

    getValueSauce() {
        if (this.sauce == 'Tomato') {
            return 25;
        } else if (this.sauce == 'Pezzo') {
            return 60;
        } else {
            return 'This Sauce does not exist';
        }
    }

    getValueToppings() {
        if (this.toppings == 'Pepperoni') {
            return 33;
        } else if (this.toppings == 'Smoked parma ham') {
            return 102;
        } else {
            return 'This Toppings does not exist';
        }
    }

    getValueCheese() {
        if (this.cheese == 'Mozzarella') {
            return 48;
        } else if (this.cheese == 'Provolone') {
            return 93;
        } else {
            return 'This Cheese does not exist';
        }
    }
}


const myPizza = new Pizza('Medium   ', 'Traditional', 'Pezzo', 'Pepperoni', 'Provolone');
const totalTimer = myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getTimerToppings() + myPizza.getTimerCheese();
const totalValue =  myPizza.getValueBase() + myPizza.getValueSauce() + myPizza.getValueToppings() + myPizza.getValueCheese();
console.log(myPizza.getDescription());
console.log('How long does your pizza ' + myPizza.getSizePizza() + ' it will take to get ready it will be '  + totalTimer + ' minutes e sua pizza custará ' + totalValue);