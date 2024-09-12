import React, { useEffect, useState } from "react";
import config from "../config";
import { Transform } from "supertest/lib/test";

const container = {
  display: "inline-block",
  position: "relative" as const,
};

const button = {
  background: "WhiteSmoke",
  borderBottom: "2px solid LightGrey",
  padding: "10px 20px",
  cursor: "pointer",
};

const content = {
  background: "WhiteSmoke",
  position: "absolute" as const,
  maxHeight: "450px",
  overflowY: "scroll" as const,
};

const rowItem = {
  padding: "10px 20px",
  minWidth: "120px",
};

const stretchedChar = {
  transform: "scaleX(2) scaleY(-1) translate(4px,2px)" as const,
  display: "inline-block",
};

interface DDProps {
  title: string;
  data: string[];
}

const DropDown: React.FC<DDProps> = ({ title, data }) => {
  const [panelVisibility, setPanelVisibility] = useState(
    ("hidden" as const) || ("visible" as const)
  );
  const handleClick = () => {
    if (panelVisibility === "hidden") {
      setPanelVisibility("visible");
    } else {
      setPanelVisibility("hidden");
    }
  };

  return (
    <div style={container}>
      <div onClick={handleClick} style={button}>
        <b>{title}</b> <span style={stretchedChar}>^</span>
      </div>
      <div style={{ ...content, ...{ visibility: panelVisibility } }}>
        <div style={rowItem}>
          <label className="checkboxContainer">
            <input
              type="checkbox"
              id={`${title}all`}
              name={`${title}all`}
              value="all"
            />
            <span className="checkmark"></span>
            all
          </label>
        </div>
        {data.map((item, index) => {
          return (
            <div key={item} style={rowItem}>
              <label className="checkboxContainer">
                <input
                  type="checkbox"
                  id={`${title}${index}`}
                  name={`${title}${index}`}
                  value={item}
                />
                <span className="checkmark"></span>
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
