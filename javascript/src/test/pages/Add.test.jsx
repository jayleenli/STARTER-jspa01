import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Add from "../../main/pages/Add";

describe("Add tests", () => {
  test("(1 pts) it should render without crashing", () => {
    render(<Add />);
  });

  // test("(1 pts) pressing the calculate button should sum the two rationals", () => {
  //   const { getAllByPlaceholderText, getByRole } = render(<Add />);
  //   const numeratorFields = getAllByPlaceholderText("numerator");
  //   const denominatorFields = getAllByPlaceholderText("denominator");
  //   userEvent.type(numeratorFields[0], "1");
  //   userEvent.type(denominatorFields[0], "4");
  //   userEvent.type(numeratorFields[1], "3");
  //   userEvent.type(denominatorFields[1], "4");

  //   const calculateButton = getByRole("button");
  //   userEvent.click(calculateButton);

  //   const resultNumeratorField = getAllByPlaceholderText("numerator")[2];
  //   const resultDenominatorField = getAllByPlaceholderText("denominator")[2];
  //   expect(resultNumeratorField.value).toEqual("1");
  //   expect(resultDenominatorField.value).toEqual("1");
  // });
});
