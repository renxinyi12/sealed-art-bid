import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Users, Clock, DollarSign } from "lucide-react";
import BidModal from "./BidModal";

interface AuctionCardProps {
  id: string;
  title: string;
  artist: string;
  image: string;
  currentBid: string;
  timeLeft: string;
  bidCount: number;
  category: "Physical" | "Digital";
  isEncrypted?: boolean;
}

const AuctionCard = ({ 
  id,
  title, 
  artist, 
  image, 
  currentBid, 
  timeLeft, 
  bidCount, 
  category,
  isEncrypted = true 
}: AuctionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);

  return (
    <Card 
      className="group overflow-hidden transition-luxury hover:shadow-luxury cursor-pointer gradient-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute top-4 left-4">
          <Badge variant={category === "Digital" ? "default" : "secondary"}>
            {category}
          </Badge>
        </div>
        
        <div className="absolute top-4 right-4">
          {isEncrypted && (
            <div className="p-2 rounded-full bg-encrypted/90 backdrop-blur-sm encrypted-pulse">
              <Lock className="h-4 w-4 text-encrypted-foreground" />
            </div>
          )}
        </div>
        
        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm">
          <Clock className="h-4 w-4 text-gold" />
          <span className="text-sm font-medium">{timeLeft}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{artist}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gold" />
            <span className="font-semibold">{currentBid}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{bidCount} bids</span>
          </div>
        </div>
        
        <Button 
          className="w-full gap-2 transition-glow"
          variant={isHovered ? "default" : "outline"}
          onClick={() => setIsBidModalOpen(true)}
        >
          <Lock className="h-4 w-4" />
          Place Encrypted Bid
        </Button>
        
        <BidModal
          isOpen={isBidModalOpen}
          onClose={() => setIsBidModalOpen(false)}
          auction={{ id, title, artist, currentBid, timeLeft, image }}
        />
      </CardContent>
    </Card>
  );
};

export default AuctionCard;