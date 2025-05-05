
import { ReactNode } from "react";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-6 bg-cyber-light/30">
        <div className="container text-center text-sm text-cyber-gray">
          <p>© 2025 CyberSafeguard Team | Systems Thinking Hackathon</p>
          <p className="mt-1">Team Members: Keshav Rajput (2401010222) and others</p>
        </div>
      </footer>
    </div>
  );
}
