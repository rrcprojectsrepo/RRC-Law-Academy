# RRC Law Academy — Official Website

A production-ready, responsive marketing website for **RRC Law Academy** — a
professional law entrance preparation and legal education academy.

Built as a static frontend with **React + Vite**. The site introduces the RRC Law
Academy brand first, presents the full programme ecosystem (CLAT UG, AILET UG,
CLAT PG, AILET PG), and converts visitors through WhatsApp enquiries.

---

## Tech Stack

- React 18 (JavaScript)
- Vite 5
- React Router 6
- React Icons
- Plain, modern CSS (design tokens + responsive stylesheets)

No backend, database, CMS or authentication — 100% static frontend.

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Production build (output in /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

### Optional automated checks (uses installed Microsoft Edge)

```bash
npm run check:smoke         # loads every route at desktop + mobile, checks console errors
npm run check:layout        # checks horizontal overflow, broken images, H1 counts at 10 widths
npm run check:interactions  # tests nav, dropdown, mobile menu, FAQ, form, filters
```

---

## Project Structure

```
public/
├── favicon.ico / favicon.svg   # favicons
├── robots.txt                  # robots + sitemap placeholder
└── images/                     # SVG illustrations (hero, about, current affairs, OG cover…)

src/
├── assets/logo/rrc-mark.svg    # academy logo mark
├── components/                 # reusable components (Header, Hero, CourseCard, FAQ, EnquiryForm…)
├── data/                       # ALL editable content lives here (see below)
├── pages/                      # one file per route
├── styles/                     # variables.css · global.css · responsive.css
├── utils/                      # whatsapp.js · seo.js · icons.js
├── App.jsx                     # router shell
├── AppRoutes.jsx               # route table
└── main.jsx                    # entry point
```

---

## Content Management — All Content Is Data-Driven

You **never need to edit components to change content**. Each data file is
documented below. Keep the data shape intact and the UI updates automatically.

| What you want to change | File |
| --- | --- |
| Academy name, tagline, hero text, about copy, highlights, "why choose", 6-step approach, vision/mission, contact placeholder details | `src/data/academy.js` |
| Course content — overviews, eligibility, exam pattern, strategy, FAQs for each programme | `src/data/courses.js` |
| Faculty profiles (names, subjects, qualifications, photos) | `src/data/faculty.js` |
| Results & achievements (student name, exam, year, achievement) | `src/data/results.js` |
| Student testimonials | `src/data/testimonials.js` |
| Study resource categories | `src/data/resources.js` |
| Academy-level FAQs | `src/data/faq.js` |

> ⚠️ Nothing in the content is invented. Unconfirmed data ships as clearly marked
> placeholders (`[Faculty Name]`, `[TO BE PROVIDED]`, `Coming Soon`) and should be
> replaced only with official academy information.

### WhatsApp number

Open **`src/utils/whatsapp.js`** and replace:

```js
export const WHATSAPP_NUMBER = 'WHATSAPP_NUMBER_HERE';
```

---

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage (academy-first) |
| `/about` | About RRC Law Academy |
| `/courses` | All Programmes (with UG/PG filtering) |
| `/courses/clat-ug` | CLAT UG programme page |
| `/courses/ailet-ug` | AILET UG programme page |
| `/courses/clat-pg` | CLAT PG programme page |
| `/courses/ailet-pg` | AILET PG programme page |
| `/approach` | Our Learning Approach |
| `/faculty` | Faculty directory with filters |
| `/results` | Results & Achievements |
| `/resources` | Study Resources |
| `/faq` | Frequently Asked Questions |
| `/contact` | Contact + WhatsApp enquiry form |

---

## Adding a New Programme (Scalability)

1. Add a new course object to `src/data/courses.js` (copy an existing entry and
   change all fields, especially `slug`, `name`, `category`, `meta`, and the
   course-specific sections).
2. Add a route in `src/AppRoutes.jsx`:

   ```jsx
   <Route path="/courses/new-course" element={<NewCourse />} />
   ```

3. Create `src/pages/NewCourse.jsx`:

   ```jsx
   import CourseLayout from '../components/CourseLayout/CourseLayout';
   import { getCourse } from '../data/courses';

   export default function NewCourse() {
     return <CourseLayout course={getCourse('new-course')} />;
   }
   ```

The Header dropdown, mobile menu, Courses page, and Footer all update
automatically because they consume `data/courses.js`.

---

## Design System

- Brand tokens (colours, fonts, radii, shadows, spacing) live in
  `src/styles/variables.css`
- `src/styles/global.css` — component styles
- `src/styles/responsive.css` — breakpoints from 1920px down to 375px
- Fonts: Fraunces (display) + Inter (body) via Google Fonts; the site falls
  back to system fonts if offline.

---

## Deployment

Build and host the `dist/` folder as a static site on any host (Netlify,
Vercel, GitHub Pages, VPS, or any static file server):

```bash
npm run build   # outputs production files to /dist
```

Because the site uses `BrowserRouter`, configure your host to **rewrite all
routes to `index.html`** (SPA fallback). For example:

- **Netlify**: create `public/_redirects` with `/* /index.html 200`
- **Vercel**: add a `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`
- **Apache**: add a `.htaccess` file with a `RewriteRule` to `index.html`

After deploying, update the canonical URLs and `robots.txt`.

---

## License

All rights reserved — content and branding belong to RRC Law Academy.
with the official number in international format, **without `+`**:

```js
export const WHATSAPP_NUMBER = '919876543210';
```

Until a real number is set, the site opens WhatsApp with the enquiry text
pre-filled and **never uses a fake number**.

### Contact details (address, phone, email, map)

Edit `ACADEMY.contact` in **`src/data/academy.js`**. When `mapUrl` is provided
(it currently contains `[MAP URL]`), the Contact page will render the embedded
map section.

### Images

- Colour illustrations used on the site are SVGs in **`public/images/`**
  (`hero-illustration.svg`, `about-academy.svg`, `current-affairs.svg`,
  `featured-clat.svg`, `og-cover.svg`). Replace them with real photography
  (recommended formats: **WebP/AVIF**, compressed) keeping the same file names —
  or update the `src` paths in the corresponding components.
- Faculty photos and testimonial avatars are referenced by the `photo` field in
  `src/data/faculty.js` and `src/data/testimonials.js`.
- The logo mark is **`src/assets/logo/rrc-mark.svg`**.

### SEO metadata

- **Global** (title, description, canonical, Open Graph, Twitter card):
  `index.html`
- **Per-page titles/descriptions**: the `meta` object inside each course in
  `src/data/courses.js` and the `usePageMeta(...)` call at the top of each page
  in `src/pages/`.
- Set the real domain in the `canonical` / `og:url` / `og:image` links and in
  `public/robots.txt` before going live.