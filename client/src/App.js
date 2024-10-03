import React from 'react';
import WalletConnect from './components/WalletConnect';
import SwapTokens from './components/SwapTokens';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://amaranth-accused-buzzard-564.mypinata.cloud/ipfs/QmU4rw7CW5dHqmt8wykHSER9vaVvbcZJawKgkTX6Gj5bSw"
          className="App-logo"
          alt="KibokoDAO logo"
        />
        <h1>Welcome to KibokoDAO Test Platform</h1>
        <p>
          Start by connecting your Phantom wallet and testing the MLNK token swap!
        </p>

        {/* Wallet Connect Widget */}
        <div className="widget-container">
          <WalletConnect />
        </div>

        {/* Swap Tokens Widget */}
        <div className="widget-container">
          <SwapTokens />
        </div>
      </header>
    </div>
  );
}

export default App;
