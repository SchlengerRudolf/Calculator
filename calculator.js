let numOne = 0;
let numTwo = 0;
let pointer = 1;
let op = "";
let displayValue = "";

function add(one, two) {
    return one + two;
}

function subtract(one, two) {
    return one - two;
}

function multiply(one, two) {
    return one * two;
}

function divide(one, two) {
    return one / two;
}

function operate(op, one, two) {
    switch(op) {
        case "+": return add(one, two);
        case "-": return subtract(one, two);
        case "*": return multiply(one, two);
        case "/": return divide(one, two);
    }
}

const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")

function equalCalc() {
    //Missing operator to calculate
    if (op === "") {
        return;
    }
    //Check if 0 / 0 gives problem
    else if (numTwo === 0 && op === "÷") {
        alert("You can't divide by zero");
    }
    else {
        const newValue = operate(op, numOne, numTwo);

        displayValue = newValue;
        display.textContent = displayValue;
        numOne = newValue;
        numTwo = 0;
        pointer = 2;
        displayValue = "";
        op = "";
    }
}

function numberCalc(num) {
    if (pointer === 1) {
            displayValue += num;
            display.textContent += num;
            numOne = Number(displayValue);       
    }
    //The case after operate where you start a fresh calculation,
    //if a number is your first input
    else if (pointer === 2 && op === "") {
        clearCalc();
        numberCalc(num);
    }
    else {
        displayValue += num;
        display.textContent += num;
        numTwo = Number(displayValue);
    } 
}

function clearCalc() {
    numOne = 0;
    numTwo = 0;
    pointer = 1;
    op = "";
    displayValue = "";
    display.textContent = "";
}

function calc() {
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.textContent === "Clear") clearCalc();
            else if (btn.textContent === "=") equalCalc();
            else if (btn.textContent === "x") return;
            else numberCalc(Number(btn.textContent));  
        })
    })
}

calc();