
import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <section className="py-16 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Systems Thinking Approach to Cybersecurity</h2>
          <p className="text-lg max-w-3xl mx-auto text-cyber-gray">
            Our team examines why cyber frauds continue to rise despite the expansion of secure digital payment systems like UPI in India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="transform transition hover:-translate-y-1 hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5 text-cyber-primary" />
                Problem Domain
              </CardTitle>
              <CardDescription>Digital Payments & Cybersecurity</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                India has seen exponential growth in digital payments with UPI, yet this growth has been 
                accompanied by a rise in cyber frauds like phishing, fake apps, and social engineering scams.
              </p>
              <div className="mt-4">
                <Button asChild variant="link" className="p-0 h-auto text-cyber-primary">
                  <Link to="/cld-analysis" className="flex items-center">
                    Explore the System
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transform transition hover:-translate-y-1 hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-cyber-primary" />
                Our Process
              </CardTitle>
              <CardDescription>Systems Thinking Methodology</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We conducted secondary research on UPI trends, mapped variables into a Causal Loop Diagram (CLD),
                identified feedback loops and leverage points, and designed potential interventions.
              </p>
              <div className="mt-4">
                <Button asChild variant="link" className="p-0 h-auto text-cyber-primary">
                  <Link to="/leverage-points" className="flex items-center">
                    View Our Findings
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transform transition hover:-translate-y-1 hover:shadow-md md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-cyber-primary" />
                Key Insights
              </CardTitle>
              <CardDescription>What We Discovered</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                People trust logos (like UPI) but not systems. Many users don't distinguish between real and 
                fake apps due to poor UI literacy. There's a growing need for behavioral nudges and warnings.
              </p>
              <div className="mt-4">
                <Button asChild variant="link" className="p-0 h-auto text-cyber-primary">
                  <Link to="/insights" className="flex items-center">
                    Read Our Insights
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="py-16 bg-cyber-light/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Team CyberSafeguard</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-medium mb-4">Team Members</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Keshav Rajput</span> – 2401010222</li>
                <li>[Other team members]</li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Problem Statement</h3>
                <p className="text-lg italic text-cyber-dark font-medium">
                  "Why are cyber frauds on the rise despite the rapid expansion of secure digital payment systems like UPI in India?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
