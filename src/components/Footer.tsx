import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Smartphone,
  CreditCard
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Investor Relations", "Trust & Safety"]
    },
    {
      title: "Support",
      links: ["Help Center", "Customer Service", "Booking Support", "Contact Us", "Terms of Service"]
    },
    {
      title: "Destinations",
      links: ["Mumbai Hotels", "Delhi Hotels", "Goa Hotels", "Paris Hotels", "London Hotels"]
    },
    {
      title: "Travel Services",
      links: ["Hotel Booking", "Flight Booking", "Car Rentals", "Travel Insurance", "Holiday Packages"]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
              TravelEase
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your trusted travel companion for finding the perfect accommodations worldwide. 
              Book with confidence and create unforgettable memories.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <span>support@travelease.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold text-background mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/80 hover:text-accent transition-smooth text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* App Download & Payment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Mobile Apps */}
          <div>
            <h3 className="font-semibold text-background mb-4 flex items-center">
              <Smartphone className="h-4 w-4 mr-2 text-accent" />
              Download Our App
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="sm" className="border-background/30 text-background hover:bg-accent hover:text-accent-foreground">
                App Store
              </Button>
              <Button variant="outline" size="sm" className="border-background/30 text-background hover:bg-accent hover:text-accent-foreground">
                Google Play
              </Button>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold text-background mb-4 flex items-center">
              <CreditCard className="h-4 w-4 mr-2 text-accent" />
              We Accept
            </h3>
            <div className="flex items-center space-x-3">
              <div className="bg-background/10 px-3 py-1 rounded text-xs">Visa</div>
              <div className="bg-background/10 px-3 py-1 rounded text-xs">Mastercard</div>
              <div className="bg-background/10 px-3 py-1 rounded text-xs">PayPal</div>
              <div className="bg-background/10 px-3 py-1 rounded text-xs">UPI</div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-background mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="bg-background/10 hover:bg-accent p-2 rounded-lg transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
          <div className="mb-4 md:mb-0">
            © 2024 TravelEase. All rights reserved. | Privacy Policy | Terms & Conditions
          </div>
          <div className="flex items-center space-x-4">
            <span>🌟 Rated 4.8/5 by travelers</span>
            <span>🔒 Secure booking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;