const initCalculator = () => {
  let currentSequence = [];
  let buttons = document.querySelectorAll("button");

  buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
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

      const itemNode = document.createElement("span");
      itemNode.textContent = currentValue;
      document.getElementById("screen").appendChild(itemNode);
      currentSequence.push(currentValue);
    })
  );
};

document.addEventListener("DOMContentLoaded", initCalculator);
