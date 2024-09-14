import React, { useEffect } from "react";
import { colours } from "../config";

export interface Media {
  title: string;
  poster: string;
  genre: string[];
  type: string;
  year: string;
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
  height: "390px",
};
const title = {
  maxWidth: "240px",
  marginTop: "10px",
  marginBottom: "0px",
  fontSize: "16px",
};
const genres = {
  maxWidth: "240px",
  marginTop: "5px",
  fontSize: "14px",
};
const movieListContainer = {
  display: "flex",
  flexWrap: "wrap" as const,
  alignItems: "center",
  justifyContent: "space-around",
  border: `1px solid ${colours.DarkGrey}`,
  padding: "20px",
};
const movieListItem = {};
const pagination = {
  width: "100%",
  textAlign: "center" as const,
  marginBottom: "20px",
};
const paginationInner = {
  paddingLeft: "10px",
  paddingRight: "10px",
};

const MovieList: React.FC<MovieListProps> = ({
  data,
  page,
  nextPage,
  prevPage,
}) => {
  return (
    <>
      <div style={movieListContainer}>
        {data?.results?.length === 0 && (
          <p>
            <b>Loading</b>
          </p>
        )}
        {data?.results?.map((item, index) => {
          return (
            <React.Fragment key={item.title}>
              <div style={movieListItem}>
                <img
                  src={item.poster}
                  style={image}
                  alt={item.title}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = `https://dummyimage.com/133x200/000000/ffffff?text=${item.title}`; // wouldn't use this in production, but it's ok for a test to replace a missing image
                  }}
                  
                />
                <p style={title}>
                  <b>
                    {item.title} ({item.year})
                  </b>
                </p>
                <p style={genres}>
                  <b>Genres: {item.genre.join(", ")}</b>
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <br />
      <div style={pagination}>
        <button
          onClick={() => {
            if (page > 1) {
              prevPage();
            }
          }}
        >
          <b>Prev Page</b>
        </button>
        <span style={paginationInner}>
          <b>
            Page {page} of {data.totalPages}
          </b>
        </span>
        <button
          onClick={() => {
            if (page < data.totalPages) {
              nextPage();
            }
          }}
        >
          <b>Next Page</b>
        </button>
      </div>
    </>
  );
};

export default MovieList;
