/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
  },
};

module.exports = nextConfig;
