import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen, getByTestId } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import DisplayName from "../../components/DisplayName";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on existing
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<DisplayName userName={"sudhan"} />, container);
  });
  expect(container.textContent).toBe("Hello, sudhan");

  act(() => {
    render(<DisplayName />, container);
  });
  expect(container.textContent).toBe("Hey, who are you??");

  act(() => {
    render(<DisplayName userName={"Rhythm"} />, container);
  });
  expect(container.textContent).toBe("Hello, Rhythm");
});
