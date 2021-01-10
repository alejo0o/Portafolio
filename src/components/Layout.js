import React from 'react';
import Navbar from './Navbar/NavBar';
import Footer from './Footer/Footer';
import HeaderAnimation from './HeaderAnimation/Animation';

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderAnimation />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
