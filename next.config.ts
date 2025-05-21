import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // opción sencilla
    domains: ['images.unsplash.com'],

    // --- o, si prefieres la forma más flexible ---
    /*
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',   // permite cualquier ruta
      },
    ],
    */
  },
};
export default nextConfig;
