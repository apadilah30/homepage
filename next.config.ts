import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
  },
};

export default nextConfig;
