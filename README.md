# 🎨 Sealed Art Bid

> *Where Art Meets Cryptography - The Future of Private Auctions*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![FHE Powered](https://img.shields.io/badge/FHE-Powered-blue.svg)](https://zama.ai)
[![Web3 Ready](https://img.shields.io/badge/Web3-Ready-purple.svg)](https://ethereum.org)

**Sealed Art Bid** revolutionizes the art auction industry by combining the beauty of artistic expression with cutting-edge cryptographic privacy. Built on Zama's Fully Homomorphic Encryption (FHE), our platform ensures that your bidding strategy remains completely confidential while maintaining fair and transparent auction results.

## ✨ Why Sealed Art Bid?

### 🔒 **Privacy-First Approach**
- Your bids are encrypted using FHE technology
- No one can see your bidding strategy - not even the platform
- Complete confidentiality throughout the entire auction process

### 🎯 **Art-Centric Experience**
- Curated collection of digital and physical artworks
- Focus on quality over quantity
- Artist reputation system for authentic pieces

### ⚡ **Real-Time Innovation**
- Live bidding with instant encrypted processing
- Seamless Web3 wallet integration
- Modern, responsive user interface

## 🚀 Key Features

| Feature | Description | Status |
|---------|-------------|--------|
| **FHE Encryption** | All bids encrypted using Zama's FHE library | ✅ Active |
| **Multi-Wallet Support** | RainbowKit integration with 20+ wallets | ✅ Active |
| **Artist Verification** | Reputation system for authentic artworks | ✅ Active |
| **Real-time Bidding** | Live auctions with encrypted processing | ✅ Active |
| **Mobile Responsive** | Optimized for all device sizes | ✅ Active |

## 🛠️ Tech Stack

### Frontend Architecture
```
React 18 + TypeScript + Vite
├── UI Framework: shadcn/ui + Tailwind CSS
├── State Management: TanStack Query
├── Routing: React Router v6
└── Icons: Lucide React
```

### Web3 Integration
```
Wagmi v2.9.0 + RainbowKit v2.2.8
├── Wallet Support: MetaMask, Coinbase, WalletConnect
├── Network: Ethereum Sepolia Testnet
├── RPC: Infura + 1RPC
└── Contract Interaction: Viem v2.33.0
```

### Cryptographic Layer
```
Zama FHE Integration
├── Smart Contract: SealedArtBid.sol
├── Encryption: euint32 for bid amounts
├── Privacy: External proofs for bid validation
└── Transparency: Decrypted results only after auction end
```

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
