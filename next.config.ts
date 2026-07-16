import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/krai-aistov",
  assetPrefix: "/krai-aistov",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

