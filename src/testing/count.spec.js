import React from "react";
import expect from "expect";
import Count from "../components/Count";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a count prop", () => {
  act(() => {
    render(<Count />, container);
  });
  expect(container.textContent).toBe("No Tasks Remaining!");

  act(() => {
    render(<Count count={5} />, container);
  });
  expect(container.textContent).toBe("5 tasks remaining");

  act(() => {
    render(<Count count={100} />, container);
  });
  expect(container.textContent).toBe("100 tasks remaining");

  act(() => {
    render(<Count count={99999999} />, container);
  });
  expect(container.textContent).toBe("99999999 tasks remaining");
});

