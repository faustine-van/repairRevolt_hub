import React from 'react';
//import NavBar from './navbar';
import Header from './Header';
import FooterPage from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="">
      {/*<NavBar />*/}
      <Header />
      <div className="">
        {/* Outlet renders child routes */}
        <Outlet />
      </div>
      <FooterPage />
    </div>
  );
};

export default Layout;
