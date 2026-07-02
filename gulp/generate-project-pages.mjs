// Generates the 12 project case-study pages (src/project-N.html) and the
// homepage Projects section from a single data array. Run: `npm run gen:projects`.
// Edit the `projects` array below, then re-run to regenerate all pages consistently.

import fs from 'node:fs';

const SRC = 'src';

const projects = [
  {
    title: 'Maryline', type: 'Full-stack fashion e-commerce (Next.js + Strapi)', img: 'maryline.jpg',
    desc: [
      'Maryline is a full-stack e-commerce platform for a Ukrainian fashion brand — a Next.js 16 / React 19 storefront backed by a Strapi 5 headless CMS. It ships uk/en internationalization, Nova Poshta delivery integration, Redis caching and a Storybook component library.',
      'The store is live in production at maryline.ua, with GA4 e-commerce analytics, Google Merchant SEO, cookie consent and a fully responsive, animation-rich UI.',
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Strapi', 'Node.js', 'PostgreSQL', 'Redis'],
    live: 'https://maryline.ua', code: '', private: false,
  },
  {
    title: 'Wareflow', type: 'Enterprise Warehouse Management System', img: 'wareflow.jpg',
    desc: [
      'Wareflow is a production-grade enterprise WMS covering inventory, logistics and multi-company warehouse operations. It spans a Laravel / PostgreSQL backend, a Next.js web SPA and a dedicated mobile terminal app (Wareflow Mobile) for barcode scanning on the warehouse floor.',
      'It features a 3D warehouse map, real-time updates and role-based access. As a commercial product it runs behind authentication for client companies — you can explore what it does on the product site.',
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Laravel', 'PHP', 'PostgreSQL', 'Redis', 'Three.js', 'Ionic'],
    live: '', code: '', landing: 'https://www.wareflow.ai/en/', private: true,
  },
  {
    title: 'Wareflow Mobile', type: 'Warehouse terminal app — companion to Wareflow', img: 'wareflow-mobile.svg',
    desc: [
      'Wareflow Mobile is the on-floor terminal app for the Wareflow WMS. This cross-platform (iOS + Android) app turns a phone or handheld device into a warehouse scanner for receiving, picking, inventory counts and stock movements, syncing in real time with the Wareflow backend.',
      'Built with Ionic and Capacitor, it pairs with the Wareflow platform — explore it on the product site.',
    ],
    tools: ['Ionic', 'Capacitor', 'TypeScript', 'Vite', 'TanStack Router', 'react-intl'],
    live: '', code: '', landing: 'https://www.wareflow.ai/en/', private: true,
  },
  {
    title: 'Consolid Pro', type: 'Freight transportation management platform', img: 'consolid.jpg',
    desc: [
      'Consolid Pro is a digital platform for freight transportation management. It streamlines how logistics operators organize shipments and find new clients, helping them raise the profitability of their transportation operations.',
      'The interface is a Next.js 16 single-page application backed by a Laravel API, with full uk/en internationalization and JWT authentication. It is a commercial, private product deployed behind login — a guided walkthrough is available on request.',
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Three.js', 'Docker'],
    live: '', code: '', landing: 'https://consolid.ai/', private: true,
  },
  {
    title: 'Consolid Tracker', type: 'Driver GPS app — companion to Consolid Pro', img: 'tracker.svg',
    desc: [
      'Consolid Tracker is the companion driver app for the Consolid Pro platform. This cross-platform (iOS + Android) app reports a driver\'s live GPS location to the Consolid backend whenever a route status changes, enabling real-time freight monitoring. It uses foreground and background location, an OTP auth flow, push notifications and OTA updates.',
      'Built with React Native and Expo and distributed to drivers via EAS. It pairs with Consolid Pro — explore the platform on the product site.',
    ],
    tools: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Zustand', 'Reanimated'],
    live: '', code: '', landing: 'https://consolid.ai/', private: true,
  },
  {
    title: 'The Glass Huts', type: 'Multilingual retreat landing site', img: 'glass-huts.jpg',
    desc: [
      'The Glass Huts is a multilingual marketing site for a boutique retreat of luxury glass cabins near the Mariager fjord in Denmark. It spans home, the hut, the area, booking, FAQ and legal pages, with a dependency-free i18n engine supporting four languages.',
      'Built on a Gulp + Dart Sass pipeline with SCSS, HTML partials, WebP generation and font conversion, deployed via GitHub Pages.',
    ],
    tools: ['HTML5', 'SCSS', 'JavaScript', 'Gulp', 'BrowserSync', 'WebP'],
    live: 'https://pavloseniv.github.io/The-Glass-Huts/The-Glass-Huts/index.html',
    code: 'https://github.com/PavloSeniv/The-Glass-Huts', private: false,
  },
  {
    title: 'Go Surf', type: 'Responsive surf landing page', img: 'go-surf.jpg',
    desc: [
      'Go Surf is a dark-themed, responsive surf landing site with an animated coastline map, synced spot markers and multiple Swiper carousels (conditions, spots, flights, resorts, surfboards). It is assembled from HTML partials and styled with SCSS / BEM.',
      'The custom Gulp pipeline handles SCSS, automatic WebP with picture fallbacks, image optimization, fonts and SVG sprites.',
    ],
    tools: ['HTML5', 'SCSS', 'JavaScript', 'Gulp', 'Swiper', 'AOS', 'WebP'],
    live: 'https://pavloseniv.github.io/go-surf/go-surf/index.html',
    code: 'https://github.com/PavloSeniv/go-surf', private: false,
  },
  {
    title: 'Streeetster', type: 'Bicycle shop e-commerce site', img: 'streeetster.jpg',
    desc: [
      'Streeetster is an e-commerce website for a bicycle shop with categories for city, home, offroad, road and street series bikes. The homepage highlights key models with promotional banners, while category pages help customers compare options.',
      'It includes contact information, a newsletter signup and social links, built with a Gulp + SCSS workflow.',
    ],
    tools: ['HTML5', 'CSS', 'JavaScript', 'Gulp', 'Git'],
    live: 'https://pavloseniv.github.io/Frontend_Project/Project_Bicycle_Shop/',
    code: 'https://github.com/PavloSeniv/Frontend_Project', private: false,
  },
  {
    title: 'GoTrip', type: 'Multi-page travel agency website', img: 'go-trip.jpg',
    desc: [
      'GoTrip is a 10-page travel-agency website (home, services, pricing, contact, auth flows, help, legal) built from a Figma design. It features a reusable component library, a green-and-coral design token system, fluid responsive layouts and client-side form validation.',
      'Accessibility is baked in — semantic HTML, ARIA, focus states and reduced-motion support.',
    ],
    tools: ['SCSS', 'JavaScript', 'Gulp', 'Webpack', 'Swiper', 'AOS'],
    live: '', code: 'https://github.com/PavloSeniv/go-trip', private: false,
  },
  {
    title: 'Alivio', type: 'Wellness journaling landing page', img: 'alivio.jpg',
    desc: [
      'Alivio is a multi-page landing site for a stress-management journaling app, hand-coded from a Figma design. It guides users from a personalization survey into reflection exercises tailored to specific stressors like anxiety, anger or sadness.',
      'Built with HTML, CSS and Bootstrap 5, deployed via GitHub Pages.',
    ],
    tools: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Figma'],
    live: 'https://pavloseniv.github.io/ProjectFigma/Alivio/',
    code: 'https://github.com/PavloSeniv/ProjectFigma', private: false,
  },
  {
    title: 'Barber', type: 'Barbershop landing page', img: 'barber.jpg',
    desc: [
      'Barber is a single-page landing site for a barbershop, hand-coded from a Figma layout with a focus on converting design into clean, responsive markup.',
      'Built with HTML, CSS and Bootstrap 5, deployed via GitHub Pages.',
    ],
    tools: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Figma'],
    live: 'https://pavloseniv.github.io/ProjectFigma/Barber/',
    code: 'https://github.com/PavloSeniv/ProjectFigma', private: false,
  },
  {
    title: 'Video Compressor', type: 'Full-stack video processing app', img: 'video.svg',
    desc: [
      'A full-stack Next.js app for compressing and transcoding video. Users upload directly to AWS S3 via presigned URLs, then the server processes files with FFmpeg using selectable profiles (universal, desktop, mobile MP4 or HLS), streaming live progress over server-sent events.',
      'Finished videos download as MP4 or play in-browser via an HLS.js player. It is a private / internal tool, available for a walkthrough on request.',
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS S3', 'FFmpeg', 'HLS.js'],
    live: '', code: '', private: true,
  },
];

const IMG = 'assets/images/components/row-item';
const REL = 'target="_blank" rel="noopener noreferrer"';

const RASTER_EXT = /\.(jpe?g|png)$/i;
const isRaster = (f) => RASTER_EXT.test(f);
const webpOf = (f) => f.replace(RASTER_EXT, '.webp');
const SIZES = '(max-width: 900px) 92vw, 45vw';

// <picture> + webp for rasters; plain <img> for SVG placeholders.
// responsive=true adds a 640w srcset candidate (built by sharp) for thumbnails.
// (picture is display:contents in CSS, so image classes/positioning are unaffected.)
function media(file, alt, cls, responsive = false) {
  if (!isRaster(file)) {
    return `<img src="${IMG}/${file}" alt="${alt}" class="${cls}" loading="lazy"/>`;
  }
  const webp = webpOf(file);
  if (!responsive) {
    return `<picture><source type="image/webp" srcset="${IMG}/${webp}"><img src="${IMG}/${file}" alt="${alt}" class="${cls}" loading="lazy"/></picture>`;
  }
  const ext = file.match(RASTER_EXT)[0];
  const base = file.replace(RASTER_EXT, '');
  return `<picture>
                        <source type="image/webp" srcset="${IMG}/${base}-640.webp 640w, ${IMG}/${webp} 1280w" sizes="${SIZES}">
                        <img src="${IMG}/${file}" srcset="${IMG}/${base}-640${ext} 640w, ${IMG}/${file} 1280w" sizes="${SIZES}" alt="${alt}" class="${cls}" loading="lazy"/>
                      </picture>`;
}

// ---- index.html projects rows ----
const rows = projects.map((p, i) => {
  const n = i + 1;
  return `            <div class="projects__row" data-aos="fade-up">
                <a href="./project-${n}.html" class="projects__row-img-cont">
                    ${media('project-mockup-example.jpeg', '', 'projects__row-img')}
                    <div class="projects__row-img-screen">
                        ${media(p.img, p.title + ' screenshot', 'projects__row-img-project', true)}
                    </div>
                </a>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">${p.title}</h3>
                    <p class="projects__row-content-desc">${p.type}</p>
                    <a href="./project-${n}.html" class="btn btn--med btn--theme">Case Study</a>
                </div>
            </div>`;
}).join('\n\n');

// Splice the generated rows into src/index.html's projects section
let indexHtml = fs.readFileSync('src/index.html', 'utf8');
const ROWS_RE = /(<div class="projects__content">\n)[\s\S]*?(\n        <\/div>)/;
if (!ROWS_RE.test(indexHtml)) throw new Error('projects__content marker not found in src/index.html');
indexHtml = indexHtml.replace(ROWS_RE, `$1\n${rows}\n$2`);
fs.writeFileSync('src/index.html', indexHtml);

// ---- detail pages ----
projects.forEach((p, i) => {
  const n = i + 1;

  const heroCta = p.private
    ? (p.landing
        ? `            <a href="${p.landing}" class="btn btn--bg" ${REL}>Visit Site</a>`
        : `            <span class="project-cs-hero__badge">Commercial &middot; Private</span>`)
    : `            <a href="${p.live || p.code}" class="btn btn--bg" ${REL}>${p.live ? 'Live Link' : 'View Code'}</a>`;

  const descParas = p.desc.map((d) => `                <p class="project-details__desc-para">${d}</p>`).join('\n');
  const toolChips = p.tools.map((t) => `                    <div class="skills__skill">${t}</div>`).join('\n');

  let linksBlock;
  if (p.private) {
    const note = p.landing
      ? 'This is a commercial product and the app runs behind login, so there is no public repository. You can explore what it does on the product site, or request a guided demo.'
      : 'This is a private / internal project, so there is no public repository or open demo. A guided walkthrough is available on request.';
    const visitBtn = p.landing
      ? `                <a href="${p.landing}" class="btn btn--med btn--theme project-details__links-btn" ${REL}>Visit Site</a>\n`
      : '';
    linksBlock = `            <div class="project-details__links">
                <h2 class="project-details__content-title">Availability</h2>
                <p class="project-details__desc-para">${note}</p>
${visitBtn}                <a href="index.html#contact" class="btn btn--med btn--theme-inv project-details__links-btn">Request a demo</a>
            </div>`;
  } else {
    const btns = [];
    if (p.live) btns.push(`                <a href="${p.live}" class="btn btn--med btn--theme project-details__links-btn" ${REL}>Live Link</a>`);
    if (p.code) btns.push(`                <a href="${p.code}" class="btn btn--med btn--theme-inv project-details__links-btn" ${REL}>Code Link</a>`);
    linksBlock = `            <div class="project-details__links">
                <h2 class="project-details__content-title">See Live</h2>
${btns.join('\n')}
            </div>`;
  }

  const html = `<!doctype html>
<html lang="en">

@@include('html/head.html',{
"title": "${p.title} — Pavlo Seniv",
"desc": "${p.type}",
})

<body>

@@include('html/_header.html', {
'page': 'project'
})

<section class="project-cs-hero">
    <div class="project-cs-hero__content">
        <h1 class="heading-primary">${p.title}</h1>
        <div class="project-cs-hero__info">
            <p class="text-primary">${p.type}</p>
        </div>
        <div class="project-cs-hero__cta">
${heroCta}
        </div>
    </div>
</section>

<section class="project-details">
    <div class="main-container">
        <div class="project-details__content">
            <div class="project-details__showcase-img-cont">
                ${media('project-mockup-example.jpeg', '', 'project-details__showcase-img')}
                ${media(p.img, p.title + ' screenshot', 'project-details__showcase-img-project', true)}
            </div>

            <div class="project-details__content-main">
                <div class="project-details__desc">
                    <h2 class="project-details__content-title">Project Overview</h2>
${descParas}
                </div>
                <div class="project-details__tools-used">
                    <h2 class="project-details__content-title">Tools Used</h2>
                    <div class="skills">
${toolChips}
                    </div>
                </div>
${linksBlock}
            </div>
        </div>
    </div>
</section>

@@include('html/_footer.html')

@@include('html/scripts.html')

</body>
</html>
`;

  fs.writeFileSync(`${SRC}/project-${n}.html`, html);
  console.log(`wrote project-${n}.html  (${p.title}${p.private ? ' · private' : ''})`);
});

console.log('index.html projects section updated');
console.log('total projects:', projects.length);
