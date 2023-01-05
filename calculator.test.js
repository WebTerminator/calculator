/**
 * @jest-environment jsdom
 */

import { handleItemOnScreen } from "./calculator.helper.js";

describe("calculator", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="calculator"></div>`;
  });

  it("should return the correct item, either a number or an operator or null if there is an operator already", () => {
    const two = handleItemOnScreen(2, 3);
    expect(two.innerHTML).toEqual("2");

    const nullOperator = handleItemOnScreen("+", "-");
    expect(nullOperator).toEqual(null);

    const nullOperatorB = handleItemOnScreen("-", "-");
    expect(nullOperatorB).toEqual(null);

    const operator = handleItemOnScreen("-", "3");
    expect(operator.innerHTML).toEqual("-");
  });
});
