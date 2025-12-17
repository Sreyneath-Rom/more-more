// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows ALL external hosts (quick dev fix)
      },
    ],
    // OR for production, list specific ones:
    // domains: ['www.shutterstock.com', 'media.istockphoto.com', 'thumbs.dreamstime.com', 'img.freepik.com', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;