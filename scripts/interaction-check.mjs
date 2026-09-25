/* Interaction checks — dropdown, mobile menu, FAQ, form, filtering.
   Run with: node scripts/interaction-check.mjs */
import puppeteer from 'puppeteer-core';

const BASE = 'http://localhost:5199';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

let failures = 0;
const report = (label, ok, extra = '') => {
  if (!ok) failures += 1;
  console.log(`${ok ? 'PASS' : 'FAIL'}: ${label} ${extra}`);
};

try {
  const context = await browser.createBrowserContext();
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));
  page.on('console', (m) => {
    if (m.type() === 'error' && !m.text().includes('fonts.googleapis')) errors.push(m.text().slice(0, 150));
  });
  await page.setViewport({ width: 1366, height: 900 });

  // 1) Courses dropdown opens on hover (desktop)
  await page.goto(BASE + '/', { waitUntil: 'networkidle0' });
  await page.hover('.has-dropdown');
  await new Promise((r) => setTimeout(r, 350));
  const dropdownVisible = await page.evaluate(() => {
    const menu = document.querySelector('.has-dropdown .dropdown-menu');
    return getComputedStyle(menu).visibility + '/' + getComputedStyle(menu).opacity;
  });
  report('desktop Courses dropdown opens on hover', dropdownVisible.includes('visible') && !dropdownVisible.includes('0px'), dropdownVisible);

  // 2) Enquire Now nav link navigates
  await page.click('.nav-cta a');
  await new Promise((r) => setTimeout(r, 700));
  report('nav Enquire Now -> /contact', (await page.evaluate(() => location.pathname)) === '/contact');
  await page.click('.logo');
  await new Promise((r) => setTimeout(r, 700));
  report('logo -> /', (await page.evaluate(() => location.pathname)) === '/');

  // 3) Mobile menu opens, courses subgroup expands, link navigates
  await page.setViewport({ width: 390, height: 844 });
  await page.click('.nav-toggle');
  await new Promise((r) => setTimeout(r, 350));
  const menuOpen = await page.$eval('#mobile-menu', (el) => el.classList.contains('open'));
  report('mobile menu opens', menuOpen);
  await page.evaluate(() => {
    const btn = [...document.querySelectorAll('button.mobile-link')].find((b) => b.textContent.includes('Courses'));
    btn.click();
  });
  await new Promise((r) => setTimeout(r, 350));
  const subOpen = await page.$eval('.mobile-subgroup', (el) => el.classList.contains('open'));
  report('mobile Courses subgroup expands', subOpen);
  await page.evaluate(() => document.querySelectorAll('.mobile-dropdown-link')[0].click());
  await new Promise((r) => setTimeout(r, 700));
  report('course link from mobile -> /courses/clat-ug', (await page.evaluate(() => location.pathname)) === '/courses/clat-ug');
  const menuClosed = await page.$eval('#mobile-menu', (el) => !el.classList.contains('open'));
  report('mobile menu auto-closes after navigation', menuClosed);

  // 4) FAQ accordion toggles independently
  await page.goto(BASE + '/faq', { waitUntil: 'networkidle0' });
  const faqBefore = await page.evaluate(() => document.querySelectorAll('.faq-item.open').length);
  await page.evaluate(() => document.querySelectorAll('.faq-q')[1].click());
  await new Promise((r) => setTimeout(r, 350));
  const faqAfter = await page.evaluate(() => document.querySelectorAll('.faq-item.open').length);
  report('FAQ accordion toggles to one open item', faqBefore === 1 && faqAfter === 1, `${faqBefore}->${faqAfter}`);
  await page.evaluate(() => document.querySelectorAll('.faq-q')[1].click());
  await new Promise((r) => setTimeout(r, 350));
  report('FAQ accordion closes on re-click', (await page.evaluate(() => document.querySelectorAll('.faq-item.open').length)) === 0);

  // 5) Enquiry form shows validation errors
  await page.goto(BASE + '/contact', { waitUntil: 'networkidle0' });
  await page.click('.enquiry-card button[type="submit"]');
  await new Promise((r) => setTimeout(r, 350));
  const fieldErrors = await page.evaluate(() => document.querySelectorAll('.field-error').length);
  report('enquiry form shows validation errors on empty submit', fieldErrors >= 3, `${fieldErrors} errors`);

  // 6) Course filtering by level
  await page.goto(BASE + '/courses', { waitUntil: 'networkidle0' });
  const allCards = await page.evaluate(() => document.querySelectorAll('.course-card').length);
  await page.evaluate(() => document.querySelectorAll('.cat-pill')[2].click());
  await new Promise((r) => setTimeout(r, 350));
  const pgCards = await page.evaluate(() => document.querySelectorAll('.course-card').length);
  report('course filter works (All=4 -> PG=2)', allCards === 4 && pgCards === 2, `all=${allCards} pg=${pgCards}`);

  // 7) Course swap navigation
  await page.goto(BASE + '/courses/clat-ug', { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.querySelectorAll('.course-swap a')[1].click());
  await new Promise((r) => setTimeout(r, 700));
  report('course-swap -> /courses/ailet-ug', (await page.evaluate(() => location.pathname)) === '/courses/ailet-ug');

  // 8) WhatsApp float present; enquiry message builder sanity
  const hasFloat = await page.evaluate(() => !!document.querySelector('.whatsapp-float'));
  report('WhatsApp floating button present', hasFloat);

  if (errors.length) {
    failures += errors.length;
    console.log('PAGE ERRORS:', errors.join(' || '));
  } else {
    console.log('No page/console errors during interactions.');
  }
  await context.close();
} catch (err) {
  failures += 1;
  console.log('INTERACTION SUITE FAIL:', err.message.slice(0, 250));
} finally {
  await browser.close();
}

console.log(failures > 0 ? `RESULT: ${failures} issue(s)` : 'RESULT: ALL INTERACTIONS CLEAN');
process.exit(failures > 0 ? 1 : 0);