import {
  handleItemOnScreen,
  isOperator,
  handleMathOperation,
  getTextNode,
} from "./calculator.helper.js";

const initCalculator = () => {
  let currentSequence = "",
    screenSequence = [],
    buttons = document.querySelectorAll("button");

  const handleClickEvent = ({ target: { innerHTML } }) => {
    const currentValue = innerHTML;

    const lastCurrentSequenceValue = screenSequence[screenSequence.length - 1];

    const item = handleItemOnScreen({
      currentValue,
      lastSequenceValue: lastCurrentSequenceValue,
    });

    const screen = document.getElementById("screen");

    if (item) {
      const itemValue = item.innerHTML;

      if (isOperator(itemValue)) {
        currentSequence = "";

        if (screenSequence.length === 3) {
          const [num1, operation, num2] = screenSequence;

          const result = handleMathOperation({
            num1: parseInt(num1),
            num2: parseInt(num2),
            operation,
          });

          screenSequence = [];
          screenSequence.push(result);
        }
        screenSequence.push(itemValue);
      } else {
        currentSequence += itemValue;
        if (!isOperator(lastCurrentSequenceValue)) {
          screenSequence.pop();
        }

        screenSequence.push(currentSequence);
      }

      screen.innerHTML = "";
      for (let i = 0; i < screenSequence.length; i++) {
        screen.appendChild(
          getTextNode({ currentValue: screenSequence[i], HTMLTag: "span" })
        );
      }
    }
  };

  buttons.forEach((button) =>
    button.addEventListener("click", handleClickEvent)
  );
};

document.addEventListener("DOMContentLoaded", initCalculator);
