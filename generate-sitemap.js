const fs = require('fs');
const path = require('path');

// Define your website's base URL
const BASE_URL = 'https://yourwebsite.com';

// List all your routes
const routes = [
  '/',
  '/about',
  '/contact',
  // Add other routes here
];

// Generate sitemap.xml content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('')}
</urlset>`;

// Write the sitemap.xml to the public folder
fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);

console.log('Sitemap generated!');