import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '../lib/google-analytics';

const useGoogleAnalytics = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return router;
};

export default useGoogleAnalytics;
