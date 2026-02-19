import { ReactNode } from "react";
import Navigation from "./Navigation";
import AnimatedBackground from "./AnimatedBackground";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />

        <main className="pt-20 flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
