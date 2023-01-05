const addNumberOnScreen = ({ currentValue, HTMLTag }) => {
  const itemNode = document.createElement(HTMLTag);
  itemNode.textContent = currentValue;
  return itemNode;
};

export const handleItemOnScreen = ({ currentValue, lastSequenceValue }) => {
  const lastSequenceCondition =
    lastSequenceValue === "+" ||
    lastSequenceValue === "-" ||
    lastSequenceValue === "/" ||
    lastSequenceValue === "x";

  const isOperatorAlreadyTyped =
    (currentValue === "+" ||
      currentValue === "-" ||
      currentValue === "/" ||
      currentValue === "x") &&
    (lastSequenceValue === currentValue || lastSequenceCondition);

  const isZeroFirstNumber = currentValue === "0" && !lastSequenceValue;
  const isZeroAfterOperator = lastSequenceCondition && currentValue === "0";

  if (isOperatorAlreadyTyped || isZeroFirstNumber || isZeroAfterOperator)
    return null;

  return addNumberOnScreen({ currentValue, HTMLTag: "span" });
};
