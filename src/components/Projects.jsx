import { projects, socialLinks } from '../data/portfolioData'

// Inline SVG GitHub icon
function GitHubIcon({ className = 'w-4 h-4 fill-current' }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

// Inline SVG External Link icon
function ExternalLinkIcon({ className = 'w-4 h-4 stroke-current' }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

// Project Card Component
function ProjectCard({ project, aosDelay }) {
  const isDemoActive = Boolean(
    project.links?.demo && project.links.demo.trim() !== '',
  )

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl ${
        project.isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/50 transition-all duration-500'
          : 'bg-white/10 hover:bg-white/20 transition-all duration-300'
      }`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 transition-all duration-300 flex flex-col justify-between h-full">
        <div>
          {/* Optional Flagship / Custom Badge */}
          {project.badge && (
            <span className="inline-block self-start px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
              {project.badge}
            </span>
          )}

          {/* Title and Number */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-5xl font-black text-white/10 font-serif italic select-none shrink-0 leading-none">
              {project.number}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold transition-all duration-300 hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
          {project.links?.github && project.links.github.trim() !== '' && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs md:text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <GitHubIcon className="w-4 h-4 fill-current" />
              <span>GitHub</span>
            </a>
          )}

          {isDemoActive ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs md:text-sm font-semibold hover:bg-red-600 transition-all duration-300 shadow-md shadow-red-900/20"
            >
              <ExternalLinkIcon className="w-4 h-4 stroke-current" />
              <span>Live Demo</span>
            </a>
          ) : (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs md:text-sm font-semibold cursor-not-allowed select-none"
            >
              <ExternalLinkIcon className="w-4 h-4 stroke-current opacity-40" />
              <span>Demo Coming Soon</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Header */}
      <div
        data-aos="fade-up"
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
          Featured Projects
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Work that speaks for itself
        </h2>
        <p className="text-white/50 text-sm md:text-base">
          Real-world full-stack architectures engineered for performance, scalability, and user experience.
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6 md:gap-8 mb-16 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            aosDelay={(index + 1) * 100}
          />
        ))}
      </div>

      {/* GitHub Profile CTA */}
      <div data-aos="fade-up" className="text-center relative z-10">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 backdrop-blur-md shadow-lg"
        >
          <GitHubIcon className="w-5 h-5 fill-current" />
          <span>Explore All My Repositories</span>
          <svg
            className="w-4 h-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
