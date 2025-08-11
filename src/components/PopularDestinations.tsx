import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import goaImage from "@/assets/destination-goa.jpg";
import mumbaiImage from "@/assets/destination-mumbai.jpg";
import parisImage from "@/assets/destination-paris.jpg";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Goa",
      country: "India",
      image: goaImage,
      description: "Tropical beaches and vibrant nightlife",
      price: "₹2,500",
      rating: 4.8,
      reviews: 1250,
    },
    {
      id: 2,
      name: "Mumbai",
      country: "India",
      image: mumbaiImage,
      description: "The city of dreams and business hub",
      price: "₹3,200",
      rating: 4.6,
      reviews: 980,
    },
    {
      id: 3,
      name: "Paris",
      country: "France",
      image: parisImage,
      description: "City of love and romantic getaways",
      price: "₹8,500",
      rating: 4.9,
      reviews: 2100,
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most loved destinations by travelers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden group cursor-pointer shadow-soft hover:shadow-medium transition-smooth bg-card-gradient border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-destination-overlay opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button variant="hero" size="sm" className="w-full">
                    View Hotels
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {destination.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {destination.country}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">
                      {destination.price}
                    </div>
                    <div className="text-xs text-muted-foreground">per night</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-accent fill-current mr-1" />
                    <span className="text-sm font-medium text-foreground">
                      {destination.rating}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">
                      ({destination.reviews} reviews)
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;