import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  // Mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false)
  // Track scroll position to adjust navbar styling
  const [isScrolled, setIsScrolled] = useState(false)

  // Navigation menu links
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  // Pre-filled mailto link for direct inquiries
  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

  // Scroll listener to update isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled
            ? 'bg-transparent backdrop-blur-md py-4'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="text-white text-2xl font-black tracking-tight">
          {personalInfo.brandName}
          <span className={isOpen ? 'text-white' : 'text-[#ff2a2a]'}>.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-white/80 hover:text-white font-medium py-1 transition-colors"
            >
              {link}
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop 'Hire Me' CTA Button */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                // 'X' icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // 3-line hamburger icon when closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#ff2a2a] shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg py-3 border-b border-white/20 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-3 pb-2">
            <a
              href={hireMeMailto}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 px-6 rounded-full bg-white text-[#ff2a2a] font-bold text-lg hover:bg-white/90 transition-colors shadow-md"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
