let numOne = 0;
let numTwo = 0;
let op = "";

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

function operator(op, one, two) {
    switch(op) {
        case "+": return add(one, two);
        case "-": return subtract(one, two);
        case "*": return multiply(one, two);
        case "/": return divide(one, two);
    }
}