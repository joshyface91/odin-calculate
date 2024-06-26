//declares baseline functions and variables for the calculator
let valueA = 0;
let valueB = 0;
let operant = "+";

const add = function(valueA, valueB) {
	return valueA + valueB;
};

const subtract = function(valueA, valueB) {
	return valueA - valueB;
};

const multiply = function(valueA, valueB) {
	return valueA * valueB;
};

const divide = function(valueA, valueB) {
	return valueA / valueB;
};

function operate (operant, valueA, valueB) {
    if (operant === "+") {
         return add(valueA, valueB);
    } else if (operant === "-") {
        return subtract(valueA, valueB);
    } else if (operant === "*") {
        return multiply(valueA, valueB);
    } else if (operant === "/") {
        return divide(valueA, valueB);
    } else {
        return console.log("operation not yet operational");
    }
}

// testing
console.log(operate("-", 6.54, 5.37));