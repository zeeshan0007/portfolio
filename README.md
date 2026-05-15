# Muhammad Zeshan — Portfolio

Personal portfolio site. Next.js 14 (App Router), TypeScript, Tailwind CSS, with a
minimal monospace theme. Home page plus a case-study page for each project.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint
- `npm run type-check` — TypeScript, no emit

## Structure

```
app/
  layout.tsx              Root layout + metadata
  page.tsx                Home page
  globals.css             Design system + global styles
  projects/
    layout.tsx            Case-study layout wrapper
    [slug]/page.tsx       Dynamic project case-study pages
components/                Hero, Projects, ProjectCard, Experience, About, Contact, Footer
lib/projects.ts            Project data + types (single source of truth)
```

## Editing content

All project case studies live in `lib/projects.ts`. Add or edit an entry in the
`projects` array — pages are generated from it at build time. Bio and contact
copy live in `components/About.tsx` and `components/Contact.tsx`.

## Deploy

Push to a Git host and connect to Vercel; it auto-builds on every push. Any
Node host works with `npm run build` followed by `npm start`.
