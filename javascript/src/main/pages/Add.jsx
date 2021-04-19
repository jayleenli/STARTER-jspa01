import React from "react";
import { addRationalsFromUserInput } from "../utils/RationalHelpers";
import Calculator from "../components/Calculator";

const Add = () => {
  const props = {
    calculateFromUserInput: addRationalsFromUserInput,
    title: "Add",
    subtitle:
      "Fill in the numerator and denominator of two rational numbers (fractions) below, then click the Calculate button to see the result.",
    sign: "+",
  };

  return <Calculator {...props} />;
};

export default Add;
