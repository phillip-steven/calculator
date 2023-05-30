class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "/":
        computation = prev / current;
        break;
      case "x":
        computation = prev * current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  updateDisplay() {
    currentOperand.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      previousOperand.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation} ${this.getDisplayNumber(this.currentOperand)}`;
    } else {
      previousOperand.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const resetButton = document.querySelector("[data-reset]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

// Calculator function
const calculator = new Calculator(previousOperand, currentOperand);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

resetButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

// Theme function
class ChangeTheme {
  constructor() {}
}

const sliderButton = document.querySelectorAll("[data-slider]");
const mainContainer = document.querySelector(".container");
const bodyColor = document.getElementsByTagName("BODY")[0];
const screen = document.querySelector(".calc-screen");
const keypad = document.querySelector(".keys-container");
const keys = document.querySelectorAll("[data-number],[data-operation]");
const delRes = document.querySelectorAll("[data-reset], [data-delete]");
const toggle = document.querySelector(".theme-slider");
console.log(delRes);
console.log(keys);
const theme2 = {
  bgColor: "hsl(0, 0%, 90%)",
  textColor: " hsl(221, 14%, 31%)",
  screenColor: "hsl(0, 0%, 93%)",
  keypad: "hsl(0, 5%, 81%)",
  keyBackground: "hsl(185, 42%, 37%)",
  keyShadow: "hsl(185, 58%, 25%)",
  toggleBackground: "hsl(0, 5%, 81%)",
  toggleShadow: "hsl(25, 99%, 27%)",
  delRess: "hsl(185, 42%, 37%)",
  delResShadow: "hsl(35, 11%, 61%)",
};

sliderButton[1].style.opacity = 0.5;
sliderButton[2].style.opacity = 0.5;

sliderButton.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.innerText == 1) {
      sliderButton[0].style.opacity = 1;
      sliderButton[1].style.opacity = 0.5;
      sliderButton[2].style.opacity = 0.5;
      bodyColor.style.backgroundColor = "";
      mainContainer.style.color = "";
      screen.style.backgroundColor = "";
      keypad.style.backgroundColor = "";
      toggle.style.backgroundColor = "";
      Array.from(delRes).forEach(
        (button) => (
          (button.style.backgroundColor = ""), (button.style.boxShadow = "")
        )
      );
      equalsButton.style.backgroundColor = "";
      equalsButton.style.boxShadow = "";
      Array.from(numberButtons).forEach(
        (button) => (
          (button.style.backgroundColor = ""), (button.style.color = "")
        )
      );
      Array.from(operationButtons).forEach(
        (button) => (
          (button.style.backgroundColor = ""), (button.style.color = "")
        )
      );
      equalsButton.style.backgroundColor = "";
      equalsButton.style.color = "";
      Array.from(sliderButton).forEach(
        (button) => (
          (button.style.backgroundColor = ""), (button.style.color = "")
        )
      );
    } else if (button.innerText == 2) {
      sliderButton[0].style.opacity = 0.5;
      sliderButton[1].style.opacity = 1;
      sliderButton[2].style.opacity = 0.5;
      bodyColor.style.backgroundColor = "hsl(0, 0%, 90%)";
      screen.style.backgroundColor = theme2.screenColor;
      mainContainer.style.color = theme2.textColor;
      keypad.style.backgroundColor = theme2.keypad;
      toggle.style.backgroundColor = theme2.toggleBackground;
      Array.from(delRes).forEach(
        (button) => (
          (button.style.backgroundColor = theme2.delRess),
          (button.style.boxShadow = "0 3px hsl(185, 58%, 25%)")
        )
      );
      Array.from(numberButtons).forEach(
        (button) => (
          (button.style.backgroundColor = "hsl(45, 7%, 89%)"),
          (button.style.color = "hsl(60, 10%, 19%)"),
          (button.style.boxShadow = "0 3px hsl(35, 11%, 61%)")
        )
      );
      Array.from(operationButtons).forEach(
        (button) => (
          (button.style.backgroundColor = "hsl(45, 7%, 89%)"),
          (button.style.color = "hsl(60, 10%, 19%)"),
          (button.style.boxShadow = "0 3px hsl(35, 11%, 61%)")
        )
      );
      delRes[0].style.backgroundColor = theme2.delRess;
      delRes[0].style.boxShadow = "hsl(185, 58%, 25%)";
      equalsButton.style.backgroundColor = "hsl(25, 98%, 40%)";
      equalsButton.style.boxShadow = "0 3px hsl(25, 99%, 27%)";
      equalsButton.style.color = "white";
      Array.from(sliderButton).forEach(
        (button) => (
          (button.style.backgroundColor = "hsl(25, 98%, 40%)"),
          (button.style.color = "hsl(25, 98%, 40%)")
        )
      );
    } else if (button.innerText == 3) {
      sliderButton[0].style.opacity = 0.5;
      sliderButton[1].style.opacity = 0.5;
      sliderButton[2].style.opacity = 1;
      bodyColor.style.backgroundColor = "hsl(268, 75%, 9%)";
      screen.style.backgroundColor = " hsl(268, 71%, 12%)";
      mainContainer.style.color = "hsl(52, 100%, 62%)";
      keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
      toggle.style.backgroundColor = "hsl(268, 71%, 12%)";
      Array.from(delRes).forEach(
        (button) => (
          (button.style.backgroundColor = "hsl(281, 89%, 26%)"),
          (button.style.boxShadow = "0 3px hsl(285, 91%, 52%)")
        )
      );
      equalsButton.style.backgroundColor = "hsl(176, 100%, 44%)";
      equalsButton.style.boxShadow = "0 3px hsl(177, 92%, 70%)";
      equalsButton.style.color = "hsl(198, 20%, 13%)";
      Array.from(numberButtons).forEach(
        (button) => (
          (button.style.backgroundColor = "hsl(268, 47%, 21%)"),
          (button.style.color = "hsl(52, 100%, 62%)"),
          (button.style.boxShadow = "0 3px hsl(290, 70%, 36%)")
        )
      );
      Array.from(operationButtons).forEach(
        (button) => (
          (button.style.backgroundColor = "hsl(268, 47%, 21%)"),
          (button.style.color = "hsl(52, 100%, 62%)"),
          (button.style.boxShadow = "0 3px hsl(290, 70%, 36%)")
        )
      );
      Array.from(sliderButton).forEach(
        (button) => (
          (button.style.backgroundColor = "hsl(176, 100%, 44%)"),
          (button.style.color = "hsl(176, 100%, 44%)")
        )
      );
    }
  });
});
