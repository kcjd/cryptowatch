/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr'
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
