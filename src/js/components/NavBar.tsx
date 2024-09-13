import React, { useEffect, useRef, useState } from "react";

import config from "../config";
import DropDown from "./DropDown";

const leftForm = {
  width: "50%",
};
const rightForm = {
  width: "50%",
  textAlign: "right" as const,
};
const rightForm__input = {
  minWidth: "180px",
};
const formContainer = {
  display: "flex",
};
const searchWrapper = {
  position: "relative" as const,
};
const searchSvg = {
  width: "20px",
};
const searchInput = {
  padding: "8px 16px",
  fontSize: "16px",
};
const searchIcon = {
  position: "absolute" as const,
  right: "4px",
  top: "10px",
};
const navbarContainer = {
  borderLeft: "1px solid Gainsboro",
  borderRight: "1px solid Gainsboro",
  borderTop: "1px solid Gainsboro",
  padding: "20px",
};
const navBar__input = {
  marginRight: "20px",
};
const spacer = {
  width: "20px",
  display: "inline-block",
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
  const [openPanel, setOpenPanel] = useState("");
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
  const openYears = () => {
    setOpenPanel("Years");
  };
  const onChangedYears = (values) => {
    setYear(values);
  };
  const openGenres = () => {
    setOpenPanel("Genres");
  };
  const onChangedGenres = (values) => {
    setGenre(values);
  };
  return (
    <div style={navbarContainer}>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          setFilter(formData.get("filter") as string);
        }}
      >
        <div style={formContainer}>
          <div style={leftForm}>
            {/* Native Select component approach
            <select onChange={handleGenre} aria-label="genre">
              <option key={"all"}>all</option>
              {config.genres.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
            <select onChange={handleYear} aria-label="year">
              <option key={"all"}>all</option>
              {new Array(44).fill("").map((_, index) => (
                <option key={index}>{1981 + index}</option>
              ))}
            </select>
            */}
            <DropDown
              open={openPanel === "Genres"}
              title="Genres"
              data={config.genres.map((item) => {
                return item;
              })}
              onOpen={openGenres}
              onChanged={onChangedGenres}
              depth={2}
            />
            <div style={spacer}></div>
            <DropDown
              open={openPanel === "Years"}
              title="Years"
              data={new Array(44).fill("").map((_, index) => {
                return String(1981 + index);
              })}
              onOpen={openYears}
              onChanged={onChangedYears}
              depth={1}
            />
            <br />
            <input
              type="radio"
              name="mediaType"
              id="mediaType1"
              value="movie"
              onChange={handleMediaType}
            />
            <label htmlFor="mediaType1">
              <b>Movies</b>
            </label>
            &nbsp;&nbsp;
            <input
              type="radio"
              name="mediaType"
              id="mediaType2"
              value="book"
              onChange={handleMediaType}
            />
            <label htmlFor="mediaType2">
              <b>Books</b>
            </label>
          </div>
          <div style={rightForm}>
            <div style={searchWrapper}>
              <div style={searchIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="search"
                  style={searchSvg}
                >
                  <g>
                    <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
                  </g>
                </svg>
              </div>
              <input
                type="text"
                id="filter"
                name="filter"
                aria-label="search"
                style={searchInput}
              />
            </div>
            <br />
            <a href="void(0)" onClick={clearFilters} role="button">
              <b>CLEAR FILTERS</b>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NavBar;
