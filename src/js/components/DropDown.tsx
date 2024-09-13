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
  boxSizing: "border-box" as const,
  background: "WhiteSmoke",
  position: "absolute" as const,
  maxHeight: "450px",
  overflowY: "scroll" as const,
  top: "60px",
  border: "1px solid LightGrey",
};

const rowItem = {
  padding: "10px 20px",
  minWidth: "80px",
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
  marginLeft: "6px",
};

interface DDProps {
  title: string;
  data: string[];
  onOpen: () => void;
  onChanged: (values: string[]) => void;
  open: boolean;
  depth: number;
}

type VisibilityOptions = 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit'

const DropDown: React.FC<DDProps> = ({
  title,
  data,
  onOpen,
  open,
  onChanged,
  depth,
}) => {
  const [panelVisibility, setPanelVisibility] = useState<VisibilityOptions>("hidden");
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = () => {
    if (panelVisibility === "hidden") {
      setPanelVisibility("visible");
      onOpen();
    } else {
      setPanelVisibility("hidden");
    }
  };

  const handleSelection = (e) => {
    let newArray = [...selected];
    if (e.target.checked) {
      newArray.push(e.target.value);
    } else {
      newArray = selected.filter((item) => item != e.target.value);
    }
    onChanged(newArray);
    setSelected(newArray);
  };

  const handleMouseLeave = () => {
    setPanelVisibility("hidden");
  };

  useEffect(() => {
    if (open) {
      setPanelVisibility("visible");
    } else {
      setPanelVisibility("hidden");
    }
  }, [open]);

  const allSelected = selected.includes("all");

  return (
    <div
      style={{ ...container, ...{ zIndex: depth } }}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={handleClick} style={button}>
        {allSelected && <b>{title.toUpperCase()}</b>}
        {!allSelected && (
          <b>
            {selected.length > 0 ? selected.length : ""} {title.toUpperCase()}
          </b>
        )}{" "}
        <span style={stretchedChar}>^</span>
      </div>
      <div style={{ ...content, ...{ visibility: panelVisibility } }}>
        <div style={rowItem}>
          <label className="checkboxContainer">
            <input
              type="checkbox"
              id={`${title}all`}
              name={`${title}all`}
              value="all"
              onClick={handleSelection}
            />
            <span className="checkmark"></span>
            <b>ALL</b>
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
                  onClick={handleSelection}
                />
                <span className="checkmark"></span>
                <b>{item.toUpperCase()}</b>
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
