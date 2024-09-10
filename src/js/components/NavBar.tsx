import React, { useEffect } from "react";

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
}

const NavBar: React.FC<NavBarProps> = ({ setMediaType, setFilter }) => {
  useEffect(() => {}, []);

  const handleMediaType = (e: { target: { value: any } }) => {
    setMediaType(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilter(e.target[5].value);
        }}
      >
        <div style={formContainer}>
          <div style={leftForm}>
            <select>
              <option>abc1</option>
              <option>abc2</option>
              <option>abc3</option>
            </select>
            <select>
              {new Array(50).fill("").map((_, index) => (
                <option key={index}>{1980 + index}</option>
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
            <br />
            <input type="reset" />
          </div>
          <div style={rightForm}>
            <input type="text" id="filter" />
            <br />
            <a>CLEAR FILTERS</a>
          </div>
        </div>
      </form>
    </>
  );
};

export default NavBar;
