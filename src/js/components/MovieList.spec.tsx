import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import data from '../data.json'

describe("MovieList", () => {
  
  it("should render MovieList", () => {
    let apiResponse = {
      totalMovies: 10,
      totalPages: 1,
      results: data.media
    };
    expect(
      render(
        <MovieList
          data={apiResponse}
          page={1}
          nextPage={function (): void {
            throw new Error("Function not implemented.");
          }}
          prevPage={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
    ).toBeTruthy();
  });
});
