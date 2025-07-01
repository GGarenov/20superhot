import React from "react";

const BalanceDisplay = ({ balance }) => (
  <div className="balance-display bg-dark text-white p-2 rounded mb-2">
    <strong>Balance:</strong> ${balance.toFixed(2)}
  </div>
);

export default BalanceDisplay;
