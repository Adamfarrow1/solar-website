import { getPosts } from "@/lib/wordpress";

export default async function handler(req, res) {
  const baseUrl = "https://relentlessenergy.netlify.app";
  //TODO add other paths after adding new pages
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
    "",
  ];

  const staticUrls = staticPages
    .map((page) => {
      return `
        <url>
          <loc>${baseUrl}/${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>`;
    })
    .join("");

  let allPosts = [];
  let page = 1;
  let totalPages = 1;

  do {
    const response = await getPosts(page, 100);
    allPosts = allPosts.concat(response.data);
    totalPages = response.totalPages;
    page++;
  } while (page <= totalPages);

  const urls = allPosts
    .map((post) => {
      return `
        <url>
          <loc>${baseUrl}/blog/${post.slug}</loc>
          <lastmod>${new Date(post.modified).toISOString()}</lastmod>
        </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${staticUrls}
      ${urls}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
