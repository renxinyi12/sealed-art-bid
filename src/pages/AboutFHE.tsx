import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Shield, Eye, Zap, Users, CheckCircle } from "lucide-react";

const AboutFHE = () => {
  const features = [
    {
      icon: Lock,
      title: "Complete Bid Privacy",
      description: "Your bid amounts remain encrypted and hidden from all participants, including us, until the auction concludes."
    },
    {
      icon: Shield,
      title: "Tamper-Proof Security",
      description: "Fully Homomorphic Encryption ensures your bids cannot be manipulated or accessed by unauthorized parties."
    },
    {
      icon: Eye,
      title: "Transparent Verification",
      description: "While bids are private, the auction process remains fully verifiable on the blockchain."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "FHE allows computations on encrypted data, enabling live auction updates without revealing bid amounts."
    }
  ];

  const benefits = [
    "No bid sniping or manipulation",
    "True price discovery",
    "Equal opportunity for all bidders",
    "Cryptographic proof of fairness",
    "Complete anonymity protection",
    "Regulatory compliance ready"
  ];

  const steps = [
    {
      step: "1",
      title: "Connect Wallet",
      description: "Link your Web3 wallet to participate in encrypted auctions"
    },
    {
      step: "2",
      title: "Place Encrypted Bid",
      description: "Your bid is encrypted using FHE before submission to the blockchain"
    },
    {
      step: "3",
      title: "Sealed Bidding",
      description: "All bids remain hidden while auction computations happen on encrypted data"
    },
    {
      step: "4",
      title: "Reveal & Settlement",
      description: "When auction ends, the winning bid is revealed and the artwork is transferred"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <Badge className="mb-6 px-4 py-2 text-sm">
              Powered by Fully Homomorphic Encryption
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gold">FHE Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We're revolutionizing art auctions with Fully Homomorphic Encryption (FHE), 
              the most advanced cryptographic technology that enables computations on encrypted data 
              without ever revealing the underlying information.
            </p>
          </div>

          {/* What is FHE */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is Fully Homomorphic Encryption?</h2>
                <p className="text-muted-foreground mb-6">
                  FHE is a breakthrough cryptographic method that allows mathematical operations 
                  to be performed on encrypted data without decrypting it. This means we can 
                  compare bids, determine winners, and process payments while keeping all bid 
                  amounts completely private.
                </p>
                <p className="text-muted-foreground mb-6">
                  Traditional auctions reveal bid amounts in real-time, leading to strategic 
                  manipulation and unfair advantages. With FHE, every bid remains sealed until 
                  the auction concludes, ensuring true price discovery and fairness.
                </p>
                <div className="flex items-center gap-2 text-gold">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Zero-knowledge auction technology</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="p-8 rounded-lg bg-gradient-to-br from-gold/10 to-encrypted/10 border border-gold/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold/20 flex items-center justify-center">
                        <Lock className="h-8 w-8 text-gold" />
                      </div>
                      <h3 className="font-semibold mb-2">Encrypted Bids</h3>
                      <p className="text-sm text-muted-foreground">All bids encrypted before submission</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-encrypted/20 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-encrypted-foreground" />
                      </div>
                      <h3 className="font-semibold mb-2">FHE Processing</h3>
                      <p className="text-sm text-muted-foreground">Computations on encrypted data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Why FHE Changes Everything</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our FHE implementation brings unprecedented security and fairness to art auctions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 transition-luxury hover:shadow-luxury gradient-card">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center glow-gold">
                      <feature.icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">How FHE Auctions Work</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the future of private and fair auctions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold text-background flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-gold to-transparent transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Benefits for Art Collectors</h2>
                <p className="text-muted-foreground mb-8">
                  FHE technology transforms the auction experience, providing unprecedented 
                  advantages for both buyers and sellers in the art market.
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="p-8 gradient-card">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <Users className="h-12 w-12 mx-auto mb-4 text-gold" />
                    <h3 className="text-xl font-bold mb-2">Trusted by Collectors Worldwide</h3>
                    <p className="text-muted-foreground text-sm">
                      Join thousands of art enthusiasts who trust our FHE-powered platform
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gold mb-1">2,847</div>
                      <div className="text-xs text-muted-foreground">Active Bidders</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gold mb-1">100%</div>
                      <div className="text-xs text-muted-foreground">Privacy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gold mb-1">0</div>
                      <div className="text-xs text-muted-foreground">Security Breaches</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Specs */}
          <section>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
                  <p className="text-muted-foreground">
                    Built on cutting-edge cryptographic research and blockchain technology
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="font-semibold mb-2">Encryption Scheme</h3>
                    <p className="text-sm text-muted-foreground">CKKS/BGV Homomorphic Encryption</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Blockchain</h3>
                    <p className="text-sm text-muted-foreground">Ethereum Compatible with Layer 2</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Security Level</h3>
                    <p className="text-sm text-muted-foreground">128-bit quantum resistant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutFHE;