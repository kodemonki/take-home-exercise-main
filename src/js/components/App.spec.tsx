import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
import React, { act } from "react";
import { mockFetch } from "../testing/mockFetch";

describe("App", () => {
  window.fetch = mockFetch({});
  it("should render App", () => {
    act(() => {
      expect(render(<App />)).toBeTruthy();
    });
  });
});
