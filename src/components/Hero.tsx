
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-cyber-dark py-20">
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#9b87f5,transparent_70%)]"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Why are cyber frauds rising despite secure payment systems?
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
            Exploring the systemic challenges in India's digital payment ecosystem through the lens of systems thinking.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyber-primary hover:bg-cyber-primary/90 text-white">
              <Link to="/cld-analysis">
                Explore Our Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
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
