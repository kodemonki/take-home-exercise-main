import React, { useEffect, useRef } from "react";

import config from "../config";

const leftForm = {
  width: "50%",
};
const rightForm = {
  width: "50%",
  textAlign: "right" as const,
};
const formContainer = {
  display: "flex",
};

interface NavBarProps {
  setMediaType: (mediaType: string) => void;
  setFilter: (filter: string) => void;
  setGenre: (genre: string) => void;
  setYear: (year: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  setMediaType,
  setFilter,
  setGenre,
  setYear,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleMediaType = (e: { target: { value: any } }) => {
    setMediaType(e.target.value);
  };
  const handleGenre = (e: { target: { value: string } }) => {
    setGenre(e.target.value);
  };
  const handleYear = (e: { target: { value: string } }) => {
    setYear(e.target.value);
  };
  const clearFilters = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    formRef.current?.reset();
    setMediaType("all");
    setFilter("");
    setGenre("");
    setYear("");
  };
  return (
    <>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          setFilter(e.target[5].value);
        }}
      >
        <div style={formContainer}>
          <div style={leftForm}>
            <select onChange={handleGenre}>
              <option key={"all"}>all</option>
              {config.genres.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
            <select onChange={handleYear}>
              <option key={"all"}>all</option>
              {new Array(50).fill("").map((_, index) => (
                <option key={index}>{1981 + index}</option>
              ))}
            </select>
            <br />
            <input
              type="radio"
              name="mediaType"
              id="mediaType1"
              value="movie"
              onChange={handleMediaType}
            />
            <label htmlFor="mediaType1">Movies</label>
            <input
              type="radio"
              name="mediaType"
              id="mediaType2"
              value="book"
              onChange={handleMediaType}
            />
            <label htmlFor="mediaType2">Books</label>
          </div>
          <div style={rightForm}>
            <input type="text" id="filter" />
            <br />
            <a href="void(0)" onClick={clearFilters} role="button">
              CLEAR FILTERS
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default NavBar;
