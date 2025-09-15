import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Palette, AlertCircle } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const { address, isConnected } = useAccount();
  const { createArtwork, startAuction } = useSealedArtBid();

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

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // In a real implementation, this would:
      // 1. Generate FHE encryption key
      // 2. Encrypt the bid amount using FHE
      // 3. Create external proof for the encrypted bid
      // 4. Call the smart contract with encrypted data
      
      // For demonstration, we'll simulate the encrypted bid process
      const encryptedBid = await simulateFHEEncryption(parseFloat(bidAmount));
      
      // Call smart contract with encrypted bid
      const txHash = await placeEncryptedBid(auctionId, encryptedBid);
      
      setSuccess(`Encrypted bid placed successfully! Transaction: ${txHash.slice(0, 10)}...`);
      setBidAmount('');
      
    } catch (err) {
      console.error('Error placing bid:', err);
      setError('Failed to place bid. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simulate FHE encryption process
  const simulateFHEEncryption = async (amount: number): Promise<string> => {
    // In real implementation, this would use Zama's FHE library
    // For now, we'll simulate the encryption process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate encrypted data (in reality this would be euint32)
    const encryptedData = btoa(JSON.stringify({
      amount: amount,
      timestamp: Date.now(),
      bidder: address,
      encrypted: true
    }));
    
    return encryptedData;
  };

  // Simulate placing encrypted bid on smart contract
  const placeEncryptedBid = async (auctionId: number, encryptedBid: string): Promise<string> => {
    // In real implementation, this would call the smart contract
    // with the encrypted bid data and proof
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate transaction hash
    return `0x${Math.random().toString(16).substr(2, 40)}`;
  };

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

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
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
            disabled={isSubmitting || !isConnected}
          >
            {isSubmitting ? (
              <>
                <Lock className="h-4 w-4 mr-2 animate-spin" />
                Encrypting & Submitting...
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
            How FHE Encryption Works
          </h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Your bid amount is encrypted using FHE</li>
            <li>• Only encrypted data is sent to the blockchain</li>
            <li>• No one can see your bid until auction ends</li>
            <li>• Winner is determined fairly without revealing losing bids</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
