export const pageView = (url: string) => {
  window.gtag('config', process.env.GOOGLE_ANALYTICS_ID as string, {
    path_url: url,
  });
};
