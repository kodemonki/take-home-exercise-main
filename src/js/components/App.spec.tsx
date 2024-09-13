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
    totalMovies: 0,
    totalPages: 0,
    results: data.media,
  });

  it("should render initial state correctly", async () => {
    render(<App />);
    expect(screen.getByText("Loading")).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
  });
  
  it("should fetch and display data on next page click", async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    
    fireEvent.click(screen.getByText("Next Page"));
    
    expect(screen.getByText("Page 1 of 0")).toBeTruthy();
  });
  
  it("should fetch and display data on previous page click", async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    
    fireEvent.click(screen.getByText("Next Page"));  
    fireEvent.click(screen.getByText("Prev Page"));
    
    expect(screen.getByText("Page 1 of 0")).toBeTruthy();
  });
   
  /*
  it("should update filter and fetch data", async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    
    fireEvent.change(screen.getByLabelText("Filter"), { target: { value: "popular" } });
    await waitFor(() => expect(screen.getByText("Loading")).toBeInTheDocument());
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    
    expect(screen.getByText("Filter: popular")).toBeInTheDocument();
  });
  /*
  it("should render App", async () => {
    const { getByText, queryByText } =  render(<App />);    
    await waitForElementToBeRemoved(() => queryByText("Loading"));
    
  });*/
});
