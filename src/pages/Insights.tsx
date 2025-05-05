
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

const Insights = () => {
  return (
    <Layout>
      <section className="py-10 container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 gradient-text">Key Insights & Conclusions</h1>
          <p className="text-lg mb-10 text-cyber-gray">
            Our research revealed several important insights about cybersecurity in India's digital payment ecosystem.
          </p>
          
          <Tabs defaultValue="insights" className="mb-10">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="insights">Key Insights</TabsTrigger>
              <TabsTrigger value="conclusions">Conclusions & Recommendations</TabsTrigger>
            </TabsList>
            <TabsContent value="insights" className="pt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Logo Trust vs. System Trust</CardTitle>
                    <CardDescription>Behavioral Insight</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Users tend to trust familiar logos (like UPI or popular payment apps) but don't necessarily 
                      understand the underlying systems. This gap creates opportunities for fraudsters who can mimic 
                      visual elements without replicating security measures.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>UI Literacy Challenges</CardTitle>
                    <CardDescription>User Experience Insight</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Many users cannot distinguish between legitimate and fake apps due to poor UI literacy. 
                      Small differences in design that might be obvious to developers or experienced users are often 
                      missed by average users, especially those new to digital payments.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Behavioral Nudges</CardTitle>
                    <CardDescription>Design Insight</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      There's a significant need for behavioral nudges and contextual warnings within payment apps. 
                      Security is not just about technology but guiding user behavior at critical decision points to 
                      prevent impulsive actions that lead to fraud vulnerability.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Digital Inclusion vs. Security</CardTitle>
                    <CardDescription>System Tension</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      There's an inherent tension between making digital payments accessible to all (including 
                      less tech-savvy populations) and implementing robust security measures that may add complexity. 
                      This tension creates vulnerabilities that are difficult to resolve.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="conclusions" className="pt-6">
              <div className="space-y-6">
                <div className="bg-cyber-light/50 p-6 rounded-lg mb-6">
                  <h2 className="text-xl font-medium mb-4">Systemic Nature of the Problem</h2>
                  <p>
                    Our analysis confirms that cyber fraud in digital payments is fundamentally a systemic issue 
                    rather than just a technical one. The interplay between technology, human behavior, education, 
                    regulation, and enforcement creates complex dynamics that cannot be addressed by isolated interventions.
                  </p>
                </div>
                
                <h2 className="text-xl font-medium mb-4">Recommended Multi-Level Interventions</h2>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <div className="bg-cyber-primary/20 rounded-full p-2 mr-4 mt-1">
                          <ArrowRight className="h-4 w-4 text-cyber-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Individual Level</h3>
                          <p>
                            Mandatory digital literacy training as part of app onboarding, contextual warnings 
                            based on user behavior, and personalized risk profiles.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <div className="bg-cyber-primary/20 rounded-full p-2 mr-4 mt-1">
                          <ArrowRight className="h-4 w-4 text-cyber-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Institutional Level</h3>
                          <p>
                            Cross-platform fraud intelligence sharing, standardized security indicators that are 
                            easily recognizable, and industry-wide coordinated response to emerging threats.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <div className="bg-cyber-primary/20 rounded-full p-2 mr-4 mt-1">
                          <ArrowRight className="h-4 w-4 text-cyber-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Policy Level</h3>
                          <p>
                            Specialized cyber courts with expedited procedures, mandatory security standards for all 
                            payment apps, and integration of digital literacy into formal education curricula.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="mt-8 border-cyber-primary">
                  <CardHeader>
                    <CardTitle>Final Conclusion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      The rise in cyber frauds despite secure payment systems is not a paradox but an expected outcome 
                      of a system where technical solutions have outpaced human adaptation and understanding. By addressing 
                      the system structure – particularly the gaps in digital literacy, behavioral design, and legal frameworks – 
                      we can create an ecosystem where security and growth reinforce rather than undermine each other.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">References</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="list-disc pl-5 space-y-3">
                  <li>NPCI UPI Statistics 2023</li>
                  <li>CERT-IN (Indian Computer Emergency Response Team) Reports</li>
                  <li>RBI Annual Reports on Digital Fraud</li>
                  <li>Donella Meadows – Thinking in Systems</li>
                  <li>Economic Times, Business Standard (Cybercrime trends in India)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
