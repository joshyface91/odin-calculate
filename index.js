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



//populates the display for the calculation on the screen field
document.addEventListener("click", function showValue(event) {
    const screen = document.querySelector("#screen");

    switch (event.target.id) {
        case "1":
            screen.textContent += "1";
            break;
        case "2":
            screen.textContent += "2";
            break;
        case "3":
            screen.textContent += "3";
            break;
        case "4":
            screen.textContent += "4";
            break;
        case "5":
            screen.textContent += "5";
            break;
        case "6":
            screen.textContent += "6";
            break;
        case "7":
            screen.textContent += "7";
            break;
        case "8":
            screen.textContent += "8";
            break;
        case "9":
            screen.textContent += "9";
            break;
        case "0":
            screen.textContent += "0";
            break;
        case ".":
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
        case "add":
            let symbolPlus = document.querySelector("#screen").innerHTML;
            let charsPlus = symbolPlus.split("");
            if (charsPlus.includes("+")) {
                screen.textContent = screen.textContent.replace("+", "+");
            } else if (charsPlus.includes("-")) {
                screen.textContent = screen.textContent.replace("-", "+");
            } else if (charsPlus.includes("*")) {
                screen.textContent = screen.textContent.replace("*", "+");
            } else if (charsPlus.includes("/")) {
                screen.textContent = screen.textContent.replace("/", "+");
            } else {
                screen.textContent += "+";
            }
            break;
        case "subtract":
            let symbolMinus = document.querySelector("#screen").innerHTML;
            let charsMinus = symbolMinus.split("");
            if (charsMinus.includes("+")) {
                screen.textContent = screen.textContent.replace("+", "-");
            } else if (charsMinus.includes("-")) {
                screen.textContent = screen.textContent.replace("-", "-");
            } else if (charsMinus.includes("*")) {
                screen.textContent = screen.textContent.replace("*", "-");
            } else if (charsMinus.includes("/")) {
                screen.textContent = screen.textContent.replace("/", "-");
            } else {
                screen.textContent += "-";
            }
            break;
        case "multiply":
            let symbolMulti = document.querySelector("#screen").innerHTML;
            let charsMulti = symbolMulti.split("");
            if (charsMulti.includes("+")) {
                screen.textContent = screen.textContent.replace("+", "*");
            } else if (charsMulti.includes("-")) {
                screen.textContent = screen.textContent.replace("-", "*");
            } else if (charsMulti.includes("*")) {
                screen.textContent = screen.textContent.replace("*", "*");
            } else if (charsMulti.includes("/")) {
                screen.textContent = screen.textContent.replace("/", "*");
            } else {
                screen.textContent += "*";
            }
            break;
        case "divide":
            let symbolDivi = document.querySelector("#screen").innerHTML;
            let charsDivi = symbolDivi.split("");
            if (charsDivi.includes("+")) {
                screen.textContent = screen.textContent.replace("+", "/");
            } else if (charsDivi.includes("-")) {
                screen.textContent = screen.textContent.replace("-", "/");
            } else if (charsDivi.includes("*")) {
                screen.textContent = screen.textContent.replace("*", "/");
            } else if (charsDivi.includes("/")) {
                screen.textContent = screen.textContent.replace("/", "/");
            } else {
                screen.textContent += "/";
            }
            break;
// uses "=" button to log data as variables, runs operate() with assigned variable values, and displays the result
        case "equals":
            if (screen.textContent.includes("+")) {
                let operant = "+";
                let halfPlus = screen.textContent.split("+");
                let valueA = Number(halfPlus[0]);
                let valueB = Number(halfPlus[1]);
                let results = operate(operant, valueA, valueB);
                screen.textContent = Math.round(results * 100) / 100;
            } else if (screen.textContent.includes("-")) {
                let operant = "-";
                let halfMinus = screen.textContent.split("-");
                let valueA = Number(halfMinus[0]);
                let valueB = Number(halfMinus[1]);
                let results = operate(operant, valueA, valueB);
                screen.textContent = Math.round(results * 100) / 100;
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
                let results = operate(operant, valueA, valueB);
                screen.textContent = Math.round(results * 100) / 100;
            } else {
                screen.textContent = Math.round(screen.textContent * 100) / 100;
            }
            break;
    }
})

// sets reset button to clear screen data, which is what loads all variables for calculations
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function resetValue() {
    const resetScreen = document.querySelector("#screen");
    resetScreen.textContent = "";
});

    



// sets up clear button to wipe displayed content from screen div and reset variable values


// testing
// console.log(operate("-", 6.54, 5.37));