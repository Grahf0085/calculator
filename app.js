// grab DOM elements

// set event listeners on each button, do math, and update DO

import { add, sub, mul, div, temp } from '/utilities.js';

const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const mulButton = document.getElementById('mul-button');
const divButton = document.getElementById('div-button');
const celsius = document.getElementById('celsius');

let firstNumber;
let secondNumber;
let mathResult;

let resultDisplay;

addButton.addEventListener('click', () => {
    firstNumber = document.getElementById('first-add');
    secondNumber = document.getElementById('second-add');
    
    // mathResult = Number(firstNumber.value) + Number(secondNumber.value); original way of adding
    mathResult = add(Number(firstNumber.value), Number(secondNumber.value));
    
    resultDisplay = document.getElementById('result-add');
    resultDisplay.textContent = mathResult;
});

subButton.addEventListener('click', () => {
    firstNumber = document.getElementById('first-sub');
    secondNumber = document.getElementById('second-sub');
    
    // mathResult = Number(firstNumber.value) - Number(secondNumber.value);
    mathResult = sub(Number(firstNumber.value), Number(secondNumber.value));
    
    resultDisplay = document.getElementById('result-sub');
    resultDisplay.textContent = mathResult;
});

mulButton.addEventListener('click', () => {
    firstNumber = document.getElementById('first-mul');
    secondNumber = document.getElementById('second-mul');
    
    // mathResult = Number(firstNumber.value) * Number(secondNumber.value);
    mathResult = mul(Number(firstNumber.value), Number(secondNumber.value));
    
    resultDisplay = document.getElementById('result-mul');
    resultDisplay.textContent = mathResult;
});

divButton.addEventListener('click', () => {
    firstNumber = document.getElementById('first-div');
    secondNumber = document.getElementById('second-div');
    
    // mathResult = Number(firstNumber.value) / Number(secondNumber.value);
    mathResult = div(Number(firstNumber.value), Number(secondNumber.value));
    
    resultDisplay = document.getElementById('result-div');
    resultDisplay.textContent = mathResult;
});

celsius.addEventListener('click', () => {
    firstNumber = document.getElementById('fahrenheit');
    
    mathResult = temp(Number(firstNumber.value));
    
    resultDisplay = document.getElementById('result-temp');
    resultDisplay.textContent = mathResult;
});