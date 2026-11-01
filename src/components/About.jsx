import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function About() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative Star: Top Right */}
      <svg
        className="absolute top-12 right-12 w-10 h-10 fill-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative Star: Bottom Left */}
      <svg
        className="absolute bottom-28 left-8 w-12 h-12 fill-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID Badge on Lanyard with Framer Motion drop bounce */}
        <div className="md:w-[350px] shrink-0 w-full flex justify-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 9,
              mass: 1.1,
            }}
            className="relative flex flex-col items-center pt-8 w-full max-w-[280px]"
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0 pointer-events-none" />

            {/* Clip rectangle */}
            <div className="relative z-10 w-8 h-3.5 bg-gray-400 rounded-xs mb-[-6px] shadow border border-gray-500 pointer-events-none" />

            {/* 3D Flip Card Container */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped(!flipped)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
            >
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT Face: ID Badge */}
                <div className="absolute inset-0 [backface-visibility:hidden] w-full h-full bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col">
                  {/* Small cutout slot */}
                  <div className="w-12 h-1.5 bg-black/80 rounded-full mx-auto mb-3 border border-white/10 shrink-0" />

                  {/* Photo inside */}
                  <img
                    src={stackImage}
                    alt={personalInfo.name}
                    className="w-full flex-1 rounded-xl object-cover object-top shadow-inner"
                  />
                </div>

                {/* BACK Face: Visiting Card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] w-full h-full rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] p-5 text-white text-left flex flex-col justify-between shadow-2xl border border-white/5 relative overflow-hidden">
                  {/* Top 6px red bar */}
                  <div className="absolute top-0 left-0 w-full h-[6px] bg-[#ff2a2a] rounded-t-2xl" />

                  <div>
                    {/* Brand Name */}
                    <div className="text-xl font-black tracking-tight text-white mt-1">
                      {personalInfo.brandName}
                      <span className="text-[#ff2a2a]">.</span>
                    </div>

                    {/* Title */}
                    <div className="text-xs uppercase tracking-widest text-red-400 font-semibold mt-0.5">
                      {personalInfo.title}
                    </div>

                    {/* Thin divider */}
                    <div className="border-b border-white/10 my-2.5" />

                    {/* Details rows */}
                    <div className="space-y-1.5 text-xs text-white/85">
                      {personalInfo.emails.primary && (
                        <a
                          href={`mailto:${personalInfo.emails.primary}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 hover:text-white transition-colors truncate"
                        >
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                          <span className="truncate">
                            {personalInfo.emails.primary}
                          </span>
                        </a>
                      )}

                      {personalInfo.phone && (
                        <a
                          href={`tel:${personalInfo.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 hover:text-white transition-colors truncate"
                        >
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                          </svg>
                          <span className="truncate">{personalInfo.phone}</span>
                        </a>
                      )}

                      {personalInfo.location && (
                        <div className="flex items-center space-x-2 truncate">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          <span className="truncate">
                            {personalInfo.location}
                          </span>
                        </div>
                      )}

                      {socialLinks.linkedin && (
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 hover:text-white transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.96 0-1.74-.78-1.74-1.74s.78-1.74 1.74-1.74 1.74.78 1.74 1.74-.78 1.74-1.74 1.74m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                      )}

                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 hover:text-white transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* QR code and caption */}
                  <div className="flex items-center space-x-3 pt-2 border-t border-white/10 mt-2">
                    <div className="bg-white rounded-lg p-2 shrink-0 shadow">
                      <QRCode
                        value={
                          socialLinks.linkedin ||
                          `mailto:${personalInfo.emails.primary}`
                        }
                        size={76}
                      />
                    </div>
                    <span className="text-[10px] text-white/60 leading-tight">
                      Scan to connect
                    </span>
                  </div>
                </div>
              </div>
            </button>

            {/* Small flip hint */}
            <p className="text-xs font-bold text-black/60 mt-4 text-center select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* Right: Bio & Heading */}
        <div className="flex-1" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White torn-paper SVG divider along the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-12 md:h-20 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
