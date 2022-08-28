/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    GOOGLE_ANALYTICS_ID: 'G-NR07YW30L9',
  },
};

module.exports = nextConfig;
