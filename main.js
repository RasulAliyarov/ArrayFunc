////////Massiv
let numbers = [1, 2, 3, 4];

console.log(numbers)

for (let i = 0; i < numbers.length; i++) { //O(n+1)
    console.log(numbers[i] + 1) // O(n)
}

/////Functions

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function substract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}

let result = sum(5,5);
let result2 = multiply(5,5);
let result3 = substract(5,5)
let result4= divide(5,5);

console.log('Sum: '+result, 'Multiply: '+result2, 'Substract: '+result3, 'Divide: '+result4);
