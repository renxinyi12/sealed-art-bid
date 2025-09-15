import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuctionCard from "@/components/AuctionCard";
import { EncryptedBidForm } from "@/components/EncryptedBidForm";
import { CreateArtworkForm } from "@/components/CreateArtworkForm";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Plus, Palette } from "lucide-react";
import { useAccount } from 'wagmi';
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const LiveAuctions = () => {
  const { isConnected } = useAccount();
  
  const allAuctions = [
    {
      id: "1",
      title: "Geometric Harmony",
      artist: "Elena Vasquez",
      image: artwork1,
      currentBid: "2.5 ETH",
      timeLeft: "2h 34m",
      bidCount: 12,
      category: "Physical" as const,
    },
    {
      id: "2",
      title: "Marble Dreams",
      artist: "Marcus Chen",
      image: artwork2,
      currentBid: "4.1 ETH",
      timeLeft: "5h 12m",
      bidCount: 8,
      category: "Physical" as const,
    },
    {
      id: "3",
      title: "Digital Nexus",
      artist: "AI Collective",
      image: artwork3,
      currentBid: "1.8 ETH",
      timeLeft: "1h 45m",
      bidCount: 24,
      category: "Digital" as const,
    },
    {
      id: "4",
      title: "Abstract Reality",
      artist: "Sofia Rodriguez",
      image: artwork1,
      currentBid: "3.2 ETH",
      timeLeft: "6h 22m",
      bidCount: 15,
      category: "Digital" as const,
    },
    {
      id: "5",
      title: "Ceramic Soul",
      artist: "James Wilson",
      image: artwork2,
      currentBid: "1.9 ETH",
      timeLeft: "3h 55m",
      bidCount: 7,
      category: "Physical" as const,
    },
    {
      id: "6",
      title: "Light Patterns",
      artist: "Digital Arts Studio",
      image: artwork3,
      currentBid: "2.8 ETH",
      timeLeft: "4h 18m",
      bidCount: 19,
      category: "Digital" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Live <span className="text-gold">Auctions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover and bid on extraordinary artworks with complete privacy through 
              our advanced FHE encryption technology. All bids remain sealed until auction ends.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search artworks or artists..." 
                  className="pl-10"
                />
              </div>
              
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="physical">Physical Art</SelectItem>
                  <SelectItem value="digital">Digital Art</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ending">Ending Soon</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="bids">Most Bids</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="auctions" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="auctions" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Live Auctions
              </TabsTrigger>
              <TabsTrigger value="bid" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Place Bid
              </TabsTrigger>
              <TabsTrigger value="create" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Create Artwork
              </TabsTrigger>
            </TabsList>

            <TabsContent value="auctions" className="space-y-8">
              {/* Auctions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allAuctions.map((auction) => (
                  <AuctionCard key={auction.id} {...auction} />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Auctions
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="bid" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Place Encrypted Bid</h2>
                <p className="text-muted-foreground">
                  Select an auction and place your bid with complete privacy using FHE encryption
                </p>
              </div>
              
              {isConnected ? (
                <div className="max-w-2xl mx-auto">
                  <EncryptedBidForm 
                    auctionId={1} 
                    artworkTitle="Geometric Harmony"
                    currentHighestBid={2.5}
                  />
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="p-8 rounded-lg bg-card/50 border border-dashed">
                    <Palette className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Connect Your Wallet</h3>
                    <p className="text-muted-foreground">
                      Please connect your wallet to place encrypted bids
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="create" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Create New Artwork</h2>
                <p className="text-muted-foreground">
                  Register your artwork on the blockchain and enable FHE-powered auctions
                </p>
              </div>
              
              {isConnected ? (
                <CreateArtworkForm />
              ) : (
                <div className="text-center py-12">
                  <div className="p-8 rounded-lg bg-card/50 border border-dashed">
                    <Palette className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Connect Your Wallet</h3>
                    <p className="text-muted-foreground">
                      Please connect your wallet to create and register artworks
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiveAuctions;