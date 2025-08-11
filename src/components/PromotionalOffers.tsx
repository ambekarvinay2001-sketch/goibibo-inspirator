import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, Clock, Gift } from "lucide-react";

const PromotionalOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Early Bird Special",
      subtitle: "Book 30 days in advance",
      discount: "25% OFF",
      code: "EARLY25",
      validUntil: "Dec 31, 2024",
      icon: Clock,
      gradient: "from-primary to-primary-light",
    },
    {
      id: 2,
      title: "Weekend Getaway",
      subtitle: "Perfect for quick trips",
      discount: "15% OFF",
      code: "WEEKEND15",
      validUntil: "Jan 15, 2025",
      icon: Gift,
      gradient: "from-accent to-accent-light",
    },
    {
      id: 3,
      title: "First Time User",
      subtitle: "Welcome to TravelEase",
      discount: "30% OFF",
      code: "WELCOME30",
      validUntil: "Limited Time",
      icon: Percent,
      gradient: "from-primary-dark to-accent",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Exclusive Offers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Save more on your next adventure with our special deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => {
            const IconComponent = offer.icon;
            return (
              <Card
                key={offer.id}
                className="relative overflow-hidden group cursor-pointer shadow-soft hover:shadow-large transition-bounce border-border/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
                
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${offer.gradient} text-white shadow-soft`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {offer.validUntil}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {offer.subtitle}
                    </p>
                    <div className={`text-3xl font-black bg-gradient-to-r ${offer.gradient} bg-clip-text text-transparent mb-2`}>
                      {offer.discount}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-1">Use Code:</div>
                    <div className="font-mono text-sm font-bold text-foreground bg-secondary px-3 py-1 rounded inline-block">
                      {offer.code}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Claim Offer
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromotionalOffers;