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
  maxHeight: "450px",
  overflowY: "scroll" as const,
  top: "60px",
};

const rowItemTop = {
  padding: "10px 20px",
  minWidth: "120px",
  border: "1px solid Gainsboro",
};

const rowItem = {
  padding: "10px 20px",
  minWidth: "120px",
  borderLeft: "1px solid Gainsboro",
  borderRight: "1px solid Gainsboro",
  borderBottom: "1px solid Gainsboro",
};

const stretchedChar = {
  transform: "scaleX(2) scaleY(-1) translate(4px,2px)" as const,
  display: "inline-block",
};

const rotatedSquareContainer = {
  overflow: "hidden",
  display: "block",
  width: "60px",
  height: "20px",
};
const rotatedSquare = {
  width: "50px",
  height: "50px",
  display: "block",
  background: "WhiteSmoke",
  transform: "rotate(45deg)",
  border: "1px solid Gainsboro",
  marginTop: "15px",
  marginLeft:'6px'
};

interface DDProps {
  title: string;
  data: string[];
  onOpen: () => void;
  open: boolean;
}

const DropDown: React.FC<DDProps> = ({ title, data, onOpen, open }) => {
  const [panelVisibility, setPanelVisibility] = useState(
    ("hidden" as const) || ("visible" as const)
  );

  const handleClick = () => {
    if (panelVisibility === "hidden") {
      setPanelVisibility("visible");
      onOpen();
    } else {
      setPanelVisibility("hidden");
    }
  };

  useEffect(() => {
    if (open) {
      setPanelVisibility("visible");
    } else {
      setPanelVisibility("hidden");
    }
  }, [open]);

  return (
    <div style={container}>
      <div onClick={handleClick} style={button}>
        <b>{title}</b> <span style={stretchedChar}>^</span>
      </div>
      <div style={{ ...content, ...{ visibility: panelVisibility } }}>
        <div style={rowItemTop}>
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
      <div
        style={{
          ...rotatedSquareContainer,
          ...{ visibility: panelVisibility },
        }}
      >
        <div
          style={{ ...rotatedSquare, ...{ visibility: panelVisibility } }}
        ></div>
      </div>
    </div>
  );
};

export default DropDown;
