import React from 'react';
import Topbar from './Topbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div style={{ display: 'flex' }}>
        <main style={{ flex: 1, padding: '20px' }}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
