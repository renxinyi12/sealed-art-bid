// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract SealedArtBid is SepoliaConfig {
    using FHE for *;
    
    struct Artwork {
        euint32 artworkId;
        string title;
        string description;
        string imageHash;
        address artist;
        uint256 startTime;
        uint256 endTime;
        bool isActive;
        bool isSold;
    }
    
    struct Bid {
        euint32 bidId;
        euint32 amount;
        address bidder;
        uint256 timestamp;
        bool isActive;
    }
    
    struct Auction {
        euint32 auctionId;
        euint32 artworkId;
        euint32 highestBid;
        euint32 bidCount;
        address highestBidder;
        bool isActive;
        bool isEnded;
        uint256 startTime;
        uint256 endTime;
    }
    
    mapping(uint256 => Artwork) public artworks;
    mapping(uint256 => Auction) public auctions;
    mapping(uint256 => mapping(uint256 => Bid)) public bids; // auctionId => bidId => Bid
    mapping(address => euint32) public bidderReputation;
    mapping(address => euint32) public artistReputation;
    
    uint256 public artworkCounter;
    uint256 public auctionCounter;
    uint256 public bidCounter;
    
    address public owner;
    address public verifier;
    
    event ArtworkCreated(uint256 indexed artworkId, address indexed artist, string title);
    event AuctionStarted(uint256 indexed auctionId, uint256 indexed artworkId, uint256 endTime);
    event BidPlaced(uint256 indexed bidId, uint256 indexed auctionId, address indexed bidder, uint32 amount);
    event AuctionEnded(uint256 indexed auctionId, address indexed winner, uint32 winningBid);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createArtwork(
        string memory _title,
        string memory _description,
        string memory _imageHash
    ) public returns (uint256) {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(bytes(_imageHash).length > 0, "Image hash cannot be empty");
        
        uint256 artworkId = artworkCounter++;
        
        artworks[artworkId] = Artwork({
            artworkId: FHE.asEuint32(0), // Will be set properly later
            title: _title,
            description: _description,
            imageHash: _imageHash,
            artist: msg.sender,
            startTime: 0,
            endTime: 0,
            isActive: true,
            isSold: false
        });
        
        emit ArtworkCreated(artworkId, msg.sender, _title);
        return artworkId;
    }
    
    function startAuction(
        uint256 _artworkId,
        uint256 _duration
    ) public returns (uint256) {
        require(artworks[_artworkId].artist == msg.sender, "Only artist can start auction");
        require(artworks[_artworkId].isActive, "Artwork must be active");
        require(!artworks[_artworkId].isSold, "Artwork already sold");
        require(_duration > 0, "Duration must be positive");
        
        uint256 auctionId = auctionCounter++;
        
        auctions[auctionId] = Auction({
            auctionId: FHE.asEuint32(0), // Will be set properly later
            artworkId: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            highestBid: FHE.asEuint32(0),
            bidCount: FHE.asEuint32(0),
            highestBidder: address(0),
            isActive: true,
            isEnded: false,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration
        });
        
        emit AuctionStarted(auctionId, _artworkId, block.timestamp + _duration);
        return auctionId;
    }
    
    function placeBid(
        uint256 _auctionId,
        externalEuint32 _amount,
        bytes calldata _inputProof
    ) public payable returns (uint256) {
        require(auctions[_auctionId].isActive, "Auction is not active");
        require(!auctions[_auctionId].isEnded, "Auction has ended");
        require(block.timestamp <= auctions[_auctionId].endTime, "Auction time expired");
        
        uint256 bidId = bidCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(_amount, _inputProof);
        
        bids[_auctionId][bidId] = Bid({
            bidId: FHE.asEuint32(0), // Will be set properly later
            amount: internalAmount,
            bidder: msg.sender,
            timestamp: block.timestamp,
            isActive: true
        });
        
        // Update auction totals
        auctions[_auctionId].bidCount = FHE.add(auctions[_auctionId].bidCount, FHE.asEuint32(1));
        
        // Check if this is the highest bid (this would need to be done off-chain for FHE)
        // For now, we'll update the highest bidder on-chain
        auctions[_auctionId].highestBidder = msg.sender;
        
        emit BidPlaced(bidId, _auctionId, msg.sender, 0); // Amount will be decrypted off-chain
        return bidId;
    }
    
    function endAuction(uint256 _auctionId) public {
        require(auctions[_auctionId].isActive, "Auction is not active");
        require(block.timestamp > auctions[_auctionId].endTime, "Auction time not expired");
        require(msg.sender == owner || msg.sender == verifier, "Only owner or verifier can end auction");
        
        auctions[_auctionId].isActive = false;
        auctions[_auctionId].isEnded = true;
        
        // Mark artwork as sold
        uint256 artworkId = 0; // This would need to be decrypted from FHE
        artworks[artworkId].isSold = true;
        
        emit AuctionEnded(_auctionId, auctions[_auctionId].highestBidder, 0); // Amount will be decrypted off-chain
    }
    
    function updateReputation(address _user, euint32 _reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(_user != address(0), "Invalid user address");
        
        // Determine if user is bidder or artist based on context
        if (bids[auctionCounter - 1][bidCounter - 1].bidder == _user) {
            bidderReputation[_user] = _reputation;
        } else {
            artistReputation[_user] = _reputation;
        }
        
        emit ReputationUpdated(_user, 0); // FHE.decrypt(_reputation) - will be decrypted off-chain
    }
    
    function getArtworkInfo(uint256 _artworkId) public view returns (
        string memory title,
        string memory description,
        string memory imageHash,
        address artist,
        bool isActive,
        bool isSold
    ) {
        Artwork storage artwork = artworks[_artworkId];
        return (
            artwork.title,
            artwork.description,
            artwork.imageHash,
            artwork.artist,
            artwork.isActive,
            artwork.isSold
        );
    }
    
    function getAuctionInfo(uint256 _auctionId) public view returns (
        uint8 highestBid,
        uint8 bidCount,
        address highestBidder,
        bool isActive,
        bool isEnded,
        uint256 startTime,
        uint256 endTime
    ) {
        Auction storage auction = auctions[_auctionId];
        return (
            0, // FHE.decrypt(auction.highestBid) - will be decrypted off-chain
            0, // FHE.decrypt(auction.bidCount) - will be decrypted off-chain
            auction.highestBidder,
            auction.isActive,
            auction.isEnded,
            auction.startTime,
            auction.endTime
        );
    }
    
    function getBidInfo(uint256 _auctionId, uint256 _bidId) public view returns (
        uint8 amount,
        address bidder,
        uint256 timestamp,
        bool isActive
    ) {
        Bid storage bid = bids[_auctionId][_bidId];
        return (
            0, // FHE.decrypt(bid.amount) - will be decrypted off-chain
            bid.bidder,
            bid.timestamp,
            bid.isActive
        );
    }
    
    function getBidderReputation(address _bidder) public view returns (uint8) {
        return 0; // FHE.decrypt(bidderReputation[_bidder]) - will be decrypted off-chain
    }
    
    function getArtistReputation(address _artist) public view returns (uint8) {
        return 0; // FHE.decrypt(artistReputation[_artist]) - will be decrypted off-chain
    }
    
    function withdrawFunds(uint256 _auctionId) public {
        require(auctions[_auctionId].isEnded, "Auction must be ended");
        require(auctions[_auctionId].highestBidder == msg.sender, "Only winner can withdraw");
        
        // Transfer funds to winner
        // Note: In a real implementation, funds would be transferred based on decrypted amount
        // For now, we'll transfer a placeholder amount
        // payable(msg.sender).transfer(amount);
    }
}
