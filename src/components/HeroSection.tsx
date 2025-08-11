import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guests: "2 Adults"
  });

  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful travel destination" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-in">
            Find Your Perfect
            <span className="block text-accent-light">Adventure</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Discover amazing places, book instantly, and create unforgettable memories with the best travel deals.
          </p>

          {/* Search Form */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-large max-w-5xl mx-auto animate-slide-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Destination */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Where to?
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="City, property, landmark"
                    value={searchData.destination}
                    onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    className="pl-10 h-12 border-border focus:border-primary transition-smooth"
                  />
                </div>
              </div>

              {/* Check-in */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Check-in
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={searchData.checkin}
                    onChange={(e) => setSearchData({...searchData, checkin: e.target.value})}
                    className="pl-10 h-12 border-border focus:border-primary transition-smooth"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Check-out
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={searchData.checkout}
                    onChange={(e) => setSearchData({...searchData, checkout: e.target.value})}
                    className="pl-10 h-12 border-border focus:border-primary transition-smooth"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="2 Adults"
                    value={searchData.guests}
                    onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                    className="pl-10 h-12 border-border focus:border-primary transition-smooth"
                  />
                </div>
              </div>
            </div>

            <Button variant="search" size="lg" className="w-full md:w-auto px-12">
              <Search className="h-5 w-5 mr-2" />
              Search Hotels
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-primary-foreground/90">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light mb-2">50K+</div>
              <div className="text-sm">Hotels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light mb-2">2M+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light mb-2">150+</div>
              <div className="text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light mb-2">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;