/* Layout integrity checks — horizontal overflow, broken images, structure.
   Run with: node scripts/layout-check.mjs */
import puppeteer from 'puppeteer-core';

const BASE = 'http://localhost:5199';
const WIDTHS = [1920, 1440, 1366, 1200, 1024, 768, 600, 430, 390, 375];
const ROUTES = ['/', '/about', '/courses', '/courses/clat-ug', '/courses/ailet-ug', '/courses/clat-pg', '/courses/ailet-pg', '/approach', '/faculty', '/results', '/resources', '/faq', '/contact'];

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

let issues = 0;

try {
  const context = await browser.createBrowserContext();
  const page = await context.newPage();

  for (const width of WIDTHS) {
    await page.setViewport({ width, height: 900 });
    for (const route of ROUTES) {
      await page.goto(BASE + route, { waitUntil: 'networkidle0', timeout: 20000 });
      await new Promise((r) => setTimeout(r, 300));

      const check = await page.evaluate(() => {
        const doc = document.documentElement;
        const overflowX = doc.scrollWidth - window.innerWidth;
        const overflowEls = [];
        if (overflowX > 1) {
          document.querySelectorAll('body *').forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.right > window.innerWidth + 1 || r.left < -1) {
              const tag = el.tagName.toLowerCase();
              const cls = typeof el.className === 'string' ? el.className.slice(0, 40) : '';
              if (!['html', 'body'].includes(tag)) overflowEls.push(`${tag}.${cls}`);
            }
          });
        }
        const brokenImages = [...document.images]
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.getAttribute('src'));
        return {
          overflowX,
          overflowCount: overflowEls.length,
          overflowSamples: overflowEls.slice(0, 4),
          brokenImages,
          hasHeader: Boolean(document.querySelector('header.header')),
          hasFooter: Boolean(document.querySelector('footer.footer')),
          h1Count: document.querySelectorAll('h1').length,
        };
      });

      const tag = `${width}px ${route}`;
      const problems = [];
      if (check.overflowX > 1) problems.push(`h-scroll ${check.overflowX}px (${check.overflowSamples.join(', ')})`);
      if (check.brokenImages.length) problems.push(`broken images: ${check.brokenImages.join(', ')}`);
      if (!check.hasHeader) problems.push('missing header');
      if (!check.hasFooter) problems.push('missing footer');
      if (check.h1Count !== 1) problems.push(`h1 count = ${check.h1Count}`);
      if (problems.length) {
        issues += problems.length;
        console.log(`ISSUE ${tag}: ${problems.join(' | ')}`);
      } else {
        console.log(`OK ${tag}`);
      }
    }
  }
  await context.close();
} catch (err) {
  issues += 1;
  console.log('SUITE FAIL:', err.message.slice(0, 200));
} finally {
  await browser.close();
}

console.log(issues > 0 ? `RESULT: ${issues} issue(s)` : 'RESULT: ALL CLEAN');
process.exit(issues > 0 ? 1 : 0);