const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
let firstValue = null;
let waitingForSecondValue = false;

function updateDisplay() {
    display.value = displayValue;
}

keys.addEventListener("click", function (e) {
    const element = e.target;
    const value = element.value;
    if (!element.matches("button")) return;
    switch (value) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            handleOperator(value);
            break;
        case ".":
            inputDecimal();
            break;
        case "clear":
            clearDisplay();
            break;
        default:
            inputNumber(value);
            break;
    }
    updateDisplay();
});

function inputNumber(num) {
    displayValue = displayValue == "0" ? num : displayValue + num;
}

function handleOperator(nextOperator) {
    let value = parseFloat(displayValue);
    if (firstValue == null) {
        firstValue = value;
    }
    const result = calculate(firstValue, nextOperator, value);
}

function clearDisplay() {
    displayValue = "0";
}

function inputDecimal() {
    if (!displayValue.includes(".")) displayValue += ".";
}



updateDisplay();

