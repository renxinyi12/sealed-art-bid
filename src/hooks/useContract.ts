import { useReadContract, useWriteContract, useAccount } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { parseEther } from 'viem';

// Contract ABI - This would be generated from the compiled contract
const CONTRACT_ABI = [
  {
    "inputs": [
      {"internalType": "string", "name": "_title", "type": "string"},
      {"internalType": "string", "name": "_description", "type": "string"},
      {"internalType": "string", "name": "_imageHash", "type": "string"}
    ],
    "name": "createArtwork",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_artworkId", "type": "uint256"},
      {"internalType": "uint256", "name": "_duration", "type": "uint256"}
    ],
    "name": "startAuction",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_auctionId", "type": "uint256"}
    ],
    "name": "endAuction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_artworkId", "type": "uint256"}
    ],
    "name": "getArtworkInfo",
    "outputs": [
      {"internalType": "string", "name": "title", "type": "string"},
      {"internalType": "string", "name": "description", "type": "string"},
      {"internalType": "string", "name": "imageHash", "type": "string"},
      {"internalType": "address", "name": "artist", "type": "address"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "bool", "name": "isSold", "type": "bool"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_auctionId", "type": "uint256"}
    ],
    "name": "getAuctionInfo",
    "outputs": [
      {"internalType": "uint8", "name": "highestBid", "type": "uint8"},
      {"internalType": "uint8", "name": "bidCount", "type": "uint8"},
      {"internalType": "address", "name": "highestBidder", "type": "address"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "bool", "name": "isEnded", "type": "bool"},
      {"internalType": "uint256", "name": "startTime", "type": "uint256"},
      {"internalType": "uint256", "name": "endTime", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Contract address - This would be the deployed contract address
const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'; // Replace with actual deployed address

export function useSealedArtBid() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const createArtwork = async (title: string, description: string, imageHash: string) => {
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'createArtwork',
        args: [title, description, imageHash],
        chainId: sepolia.id,
      });
      return hash;
    } catch (error) {
      console.error('Error creating artwork:', error);
      throw error;
    }
  };

  const startAuction = async (artworkId: number, duration: number) => {
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'startAuction',
        args: [BigInt(artworkId), BigInt(duration)],
        chainId: sepolia.id,
      });
      return hash;
    } catch (error) {
      console.error('Error starting auction:', error);
      throw error;
    }
  };

  const endAuction = async (auctionId: number) => {
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'endAuction',
        args: [BigInt(auctionId)],
        chainId: sepolia.id,
      });
      return hash;
    } catch (error) {
      console.error('Error ending auction:', error);
      throw error;
    }
  };

  return {
    createArtwork,
    startAuction,
    endAuction,
    address,
  };
}

export function useArtworkInfo(artworkId: number) {
  const { data, error, isLoading } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getArtworkInfo',
    args: [BigInt(artworkId)],
    chainId: sepolia.id,
  });

  return {
    artwork: data,
    error,
    isLoading,
  };
}

export function useAuctionInfo(auctionId: number) {
  const { data, error, isLoading } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getAuctionInfo',
    args: [BigInt(auctionId)],
    chainId: sepolia.id,
  });

  return {
    auction: data,
    error,
    isLoading,
  };
}
