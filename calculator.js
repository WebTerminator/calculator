const initCalculator = () => {
  let currentSequence = [];
  let buttons = document.querySelectorAll("button");

  const addNumberOnScreen = (currentValue) => {
    const itemNode = document.createElement("span");
    itemNode.textContent = currentValue;
    document.getElementById("screen").appendChild(itemNode);
  };

  const handleClickEvent = (e) => {
    const currentValue = e.target.innerHTML;
    const lastSequenceValue = currentSequence[currentSequence.length - 1];

    if (
      currentValue === "+" ||
      currentValue === "-" ||
      currentValue === "/" ||
      currentValue === "x"
    ) {
      if (
        lastSequenceValue === currentValue ||
        lastSequenceValue === "+" ||
        lastSequenceValue === "-" ||
        lastSequenceValue === "/" ||
        lastSequenceValue === "x"
      )
        return false;
    }

    addNumberOnScreen(currentValue);

    currentSequence.push(currentValue);
  };

  buttons.forEach((button) =>
    button.addEventListener("click", handleClickEvent)
  );
};

document.addEventListener("DOMContentLoaded", initCalculator);
