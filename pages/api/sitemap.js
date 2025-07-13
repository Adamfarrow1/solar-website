import { getPosts } from "@/lib/wordpress";

export default async function handler(req, res) {
  const baseUrl = "https://relentlessenergy.netlify.app";

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
      ${urls}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
