import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import data from '../data.json'

describe("MovieList", () => {
  
  it("should display the correct number of movies", () => {
    let apiResponse = {
      totalMovies: 10,
      totalPages: 1,
      results: data.media
    };
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
    );
    const movieItems = screen.getAllByRole("img");
    expect(movieItems.length).toBe(apiResponse.results.length);
  });
  
  it("should display the correct movie details", () => {
    let apiResponse = {
      totalMovies: 10,
      totalPages: 1,
      results: data.media
    };
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
    );
    apiResponse.results.forEach((movie) => {
      expect(screen.getByText(`${movie.title} (${movie.year})`)).toBeTruthy;
    });
  });
  
  it("should call nextPage when Next Page button is clicked", () => {
    const nextPageMock = jest.fn();
    let apiResponse = {
      totalMovies: 10,
      totalPages: 2,
      results: data.media
    };
    render(
      <MovieList
        data={apiResponse}
        page={1}
        nextPage={nextPageMock}
        prevPage={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    fireEvent.click(screen.getByText("Next Page"));
    expect(nextPageMock).toHaveBeenCalled();
  });
  
  it("should call prevPage when Prev Page button is clicked", () => {
    const prevPageMock = jest.fn();
    let apiResponse = {
      totalMovies: 10,
      totalPages: 2,
      results: data.media
    };
    render(
      <MovieList
        data={apiResponse}
        page={2}
        nextPage={function (): void {
          throw new Error("Function not implemented.");
        }}
        prevPage={prevPageMock}
      />
    );
    fireEvent.click(screen.getByText("Prev Page"));
    expect(prevPageMock).toHaveBeenCalled();
  });  
});
