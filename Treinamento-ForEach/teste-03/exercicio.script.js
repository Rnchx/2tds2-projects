const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

numbers.forEach((number, index) => {
    if(number %2 == 0) {
        console.log(`O ${number} está na posição ${index}`);
    }
});