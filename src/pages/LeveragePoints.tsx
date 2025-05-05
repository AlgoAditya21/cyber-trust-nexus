
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LeveragePoints = () => {
  return (
    <Layout>
      <section className="py-10 container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 gradient-text">Leverage Points Analysis</h1>
          <p className="text-lg mb-10 text-cyber-gray">
            Identifying the most impactful intervention points in the system using Donella Meadows' framework.
          </p>
          
          <div className="space-y-6 mb-12">
            <p>
              Leverage points are places within a system where a small shift can lead to big changes. 
              Using Donella Meadows' "Thinking in Systems" framework, we identified key places to intervene 
              in the digital payment ecosystem to reduce fraud and increase trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="transform transition hover:-translate-y-1 hover:shadow-md">
              <CardHeader className="bg-cyber-primary/10 rounded-t-lg">
                <CardTitle>Cybersecurity Awareness Campaigns</CardTitle>
                <CardDescription>Information Flows (#6)</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Why Important</h3>
                    <p>Improves user behavior and reduces scam success</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Expected Impact</h3>
                    <p>Reduced fraud incidents through better user decision-making</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Implementation</h3>
                    <p>
                      Targeted campaigns in banking apps, media, and in-person training sessions 
                      at public institutions, with particular focus on vulnerable populations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition hover:-translate-y-1 hover:shadow-md">
              <CardHeader className="bg-cyber-primary/10 rounded-t-lg">
                <CardTitle>Faster Legal Action on Cyber Crime</CardTitle>
                <CardDescription>Rules of the System (#5)</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Why Important</h3>
                    <p>Deters criminals and improves recovery</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Expected Impact</h3>
                    <p>Increases digital trust and reduces repeat offenders</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Implementation</h3>
                    <p>
                      Specialized cyber courts, simplified reporting procedures, and better 
                      coordination between payment providers and law enforcement agencies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition hover:-translate-y-1 hover:shadow-md">
              <CardHeader className="bg-cyber-primary/10 rounded-t-lg">
                <CardTitle>Mandatory Digital Literacy Training</CardTitle>
                <CardDescription>Education/Structure (#4)</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Why Important</h3>
                    <p>Prepares users to navigate digital risks</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Expected Impact</h3>
                    <p>Long-term fraud prevention through informed user base</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Implementation</h3>
                    <p>
                      Required training modules before UPI activation, digital literacy curricula in schools,
                      and public education campaigns focusing on common fraud patterns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition hover:-translate-y-1 hover:shadow-md">
              <CardHeader className="bg-cyber-primary/10 rounded-t-lg">
                <CardTitle>Real-Time Fraud Detection Systems</CardTitle>
                <CardDescription>Feedback Loops (#10)</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Why Important</h3>
                    <p>Interrupts fraud in action</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Expected Impact</h3>
                    <p>Directly reduces financial loss and builds trust</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyber-gray">Implementation</h3>
                    <p>
                      AI-powered transaction monitoring across payment apps, behavioral analysis, 
                      and coordinated blacklist sharing between financial institutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Event → Pattern → Structure Analysis</h2>
          <Card className="mb-10">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Event</h3>
                  <p className="bg-cyber-light rounded-lg p-4">
                    Users lose money via scams even on secure apps
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Pattern</h3>
                  <p className="bg-cyber-light rounded-lg p-4">
                    Increasing fraud despite growing payment adoption
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Structure</h3>
                  <p className="bg-cyber-light rounded-lg p-4">
                    Low digital literacy, poor awareness, lack of strong legal consequences, slow fraud resolution
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <p>
                  Most current interventions target events (blocking specific fraud numbers) or patterns 
                  (limiting transaction amounts). Our analysis suggests that effective solutions must address 
                  the structural level to create lasting impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default LeveragePoints;
