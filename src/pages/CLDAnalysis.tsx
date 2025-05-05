
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CLDAnalysis = () => {
  return (
    <Layout>
      <section className="py-10 container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 gradient-text">Causal Loop Diagram Analysis</h1>
          <p className="text-lg mb-10 text-cyber-gray">
            Understanding the interconnected factors in India's digital payment ecosystem.
          </p>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <img 
                src="/lovable-uploads/a914cac1-3906-4cd6-8b56-83bc5e3e8e6f.png" 
                alt="Causal Loop Diagram for Cyber Frauds and Digital Trust in India" 
                className="w-full"
              />
            </div>
            <p className="text-sm text-center text-cyber-gray italic">
              Causal Loop Diagram: Cyber Frauds and Digital Trust in India
            </p>
          </div>
          
          <Card className="mb-10">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Understanding Our CLD</h2>
              <p className="mb-4">
                Our Causal Loop Diagram maps the key relationships between variables in India's digital payment 
                ecosystem. It reveals several important feedback loops that drive system behavior:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <span className="font-medium">R₁: Security Improvement Loop</span> – As cyber fraud cases increase, 
                  user awareness grows, creating pressure to improve security features, which enhances protection against fraud.
                </li>
                <li>
                  <span className="font-medium">R₂: Authentication Strengthening Loop</span> – Response time to fraud drives 
                  pressure to improve security, leading to more robust authentication measures like 2FA.
                </li>
                <li>
                  <span className="font-medium">B₁: Trust Balancing Loop</span> – While digital payment adoption increases 
                  fraud opportunities, improved security can restore trust, creating a balancing effect.
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <h2 className="text-2xl font-semibold mb-6">Key Variables and Definitions</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Variable</TableHead>
                <TableHead>Definition</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Adoption of Digital Payments</TableCell>
                <TableCell>Number of people using UPI or digital modes for transactions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Digital Literacy</TableCell>
                <TableCell>Users' ability to understand and safely use digital platforms</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Cyber Fraud Cases</TableCell>
                <TableCell>Instances of fraud like phishing, fake apps, scams</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Trust in Digital Systems</TableCell>
                <TableCell>Users' confidence in using digital payments</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">User Awareness</TableCell>
                <TableCell>Knowledge about risks and fraud prevention techniques</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">App Security Features</TableCell>
                <TableCell>Security technologies like 2FA, biometric login</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Response Time to Fraud</TableCell>
                <TableCell>How quickly fraud is reported and resolved</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <Separator className="my-12" />
          
          <h2 className="text-2xl font-semibold mb-6">Implications of the CLD</h2>
          <div className="space-y-4">
            <p>
              The CLD reveals that simply adding more security features without addressing digital literacy 
              and user awareness is insufficient. The strongest leverage points appear at the intersection of 
              technical solutions and human behavior.
            </p>
            <p>
              The rapid growth of digital payments creates more opportunities for fraud, which can erode trust. 
              However, effective response mechanisms and user education can create positive reinforcing loops 
              that strengthen the system over time.
            </p>
            <p>
              Importantly, the diagram shows that reactive measures alone (responding to fraud after it occurs) 
              will always lag behind new fraud methods. Proactive approaches focused on digital literacy and 
              real-time fraud detection show more promise as effective interventions.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CLDAnalysis;
