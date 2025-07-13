const fs = require("fs");
const path = require("path");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));



const BASE_URL = "https://relentlessenergy.netlify.app";

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
        "about",
        "about/faq",
        "about/guarantee",
        "about/our-process",
        "about/our-team",
        "about/testimonials",
        "free-quote",
        "solar-incentives",
        "solar-incentives/electricity-savings",
        "solar-incentives/federal-tax-credits",
        "solar-incentives/net-metering",
        "solar-incentives/solar-financing",
        "solutions",
        "solutions/commercial-solar-panels",
        "solutions/home-battery-backup",
        "solutions/residential-solar-panels",
        "solutions/solar-pergola",
        "tesla-solar",
        "tesla-solar/certified-installer",
        "tesla-solar/powerwall",
        "tesla-solar/solar-roof",
    ];

    const staticUrls = staticPages
        .map(page => {
            return `
        <url>
          <loc>${BASE_URL}/${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>`;
        })
        .join("");

    const postUrls = posts
        .map(post => {
            return `
        <url>
          <loc>${BASE_URL}/blog/${post.slug}</loc>
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
    console.log("✅ Sitemap generated!");
}

generateSitemap();
