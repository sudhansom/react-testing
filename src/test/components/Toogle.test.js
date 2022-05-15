import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Toogle from "../../components/Toogle";

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

it("changes vale on click", () => {
  const onChange = jest.fn();
  act(() => {
    render(<Toogle onChange={onChange} />, container);
  });
  // get a hold of the button element and trigger click on it
  const button = document.querySelector("[data-testid=toogle]");
  expect(button.innerHTML).toBe("Turn on");
  //   const button = document.getElementsByTagName("button");
  //   expect(button[0].textContent).toBe("Turn on");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(button.innerHTML).toBe("Turn off");

  act(() => {
    for (let i = 0; i < 3; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });
  expect(onChange).toHaveBeenCalledTimes(4);
  expect(button.innerHTML).toBe("Turn on");
});
