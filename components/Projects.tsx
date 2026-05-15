import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p className="muted mb-6">
        A few things I&apos;ve built and shipped — most of them end to end.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
