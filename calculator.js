import { handleItemOnScreen } from "./calculator.helper.js";

const initCalculator = () => {
  let currentSequence = [];
  let buttons = document.querySelectorAll("button");

  const handleClickEvent = (e) => {
    const currentValue = e.target.innerHTML;
    const lastSequenceValue = currentSequence[currentSequence.length - 1];

    const item = handleItemOnScreen({ currentValue, lastSequenceValue });
    if (item) {
      document.getElementById("screen").appendChild(item);

      currentSequence.push(item.innerHTML);
      console.log("currentSequence: ", currentSequence);
    }
  };

  buttons.forEach((button) =>
    button.addEventListener("click", handleClickEvent)
  );
};

document.addEventListener("DOMContentLoaded", initCalculator);
