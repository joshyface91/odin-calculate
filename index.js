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

const screenDefault = document.querySelector("#screen");
screenDefault.textContent = "";

//binds specific keyboard strokes to dispatch the click event on the appropriate element
document.addEventListener("keydown", checkKey);
    
function checkKey(event) {
    switch (event.key) {
        case "1":
            one.dispatchEvent(buttonClick);
        break;
        case "2":
            two.dispatchEvent(buttonClick);
        break;
        case "3":
            three.dispatchEvent(buttonClick);
        break;
        case "4":
            four.dispatchEvent(buttonClick);
        break;
        case "5":
            five.dispatchEvent(buttonClick);
        break;
        case "6":
            six.dispatchEvent(buttonClick);
        break;
        case "7":
            seven.dispatchEvent(buttonClick);
        break;
        case "8":
            eight.dispatchEvent(buttonClick);
        break;
        case "9":
            nine.dispatchEvent(buttonClick);
        break;
        case "0":
            zero.dispatchEvent(buttonClick);
        break;
        case ".":
            decimal.dispatchEvent(buttonClick);
        break;
        case "+":
            addition.dispatchEvent(buttonClick);
        break;
        case "-":
            subtraction.dispatchEvent(buttonClick);
        break;
        case "*":
            multiplication.dispatchEvent(buttonClick);
        break;
        case "/":
            division.dispatchEvent(buttonClick);
        break;
        case "=":
            equality.dispatchEvent(buttonClick);
        break;
        case "Enter":
            equality.dispatchEvent(buttonClick);
        break;
        case "NumpadEnter":
            equality.dispatchEvent(buttonClick);
        break;
        case "Backspace":
            backspace.dispatchEvent(buttonClick);
        break;
        case "Escape":
            reset.dispatchEvent(buttonClick);
        break;
    }
};

//establishes event object to be called with keyboard commands
const buttonClick = new Event("click", {bubbles: true});

//populates the display for the calculation on the screen field
document.addEventListener("click", showValue);
    
function showValue(event) {
    const screen = document.querySelector("#screen");
    switch (event.target.id) {
        case "one":
            screen.textContent += "1";
            break;
        case "two":
            screen.textContent += "2";
            break;
        case "three":
            screen.textContent += "3";
            break;
        case "four":
            screen.textContent += "4";
            break;
        case "five":
            screen.textContent += "5";
            break;
        case "six":
            screen.textContent += "6";
            break;
        case "seven":
            screen.textContent += "7";
            break;
        case "eight":
            screen.textContent += "8";
            break;
        case "nine":
            screen.textContent += "9";
            break;
        case "zero":
            screen.textContent += "0";
            break;
        case "decimal":
            let symbolDeci = document.querySelector("#screen").innerHTML;
            let charsDeci = symbolDeci.split("");
            let wordDeci = charsDeci.join("");
            if (charsDeci.includes("+")) {
                let half = wordDeci.split("+");
                let halfChars = half[1].split("");
                if (halfChars.includes(".")) {
                    screen.textContent = screen.textContent.replace(".", ".");
                } else {
                    screen.textContent += ".";
                }
            } else if (charsDeci.includes("-")) {
                let half = wordDeci.split("-");
                let halfChars = half[1].split("");
                if (halfChars.includes(".")) {
                    screen.textContent = screen.textContent.replace(".", ".");
                } else {
                    screen.textContent += ".";
                }
            } else if (charsDeci.includes("*")) {
                let half = wordDeci.split("*");
                let halfChars = half[1].split("");
                if (halfChars.includes(".")) {
                    screen.textContent = screen.textContent.replace(".", ".");
                } else {
                    screen.textContent += ".";
                }
            } else if (charsDeci.includes("/")) {
                let half = wordDeci.split("/");
                let halfChars = half[1].split("");
                if (halfChars.includes(".")) {
                    screen.textContent = screen.textContent.replace(".", ".");
                } else {
                    screen.textContent += ".";
                }
            } else if (charsDeci.includes(".")) {
                    screen.textContent = screen.textContent.replace(".", ".");
                } else {
                    screen.textContent += ".";
                }
            break;
        case "addition":
            let symbolPlus = document.querySelector("#screen").innerHTML;
            let charsPlus = symbolPlus.split("");
            if (charsPlus.includes("+")) {
                let operant = "+";
                let halfPlus = screen.textContent.split("+");
                let valueA = Number(halfPlus[0]);
                let valueB = Number(halfPlus[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "+";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "+";
                }
            } else if (charsPlus.includes("-")) {
                let operant = "-";
                let halfMinus = screen.textContent.split("-");
                let valueA = Number(halfMinus[0]);
                let valueB = Number(halfMinus[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "+";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "+";
                }
            } else if (charsPlus.includes("*")) {
                let operant = "*";
                let halfMulti = screen.textContent.split("*");
                let valueA = Number(halfMulti[0]);
                let valueB = Number(halfMulti[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "+";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "+";
                }
            } else if (charsPlus.includes("/")) {
                let operant = "/";
                let halfDivi = screen.textContent.split("/");
                let valueA = Number(halfDivi[0]);
                let valueB = Number(halfDivi[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "+";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "+";
                }
            } else {
                screen.textContent += "+";
            }
            break;
        case "subtraction":
            let symbolMinus = document.querySelector("#screen").innerHTML;
            let charsMinus = symbolMinus.split("");
            if (charsMinus.includes("+")) {
                let operant = "+";
                let halfPlus = screen.textContent.split("+");
                let valueA = Number(halfPlus[0]);
                let valueB = Number(halfPlus[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "-";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "-";
                }
            } else if (charsMinus.includes("-")) {
                let operant = "-";
                let halfMinus = screen.textContent.split("-");
                let valueA = Number(halfMinus[0]);
                let valueB = Number(halfMinus[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "-";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "-";
                }
            } else if (charsMinus.includes("*")) {
                let operant = "*";
                let halfMulti = screen.textContent.split("*");
                let valueA = Number(halfMulti[0]);
                let valueB = Number(halfMulti[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "-";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "-";
                }
            } else if (charsMinus.includes("/")) {
                let operant = "/";
                let halfDivi = screen.textContent.split("/");
                let valueA = Number(halfDivi[0]);
                let valueB = Number(halfDivi[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "-";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "-";
                }
            } else {
                screen.textContent += "-";
            }
            break;
        case "multiplication":
            let symbolMulti = document.querySelector("#screen").innerHTML;
            let charsMulti = symbolMulti.split("");
            if (charsMulti.includes("+")) {
                let operant = "+";
                let halfPlus = screen.textContent.split("+");
                let valueA = Number(halfPlus[0]);
                let valueB = Number(halfPlus[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "*";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "*";
                }
            } else if (charsMulti.includes("-")) {
                let operant = "-";
                let halfMinus = screen.textContent.split("-");
                let valueA = Number(halfMinus[0]);
                let valueB = Number(halfMinus[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "*";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "*";
                }
            } else if (charsMulti.includes("*")) {
                let operant = "*";
                let halfMulti = screen.textContent.split("*");
                let valueA = Number(halfMulti[0]);
                let valueB = Number(halfMulti[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "*";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "*";
                }
            } else if (charsMulti.includes("/")) {
                let operant = "/";
                let halfDivi = screen.textContent.split("/");
                let valueA = Number(halfDivi[0]);
                let valueB = Number(halfDivi[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "*";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "*";
                }
            } else {
                screen.textContent += "*";
            }
            break;
        case "division":
            let symbolDivi = document.querySelector("#screen").innerHTML;
            let charsDivi = symbolDivi.split("");
            if (charsDivi.includes("+")) {
                let operant = "+";
                let halfPlus = screen.textContent.split("+");
                let valueA = Number(halfPlus[0]);
                let valueB = Number(halfPlus[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "/";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "/";
                }
            } else if (charsDivi.includes("-")) {
                let operant = "-";
                let halfMinus = screen.textContent.split("-");
                let valueA = Number(halfMinus[0]);
                let valueB = Number(halfMinus[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "/";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "/";
                }
            } else if (charsDivi.includes("*")) {
                let operant = "*";
                let halfMulti = screen.textContent.split("*");
                let valueA = Number(halfMulti[0]);
                let valueB = Number(halfMulti[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "/";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "/";
                }
            } else if (charsDivi.includes("/")) {
                let operant = "/";
                let halfDivi = screen.textContent.split("/");
                let valueA = Number(halfDivi[0]);
                let valueB = Number(halfDivi[1]);
                if (valueB === 0) {
                    screen.textContent = valueA + "/";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                    screen.textContent += "/";
                }
            } else {
                screen.textContent += "/";
            }
            break;
// uses "=" button to log data as variables, runs operate() with assigned variable values, and displays the result
        case "equality":
            const minusCase = screen.textContent;
            let minusCaseChar = minusCase.split("");
            minusCaseChar.shift();
            let minusCaseRevised = minusCaseChar.join("");
            if (screen.textContent.includes("+")) {
                let operant = "+";
                let halfPlus = screen.textContent.split("+");
                let valueA = Number(halfPlus[0]);
                let valueB = Number(halfPlus[1]);
                let results = operate(operant, valueA, valueB);
                screen.textContent = Math.round(results * 100) / 100;
            } else if (minusCaseRevised.includes("-")) {
                let operant = "-";
                let halfMinus = screen.textContent.split("-");
                if (halfMinus[0] === "") {
                    let valueA = -(Number(halfMinus[1]));
                    let valueB = Number(halfMinus[2]);
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                } else {
                    let valueA = Number(halfMinus[0]);
                    let valueB = Number(halfMinus[1]);
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                }
            } else if (screen.textContent.includes("*")) {
                let operant = "*";
                let halfMulti = screen.textContent.split("*");
                let valueA = Number(halfMulti[0]);
                let valueB = Number(halfMulti[1]);
                let results = operate(operant, valueA, valueB);
                screen.textContent = Math.round(results * 100) / 100;
            } else if (screen.textContent.includes("/")) {
                let operant = "/";
                let halfDivi = screen.textContent.split("/");
                let valueA = Number(halfDivi[0]);
                let valueB = Number(halfDivi[1]);
                if (valueB === 0) {
                    screen.textContent = "Stop that.";
                } else {
                    let results = operate(operant, valueA, valueB);
                    screen.textContent = Math.round(results * 100) / 100;
                }
            } else {
                screen.textContent = Math.round(screen.textContent * 100) / 100;
            }
            break;
    }
}

// sets Reset button to clear screen data, which is what loads all variables for calculations
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function resetValue() {
    const resetScreen = document.querySelector("#screen");
    resetScreen.textContent = "";
    let valueA = 0;
    let valueB = 0;
    let operant = "+";
});

// designates an Undo button to allow the user to undo something
const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", function undo() {
    const undoScreen = document.querySelector("#screen");
    let charsResult = undoScreen.textContent.split("").filter((result) => {
        return /\S/.test(result);
    });
    charsResult.pop();
    let resultRevised = charsResult.join("");
    undoScreen.textContent = resultRevised;
});


// testing