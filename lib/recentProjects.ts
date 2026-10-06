import type { Project } from './projects';

export const recentProjects: Project[] = [
  {
    id: 'lead-intelligence',
    title: 'County Lead Intelligence',
    subtitle: 'Real-estate lead engine built on public county records',
    impact:
      'A daily pipeline that turns scattered county court and recorder filings into owner-resolved, equity-scored leads for real-estate investors.',
    problem:
      'Investors look for motivated sellers — pre-foreclosures, probate, evictions, tax delinquencies — but those signals are buried in dozens of incompatible county recorder, court, and assessor systems, many behind captchas, logins, or bot protection.',
    solution:
      'A per-client lead platform: scrapers for each county run every morning, resolve each filing to a parcel and owner, estimate equity, skip-trace contact details, and push the results into a filterable dashboard and the client\'s CRM. I was the lead backend engineer across deployments covering ten states.',
    features: [
      'Daily scheduled scrapes per county with live progress streaming to the dashboard',
      'Filing → parcel → owner resolution through assessor and GIS parcel layers',
      'Estimated equity, replaced by real loan balances when a PropStream export is imported',
      'Automatic skip tracing with per-batch spend caps',
      'Idempotent CRM push that never creates duplicate records on retry',
      'Lead table with facet filters, zip filtering, list stacking, and CSV export',
    ],
    techStack: [
      'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'node-cron', 'cheerio',
      'Tesseract OCR', 'Zod', 'Vitest', 'React', 'Vite', 'Tailwind CSS', 'Zustand',
      'Railway', 'Vercel',
    ],
    highlights: [
      'Turned an ASP.NET recorder search that "needed a real browser" into a plain HTTP scraper by reproducing its hidden date-picker state',
      'When a county index couldn\'t place a filing, read the recorded document itself — OCR on scanned TIFFs or the PDF text layer — and cross-checked the result, because a wrong address is worse than a missing one',
      'Transport ladder (direct → scraping API → residential proxy) with challenge-page detection so a blocked response never counts as success',
      'Per-source scrape trace (fetched → parsed → kept → reasons) persisted to the database, so "why did this county return 0 leads?" has an answer',
      'Equity model from assessor value and historical mortgage rates, amortized to today and labelled as an estimate',
    ],
    metrics: [
      'Going direct to one county\'s recorder surfaced 27 trustee sales in two weeks, where the previous source had produced 1 lead for the whole month',
      'Scrapers live across ten states, each deployment tailored to its counties and lead types',
      '25-file test suite on the main deployment',
    ],
    timeline: '3 months',
    image: '/assets/lead1.jpg',
    images: ['/assets/lead1.jpg', '/assets/lead2.jpg'],
    status: 'live',
  },
  {
    id: 'ai-agent-evaluation',
    title: 'AI Agent Evaluation',
    subtitle: 'Benchmark environments for AI coding agents',
    impact:
      'Tasks that test whether an AI agent can build a real, rule-enforcing web app — plus the tooling to quality-check them in hours instead of days.',
    problem:
      'Evaluating AI coding agents needs tasks that are hard but fair: the reference solution must score perfectly, the model must land in a narrow difficulty band, and grading must reward real server-side behaviour rather than a convincing UI.',
    solution:
      'As a contractor with Turing, I designed full-stack web-app tasks (brief, seed data, reference app, LLM-judge rubric) and built the tooling around them: a launcher that reproduces the grader\'s runtime, a static QC linter, deterministic packaging, and a multi-agent review loop.',
    features: [
      'Owner-voiced briefs that describe business incidents instead of handing over a specification',
      'Reference apps with sign-in, roles, and server-enforced business rules',
      'LLM-judge rubrics run through a headless browser against the live app',
      'Runtime-faithful launcher with real restarts for persistence checks',
      'Static linter covering about 20 families of platform rules',
    ],
    techStack: [
      'Node.js', 'Express', 'SQLite', 'Python', 'Playwright', 'Bash',
      'LLM-as-judge', 'Claude Code agents',
    ],
    highlights: [
      'Grading by request replay: the judge records the app\'s own requests and replays them as another user, so a hidden button never counts as enforcement',
      'Blind, parallel graders with a proposer/attacker red team per fix; a task is done after two consecutive clean runs',
      'Deterministic judging: binary numbered checks, a fixed clock, and every pinned figure verified by both the reference app and an independent re-implementation',
      'Deterministic packaging with a round-trip diff, so what ships is exactly what was tested',
    ],
    metrics: [
      'Brought one task\'s model score from about 98% to about 42% while the reference solution stayed at 100%',
      'QC iteration moved from manual review to an automated, repeatable pipeline',
    ],
    timeline: 'contract (ongoing)',
    image: '/assets/eval1.png',
    images: ['/assets/eval1.png', '/assets/eval2.png'],
    status: 'ongoing',
  },
  {
    id: 'piecyfer-site',
    title: 'PieCyfer Website',
    subtitle: 'Agency site rebuild with an admin CMS',
    impact:
      'A rebuilt company site with its own CMS for blog, jobs, and page metadata — every existing page carried over.',
    problem:
      'The agency site needed a modern rebuild that kept every existing page and asset, while letting the team manage posts, comments, job listings, and SEO metadata without a developer.',
    solution:
      'A Next.js rebuild seeded from a crawl of the live site, with an admin CMS, moderated comments, protected contact forms, and full SEO, deployed as a Docker image.',
    features: [
      'All 44 existing pages carried over from a crawl of the live site',
      'Admin CMS for blog posts, job listings, and per-page metadata',
      'Moderated comments with an admin review queue',
      'Contact forms protected by reCAPTCHA v3 and server-side validation',
      'Sitemap, robots, and social preview cards',
    ],
    techStack: [
      'Next.js', 'React', 'TypeScript', 'Prisma', 'Tailwind CSS', 'three.js',
      'Zod', 'Playwright', 'Docker',
    ],
    highlights: [
      'Security hardening pass: stored-XSS fix, Content Security Policy, and security headers',
      'Request validation on every form before anything reaches the database',
    ],
    metrics: [
      'One codebase now covers the public site and its content management',
    ],
    timeline: '2 months (ongoing)',
    image: '/assets/piecyfer1.jpg',
    images: ['/assets/piecyfer1.jpg', '/assets/piecyfer2.jpg'],
    status: 'live',
  },
  {
    id: 'storefront',
    title: 'Damascus Frontier',
    subtitle: 'Ecommerce store for hand-forged blades',
    impact:
      'A direct-to-collector store for a blade maker — 71 products, Stripe checkout, and an admin that handles its own media.',
    problem:
      'A maker selling hand-forged swords and knives through marketplaces wanted their own store: a large photo-heavy catalogue, made-to-order pieces alongside in-stock ones, and payments that never oversell.',
    solution:
      'A Next.js store with guest checkout through Stripe, an admin panel for products, orders, and media, and all product media served from Cloudflare R2.',
    features: [
      'Catalogue of 71 products and 686 images with category pages and filters',
      'Guest checkout through Stripe with server-side price, stock, and shipping checks',
      'In-stock and made-to-order fulfilment with separate quantity rules',
      'Admin for products, orders, and uploads (including iPhone HEIC photos and video)',
      'Storage page that finds and clears files no product uses',
    ],
    techStack: [
      'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Prisma',
      'PostgreSQL', 'Auth.js', 'Stripe', 'Cloudflare R2', 'Vercel', 'GitHub Actions',
    ],
    highlights: [
      'Idempotent order fulfilment in one transaction, so the Stripe webhook and the success page can both confirm an order without double-counting stock',
      'Moved about 700MB of media to R2 without rewriting a single database row, then shrank git history from over a gigabyte to 1.3MB',
      'Found that cookie reads in the layout had silently made every page dynamic; fixed it so all 71 product pages are static again',
      'Presigned uploads straight to R2 to get past Vercel\'s 4.5MB request limit, with HEIC converted to JPEG in the browser',
      'Made-to-order items marked as back order, not out of stock, so search engines keep listing them',
    ],
    metrics: [
      '71 products and 686 images live, all verified returning successfully',
      'CI on every push: typecheck, lint, unit tests, migrations, and an integration test against Postgres',
    ],
    timeline: '3 months',
    image: '/assets/damascus1.jpg',
    images: ['/assets/damascus1.jpg', '/assets/damascus2.jpg'],
    status: 'live',
  },
  {
    id: 'instagram-intake',
    title: 'Instagram DM Intake',
    subtitle: 'n8n intake layer for an AI appointment setter',
    impact:
      'Turns a burst of Instagram DMs into exactly one AI reply — verified, deduplicated, and handed back to a human when the coach steps in.',
    problem:
      'An AI setter that answers Instagram DMs needs a front door that answers Meta within a second, ignores retries and duplicates, waits for a lead to finish typing, and never talks over a human.',
    solution:
      'n8n workflows backed by Postgres that receive Meta\'s Instagram webhooks, verify every request, batch each conversation\'s messages, and pass one clean batch to a send sub-workflow. Built as a paid trial and delivered two days early.',
    features: [
      'Meta webhook verification handshake and HMAC-SHA256 signature check',
      'Duplicate and retry protection through a database constraint',
      'Burst batching: several quick messages produce exactly one reply',
      'Automatic pause when the coach replies personally',
      'Daily job that refreshes expiring access tokens',
    ],
    techStack: ['n8n', 'PostgreSQL', 'Meta Graph API', 'Webhooks', 'Docker', 'Bash'],
    highlights: [
      'Signature verified over the raw request bytes with a constant-time comparison, so emoji and escapes never break it',
      'A single SQL statement lets only the newest message claim the batch — exactly one reply even with concurrent executions, no locks or queues',
      'Responds to Meta in about 40ms locally, before any database work',
      'Signed-request test harness covering bursts, duplicates, parallel leads, emoji, and the coach-takeover case',
    ],
    metrics: [
      'Client feedback called it "solid work", singling out the claim query and the limitations write-up',
    ],
    image: '/assets/intake1.png',
    images: ['/assets/intake1.png', '/assets/intake2.png'],
    status: 'archived',
  },
  {
    id: 'bar-pos',
    title: 'Bar Ordering & POS',
    subtitle: 'Online ordering and bartender point of sale',
    impact:
      'Online ordering and an offline-capable POS for a neighbourhood bar — tabs, split bills, shifts, and end-of-night reconciliation.',
    problem:
      'A local bar needed online ordering for pickup and a POS its bartenders could rely on during a busy night, including when the connection drops.',
    solution:
      'A public site with Stripe ordering, plus a React POS backed by an Express API with live sync between devices and an offline mode.',
    features: [
      'Online ordering with pickup scheduling, tips, promo codes, and refunds',
      'Bartender POS with tabs, split bills, and menu add-ons',
      'Shifts and end-of-night reconciliation',
      'Live sync across devices and a staff screen',
      'Offline mode that keeps the POS working without a connection',
    ],
    techStack: [
      'React', 'Vite', 'Dexie (IndexedDB)', 'Tailwind CSS', 'Node.js', 'Express',
      'PostgreSQL', 'Socket.io', 'Stripe', 'DigitalOcean',
    ],
    highlights: [
      'Offline-capable POS built on IndexedDB, so bartenders can keep working through a dropped connection',
      'Real-time updates between bartender devices over Socket.io',
      'End-to-end tests for auth, shifts, bill splitting, tabs, and refunds',
    ],
    metrics: [
      'One system replacing separate tools for online orders and in-house tabs',
    ],
    timeline: '3 months',
    image: '/assets/bar1.jpg',
    images: ['/assets/bar1.jpg', '/assets/bar2.jpg'],
    status: 'live',
  },
  {
    id: 'job-board-modernization',
    title: 'Physician Job Board',
    subtitle: 'Legacy healthcare job board, rebuilt',
    impact:
      'A legacy AngularJS job board for physicians and facilities, migrated to a modern NestJS and Next.js monorepo.',
    problem:
      'A healthcare hiring platform was running on an aging AngularJS and Express codebase that was hard to change and had security gaps.',
    solution:
      'A full rebuild as a monorepo: NestJS modules for jobs, employers, facilities, job seekers, chat, payments, and admin, with Next.js dashboards for each role — planned from an audit of the legacy app.',
    features: [
      'Hiring pipeline and employer tools',
      'Job-seeker profiles with credentials and verification',
      'Real-time chat between employers and candidates',
      'Admin back office with impersonation',
      'Video interview recorder',
    ],
    techStack: [
      'NestJS', 'TypeScript', 'MongoDB', 'Mongoose', 'Socket.io', 'Stripe',
      'Next.js', 'Tailwind CSS',
    ],
    highlights: [
      'Closed an admin-takeover path and hardened public endpoints during the migration',
      'Job-seeker documents moved to private storage and served only through signed URLs',
      'Migration audit and plan written before the rewrite, so nothing was lost in translation',
    ],
    metrics: [
      'Legacy AngularJS app replaced with a modern, typed monorepo',
    ],
    timeline: '6 weeks',
    image: '/assets/jobboard1.jpg',
    images: ['/assets/jobboard1.jpg', '/assets/jobboard2.jpg'],
    status: 'archived',
  },
];
