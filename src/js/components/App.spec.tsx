import {
  fireEvent,
  queryByText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import App from "./App";
import React, { act } from "react";
import { mockFetch } from "../testing/mockFetch";
import data from "../data.json";

describe("App", () => {
  window.fetch = mockFetch({
    totalMovies: data.media.length,
    totalPages: Math.ceil(data.media.length / 10),
    results: data.media,
  });

  it("should render initial state correctly", async () => {
    render(<App />);
    expect(screen.getByText("Loading")).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
  });

  it("should fetch and display data on next page click", async () => {
    render(<App />);
    expect(screen.getByText("Loading")).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    fireEvent.click(screen.getByText("Next Page"));
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
  });

  it("should fetch and display data on previous page click", async () => {
    render(<App />);
    expect(screen.getByText("Loading")).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    fireEvent.click(screen.getByText("Next Page"));
    fireEvent.click(screen.getByText("Prev Page"));
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
  });

  it("should fetch and display data on Movies click", async () => {
    render(<App />);
    expect(screen.getByText("Loading")).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    fireEvent.click(screen.getByText("Movies"));
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
  });

  it("should fetch and display data on Books click", async () => {
    render(<App />);
    expect(screen.getByText("Loading")).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    fireEvent.click(screen.getByText("Books"));
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
  });

});
