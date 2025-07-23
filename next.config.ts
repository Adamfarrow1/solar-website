/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "relentlessenergy.org",
          },
        ],
        destination: "https://www.relentlessenergy.org/:path*",
        permanent: true,
      },
      {
        source: "/solutions/tesla-solar",
        destination: "/tesla-solar",
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "solar4.wpenginepowered.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    ppr: false,
  },
}

export default nextConfig
