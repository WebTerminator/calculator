/**
 * @jest-environment jsdom
 */

import { handleItemOnScreen } from "./calculator.helper.js";

describe("calculator", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="calculator"></div>`;
  });

  it("should return the correct item, either a number or an operator or null if there is an operator already", () => {
    const twoProps = { currentValue: 2, lastSequenceValue: 3 };
    const two = handleItemOnScreen(twoProps);
    expect(two.innerHTML).toEqual("2");

    const nullOperatorProps = { currentValue: "+", lastSequenceValue: "-" };
    const nullOperator = handleItemOnScreen(nullOperatorProps);
    expect(nullOperator).toEqual(null);

    const nullOperatorBProps = { currentValue: "-", lastSequenceValue: "-" };
    const nullOperatorB = handleItemOnScreen(nullOperatorBProps);
    expect(nullOperatorB).toEqual(null);

    const operatorProps = { currentValue: "-", lastSequenceValue: "3" };
    const operator = handleItemOnScreen(operatorProps);
    expect(operator.innerHTML).toEqual("-");

    const zeroNumberAfterOperatorProps = {
      currentValue: "0",
      lastSequenceValue: "+",
    };
    const zeroNumberAfterOperator = handleItemOnScreen(
      zeroNumberAfterOperatorProps
    );
    expect(zeroNumberAfterOperator).toEqual(null);
  });
});
