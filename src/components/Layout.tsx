import React, { ReactNode } from 'react';
import Header from 'src/components/Header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <Header />
      </header>
      {children}
    </div>
  );
}

export default Layout;
