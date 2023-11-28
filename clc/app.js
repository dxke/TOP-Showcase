//ADD SUBTRACT MULTIPLY DIVIDE FUNCTIONS
// add function
const add = function (a, b) {
  return a + b;
};

// subtract function
const subtract = function (a, b) {
  return a - b;
};

// multiply function
const multiply = function (a, b) {
  return a * b;
};

// divide function
const divide = function (a, b) {
  return a / b;
};

// setResult function
function setResult(newResult) {
  // round result to 6 decimal places
  result = Math.round(newResult * 1000000) / 1000000;
  // if result is too long, display in exponential notation
  if (result.toString().length > 9) {
    result = result.toExponential(4);
  }
  displayedNumber.textContent = result;
}

// ########################################################
// initialize variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;

// get displayed number
let displayedNumber = document.querySelector("#displayed_number");

document.addEventListener("DOMContentLoaded", function () {
  displayedNumber.textContent = result;
});

// operate function
const operate = function (firstNumber, secondNumber, operator) {
  // convert strings to numbers
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  // actual operation
  switch (operator) {
    case "+":
      setResult(add(firstNumber, secondNumber));
      break;
    case "-":
      setResult(subtract(firstNumber, secondNumber));
      break;
    case "*":
      setResult(multiply(firstNumber, secondNumber));
      break;
    case "÷":
      // dont let user divide by 0
      if (secondNumber === 0) {
        alert("You can't divide by 0!");
        return;
      } else {
        setResult(divide(firstNumber, secondNumber));
      }
      break;
  }
  return result;
};

// add event listener to digit buttons

// ########################################################
// button functionality
// ########################################################

// get digit buttons
const digitButtons = document.querySelectorAll(".digit");

// add event listener to digit buttons
digitButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // dont let user enter more than 9 digits
    if (firstNumber.length > 9 || secondNumber.length > 9) {
      return;
    } else {
      if (operator === "") {
        firstNumber += button.textContent;
        displayedNumber.textContent = firstNumber;
      } else {
        secondNumber += button.textContent;
        displayedNumber.textContent = secondNumber;
      }
    }
  });
});

// clear button functionality
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function () {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = 0;
  displayedNumber.textContent = result;
});

// get operator buttons
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // if second number is already entered, perform operation
    if (secondNumber !== "") {
      operate(firstNumber, secondNumber, operator);
      firstNumber = result;
      secondNumber = "";
    }
    operator = button.textContent;
  });
});

// equals button functionality
const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", function () {
  operate(firstNumber, secondNumber, operator);
  firstNumber = result;
  secondNumber = "";
  operator = "";
});

// decimal button functionality
const decimalButton = document.querySelector("#dot");

decimalButton.addEventListener("click", function () {
  if (operator === "") {
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
      displayedNumber.textContent = firstNumber;
    }
  } else {
    if (!secondNumber.includes(".")) {
      secondNumber += ".";
      displayedNumber.textContent = secondNumber;
    }
  }
});

// backspace button functionality
const backspaceButton = document.querySelector("#remove");

backspaceButton.addEventListener("click", function () {
  if (operator === "") {
    firstNumber = firstNumber.slice(0, -1);
    displayedNumber.textContent = firstNumber;
  } else {
    secondNumber = secondNumber.slice(0, -1);
    displayedNumber.textContent = secondNumber;
  }
});
