const screen = document.querySelector('#screen');
// Select div buttons
const buttons = document.querySelector('#buttons');
// Get all buttons elements from that div
const buttonsList = buttons.querySelectorAll('button');
// Convert Nodelist to an actuall array to use array methods
const newList = Array.from(buttonsList);

const specialKeys = ['+', '-', '*', '/', '=', 'C'];
const operatorKeys = ['+', '-', '*', '/'];

// All buttons that contains numbers array creation
const numbers = newList.filter(number => (
    !specialKeys.includes(number.textContent)
));

const operators = newList.filter(operator => (
    operatorKeys.includes(operator.textContent)
));

const equal = document.querySelector('#equalBtn');
const clear = document.querySelector('#clearBtn');

let num1 = 0;
let operation = 0;
let num2 = 0;

let getValue = (e) => {
    let value = e.target.textContent;
    displayValue(value);
}

let displayValue = (value) => {

    let prev = screen.value;
    let current = value;

    screen.value = `${prev}${current}`;
}

let firstNum = (e) => {

    num1 = screen.value;
    operation = e.target.textContent;
    screen.value = '';

}

let result = () => {
    num2 = screen.value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operation) {
        case '+':
            answer=sum(num1, num2);
            break;
        case '-':
            answer=minus(num1, num2);
            break;
        case '*':
            answer=multiply(num1, num2);
            break;
        case '/':
            answer=substract(num1, num2);
            break;
    }
    screen.value = answer;
}

let sum = (num1, num2) => num1 + num2;

let minus = (num1, num2) => num1 - num2;

let multiply = (num1, num2) => num1 * num2;

let substract = (num1, num2) => num1 / num2;

let reset = () => {
    num1 = '';
    num2 = '';
    operation = '';
    screen.value = '';
}

numbers.forEach((number) => {
    number.addEventListener("click", getValue);
    
});

operators.forEach((operator) => {
    operator.addEventListener("click", firstNum)
});

equal.addEventListener("click", result);

clear.addEventListener("click", reset);