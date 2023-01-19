export const getTextNode = ({ currentValue, HTMLTag }) => {
  const itemNode = document.createElement(HTMLTag);
  itemNode.textContent = currentValue;
  return itemNode;
};

export const isOperator = (operator) =>
  operator === "+" || operator === "-" || operator === "/" || operator === "x";

export const handleCurrentItem = ({ currentValue, lastSequenceValue }) => {
  const lastSequenceCondition = isOperator(lastSequenceValue);
  const isCurrentValueOperator = isOperator(currentValue);

  const isZeroFirstNumber = currentValue === "0" && !lastSequenceValue;
  const isZeroAfterOperator = lastSequenceCondition && currentValue === "0";
  const isOperatorFirstItem = isCurrentValueOperator && !lastSequenceValue;

  if (isZeroFirstNumber || isZeroAfterOperator || isOperatorFirstItem)
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

export const updateSequenceOnceReady = (screenSequence) => {
  const [num1, operation, num2] = screenSequence;
  const result = handleMathOperation({
    num1: parseInt(num1),
    num2: parseInt(num2),
    operation,
  });
  screenSequence = [];
  screenSequence.push(result);

  return screenSequence;
};

export const handleOperatorCase = ({ itemValue, screenSequence }) => {
  if (screenSequence.length === 3) {
    screenSequence = updateSequenceOnceReady(screenSequence);
  }
  const lastCurrentSequenceValue = screenSequence[screenSequence.length - 1];

  if (isOperator(lastCurrentSequenceValue)) {
    screenSequence.pop();
  }

  if (itemValue !== "=") screenSequence.push(itemValue);

  return screenSequence;
};
