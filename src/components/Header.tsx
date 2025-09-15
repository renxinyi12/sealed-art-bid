import { Button } from "@/components/ui/button";
import { Lock, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-gold/10 glow-gold">
              <Lock className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Art Auctions</h1>
              <p className="text-sm text-muted-foreground">Sealed by FHE</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/live-auctions" className="text-sm font-medium hover:text-gold transition-colors">
              Live Auctions
            </Link>
            <Link to="/gallery" className="text-sm font-medium hover:text-gold transition-colors">
              Gallery
            </Link>
            <Link to="/about-fhe" className="text-sm font-medium hover:text-gold transition-colors">
              About FHE
            </Link>
          </nav>

          <Button variant="outline" className="gap-2">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;