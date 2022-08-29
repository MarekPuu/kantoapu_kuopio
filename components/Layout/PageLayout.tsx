import React from 'react';
import NavBar from '../nav/NavBar';
import GoogleAnalytics from '../google-analytics';
import useGoogleAnalytics from '../../hooks/useGoogleAnalytics';
import Head from './CustomHead';
import Footer from '../Footer/Footer';

const PageLayout = ({ children }: any) => {
  useGoogleAnalytics();
  return (
    <>
      <Head />
      <GoogleAnalytics />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
