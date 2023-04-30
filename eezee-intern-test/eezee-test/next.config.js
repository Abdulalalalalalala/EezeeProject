/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;
