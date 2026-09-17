# ПАВЛО СЕНІВ
## Middle Frontend Engineer — React / React Native / Next.js

Івано-Франківськ, Україна (EET) · Remote · +380 68 185 95 41 · senivpavlo16it@gmail.com
[linkedin.com/in/pavlo-seniv](https://www.linkedin.com/in/pavlo-seniv) · [github.com/PavloSeniv](https://github.com/PavloSeniv) · [pavloseniv.github.io/portfolio](https://pavloseniv.github.io/portfolio/portfolio/index.html)

---

Фронтенд-інженер із 4+ роками досвіду у веброзробці (з 2021): створюю веб- і мобільні продукти end-to-end. Основний фронтенд-інженер enterprise-системи управління складом — **самостійно перебудував увесь її фронтенд на Next.js 16 / React 19 (75 сторінок, ~65 тис. рядків) і вивів у продакшн менш ніж за місяць**; **єдиний розробник** кросплатформного застосунку GPS-трекінгу для водіїв логістичної компанії; **повний цикл володіння** продакшн e-commerce-магазином — вітрина, Strapi-бекенд, оплати, інфраструктура. Впевнено працюю і поза фронтендом: Node/Strapi-бекенди, платіжні й логістичні інтеграції, продакшн-операції на Vercel і DigitalOcean.

---

## ДОСВІД

### Frontend Developer — SK Group EU
**груд. 2022 – дотепер**
Продукти: Wareflow WMS ([app.wareflow.ai](https://app.wareflow.ai)) · Consolid ([consolid.ai](https://consolid.ai)) · Maryline ([maryline.ua](https://maryline.ua))

#### Wareflow — enterprise система управління складом (груд. 2022 – дотепер)
Multi-tenant WMS для інвентаризації, логістики та складських операцій — щодня використовується складськими командами кількох компаній; команда до 10 інженерів, стек Laravel 12, PostgreSQL, Redis, React/Next.js.

- **Самостійно перебудував увесь фронтенд платформи** як SPA на Next.js 16 (App Router), React 19 і strict TypeScript — 75 сторінок у 23 бізнес-модулях — і вивів у продакшн через CI менш ніж за місяць, замінивши legacy-інтерфейс обсягом ~305 тис. рядків кодовою базою на ~65 тис. (−80% коду)
- **Спроєктував ядро нового SPA:** JWT-автентифікація із single-flight оновленням токена, універсальний backend-driven фреймворк таблиць (TanStack Query/Table), локалізація EN/UK на next-intl
- **Провів задокументований security/performance-аудит:** CSP і security-заголовки, усунення вразливого до підробки auth-заголовка у проксі, форсований logout-флоу; побудував власний Playwright e2e-аудит, що проходить реальні CRUD-флоу і фіксує кожну 4xx/5xx-відповідь та console-помилку
- **До переходу на SPA** — основний автор React-кодової бази під час модернізації legacy jQuery/Blade UI на React 18 + TypeScript бандли; побудував інтерактивну 2D/3D-мапу складу на Three.js (~10 тис. рядків) і переніс її в новий SPA
- **Розвиваю мобільний термінал складу** як один із двох основних розробників (React 19, Ionic 8, Capacitor 7 — 43 маршрути, 149 файлів тестів): апаратне сканування штрихкодів як основний спосіб введення даних, OTA-релізи через Capgo з RSA-підписаними бандлами
- **Повністю відповідаю за frontend-тулчейн і процеси** (ESLint 9, Husky, Conventional Commits, автоматичний релізний версіонінг у CI); щоденна командна робота — код-рев’ю, узгодження API-контрактів із backend-розробниками; у Laravel-бекенді регулярно вношу точкові правки бізнес-логіки (скоупінг multi-tenancy, розрахунки одиниць виміру)

#### Consolid Tracker — GPS-трекінг для водіїв логістичної компанії (квіт. 2024 – квіт. 2026)
Кросплатформний iOS/Android застосунок, яким користуються водії автопарку компанії: Expo SDK 54, React Native 0.81, React 19, TypeScript.

- **Фактично єдиний розробник від MVP до продакшну** впродовж 2 років
- **Спроєктував offline-first пайплайн фонової геолокації:** GPS-семплінг кожні 60 с, буферизація в AsyncStorage у разі втрати мережі, дедуплікація за часовими мітками, пакетна відправка після відновлення зв’язку
- **Інтегрував Google Routes API v2** (ETA з урахуванням трафіку) і власний Haversine-геофенсинг; deep links навігації в Google Maps, Apple Maps і Waze
- **Відповідав за весь релізний пайплайн на EAS** з каналами OTA-оновлень і React Native New Architecture; кастомний Expo config plugin зменшив розмір APK на ~15–20 МБ
- **Реалізував** безпечне зберігання токенів (expo-secure-store), push-нотифікації через FCM і локалізацію на 3 мови (EN/UK/PL); мігрував стейт з React Context на типізовані Zustand stores, перебудував UI на NativeWind 4

#### Maryline — продакшн e-commerce, maryline.ua (жовт. 2024 – дотепер)
Інтернет-магазин fashion-бренду, що обробляє живі замовлення покупців; повний цикл володіння — вітрина, CMS-бекенд, інтеграції, інфраструктура.

- **Побудував вітрину** на Next.js 16 App Router, React 19 і TypeScript: 18 сторінок, BFF-шар з API route handlers, ~22,5 тис. рядків
- **Спроєктував і розвиваю бекенд на Strapi 5** (30 content types): каталог із залишками в розрізі магазинів, замовлення, промокоди, інтеграційні вебхуки
- **Інтегрував Monobank-еквайринг end-to-end:** створення інвойсів із деталізованим кошиком, redirect-флоу та вебхук-підтвердження оплати з оновленням статусу в KeyCRM
- **Реалізував синхронізацію залишків у реальному часі:** вебхук KeyCRM → інвалідація REST-кешу Strapi → точкова ревалідація кешів Next.js — замість оновлення за таймером
- **Автоматизував доставку і CRM:** генерація ТТН «Нової пошти» (адресна доставка та відділення), синхронізація замовлень у KeyCRM з автопризначенням менеджера за графіком
- **Задеплоїв і супроводжую інфраструктуру:** вітрина на Vercel, Strapi на DigitalOcean (PostgreSQL з SSL, медіа у Spaces, автоматичні бекапи з ротацією), Redis-кешування відповідей; SEO та аналітика — JSON-LD для Google Merchant, динамічні sitemap/robots, GA4 e-commerce events

#### Внутрішні інструменти (вибране)
- **Побудував веб-інструмент стиснення відео на FFmpeg** (Next.js 16): прогрес у реальному часі через Server-Sent Events, завантаження напряму в S3 через presigned URL, HLS-пакування зі стрімінг-проксі
- Також: розгорнув і посилив захист self-hosted **Vaultwarden** (Docker, Nginx TLS, автоматичні бекапи); розробив admin UI та cron-раннер **PHP-сервісу синхронізації KeyCRM → Strapi**

---

## ВЛАСНІ ПРОЄКТИ (2021 – дотепер)

- **The Glass Huts** — 10-сторінковий адаптивний сайт бронювання за Figma-макетом: власний i18n-рушій на 4 мови (EN/DA/UK/DE) без бібліотек, калькулятор вартості бронювання, валідація форм · [демо](https://pavloseniv.github.io/The-Glass-Huts/The-Glass-Huts/index.html)
- **go-surf** — односторінковий лендінг для серф-кемпів за Figma-макетом: інтерактивна мапа узбережжя, синхронізована зі слайдерами, калькулятор вартості поїздки, a11y (vanilla JS, SCSS/BEM) · [демо](https://pavloseniv.github.io/go-surf/go-surf/index.html)

---

## НАВИЧКИ

- **Frontend:** React 18/19, Next.js 16 (App Router, ISR), TypeScript (strict), Tailwind CSS, SCSS/Bootstrap, TanStack Query/Table/Router, Zustand, React Hook Form + Zod, Three.js, next-intl/react-intl
- **Mobile:** React Native 0.81 / Expo SDK 54 (EAS Build & Update), Ionic 8 / Capacitor 7, OTA (Capgo), фонова геолокація, сканування штрихкодів, FCM push
- **Backend:** Strapi 5, Node.js, PostgreSQL, Redis, проєктування REST API; PHP 8 / Laravel 12 — впевнене читання коду й точкові правки
- **Інтеграції:** Monobank-еквайринг, «Нова пошта», KeyCRM, Google Maps & Routes API, Telegram-боти, Pusher, S3 / DO Spaces, FFmpeg/HLS
- **DevOps:** Vercel, DigitalOcean, Docker / Docker Compose, Nginx, Let’s Encrypt, cron/bash ops, Sentry
- **Якість і тулінг:** Vitest + Testing Library, Playwright, Jest, ESLint 9, Prettier, Husky; Vite, Webpack, esbuild, Gulp

---

## МОВИ

- Українська — рідна
- Англійська — Intermediate (B1): вільно читаю технічну документацію, впевнено листуюся

---

## ОСВІТА

**Прикарпатський національний університет імені Василя Стефаника**
- Магістр комп’ютерних наук, 2022–2024
- Бакалавр комп’ютерних наук, 2018–2022
