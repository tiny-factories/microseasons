const fs = require("fs");
const path = require("path");

// Mock function to fetch your articles - replace this with your actual data fetching logic
async function fetchArticles() {
  // This should return an array of article objects
  return [
    {
      title: "Example Article",
      url: "https://tinyseasons.vercel.app/seasons",
      description: "This is an example article.",
      pubDate: new Date().toUTCString(),
    },
    // Add more articles
  ];
}

async function generateRSS() {
  const articles = await fetchArticles();
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>tiny seasons</title>
  <link>https://tinyseasons.vercel.app</link>
  <description>A brief description of your website.</description>
  <language>en-us</language>
  ${articles
    .map(
      (season) => `
    <item>
      <title>${season.name}</title>
      <link>${season.url}</link>
      <description>${season.description}</description>
    </item>
  `
    )
    .join("")}
</channel>
</rss>`;

  // Write the RSS feed to a public accessible file
  fs.writeFileSync(path.resolve("public", "rss.xml"), feed);
  console.log("RSS feed generated successfully!");
}

generateRSS();
