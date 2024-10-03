# KibokoDAO Test Platform

----
[kibokoo.png](https://postimg.cc/ZCM8hqsn)

----

## Overview

The **KibokoDAO Test Platform** is a decentralized web application (DApp) designed to provide an easy-to-use interface for testing core functionalities of the Musk Link (MLNK) token. The platform allows users to connect their Phantom wallets, check token balances, and swap MLNK tokens with USDC/USDT on the Solana Devnet. This test environment serves as a prototype for testing features before deploying them to the Solana mainnet.

## Features

- **Wallet Connect**: Connect your Phantom wallet to interact with the DApp.
- **Token Swap**: Swap MLNK tokens with USDC/USDT on the Solana Devnet.
- **Real-Time Token Balances**: View current MLNK and USDC/USDT token balances.

## Technologies Used

- **Frontend**: React.js
- **Blockchain**: Solana (Devnet)
- **Wallet Integration**: Phantom Wallet
- **Solana Libraries**: 
  - `@solana/web3.js`
  - `@solana/spl-token`
  - `@solana/spl-token-swap`

## Getting Started

### Prerequisites

To run the project locally, you need:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **Phantom Wallet** installed in your browser

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gethsun1/-kiboko-dao-test-platform.git

2. **Navigate to the project directory**:
  cd kiboko-dao-test-platform/client

3. **Install dependencies**:
    ```bash
   npm install

5. **Set up environment variables**:

Create a .env file in the client directory and add the following:

  REACT_APP_SOLANA_NETWORK=https://api.devnet.solana.com
  REACT_APP_MLNK_TOKEN_ADDRESS=your_mlnk_token_address

**Running the Application**
To start the development server and run the DApp locally:
  npm start
The app should automatically open in your default browser at http://localhost:3000.

**Project Structure**

/kiboko-dao-test-platform/
  ├── /client/            # Frontend (React) application
      ├── /src/
          ├── /components/ # Reusable components (WalletConnect, SwapTokens)
          ├── /styles/     # CSS styles
          ├── App.js       # Main app entry point
          └── ...          # Other necessary files
  └── README.md            # Project documentation


**Usage**
  Connect Wallet: Click the "Connect to Phantom Wallet" button on the homepage to connect your Phantom wallet.
  Token Swap: Once connected, you can swap between MLNK and USDC/USDT.
  View Balances: Check your current token balances after connecting the wallet.

  
**Deployment**
To deploy the project for production:
  npm run build

Contributing
We welcome contributions to improve the KibokoDAO Test Platform! Please follow these steps to contribute:

Fork the repository.

Create a new branch for your feature or bug fix:


git checkout -b feature-name
Commit your changes:


git commit -m "Add feature description"
Push to the branch:


git push origin feature-name
Open a pull request, and we'll review your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

**Contact**
For any questions or feedback, please reach out to:

Gethsun, Lead Developer - GitHub


---






   
