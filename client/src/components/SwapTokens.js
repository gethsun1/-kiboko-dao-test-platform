import React, { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { TokenSwap, CurveType } from '@solana/spl-token-swap';

const SOLANA_NETWORK = process.env.REACT_APP_SOLANA_NETWORK;

const SwapTokens = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('MLNK');

  const handleSwap = async () => {
    // Add logic to interact with Solana Token Swap
  };

  return (
    <div>
      <h3>Swap MLNK/USDC</h3>
      <input
        type="number"
        placeholder="Amount"
        value={inputAmount}
        onChange={(e) => setInputAmount(e.target.value)}
      />
      <select onChange={(e) => setSelectedToken(e.target.value)}>
        <option value="MLNK">MLNK to USDC</option>
        <option value="USDC">USDC to MLNK</option>
      </select>
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
};

export default SwapTokens;
