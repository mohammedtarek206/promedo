import { projects } from '@/data/projects';
import { SectionTitle } from './SectionTitle';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="03 — SELECTED WORK"
          title="Projects"
          subtitle="Production-grade builds with premium UX — each card opens the live deployment so recruiters can validate quality in seconds."
        />
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
