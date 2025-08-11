import { Button } from "@/components/ui/button";
import { User, Wallet, Bell } from "lucide-react";

const Header = () => {
  const navTabs = [
    { name: "Hotels", active: true },
    { name: "Flights", active: false },
    { name: "Trains", active: false },
    { name: "Buses", active: false },
    { name: "Cabs", active: false },
    { name: "Holidays", active: false },
  ];

  return (
    <header className="bg-background border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              TravelEase
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            {navTabs.map((tab) => (
              <button
                key={tab.name}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  tab.active
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <Wallet className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">₹2,450</span>
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;