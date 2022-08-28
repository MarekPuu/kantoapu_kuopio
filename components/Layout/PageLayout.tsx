import React from 'react';
import NavBar from '../nav/NavBar';
import Head from 'next/head';
import GoogleAnalytics from '../google-analytics';
import useGoogleAnalytics from '../../hooks/useGoogleAnalytics';

const PageLayout = ({ children }: any) => {
  useGoogleAnalytics();
  return (
    <>
      <Head>
        <title>Kantoapu Kuopio</title>
      </Head>
      <GoogleAnalytics />
      <NavBar />
      {children}
    </>
  );
};

export default PageLayout;
