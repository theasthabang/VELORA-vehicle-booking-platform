import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["velora-app-dhw2.onrender.com"],
    },
  },
};

export default nextConfig;