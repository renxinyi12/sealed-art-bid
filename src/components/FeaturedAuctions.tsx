import AuctionCard from "./AuctionCard";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const FeaturedAuctions = () => {
  const auctions = [
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
  ];

  return (
    <section className="py-24" id="auctions">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gold">Live Auctions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover extraordinary artworks with complete bidding privacy through 
            our advanced encryption technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {auctions.map((auction) => (
            <AuctionCard key={auction.id} {...auction} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="text-gold hover:text-gold/80 font-medium transition-colors">
            View All Auctions →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuctions;