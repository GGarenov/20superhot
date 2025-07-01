import React from "react";

const betOptions = [1, 2, 5, 10, 20, 50];

const BetSelector = ({ bet, setBet }) => (
  <div className="bet-selector mb-2">
    <strong>Bet:</strong>{" "}
    {betOptions.map((option) => (
      <button
        key={option}
        className={`btn btn-sm mx-1 ${
          bet === option ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => setBet(option)}
      >
        ${option}
      </button>
    ))}
  </div>
);

export default BetSelector;
