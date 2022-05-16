import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "@testing-library/jest-dom";

import Input from "../../components/Input";

describe("Test the Input page", () => {
  it("test  text field", () => {
    const { getByTestId } = render(<Input isTrue={true} />);
    const inputField = screen.getByTestId(/inputField/);
    expect(inputField).toBeTruthy();
  });
});
