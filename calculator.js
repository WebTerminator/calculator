import { handleItemOnScreen, isOperator } from "./calculator.helper.js";

const initCalculator = () => {
  let currentSequence = [],
    screenSequence = [],
    joinedCurrentSequence = "",
    buttons = document.querySelectorAll("button");

  const handleClickEvent = ({ target: { innerHTML } }) => {
    const currentValue = innerHTML;

    const lastCurrentSequenceValue = screenSequence[screenSequence.length - 1];

    const item = handleItemOnScreen({
      currentValue,
      lastSequenceValue: lastCurrentSequenceValue,
    });

    if (item) {
      document.getElementById("screen").appendChild(item);
      const itemValue = item.innerHTML;

      if (isOperator(itemValue)) {
        joinedCurrentSequence = "";
      } else {
        currentSequence.push(itemValue);
        joinedCurrentSequence = currentSequence.join("");
      }

      screenSequence.push(itemValue);
    }
  };

  buttons.forEach((button) =>
    button.addEventListener("click", handleClickEvent)
  );
};

document.addEventListener("DOMContentLoaded", initCalculator);
