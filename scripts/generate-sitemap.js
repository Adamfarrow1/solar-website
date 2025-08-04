const fs = require("fs");
const path = require("path");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));



const BASE_URL = "https://relentlessenergy.org";

async function getPosts() {
  const allPosts = [];
  let page = 1;
  let totalPages = 1;

  do {
    const res = await fetch(`https://solar4.wpenginepowered.com/wp-json/wp/v2/posts?page=${page}&per_page=100&_embed=true`);
    const data = await res.json();
    const totalPagesHeader = res.headers.get("X-WP-TotalPages");
    totalPages = parseInt(totalPagesHeader || "1", 10);
    allPosts.push(...data);
    page++;
  } while (page <= totalPages);

  return allPosts;
}

async function generateSitemap() {
  const posts = await getPosts();

  const staticPages = [
    "about-us",
    "about-us/faq",
    "about-us/our-guarantee",
    "about-us/our-process",
    "about-us/our-team",
    "about-us/testimonials",
    "about-us/careers",
    "free-solar-quote",
    "solar-power-electricity-savings",
    "solar-power-electricity-savings/solar-power-electricity-savings",
    "solar-power-electricity-savings/solar-federal-tax-credit",
    "solar-power-electricity-savings/net-metering-florida",
    "solar-power-electricity-savings/solar-panel-financing",
    "solutions",
    "solutions/commercial-solar-panel-installation",
    "solutions/home-battery-backup",
    "solutions/home-solar-panel-installation",
    "solutions/solar-pergolas",
    "tesla-certified-solar-installer",
    "tesla-certified-solar-installer/certified-installer",
    "tesla-certified-solar-installer/tesla-powerwall-installation",
    "tesla-certified-solar-installer/solar-roof-installation",
    "pinellas-fl",
    "pinellas-fl/st-petersburg-solar-installer",
    "pinellas-fl/clearwater-solar-installer",
    "pinellas-fl/largo-solar-installer",
    "pinellas-fl/palm-harbour-solar-installer",
    "pinellas-fl/service-areas",
    "pinellas-fl/service-areas/pinellas-county",
    "pinellas-fl/service-areas/st-petersburg",
    "pinellas-fl/service-areas/clearwater",
    "pinellas-fl/service-areas/largo",
    "pinellas-fl/service-areas/palm-harbor",
  ];

  const staticUrls = staticPages
    .map(page => {
      return `
        <url>
          <loc>${BASE_URL}/${page}</loc>
          <lastmod>2025-07-17T00:00:00.000Z</lastmod>
        </url>`;
    })
    .join("");

  const postUrls = posts
    .map(post => {
      return `
        <url>
          <loc>${BASE_URL}/about-us/solar-power-company-blog/${post.slug}</loc>
          <lastmod>${new Date(post.modified).toISOString()}</lastmod>
        </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    ${staticUrls}
    ${postUrls}
  </urlset>`;

  fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap.trim());

}

generateSitemap();
