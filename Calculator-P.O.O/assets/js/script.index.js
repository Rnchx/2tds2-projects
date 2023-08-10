class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("Sum: ", sumResult);

const subtractResult = calculator.subtract(10, 4);
console.log("subtract: ", subtractResult);

const multiplyResult = calculator.multiply(3, 4);
console.log("multiply: ", multiplyResult);

const divideResult = calculator.divide(8, 2);
console.log("divide: ", divideResult);