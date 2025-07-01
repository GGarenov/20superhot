import React from "react";

const SpinButton = ({ onSpin, spinning }) => (
  <button
    className="btn btn-success btn-lg w-100 mt-2"
    onClick={onSpin}
    disabled={spinning}
  >
    {spinning ? "Spinning..." : "Spin"}
  </button>
);

export default SpinButton;
