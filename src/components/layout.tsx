import React from 'react';
import GlobalStyle from '@components/global-style';
import Header from '@components/header';
import Footer from '@components/footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
