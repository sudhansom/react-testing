import { act, render, fireEvent, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button Component", () => {
  it("rendered button", () => {
    const { getByTestId } = render(<Button />);
    const button = screen.getByTestId("button");
    expect(button).toBeTruthy();
  });
});
