import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CustomHead = () => {
  const router = useRouter();

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const path =
    router.pathname === '/'
      ? 'Kantoapu Kuopio'
      : `Kantoapu Kuopio | ${capitalizeFirstLetter(
          router.pathname.replace('/', '')
        )}`;

  return (
    <Head>
      <title>{path}</title>
    </Head>
  );
};

export default CustomHead;
