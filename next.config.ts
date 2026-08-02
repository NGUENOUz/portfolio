import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1yei2z3i6k35z.cloudfront.net',
        pathname: '**', // Allow all paths under this hostname
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**', // Allow all paths under this hostname
      },

      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '**', // Autoriser tous les chemins sous ce nom d'hôte
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
