import { internshipsList } from '../data/portfolioData'

// Individual internship card component
function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Top row: duration and badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-white/50 text-xs uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] uppercase font-bold tracking-widest">
            Internship
          </span>
        </div>

        {/* Role title */}
        <h3 className="text-2xl font-black text-white tracking-tight leading-snug mb-1">
          {intern.role}
        </h3>

        {/* Organization name */}
        <p className="uppercase text-red-200 text-sm font-bold tracking-wider mb-6">
          {intern.organization}
        </p>

        {/* Skills gained bulleted list */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-3">
              Skills Gained:
            </h4>
            <ul className="space-y-2">
              {intern.skills.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="flex items-start text-sm text-white/90"
                >
                  <span className="text-red-200 mr-2 font-bold">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies footer row */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-4 mt-auto">
          <h4 className="text-[11px] uppercase tracking-widest text-white/60 font-mono mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md bg-white/10 text-white text-xs font-mono tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) return null

  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Top edge torn-paper SVG divider transitioning from the previous dark section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-[1px] rotate-180">
        <svg
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star bottom-left */}
      <svg
        className="absolute bottom-12 left-10 w-12 h-12 fill-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Header */}
      <div
        data-aos="fade-up"
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <h2 className="uppercase font-black text-black text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
          Work Experience
        </h2>
        <p className="text-red-100 text-sm md:text-base font-semibold max-w-2xl mx-auto">
          Hands-on industry engineering experience architecting cloud-native
          microservices and production systems.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {internshipsList.map((intern, index) => (
          <InternshipCard
            key={intern.organization + index}
            intern={intern}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
