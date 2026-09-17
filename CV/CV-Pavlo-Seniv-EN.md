# PAVLO SENIV
## Middle Frontend Engineer — React / React Native / Next.js

Ivano-Frankivsk, Ukraine (EET) · Remote · +380 68 185 95 41 · senivpavlo16it@gmail.com
[linkedin.com/in/pavlo-seniv](https://www.linkedin.com/in/pavlo-seniv) · [github.com/PavloSeniv](https://github.com/PavloSeniv) · [pavloseniv.github.io/portfolio](https://pavloseniv.github.io/portfolio/portfolio/index.html)

---

Frontend engineer with 4+ years in web development (since 2021), shipping web and mobile products end-to-end. Core frontend engineer of an enterprise warehouse management system — **single-handedly rebuilt its entire frontend on Next.js 16 / React 19 (75 pages, ~65K LOC) and shipped it to production in under a month**; **sole developer** of a cross-platform GPS tracking app for a logistics company's drivers; **full ownership** of a production e-commerce store — storefront, Strapi backend, payments, infrastructure. Comfortable beyond the frontend: Node/Strapi backends, payment and logistics integrations, and production operations on Vercel and DigitalOcean.

---

## EXPERIENCE

### Frontend Developer — SK Group EU
**Dec 2022 – Present**
Products: Wareflow WMS ([app.wareflow.ai](https://app.wareflow.ai)) · Consolid ([consolid.ai](https://consolid.ai)) · Maryline ([maryline.ua](https://maryline.ua))

#### Wareflow — enterprise warehouse management system (Dec 2022 – Present)
Multi-tenant WMS for inventory, logistics, and warehouse operations, used daily by warehouse teams at multiple companies; built by a team of up to 10 engineers on Laravel 12, PostgreSQL, Redis, and React/Next.js.

- **Single-handedly rebuilt the platform's entire frontend** as an SPA on Next.js 16 (App Router), React 19, and strict TypeScript — 75 pages across 23 business modules — and shipped it to production via CI in under a month, replacing a ~305K-line legacy UI with a ~65K-LOC codebase (−80% code)
- **Designed the new SPA's core:** JWT auth with single-flight token refresh, a reusable backend-driven table framework (TanStack Query/Table), and EN/UK localization on next-intl
- **Ran a documented security/performance audit:** CSP and security headers, removal of a spoofable auth header in the proxy, a forced-logout flow; built a custom Playwright e2e audit harness that walks real CRUD flows and records every 4xx/5xx response and console error
- **Before the SPA rebuild** — primary author of the React codebase during the modernization of the legacy jQuery/Blade UI into React 18 + TypeScript bundles; built the interactive Three.js 2D/3D warehouse map (~10K LOC) and later ported it to the new SPA
- **Co-develop the mobile warehouse terminal** as one of two core engineers (React 19, Ionic 8, Capacitor 7 — 43 routes, 149 test files): hardware barcode scanning as the primary input method, OTA releases via Capgo with RSA-signed bundles
- **Own the frontend toolchain and process end-to-end** (ESLint 9, Husky, Conventional Commits, automated release versioning in CI); day-to-day teamwork — code reviews and API-contract alignment with the backend engineers; regularly ship targeted business-logic fixes to the Laravel backend (multi-tenancy scoping, unit-of-measure calculations)

#### Consolid Tracker — GPS tracking app for a logistics company's drivers (Apr 2024 – Apr 2026)
Cross-platform iOS/Android app used by the drivers of the company's fleet: Expo SDK 54, React Native 0.81, React 19, TypeScript.

- **Effectively the sole developer from MVP through production** over 2 years
- **Engineered an offline-first background geolocation pipeline:** GPS sampling every 60 s, AsyncStorage buffering through connectivity loss, timestamp deduplication, batched flush on reconnect
- **Integrated Google Routes API v2** (traffic-aware ETA) and custom Haversine geofencing; navigation deep links to Google Maps, Apple Maps, and Waze
- **Owned the full release pipeline on EAS** with OTA update channels and React Native New Architecture; a custom Expo config plugin cut APK size by ~15–20 MB
- **Implemented** secure token storage (expo-secure-store), FCM push notifications, and EN/UK/PL localization; migrated state from React Context to typed Zustand stores, rebuilt the UI on NativeWind 4

#### Maryline — production e-commerce, maryline.ua (Oct 2024 – Present)
Fashion-brand online store processing live customer orders; full ownership — storefront, CMS backend, integrations, and infrastructure.

- **Built the storefront** on Next.js 16 App Router, React 19, and TypeScript: 18 pages, a BFF layer of API route handlers, ~22.5K LOC
- **Designed and maintain the Strapi 5 backend** (30 content types): catalog with per-store stock, orders, promo codes, and integration webhooks
- **Integrated Monobank acquiring end-to-end:** invoice creation with an itemized basket, redirect flow, and webhook payment confirmation syncing status to KeyCRM
- **Implemented real-time stock synchronization:** KeyCRM webhook → Strapi REST-cache invalidation → targeted Next.js cache revalidation, replacing interval-based refresh
- **Automated delivery and CRM:** Nova Poshta waybill (TTN) generation (address and branch delivery) and KeyCRM order sync with schedule-based manager auto-assignment
- **Deployed and now operate the infrastructure:** storefront on Vercel, Strapi on DigitalOcean (SSL-secured PostgreSQL, Spaces media storage, automated backups with rotation), Redis response caching; SEO and analytics — JSON-LD for Google Merchant, dynamic sitemap/robots, GA4 e-commerce events

#### Internal tools (selected)
- **Built an FFmpeg video-compression web tool** (Next.js 16): real-time progress over Server-Sent Events, direct-to-S3 uploads via presigned URLs, HLS packaging with a streaming proxy
- Also: deployed and hardened a self-hosted **Vaultwarden** (Docker, Nginx TLS, automated backups); developed the admin UI and cron runner of a **PHP KeyCRM → Strapi sync service**

---

## PERSONAL PROJECTS (2021 – Present)

- **The Glass Huts** — 10-page responsive booking website from a Figma design: dependency-free 4-language i18n engine (EN/DA/UK/DE), booking price calculator, form validation · [demo](https://pavloseniv.github.io/The-Glass-Huts/The-Glass-Huts/index.html)
- **go-surf** — single-page surf-camp landing from a Figma design: interactive coastline map synced with content sliders, trip price calculator, a11y (vanilla JS, SCSS/BEM) · [demo](https://pavloseniv.github.io/go-surf/go-surf/index.html)

---

## SKILLS

- **Frontend:** React 18/19, Next.js 16 (App Router, ISR), TypeScript (strict), Tailwind CSS, SCSS/Bootstrap, TanStack Query/Table/Router, Zustand, React Hook Form + Zod, Three.js, next-intl/react-intl
- **Mobile:** React Native 0.81 / Expo SDK 54 (EAS Build & Update), Ionic 8 / Capacitor 7, OTA (Capgo), background geolocation, barcode scanning, FCM push
- **Backend:** Strapi 5, Node.js, PostgreSQL, Redis, REST API design; PHP 8 / Laravel 12 — fluent code reading and targeted fixes
- **Integrations:** Monobank acquiring, Nova Poshta, KeyCRM, Google Maps & Routes API, Telegram bots, Pusher, S3 / DO Spaces, FFmpeg/HLS
- **DevOps:** Vercel, DigitalOcean, Docker / Docker Compose, Nginx, Let’s Encrypt, cron/bash ops, Sentry
- **Quality & tooling:** Vitest + Testing Library, Playwright, Jest, ESLint 9, Prettier, Husky; Vite, Webpack, esbuild, Gulp

---

## LANGUAGES

- Ukrainian — native
- English — Intermediate (B1): confident with technical documentation and written communication

---

## EDUCATION

**Vasyl Stefanyk Precarpathian National University**
- M.Sc. in Computer Science, 2022–2024
- B.Sc. in Computer Science, 2018–2022
