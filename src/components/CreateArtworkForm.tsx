import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Upload, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSealedArtBid } from '@/hooks/useContract';
import { useAccount } from 'wagmi';

export function CreateArtworkForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageHash, setImageHash] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const { address, isConnected } = useAccount();
  const { createArtwork } = useSealedArtBid();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      setError('Please connect your wallet first');
      return;
    }

    if (!title.trim() || !description.trim() || !imageHash.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // Call smart contract to create artwork
      const txHash = await createArtwork(title, description, imageHash);
      
      setSuccess(`Artwork created successfully! Transaction: ${txHash.slice(0, 10)}...`);
      
      // Reset form
      setTitle('');
      setDescription('');
      setImageHash('');
      
    } catch (err) {
      console.error('Error creating artwork:', err);
      setError('Failed to create artwork. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real implementation, this would upload to IPFS or similar
      // For now, we'll simulate generating a hash
      const simulatedHash = `Qm${Math.random().toString(36).substr(2, 44)}`;
      setImageHash(simulatedHash);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-gold" />
          Create New Artwork
        </CardTitle>
        <CardDescription>
          Register your artwork on the blockchain with FHE-powered auctions
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Artwork Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter artwork title"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your artwork..."
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Artwork Image</Label>
            <div className="flex items-center gap-2">
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isSubmitting}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={isSubmitting}
              >
                <Upload className="h-4 w-4" />
              </Button>
            </div>
            {imageHash && (
              <p className="text-sm text-muted-foreground">
                Image hash: {imageHash}
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
              <CheckCircle className="h-4 w-4" />
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
                <Palette className="h-4 w-4 mr-2 animate-spin" />
                Creating Artwork...
              </>
            ) : (
              <>
                <Palette className="h-4 w-4 mr-2" />
                Create Artwork
              </>
            )}
          </Button>

          {!isConnected && (
            <p className="text-sm text-muted-foreground text-center">
              Please connect your wallet to create artwork
            </p>
          )}
        </form>

        <div className="mt-6 p-4 bg-gold/5 rounded-lg border border-gold/20">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Palette className="h-4 w-4 text-gold" />
            Blockchain Benefits
          </h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Immutable artwork registration on blockchain</li>
            <li>• Transparent ownership history</li>
            <li>• FHE-powered private auction capabilities</li>
            <li>• Artist reputation system integration</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
