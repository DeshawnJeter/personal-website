import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // public/ doesn't auto-resolve directory index files — map the
      // clean URL to the actual static asset.
      { source: "/framefeast", destination: "/framefeast/index.html" },
    ];
  },
};

export default nextConfig;
