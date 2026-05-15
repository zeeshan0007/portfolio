import Image from 'next/image';
import { getProjectById, projects } from '@/lib/projects';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectById(params.slug);
  if (!project) {
    return {};
  }
  return {
    title: `${project.title} | Muhammad Zeshan`,
    description: project.impact,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectById(params.slug);

  if (!project) {
    notFound();
  }

  const statusLabel =
    project.status === 'live'
      ? '[live]'
      : project.status === 'ongoing'
      ? '[in progress]'
      : '[archived]';

  return (
    <article>
      {/* Header */}
      <div className="mb-10">
        <p className="muted text-meta uppercase tracking-wide">
          {statusLabel}
        </p>
        <h1 className="mt-4">{project.title}</h1>
        <p className="muted mt-1">{project.subtitle}</p>
        <p className="muted text-meta mt-1">{project.timeline}</p>
        <p className="mt-4 border-l-2 border-line pl-4">{project.impact}</p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 no-underline"
          >
            [visit the site →]
          </a>
        )}
      </div>

      {/* Screenshots */}
      {project.images && project.images.length > 0 && (
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.images.map((src, i) => (
            <div key={i} className="border border-line overflow-hidden">
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}

      {/* The Problem */}
      <section className="mb-10">
        <h2>The problem</h2>
        <p>{project.problem}</p>
      </section>

      {/* The Solution */}
      <section className="mb-10">
        <h2>What I built</h2>
        <p className="mb-5">{project.solution}</p>
        <h3 className="mb-2">Core features</h3>
        <ul className="space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="muted shrink-0">-</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Engineering Highlights */}
      <section className="mb-10">
        <h2>Engineering highlights</h2>
        <ul className="space-y-1.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="muted shrink-0">-</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2>Tech stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="mb-10">
        <h2>Impact</h2>
        <ul className="space-y-1.5">
          {project.metrics.map((metric) => (
            <li key={metric} className="flex gap-2">
              <span className="muted shrink-0">-</span>
              <span>{metric}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <div className="tile p-5">
        <h3 className="mb-1">Want something similar built?</h3>
        <p className="muted text-meta mb-4">
          Happy to talk it through — drop me a line.
        </p>
        <a href="/#contact" className="no-underline">
          [get in touch]
        </a>
      </div>
    </article>
  );
}
