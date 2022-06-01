/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr'
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['assets.coingecko.com']
  }
}

module.exports = nextConfig
