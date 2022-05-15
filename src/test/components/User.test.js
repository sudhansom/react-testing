import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import User from "../../components/User";

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

it("renders user data", async () => {
  const fakeUser = {
    name: "sudhansom",
    company: "Integrify",
    followers: 10,
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );
  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User url="https://api.github.com/users/sudhansom" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
