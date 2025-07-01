import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BalanceDisplay from "./components/BalanceDisplay";
import BetSelector from "./components/BetSelector";
import SpinButton from "./components/SpinButton";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(1);
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (spinning || bet > balance) return;
    setSpinning(true);
    setTimeout(() => {
      setBalance((prev) => prev - bet); // Deduct bet for now
      setSpinning(false);
    }, 1000); // Simulate spin
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 bg-light p-4 rounded shadow">
          <h2 className="text-center mb-4">20 Super Hot Slot</h2>
          <BalanceDisplay balance={balance} />
          <BetSelector bet={bet} setBet={setBet} />
          <SpinButton onSpin={handleSpin} spinning={spinning} />
        </div>
      </div>
    </div>
  );
}

export default App;
