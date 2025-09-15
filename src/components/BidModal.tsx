import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Lock, Shield, Zap, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BidModalProps {
  isOpen: boolean;
  onClose: () => void;
  auction: {
    id: string;
    title: string;
    artist: string;
    currentBid: string;
    timeLeft: string;
    image: string;
  };
}

const BidModal = ({ isOpen, onClose, auction }: BidModalProps) => {
  const [bidAmount, setBidAmount] = useState("");
  const [isEncrypting, setIsEncrypting] = useState(false);
  const { toast } = useToast();

  const handlePlaceBid = async () => {
    if (!bidAmount || parseFloat(bidAmount) <= 0) {
      toast({
        title: "Invalid Bid",
        description: "Please enter a valid bid amount",
        variant: "destructive"
      });
      return;
    }

    setIsEncrypting(true);
    
    // Simulate FHE encryption process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsEncrypting(false);
    toast({
      title: "Bid Placed Successfully!",
      description: "Your encrypted bid has been submitted to the blockchain",
    });
    
    setBidAmount("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-gold" />
            Place Encrypted Bid
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Auction Info */}
          <div className="flex gap-4">
            <img 
              src={auction.image} 
              alt={auction.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">{auction.title}</h3>
              <p className="text-sm text-muted-foreground">{auction.artist}</p>
              <p className="text-sm font-medium">Current: {auction.currentBid}</p>
            </div>
          </div>

          {/* FHE Security Notice */}
          <div className="p-4 rounded-lg bg-encrypted/10 border border-encrypted/20">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-encrypted-foreground" />
              <span className="text-sm font-medium">FHE Protection Active</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Your bid will be encrypted using Fully Homomorphic Encryption, ensuring complete privacy until auction ends.
            </p>
          </div>

          {/* Bid Input */}
          <div className="space-y-2">
            <Label htmlFor="bidAmount">Your Bid (ETH)</Label>
            <Input
              id="bidAmount"
              type="number"
              step="0.01"
              placeholder="Enter bid amount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              disabled={isEncrypting}
            />
          </div>

          {/* Encryption Status */}
          {isEncrypting && (
            <div className="flex items-center gap-2 text-sm text-gold">
              <Zap className="h-4 w-4 animate-pulse" />
              Encrypting bid with FHE...
            </div>
          )}

          {/* Warning */}
          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>
              Once submitted, your bid cannot be canceled. Ensure you have sufficient wallet balance.
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handlePlaceBid} 
              disabled={!bidAmount || isEncrypting}
              className="flex-1 gap-2"
            >
              {isEncrypting ? (
                <>
                  <Zap className="h-4 w-4 animate-pulse" />
                  Encrypting...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Place Bid
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BidModal;