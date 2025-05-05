
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container py-20">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <p className="text-xl text-cyber-gray mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-cyber-primary hover:bg-cyber-primary/90">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
