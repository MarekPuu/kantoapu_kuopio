import React from 'react';
import NavBar from '../nav/NavBar';
import Head from 'next/head';

const PageLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Kantoapu Kuopio</title>
      </Head>
      <NavBar />
      {children}
    </>
  );
};

export default PageLayout;
