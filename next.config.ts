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
      // SEO redirects for updated solution URLs
      {
        source: "/solutions",
        destination: "/solutions/solar-power-systems",
        permanent: true,
      },
      {
        source: "/solutions/residential-solar-panels",
        destination: "/solutions/home-solar-panel-installation",
        permanent: true,
      },
      {
        source: "/solutions/commercial-solar-panels",
        destination: "/solutions/commercial-solar-panel-installation",
        permanent: true,
      },
      {
        source: "/solutions/solar-pergola",
        destination: "/solutions/solar-pergolas",
        permanent: true,
      },
      // SEO redirects for updated Tesla Solar URLs
      {
        source: "/tesla-solar",
        destination: "/tesla-certified-solar-installer",
        permanent: true,
      },
      {
        source: "/tesla-solar/certified-installer",
        destination: "/tesla-certified-solar-installer/certified-installer",
        permanent: true,
      },
      {
        source: "/tesla-solar/solar-roof",
        destination: "/tesla-certified-solar-installer/solar-roof-installation",
        permanent: true,
      },
      {
        source: "/tesla-solar/powerwall",
        destination: "/tesla-certified-solar-installer/tesla-powerwall-installation",
        permanent: true,
      },
      // SEO redirects for updated Solar Incentives URLs
      {
        source: "/solar-incentives",
        destination: "/solar-power-electricity-savings",
        permanent: true,
      },
      {
        source: "/solar-incentives/electricity-savings",
        destination: "/solar-power-electricity-savings/solar-power-electricity-savings",
        permanent: true,
      },
      {
        source: "/solar-incentives/federal-tax-credits",
        destination: "/solar-power-electricity-savings/solar-federal-tax-credit",
        permanent: true,
      },
      {
        source: "/solar-incentives/net-metering",
        destination: "/solar-power-electricity-savings/net-metering-florida",
        permanent: true,
      },
      {
        source: "/solar-incentives/solar-financing",
        destination: "/solar-power-electricity-savings/solar-panel-financing",
        permanent: true,
      },
      // SEO redirects for updated About URLs
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/about/our-team",
        destination: "/about-us/our-team",
        permanent: true,
      },
      {
        source: "/about/our-process",
        destination: "/about-us/our-process",
        permanent: true,
      },
      {
        source: "/about/guarantee",
        destination: "/about-us/our-guarantee",
        permanent: true,
      },
      {
        source: "/about/testimonials",
        destination: "/about-us/testimonials",
        permanent: true,
      },
      {
        source: "/about/careers",
        destination: "/about-us/careers",
        permanent: true,
      },
      {
        source: "/about/faq",
        destination: "/about-us/faq",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/about-us/solar-power-company-blog",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/about-us/solar-power-company-blog/:slug*",
        permanent: true,
      },
      // SEO redirects for Service Areas to new Pinellas FL structure
      {
        source: "/service-area",
        destination: "/pinellas-fl",
        permanent: true,
      },
      {
        source: "/service-area/pinellas-county",
        destination: "/pinellas-fl",
        permanent: true,
      },
      {
        source: "/service-area/st-petersburg",
        destination: "/pinellas-fl/st-petersburg-solar-installer",
        permanent: true,
      },
      {
        source: "/service-area/clearwater",
        destination: "/pinellas-fl/clearwater-solar-installer",
        permanent: true,
      },
      {
        source: "/service-area/largo",
        destination: "/pinellas-fl/largo-solar-installer",
        permanent: true,
      },
      {
        source: "/service-area/palm-harbor",
        destination: "/pinellas-fl/palm-harbour-solar-installer",
        permanent: true,
      },
      // SEO redirect for updated free-quote URL
      {
        source: "/free-quote",
        destination: "/free-solar-quote",
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
