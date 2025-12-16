let numOne = 0;
let numTwo = 0;
let pointer = 1;
let operater = "";
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

function operate(operater, one, two) {
    switch(operater) {
        case "+": return add(one, two);
        case "-": return subtract(one, two);
        case "x": return multiply(one, two);
        case "÷": return divide(one, two);
    }
}

const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")

function equalCalc() {
    //Missing operator to calculate
    if (operater === "") {
        return;
    }
    //Check if 0 / 0 gives problem
    else if (numTwo === 0 && operater === "÷") {
        alert("ERROR! You can't divide by zero");
        clearCalc();
    }
    else {
        const newValue = operate(operater, numOne, numTwo);

        displayValue = newValue;
        display.textContent = displayValue;
        numOne = newValue;
        numTwo = 0;
        pointer = 3;
        displayValue = "";
        operater = "";
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
    else if (pointer === 3 && operater === "") {
        clearCalc();
        numberCalc(num);
    }
    else {
        displayValue += num;
        display.textContent += num;
        numTwo = Number(displayValue);
    } 
}

function operaterCalc(op) {
    //Creating negative number
    if (displayValue === "" && op === "-" && pointer !== 3) {
            displayValue += op;
            display.textContent += op;
    }
    //Change negative number to positiv
    else if (displayValue === "-" && op === "+") {
        displayValue = "";
        display.textContent = display.textContent.replace("-", "");
    }
    else if (operater === "") {
        displayValue = "";
        pointer = 2;
        operater = op;
        display.textContent += op;
    }
}

function clearCalc() {
    numOne = 0;
    numTwo = 0;
    pointer = 1;
    operater = "";
    displayValue = "";
    display.textContent = "";
}

function calc() {
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.textContent === "Clear") clearCalc();
            else if (btn.textContent === "=") equalCalc();
            else if(Number.isInteger(Number(btn.textContent))) return numberCalc(Number(btn.textContent)); 
            else  operaterCalc(btn.textContent); 
        })
    })
}

calc();