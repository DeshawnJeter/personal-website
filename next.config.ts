import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev-mode "N" indicator button is dev-only noise on a portfolio site
  // meant to be screenshotted/demoed — never shows in production regardless.
  devIndicators: false,
  async rewrites() {
    return [
      // public/ doesn't auto-resolve directory index files — map the
      // clean URL to the actual static asset.
      { source: "/framefeast", destination: "/framefeast/index.html" },
    ];
  },
};

export default nextConfig;
