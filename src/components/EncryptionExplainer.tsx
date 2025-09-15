import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

const EncryptionExplainer = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How <span className="text-encrypted">FHE</span> Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Fully Homomorphic Encryption enables computations on encrypted data 
              without ever decrypting it, ensuring complete privacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="gradient-card border-encrypted/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-encrypted/10 mb-6 flex items-center justify-center encrypted-pulse">
                  <Lock className="h-6 w-6 text-encrypted" />
                </div>
                <h3 className="text-xl font-bold mb-4">Private Bidding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your bid amount is encrypted before leaving your device. 
                  Even we cannot see your bid value during the auction process.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-gold/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-gold/10 mb-6 flex items-center justify-center pulse-glow">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4">Secure Processing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our FHE system compares encrypted bids without decrypting them, 
                  determining the winner while maintaining complete privacy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-accent/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 mb-6 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transparent Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Only the winning bid and winner are revealed. All losing bids 
                  remain permanently encrypted and private.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 mb-6 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Verifiable Fairness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The entire auction process is cryptographically verifiable, 
                  ensuring fairness without compromising bidder privacy.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <button className="text-encrypted hover:text-encrypted/80 font-medium transition-colors">
              Learn More About FHE Technology →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncryptionExplainer;