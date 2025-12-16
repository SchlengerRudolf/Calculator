let numOne = 0;
let numTwo = 0;
let pointer = 1;
let op = "+";
let displayValue = "0";

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
    //Check if 0 / 0 gives problem
    if (numTwo === 0 && op === "÷") {
        alert("You can't divide by zero");
    }

    else {
        const newValue = operate(op, numOne, numTwo);

        displayValue = newValue;
        display.textContent = displayValue;
        numOne = newValue;
        numTwo = 0;
    }
}

function numberCalc(num) {
    if (pointer === 1) {
        if (numOne !== 0) displayValue += num;
        else displayValue = num.toString();
        numOne = num;        
    }
    else {
        if (numTwo !== 0) displayValue += num;
        els
    } 
}

function clearCalc() {
    numOne = 0;
    numTwo = 0;
    pointer = 1;
    op = "+";
    displayValue = "0";
    display.textContent = "0";
}

function calc() {
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.textContent === "Clear") clearCalc();
            else if (btn.textContent === "=") equalCalc();
        
        })
    })
}

calc();