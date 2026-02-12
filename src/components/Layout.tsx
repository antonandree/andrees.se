import { ReactNode } from 'react';
import Navigation from './Navigation';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-20">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
