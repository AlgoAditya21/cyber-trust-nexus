
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [keyboardImageLoaded, setKeyboardImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the images to ensure smooth animation
    const backgroundImg = new Image();
    backgroundImg.src = '/cybersecurity-digital-payment.jpg';
    backgroundImg.onload = () => setImageLoaded(true);
    
    const keyboardImg = new Image();
    keyboardImg.src = '/lovable-uploads/70aa2561-24a4-4f97-92c1-de5dda619bf9.png';
    keyboardImg.onload = () => setKeyboardImageLoaded(true);
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
      
      {/* Cyber fraud keyboard image with animation */}
      <div 
        className={`absolute right-0 bottom-0 md:right-10 md:bottom-10 w-full md:w-1/3 max-w-md h-auto z-10 transition-all duration-1000 transform ${
          keyboardImageLoaded ? 'translate-y-0 opacity-30 md:opacity-60' : 'translate-y-20 opacity-0'
        }`}
      >
        <img 
          src="/lovable-uploads/70aa2561-24a4-4f97-92c1-de5dda619bf9.png" 
          alt="Cyber Fraud Keyboard" 
          className="w-full h-auto rounded-lg shadow-2xl animate-pulse" 
          style={{animationDuration: '3s'}}
        />
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyber-dark via-cyber-dark/90 to-cyber-dark/80"></div>
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#9b87f5,transparent_70%)]"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyber-primary/30 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-cyber-accent/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-cyber-primary/30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-cyber-accent/20 animate-pulse" style={{animationDelay: '0.7s'}}></div>
        
        {/* New particles with red theme to match the cyber fraud key */}
        <div className="absolute top-2/4 left-1/5 w-2 h-2 rounded-full bg-red-500/30 animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-red-500/20 animate-pulse" style={{animationDelay: '1.2s'}}></div>
      </div>
      
      <div className="container relative z-20">
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
