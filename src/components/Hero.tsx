
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the image to ensure smooth animation
    const img = new Image();
    img.src = '/cybersecurity-digital-payment.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-cyber-dark py-20 min-h-[500px] flex items-center">
      {/* Background image with overlay and animation */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ${imageLoaded ? 'opacity-20' : 'opacity-0'}`} 
        style={{ 
          backgroundImage: "url('/cybersecurity-digital-payment.jpg')", 
          backgroundBlendMode: "overlay" 
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyber-dark via-cyber-dark/90 to-cyber-dark/80"></div>
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#9b87f5,transparent_70%)]"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyber-primary/30 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-cyber-accent/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-cyber-primary/30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-cyber-accent/20 animate-pulse" style={{animationDelay: '0.7s'}}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Why are cyber frauds rising despite secure payment systems?
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
            Exploring the systemic challenges in India's digital payment ecosystem through the lens of systems thinking.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyber-primary hover:bg-cyber-primary/90 text-white transform transition hover:scale-105">
              <Link to="/cld-analysis">
                Explore Our Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 transform transition hover:scale-105">
              <Link to="/leverage-points">
                View Leverage Points
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
