/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["assets.coingecko.com"],
  },
};

module.exports = nextConfig;
