import React, { useEffect } from "react";

const leftForm = {
  width: "50%",
};
const rightForm = {
  width: "50%",
  textAlign:'right' as const
};
const formContainer = {
  display: "flex",
};

function NavBar() {
  useEffect(() => {}, []);

  return (
    <>
      <form>
        <div style={formContainer}>
          <div style={leftForm}>
            <select>
              <option>abc1</option>
              <option>abc2</option>
              <option>abc3</option>
            </select>
            <select>
              <option>abc4</option>
              <option>abc5</option>
              <option>abc6</option>
            </select>
            <br />

            <input type="radio" name="group1" id="r1" value="1" />
            <label htmlFor="r1">Movies</label>
            <input type="radio" name="group1" id="r2" value="1" />
            <label htmlFor="r2">Books</label>

            <br />
            <input type="reset" />
          </div>
          <div style={rightForm}>
            <input type="text" />
            <br/>
            <a>CLEAR FILTERS</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default NavBar;
