import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // show warnings in console but wont break production build
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
