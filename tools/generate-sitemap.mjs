import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const configPath = path.join(root, 'seo.config.json');

if (!fs.existsSync(configPath)) {
  throw new Error('Missing seo.config.json');
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const siteUrl = (process.env.SITE_URL || config.siteUrl || '').trim().replace(/\/$/, '');
const routes = Array.isArray(config.routes) ? config.routes : ['/'];

if (!siteUrl || !/^https?:\/\//.test(siteUrl)) {
  throw new Error('Invalid siteUrl. Set seo.config.json.siteUrl or SITE_URL env with absolute URL.');
}

const now = new Date().toISOString();

const urlset = routes
  .map((route) => {
    const loc = `${siteUrl}${route.startsWith('/') ? route : `/${route}`}`;
    const priority = route === '/' ? '1.0' : '0.9';
    const changefreq = route === '/' ? 'daily' : 'weekly';

    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), xml, 'utf8');
process.stdout.write(`sitemap.xml generated for ${siteUrl}\n`);
