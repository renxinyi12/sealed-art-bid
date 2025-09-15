import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Share2, Clock } from "lucide-react";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const Gallery = () => {
  const artworks = [
    {
      id: "1",
      title: "Geometric Harmony",
      artist: "Elena Vasquez",
      image: artwork1,
      finalPrice: "3.2 ETH",
      status: "Sold",
      category: "Physical",
      description: "A masterpiece of geometric abstraction exploring the harmony between form and space.",
      completedDate: "2024-01-15",
      views: 1248,
      likes: 89,
    },
    {
      id: "2",
      title: "Marble Dreams",
      artist: "Marcus Chen",
      image: artwork2,
      finalPrice: "5.7 ETH",
      status: "Sold",
      category: "Physical",
      description: "Carved from rare Carrara marble, this sculpture represents the fluidity of dreams.",
      completedDate: "2024-01-10",
      views: 892,
      likes: 156,
    },
    {
      id: "3",
      title: "Digital Nexus",
      artist: "AI Collective",
      image: artwork3,
      finalPrice: "2.4 ETH",
      status: "Sold",
      category: "Digital",
      description: "An exploration of digital consciousness through generative algorithms.",
      completedDate: "2024-01-08",
      views: 2156,
      likes: 234,
    },
    {
      id: "4",
      title: "Abstract Reality",
      artist: "Sofia Rodriguez",
      image: artwork1,
      finalPrice: "4.1 ETH",
      status: "Sold",
      category: "Digital",
      description: "Where reality meets abstraction in a symphony of colors and forms.",
      completedDate: "2024-01-05",
      views: 1567,
      likes: 123,
    },
    {
      id: "5",
      title: "Ceramic Soul",
      artist: "James Wilson",
      image: artwork2,
      finalPrice: "2.8 ETH",
      status: "Sold",
      category: "Physical",
      description: "Hand-thrown ceramic piece representing the artist's inner journey.",
      completedDate: "2024-01-02",
      views: 743,
      likes: 67,
    },
    {
      id: "6",
      title: "Light Patterns",
      artist: "Digital Arts Studio",
      image: artwork3,
      finalPrice: "3.5 ETH",
      status: "Sold",
      category: "Digital",
      description: "Interactive light installation captured in digital format.",
      completedDate: "2023-12-28",
      views: 1834,
      likes: 198,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Art <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of sold artworks from past encrypted auctions. 
              Each piece was acquired through our secure FHE bidding process, ensuring fair and private transactions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-3xl font-bold text-gold mb-2">127</div>
              <div className="text-sm text-muted-foreground">Artworks Sold</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-3xl font-bold text-gold mb-2">45</div>
              <div className="text-sm text-muted-foreground">Artists Featured</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-3xl font-bold text-gold mb-2">342 ETH</div>
              <div className="text-sm text-muted-foreground">Total Volume</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-3xl font-bold text-gold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Privacy Protected</div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="group overflow-hidden transition-luxury hover:shadow-luxury cursor-pointer gradient-card">
                <div className="relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-4 left-4">
                    <Badge variant={artwork.category === "Digital" ? "default" : "secondary"}>
                      {artwork.category}
                    </Badge>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                      {artwork.status}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm">
                    <Clock className="h-4 w-4 text-gold" />
                    <span className="text-sm font-medium">{artwork.completedDate}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{artwork.artist}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{artwork.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-gold">
                      {artwork.finalPrice}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{artwork.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{artwork.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Artworks
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;