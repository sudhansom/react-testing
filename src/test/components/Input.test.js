import { render, fireEvent, screen, getByTestId } from "@testing-library/react";
import { act } from "@testing-library/jest-dom";

import Input from "../../components/Input";

describe("Test the Input page", () => {
  it("test  text field", () => {
    const { getByTestId } = render(<Input isTrue={true} />);
    const inputField = screen.getByTestId(/inputField/);
    expect(inputField).toBeTruthy();
  });
});
it("don't render extra div", () => {
  const { getByTestId } = render(<Input isTrue={true} />);
  const divs = screen.getByTestId("divToShow");
  expect(divs).toBeTruthy();
});

it("do not render div", () => {
  const { queryByTestId } = render(<Input isTrue={false} />);
  const div = queryByTestId("divToShow");
  expect(div).toBeFalsy();
});
