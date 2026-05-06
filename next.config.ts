import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* OVO SE BRISE KADA BUDE IMAO SVOJ DOMEN */
  basePath: '/gym',
  async redirects() {
    return []
  },
};

export default nextConfig;
