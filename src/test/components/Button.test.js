import { act, render, fireEvent, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button Component", () => {
  it("rendered button", () => {
    const { getByTestId } = render(<Button />);
    const button = screen.getByTestId("button");
    expect(button).toBeTruthy();
  });
});
it("render a button before button click", () => {
  const { getAllByTestId } = render(<Button />);
  const buttonList = screen.getAllByTestId("button");
  expect(buttonList).toHaveLength(1);
});

// it("render another btn after button click", () => {
//   const { getAllByTestId } = render(<Button />);
//   const buttonList = screen.getAllByTestId("button");
//   fireEvent.click(buttonList[0]);
//   expect(buttonList).toHaveLength(2);
// });

it("render another button after button click", () => {
  const { getAllByTestId } = render(<Button />);
  const buttonList = screen.getAllByTestId("button");
  fireEvent.click(buttonList[0]);
  expect(buttonList).toHaveLength(1);
});
