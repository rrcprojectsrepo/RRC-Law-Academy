/* Browser smoke test with puppeteer-core (uses installed Microsoft Edge).
   Run with: node scripts/browser-smoke.mjs */
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const BASE = 'http://localhost:5199';
const OUTPUT = 'screenshots';
mkdirSync(OUTPUT, { recursive: true });

const routes = [
  { path: '/', shot: '01-home' },
  { path: '/about', shot: '02-about' },
  { path: '/courses', shot: '03-courses' },
  { path: '/courses/clat-ug', shot: '04-clat-ug' },
  { path: '/courses/ailet-ug', shot: '05-ailet-ug' },
  { path: '/courses/clat-pg', shot: '06-clat-pg' },
  { path: '/courses/ailet-pg', shot: '07-ailet-pg' },
  { path: '/approach', shot: '08-approach' },
  { path: '/faculty', shot: '09-faculty' },
  { path: '/results', shot: '10-results' },
  { path: '/resources', shot: '11-resources' },
  { path: '/faq', shot: '12-faq' },
  { path: '/contact', shot: '13-contact' },
];

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

let failures = 0;

try {
  for (const width of [1366, 390]) {
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });

    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(`[console] ${msg.text().slice(0, 200)}`);
    });
    page.on('pageerror', (err) => errors.push(`[pageerror] ${err.message}`));
    page.on('requestfailed', (req) => errors.push(`[requestfailed] ${req.url()} ${req.failure()?.errorText || ''}`));

    for (const route of routes) {
      const tag = `${width}px ${route.path}`;
      try {
        await page.goto(BASE + route.path, { waitUntil: 'networkidle0', timeout: 20000 });
        await new Promise((r) => setTimeout(r, 600));
        const bodyText = await page.evaluate(() => document.body.innerText.length);
        if (bodyText < 300) {
          failures += 1;
          console.log(`FAIL (thin content): ${tag}`);
          continue;
        }
        const file = `${OUTPUT}/${route.shot}-${width}.png`;
        await page.screenshot({ path: file, fullPage: true });
        console.log(`OK: ${tag} (${bodyText} chars text) shot=${file}`);
      } catch (err) {
        failures += 1;
        console.log(`FAIL (load): ${tag} ${err.message.slice(0, 160)}`);
      }
    }

    if (errors.length > 0) {
      failures += errors.length;
      console.log(`CONSOLE/PAGE ERRORS @ ${width}px:`);
      errors.forEach((e) => console.log('  ' + e));
    } else {
      console.log(`No console/page errors @ ${width}px desktop.`);
    }
    await context.close();
  }
} catch (err) {
  failures += 1;
  console.log('SUITE FAIL:', err.message.slice(0, 300));
} finally {
  await browser.close();
}

console.log(failures > 0 ? `SMOKE RESULT: ${failures} issue(s)` : 'SMOKE RESULT: ALL CLEAN');
process.exit(failures > 0 ? 1 : 0);