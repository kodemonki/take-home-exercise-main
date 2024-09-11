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
  height: "390px",
};

const title = {
  maxWidth: "240px",
};

const genres = {
  maxWidth: "240px",
};

const movieListContainer = {
  display: "flex",
  flexWrap: "wrap" as const,
  alignItems: "center",
  justifyContent: "space-around",
};

const movieListItem = {};
const pagination = {
  width: "100%",
  textAlign: "center" as const,
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
      <br />
      <div style={movieListContainer}>
        {data?.results?.map((item) => {
          return (
            <React.Fragment key={item.title}>
              <div style={movieListItem}>
                <img
                  src={item.poster}
                  style={image}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = `https://dummyimage.com/133x200/000000/ffffff?text=${item.title}`;
                  }}
                />
                <p style={title}>{item.title} </p>
                <p style={genres}>{item.genre.join(", ")} </p>
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
          Prev Page
        </button>
        <span style={paginationInner}>
          Page {page} of {data.totalPages}
        </span>
        <button
          onClick={() => {
            if (page < data.totalPages) {
              nextPage();
            }
          }}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default MovieList;
