export const getTextNode = ({ currentValue, HTMLTag }) => {
  const itemNode = document.createElement(HTMLTag);
  itemNode.textContent = currentValue;
  return itemNode;
};

export const isOperator = (operator) =>
  operator === "+" || operator === "-" || operator === "/" || operator === "x";

export const handleItemOnScreen = ({ currentValue, lastSequenceValue }) => {
  const lastSequenceCondition = isOperator(lastSequenceValue);
  const isCurrentValueOperator = isOperator(currentValue);

  const isOperatorAlreadyTyped =
    isCurrentValueOperator &&
    (lastSequenceValue === currentValue || lastSequenceCondition);

  const isZeroFirstNumber = currentValue === "0" && !lastSequenceValue;
  const isZeroAfterOperator = lastSequenceCondition && currentValue === "0";
  const isOperatorFirstItem = isCurrentValueOperator && !lastSequenceValue;

  if (
    isOperatorAlreadyTyped ||
    isZeroFirstNumber ||
    isZeroAfterOperator ||
    isOperatorFirstItem
  )
    return null;

  return getTextNode({ currentValue, HTMLTag: "span" });
};

export const handleMathOperation = ({ num1, num2, operation }) => {
  let result;

  if (operation === "+") {
    result = num1 + num2;
  }
  if (operation === "-") {
    result = num1 - num2;
  }
  if (operation === "/") {
    result = num1 / num2;
  }
  if (operation === "x") {
    result = num1 * num2;
  }

  return result;
};
