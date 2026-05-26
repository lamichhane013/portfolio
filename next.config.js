/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.naps.edu.au",
      },
    ],
  },
};

module.exports = nextConfig;
