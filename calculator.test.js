/**
 * @jest-environment jsdom
 */

import {
  handleCurrentItem,
  updateSequenceOnceReady,
  handleOperatorCase,
} from "./calculator.helper.js";

describe("calculator", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="calculator"></div>`;
  });

  it("should return the correct item, either a number or an operator or null if there is an operator already", () => {
    const twoProps = { currentValue: 2, lastSequenceValue: 3 };
    const two = handleCurrentItem(twoProps);
    expect(two.innerHTML).toEqual("2");

    const operatorProps = { currentValue: "-", lastSequenceValue: "3" };
    const operator = handleCurrentItem(operatorProps);
    expect(operator.innerHTML).toEqual("-");

    const zeroNumberAfterOperatorProps = {
      currentValue: "0",
      lastSequenceValue: "+",
    };
    const zeroNumberAfterOperator = handleCurrentItem(
      zeroNumberAfterOperatorProps
    );
    expect(zeroNumberAfterOperator).toEqual(null);
  });

  it("should handle updateSequenceOnceReady", () => {
    const screenSequence = ["22", "+", "2"];
    const result = updateSequenceOnceReady(screenSequence);

    const screenSequence2 = ["22", "/", "2"];
    const result2 = updateSequenceOnceReady(screenSequence2);

    expect(result).toEqual([24]);
    expect(result2).toEqual([11]);
  });

  it("Should handle handleOperatorCase when the current value is = and the sequence is complete", () => {
    const screenSequence = ["22", "+", "2"];
    const itemValue = "=";

    const result = handleOperatorCase({ screenSequence, itemValue });

    expect(result).toEqual([24]);
  });

  it("Should handle handleOperatorCase when the current value is = and the sequence is not complete", () => {
    const screenSequence = ["22", "+"];
    const itemValue = "=";

    const result = handleOperatorCase({ screenSequence, itemValue });

    expect(result).toEqual(["22"]);

    const result2 = handleOperatorCase({ screenSequence, itemValue: "-" });

    expect(result2).toEqual(["22", "-"]);
  });
});
