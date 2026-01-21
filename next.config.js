import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "export", // ✅ STATIC EXPORT (/out)

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn5.f-cdn.com" },
      { protocol: "https", hostname: "cdn3.f-cdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "user-images.githubusercontent.com" },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  poweredByHeader: false,
  compress: true,
};

export default bundleAnalyzer(nextConfig);
