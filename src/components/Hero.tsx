import { Button } from "@/components/ui/button";
import { Palette, Eye, Clock, Lock } from "lucide-react";
import { WalletConnect } from "./WalletConnect";

const Hero = () => {
  return (
    <section className="gradient-hero py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-8">
            <Palette className="h-4 w-4" />
            Art Meets Cryptography
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Art Auctions,<br />
            <span className="text-gold">Sealed by FHE</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the future of art auctions with cryptographically private bidding. 
            Your bids remain encrypted and confidential throughout the entire process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gap-2 shadow-luxury">
              <Eye className="h-5 w-5" />
              Browse Auctions
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Clock className="h-5 w-5" />
              How It Works
            </Button>
          </div>
          
          <div className="flex justify-center mb-16">
            <WalletConnect />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-encrypted/10 mx-auto mb-4 flex items-center justify-center encrypted-pulse">
                <Lock className="h-6 w-6 text-encrypted" />
              </div>
              <h3 className="font-semibold mb-2">Private Bidding</h3>
              <p className="text-sm text-muted-foreground">Your bids are encrypted and never revealed</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center pulse-glow">
                <Palette className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Art Focused</h3>
              <p className="text-sm text-muted-foreground">Curated collection of digital and physical artworks</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Real-time Auctions</h3>
              <p className="text-sm text-muted-foreground">Live bidding with instant encrypted processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;