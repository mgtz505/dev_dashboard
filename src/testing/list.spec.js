import React from "react";
import renderer from 'react-test-renderer';
import expect from "expect";
import List from "../components/List";
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

it("Renders the To-Do-List Component", () => {
  act(() => {
    render(<List />, container);
    expect(container).toBeTruthy();
  });

});

