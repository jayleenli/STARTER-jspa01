import React from "react";
import { render } from "@testing-library/react";
import App from "../main/App";
import { BrowserRouter } from "react-router-dom";

describe("App Tests", () => {
  test("(2 pts) renders calculator", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const calculator = getByTestId("calculator");
    expect(calculator).toBeInTheDocument();
  });
});
