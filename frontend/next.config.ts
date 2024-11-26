import type { NextConfig } from "next";
import { Configuration } from 'webpack';
const nextConfig: NextConfig = {
  
  webpack: (config: Configuration) => {
    config.cache = false; // Disable caching
    return config;
  /* config options here */
}
};

// next.config.js
// next.config.ts


export default nextConfig;

