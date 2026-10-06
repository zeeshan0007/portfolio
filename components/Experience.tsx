'use client';

import { useState } from 'react';

const experiences = [
  {
    role: 'Contract Engineer, AI Agent Evaluation',
    company: 'Turing',
    period: '2026 – Present',
    highlights: [
      'Design full-stack web-app tasks that test whether AI coding agents can build real, rule-enforcing apps',
      'Write LLM-judge rubrics that grade server-side enforcement by replaying recorded requests as other users',
      'Calibrated one task from about 98% to about 42% model score while the reference solution stayed at 100%',
      'Built the QC tooling: runtime-faithful launcher, static rule linter, deterministic packaging, and a multi-agent review loop',
    ],
  },
  {
    role: 'Senior Full-Stack Engineer',
    company: 'PieCyfer',
    period: '2022 – Present',
    highlights: [
      'Shipped production projects across healthcare, SaaS, ecommerce, real estate, and real-time systems',
      "Took a hospital's equipment-tracking system from sluggish to roughly 40% faster (DistrictCSA)",
      'Built a real-time multiplayer game that teaches Agile by playing it (Fireball)',
      'Built a telehealth scheduling and practice-management system for an ADHD clinic (Millennium Medical)',
      'Added LLM-powered test case generation to a QA platform (TestFiesta)',
      'Led backend engineering on a county-records lead platform for real-estate investors, with scrapers across ten states',
      'Worked end to end on every project — database, API, real-time sync, and UI',
    ],
  },
];

const skills = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'NestJS',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'Socket.io',
  'Python',
  'Prisma',
  'Stripe',
  'n8n',
  'Web Scraping',
  'Playwright',
  'Docker',
  'Vercel',
  'AI',
  'LLM Evaluation',
  'AWS',
  'Google Cloud',
];

export default function Experience() {
  const [open, setOpen] = useState<number[]>([0]);

  const toggle = (i: number) =>
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp, i) => {
          const isOpen = open.includes(i);
          return (
            <div key={i}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-8 h-8 shrink-0 border border-line rounded flex items-center justify-center text-[12px] font-bold">
                    {exp.company.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="font-bold truncate">{exp.company}</span>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="toggle shrink-0"
                    aria-expanded={isOpen}
                  >
                    [{isOpen ? 'hide' : 'show'}]
                  </button>
                </div>
                <span className="muted text-meta shrink-0">{exp.period}</span>
              </div>

              <p className="muted ml-10">{exp.role}</p>

              {isOpen && (
                <ul className="mt-3 ml-10 space-y-1.5">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="muted shrink-0">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <h2>Skills</h2>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-line text-muted text-[13px] rounded px-1.5 py-2.5 leading-none skill-tag"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
