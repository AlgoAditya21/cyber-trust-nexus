
import { Layout } from "@/components/Layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Settings } from "lucide-react";

const SystemArchetypes = () => {
  return (
    <Layout>
      <section className="py-10 container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 gradient-text">System Archetypes</h1>
          <p className="text-lg mb-10 text-cyber-gray">
            Identifying common patterns that help explain system behavior and persistence.
          </p>
          
          <div className="space-y-6 mb-8">
            <p>
              System archetypes are recurring patterns that appear across many different types of systems. 
              By identifying these patterns in the digital payment ecosystem, we can better understand why 
              certain problems persist and how to address them effectively.
            </p>
          </div>
          
          <Alert className="bg-cyber-primary/10 border-cyber-primary mb-10">
            <Info className="h-5 w-5 text-cyber-primary" />
            <AlertTitle>Primary System Archetype Identified</AlertTitle>
            <AlertDescription>
              In our analysis, we identified the "Fixes that Fail" archetype as the dominant pattern in 
              India's digital payment security ecosystem.
            </AlertDescription>
          </Alert>
          
          <Card className="mb-10">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Settings className="mr-2 h-5 w-5 text-cyber-primary" />
                "Fixes that Fail" Archetype
              </h2>
              
              <div className="space-y-6">
                <p>
                  In this archetype, short-term solutions to symptoms create unintended consequences that 
                  worsen the underlying problem over time. In the context of digital payment security:
                </p>
                
                <div className="bg-cyber-light rounded-lg p-6">
                  <h3 className="font-medium mb-3">How the Archetype Manifests:</h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <span className="font-medium">Problem:</span> Rising cyber fraud cases
                    </li>
                    <li>
                      <span className="font-medium">Quick Fix:</span> Adding OTPs or limiting transaction amounts
                    </li>
                    <li>
                      <span className="font-medium">Unintended Consequence:</span> Fraudsters adapt and find new attack vectors
                    </li>
                    <li>
                      <span className="font-medium">Long-term Result:</span> Security measures become increasingly complex while fraud continues to evolve
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cyber-light rounded-lg p-6">
                  <h3 className="font-medium mb-3">Examples:</h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      Adding SMS OTPs led to SIM swap fraud and social engineering to obtain OTPs
                    </li>
                    <li>
                      Transaction limits led to multiple smaller fraudulent transactions
                    </li>
                    <li>
                      More complicated verification processes led to user frustration and workarounds that created new vulnerabilities
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <h2 className="text-2xl font-semibold mb-6">Breaking the Archetype</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-medium mb-4">Typical Approaches (Ineffective)</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>Adding more security layers without addressing root causes</li>
                <li>Focusing only on technical solutions without user education</li>
                <li>Responding to each new fraud method individually</li>
                <li>Designing systems for average users, leaving outliers vulnerable</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-cyber-primary">
              <h3 className="text-xl font-medium mb-4 text-cyber-primary">Our Recommendations</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>Address root causes through mandatory digital literacy education</li>
                <li>Create adaptive rather than static security measures</li>
                <li>Design for behavior change, not just compliance</li>
                <li>Build systems that learn from fraud patterns collectively</li>
              </ul>
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">System Structure Interventions</h2>
              <p className="mb-6">
                Based on our analysis of the "Fixes that Fail" archetype in this system, we recommend the 
                following structural interventions:
              </p>
              
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <span className="font-medium">Mandatory digital literacy in app onboarding:</span>{" "}
                  Simple, interactive modules before full account activation
                </li>
                <li>
                  <span className="font-medium">AI-based pattern recognition across the ecosystem:</span>{" "}
                  Share fraud patterns among payment providers in real-time
                </li>
                <li>
                  <span className="font-medium">Specialized cyber courts with fast-track procedures:</span>{" "}
                  Reduce resolution time and create stronger deterrents
                </li>
                <li>
                  <span className="font-medium">Behavioral design in payment apps:</span>{" "}
                  Context-aware warnings and friction at critical decision points
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default SystemArchetypes;
