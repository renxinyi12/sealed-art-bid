# Sealed Art Bid - FHE-Powered Art Auction Platform

A revolutionary art auction platform that leverages Fully Homomorphic Encryption (FHE) to ensure complete privacy in bidding while maintaining transparency in results.

## Features

- **Private Bidding**: All bids are encrypted using FHE, ensuring complete confidentiality
- **Transparent Results**: Winners are determined fairly without revealing losing bids
- **Real-time Auctions**: Live bidding with instant encrypted processing
- **Wallet Integration**: Seamless connection with popular Web3 wallets
- **Artist Reputation**: Built-in reputation system for artists and bidders

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Web3**: Wagmi, RainbowKit, Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: Zama FHE (Fully Homomorphic Encryption)
- **Smart Contracts**: Solidity with FHE integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/renxinyi12/sealed-art-bid.git
cd sealed-art-bid
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_PROJECT_ID

# Infura Configuration
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_KEY
```

## Smart Contract

The platform uses a custom Solidity smart contract with FHE integration:

- **SealedArtBid.sol**: Main contract handling artwork creation, auctions, and encrypted bidding
- **FHE Integration**: All sensitive data (bids, amounts) are encrypted using Zama's FHE library
- **Privacy-First**: Bids remain encrypted throughout the entire auction process

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
# Deploy the dist folder to your preferred hosting service
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue on GitHub or contact the development team.
