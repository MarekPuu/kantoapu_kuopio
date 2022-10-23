import '../styles/main.scss';
import type { AppProps } from 'next/app';
import PageLayout from '../components/Layout/PageLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
      <ToastContainer />
    </PageLayout>
  );
}

export default MyApp;
