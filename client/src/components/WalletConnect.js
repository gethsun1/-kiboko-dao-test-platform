import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

const SOLANA_NETWORK = process.env.REACT_APP_SOLANA_NETWORK;

function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      window.solana.on("connect", () => {
        setWalletAddress(window.solana.publicKey.toString());
      });
    }
  }, []);

  return (
    <div>
      <button onClick={connectWallet}>Connect to Phantom Wallet</button>
      {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
    </div>
  );
}

export default WalletConnect;
