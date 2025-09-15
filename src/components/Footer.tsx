import { Lock, Twitter, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-gold/10 glow-gold">
                <Lock className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Art Auctions</h3>
                <p className="text-sm text-muted-foreground">Sealed by FHE</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The world's first art auction platform powered by Fully Homomorphic Encryption, 
              ensuring complete privacy and fairness in every bid.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Github className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Live Auctions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Artist Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Art Auctions. All rights reserved. Powered by FHE technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;