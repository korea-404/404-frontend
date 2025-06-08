import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  noNavbar?: boolean; // 필요 시 Navbar 제거 옵션
}

const Layout: React.FC<LayoutProps> = ({ children, noNavbar = false }) => {
  return (
    <>
      {!noNavbar && <Navbar />}
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
