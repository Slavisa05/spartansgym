import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ne otkrivaj da je sajt na Next.js-u.
  poweredByHeader: false,

  // Gzip radi i Nginx (vidi deploy/nginx.conf), ali neka i Next kompresuje
  // odgovore koje Nginx samo prosleđuje.
  compress: true,

  // Sve slike su lokalne (u /public), pa remotePatterns nije potreban.
  // next/image optimizacija radi bez konfiguracije uz `next start` (Faza 3 deploy).
};

export default nextConfig;
