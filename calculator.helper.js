const addNumberOnScreen = (currentValue, HTMLTag) => {
  const itemNode = document.createElement(HTMLTag);
  itemNode.textContent = currentValue;
  return itemNode;
};

export const handleItemOnScreen = (currentValue, lastSequenceValue) => {
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
      return null;
  }

  return addNumberOnScreen(currentValue, "span");
};
