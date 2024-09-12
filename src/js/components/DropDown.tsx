import React, { useEffect, useState } from "react";
import config from "../config";

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
};

const rowItem = {
  padding: "10px 20px",
  minWidth: "120px",
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
        <b>{title} ^</b>
      </div>
      <div style={{ ...content, ...{ visibility: panelVisibility } }}>
          <div style={rowItem}>
            <input type="checkbox" id={`${title}all`} name={`${title}all`} value="all" />
            <label htmlFor={`${title}all`}>all</label>
          </div>
          {data.map((item, index) => {
            return (
              <div key={item} style={rowItem}>
                <input
                  type="checkbox"
                  id={`${title}${index}`}
                  name={`${title}${index}`}
                  value={item}
                />
                <label htmlFor={`${title}${index}`}>{item}</label>
                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DropDown;
