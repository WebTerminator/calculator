// class Calculator {
//   render() {
//     // render HTML
//   }
// }

// const calculator = new Calculator();
// calculator.render();

const initCalculator = () => {
  let currentSequence = [];
  let buttons = document.querySelectorAll("button");

  buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
      currentSequence.push(e.target.innerHTML);

      const itemNode = document.createElement("span");
      itemNode.textContent = e.target.innerHTML;
      document.getElementById("screen").appendChild(itemNode);
    })
  );
};

document.addEventListener("DOMContentLoaded", initCalculator);
