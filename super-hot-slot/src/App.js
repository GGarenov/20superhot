import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BalanceDisplay from "./components/BalanceDisplay";
import BetSelector from "./components/BetSelector";
import SpinButton from "./components/SpinButton";
import SlotGrid from "./components/SlotGrid";
import { symbolList } from "./components/Symbols";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(1);
  const [spinning, setSpinning] = useState(false);

  // New state for grid
  const [gridSymbols, setGridSymbols] = useState(generateRandomGrid());

  function generateRandomGrid() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      // 5 reels
      const col = [];
      for (let j = 0; j < 3; j++) {
        // 3 rows
        const randomSymbol =
          symbolList[Math.floor(Math.random() * symbolList.length)];
        col.push(randomSymbol);
      }
      columns.push(col);
    }
    return columns;
  }

  const handleSpin = () => {
    if (spinning || bet > balance) return;
    setSpinning(true);
    setTimeout(() => {
      setBalance((prev) => prev - bet);
      setGridSymbols(generateRandomGrid()); // Update grid after spin
      setSpinning(false);
    }, 1000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 bg-light p-4 rounded shadow">
          <h2 className="text-center mb-4">20 Super Hot Slot</h2>
          <BalanceDisplay balance={balance} />
          <SlotGrid gridSymbols={gridSymbols} /> {/* Add the grid here */}
          <BetSelector bet={bet} setBet={setBet} />
          <SpinButton onSpin={handleSpin} spinning={spinning} />
        </div>
      </div>
    </div>
  );
}

export default App;
