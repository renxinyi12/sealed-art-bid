import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Palette, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSealedArtBid } from '@/hooks/useContract';
import { useAccount } from 'wagmi';

interface EncryptedBidFormProps {
  auctionId: number;
  artworkTitle: string;
  currentHighestBid?: number;
}

export function EncryptedBidForm({ auctionId, artworkTitle, currentHighestBid }: EncryptedBidFormProps) {
  const [bidAmount, setBidAmount] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const { address, isConnected } = useAccount();
  const { 
    placeEncryptedBid, 
    isPending, 
    isConfirming, 
    isConfirmed, 
    error: contractError,
    hash 
  } = useSealedArtBid();

  const handleSubmitBid = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      setError('Please connect your wallet first');
      return;
    }

    if (!bidAmount || parseFloat(bidAmount) <= 0) {
      setError('Please enter a valid bid amount');
      return;
    }

    if (currentHighestBid && parseFloat(bidAmount) <= currentHighestBid) {
      setError(`Bid must be higher than current highest bid (${currentHighestBid} ETH)`);
      return;
    }

    setError(null);
    setSuccess(null);

    try {
      // Call the smart contract with FHE encrypted bid
      const txHash = await placeEncryptedBid(auctionId, parseFloat(bidAmount));
      
      setSuccess(`Encrypted bid placed successfully! Transaction: ${txHash?.slice(0, 10)}...`);
      setBidAmount('');
      
    } catch (err) {
      console.error('Error placing bid:', err);
      setError('Failed to place bid. Please try again.');
    }
  };

  // Update success message when transaction is confirmed
  useEffect(() => {
    if (isConfirmed && hash) {
      setSuccess(`✅ Encrypted bid confirmed on blockchain! Transaction: ${hash.slice(0, 10)}...`);
    }
  }, [isConfirmed, hash]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-encrypted" />
          Place Encrypted Bid
        </CardTitle>
        <CardDescription>
          Bid on "{artworkTitle}" with complete privacy
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmitBid} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bidAmount">Bid Amount (ETH)</Label>
            <Input
              id="bidAmount"
              type="number"
              step="0.01"
              min="0"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder="Enter your bid amount"
              disabled={isSubmitting}
            />
            {currentHighestBid && (
              <p className="text-sm text-muted-foreground">
                Current highest bid: {currentHighestBid} ETH
              </p>
            )}
          </div>

          {(error || contractError) && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error || (contractError as Error)?.message || 'Transaction failed'}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert>
              <Palette className="h-4 w-4" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isPending || isConfirming || !isConnected}
          >
            {isPending ? (
              <>
                <Lock className="h-4 w-4 mr-2 animate-spin" />
                Encrypting & Submitting...
              </>
            ) : isConfirming ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2 animate-pulse" />
                Confirming Transaction...
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Place Encrypted Bid
              </>
            )}
          </Button>

          {!isConnected && (
            <p className="text-sm text-muted-foreground text-center">
              Please connect your wallet to place a bid
            </p>
          )}
        </form>

        <div className="mt-6 p-4 bg-encrypted/5 rounded-lg border border-encrypted/20">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Lock className="h-4 w-4 text-encrypted" />
            FHE Encryption Process
          </h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• 🔐 Bid amount encrypted using FHE technology</li>
            <li>• 📡 Encrypted data + proof sent to smart contract</li>
            <li>• 🔒 No one can see your bid until auction ends</li>
            <li>• ⚖️ Fair winner determination without revealing losing bids</li>
            <li>• 🌐 All data stored securely on blockchain</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
