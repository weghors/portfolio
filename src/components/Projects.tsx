import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';
import { cn } from '@/lib/utils';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-gold font-medium tracking-wider uppercase text-sm">我的作品</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-cream">
            我的项目
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                'px-6 py-2 rounded-full transition-all duration-300 font-medium',
                activeCategory === category.key
                  ? 'bg-gradient-gold text-charcoal shadow-lg shadow-amber-gold/30'
                  : 'glass-light text-cream/80 hover:text-amber-gold hover:border-amber-gold/50'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-light rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-gold/10"
            >
              <div className="relative aspect-video overflow-hidden">
                {project.link && project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-amber-gold text-charcoal hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-cream text-charcoal hover:scale-110 transition-transform"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                {project.link && project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-xl font-display font-semibold text-cream mb-2 group-hover:text-amber-gold transition-colors">
                      {project.title}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-xl font-display font-semibold text-cream mb-2 group-hover:text-amber-gold transition-colors">
                    {project.title}
                  </h3>
                )}
                <p className="text-cream/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-charcoal-light text-amber-gold/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
