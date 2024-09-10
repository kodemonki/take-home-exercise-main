import React, { useEffect } from "react";

export interface Media {
  title: string;
  poster: string;
  genre: string[];
  type: string;
}

export interface dataProps {
  totalMovies: number;
  totalPages: number;
  results: Media[];
}

export interface MovieListProps {
  data: dataProps;
  page: number;
  nextPage: () => void;
  prevPage: () => void;
}

const image = {
  height: "200px",
  minHeight: "200px",
  minWidth: "133px",
};

const movieListContainer = {
  display: "flex",
  flexWrap: "wrap",
};

const MovieList: React.FC<MovieListProps> = ({
  data,
  page,
  nextPage,
  prevPage,
}) => {
  return (
    <>
      <br />
      <div style={movieListContainer}>
        {data?.results?.map((item) => {
          return (
            <React.Fragment key={item.title}>
              <div>
                <img src={item.poster} style={image} />
                <br />
                <span>{item.title} </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <br />
      <span>
        Page {page} of {data.totalPages}
      </span>
      <br />
      <button
        onClick={() => {
          if (page > 1) {
            prevPage();
          }
        }}
      >
        Prev Page
      </button>
      <button
        onClick={() => {
          if (page < data.totalPages) {
            nextPage();
          }
        }}
      >
        Next Page
      </button>
    </>
  );
};

export default MovieList;
