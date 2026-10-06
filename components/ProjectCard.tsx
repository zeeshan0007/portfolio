import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/projects';

function monogram(title: string): string {
  const words = title.replace(/[^A-Za-z0-9 ]/g, '').trim().split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return words[0].slice(0, 2).toUpperCase();
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} className="proj-card">
      <div className="aspect-video border-b border-line overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-full object-cover "
          />
        ) : (
          <div className="w-full h-full bg-[#f5f5f5] flex items-center justify-center">
            <span className="text-[13px] font-bold muted">
              {monogram(project.title)}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <h3>{project.title}</h3>
          {project.timeline && (
            <span className="text-meta muted shrink-0 whitespace-nowrap">
              {project.timeline}
            </span>
          )}
        </div>
        <p className="text-meta muted">{project.impact}</p>
      </div>
    </Link>
  );
}
