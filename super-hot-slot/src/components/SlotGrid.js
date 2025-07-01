import React from "react";
import { symbols } from "./Symbols";
// import "./SlotGrid.css"; // optional for custom styling

const SlotGrid = ({ gridSymbols }) => {
  return (
    <div className="d-flex justify-content-center">
      {gridSymbols.map((col, colIdx) => (
        <div
          key={colIdx}
          className="d-flex flex-column align-items-center mx-1"
        >
          {col.map((symbol, rowIdx) => (
            <img
              key={rowIdx}
              src={symbols[symbol]}
              alt={symbol}
              style={{ width: "60px", height: "60px", marginBottom: "4px" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SlotGrid;
