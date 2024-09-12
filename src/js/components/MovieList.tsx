import React, { useEffect } from "react";

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
  marginTop: '10px',
  marginBottom: '0px',
  fontSize: '16px'
};
const genres = {
  maxWidth: "240px",
  marginTop: '5px',
  fontSize: '14px'
};
const movieListContainer = {
  display: "flex",
  flexWrap: "wrap" as const,
  alignItems: "center",
  justifyContent: "space-around",
  border:"1px solid Gainsboro",
  padding: "20px",
};
const movieListItem = {};
const pagination = {
  width: "100%",
  textAlign: "center" as const,
  marginBottom:'20px'
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
        {data?.results?.map((item) => {
          return (
            <React.Fragment key={item.title}>
              <div style={movieListItem}>
                <img
                  src={item.poster}
                  style={image}
                  alt={item.title}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = `https://dummyimage.com/133x200/000000/ffffff?text=${item.title}`;
                  }}
                />
                <p style={title}><b>{item.title} ({item.year})</b></p>
                <p style={genres}><b>Genres: {item.genre.join(", ")}</b></p>
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
