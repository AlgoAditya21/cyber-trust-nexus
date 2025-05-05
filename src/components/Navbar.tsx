
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { title: "Home", path: "/" },
  { title: "CLD Analysis", path: "/cld-analysis" },
  { title: "Leverage Points", path: "/leverage-points" },
  { title: "System Archetypes", path: "/system-archetypes" },
  { title: "Insights", path: "/insights" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="font-bold text-xl gradient-text">CyberSafeguard</span>
              <span className="text-xs text-cyber-gray">Systems Thinking Hackathon 2025</span>
            </div>
          </Link>
        </div>
        
        <div className="flex md:hidden items-center flex-1">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-lg gradient-text">CyberSafeguard</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center justify-between flex-1 space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link 
                key={item.title}
                to={item.path}
                className={`transition-colors hover:text-cyber-primary ${
                  location.pathname === item.path ? "text-cyber-primary font-semibold" : "text-foreground/70"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Button className="bg-cyber-primary hover:bg-cyber-primary/90 text-white">
              Download Report
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex md:hidden flex-1 justify-end">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.title}
                  to={item.path}
                  className={`text-base transition-colors hover:text-cyber-primary ${
                    location.pathname === item.path ? "text-cyber-primary font-semibold" : "text-foreground/70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button className="bg-cyber-primary hover:bg-cyber-primary/90 text-white w-full mt-2">
                Download Report
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
