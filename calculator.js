import {
  handleItemOnScreen,
  isOperator,
  getTextNode,
  handleOperatorCase,
} from "./calculator.helper.js";

const initCalculator = () => {
  let currentSequence = "",
    screenSequence = [],
    buttons = document.querySelectorAll("button");

  const handleClickEvent = ({ target: { innerHTML } }) => {
    const currentValue = innerHTML,
      lastCurrentSequenceValue = screenSequence[screenSequence.length - 1],
      item = handleItemOnScreen({
        currentValue,
        lastSequenceValue: lastCurrentSequenceValue,
      }),
      screen = document.getElementById("screen");

    if (item) {
      const itemValue = item.innerHTML;

      if (isOperator(itemValue)) {
        currentSequence = "";

        screenSequence = handleOperatorCase({
          itemValue,
          screenSequence,
        });
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
