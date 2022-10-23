import React from 'react';
import NavBar from '../nav/NavBar';
import GoogleAnalytics from '../google-analytics';
import useGoogleAnalytics from '../../hooks/useGoogleAnalytics';
import Head from './CustomHead';
import Footer from '../Footer/Footer';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import SopimusehdotFI from '../Modal/Sopimusehdot';

Modal.setAppElement('#__next');

const PageLayout = ({ children }: any) => {
  const router = useRouter();

  useGoogleAnalytics();
  return (
    <>
      <Head />
      <GoogleAnalytics />
      <NavBar />
      {children}
      <Footer />
      <Modal
        style={{
          overlay: {
            zIndex: 100000,
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '0',
            width: '90%',
            maxWidth: '800px',
            height: '90%',
          },
        }}
        isOpen={router.query.modal === 'sopimusehdot'}
        contentElement={(props, children) => <div {...props}>{children}</div>}
      >
        <SopimusehdotFI />
      </Modal>
    </>
  );
};

export default PageLayout;
