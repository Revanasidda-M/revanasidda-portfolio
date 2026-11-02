import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  // Parallax background tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  // Form submission handler supporting both EmailJS and mailto fallback
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const firstName =
      formRef.current?.querySelector('#firstName')?.value?.trim() || ''
    const lastName =
      formRef.current?.querySelector('#lastName')?.value?.trim() || ''
    const email =
      formRef.current?.querySelector('#email')?.value?.trim() || ''
    const message =
      formRef.current?.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const isConfigured = Boolean(
      emailjsConfig.serviceId &&
        emailjsConfig.templateId &&
        emailjsConfig.publicKey &&
        emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
        emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
        emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY',
    )

    if (!isConfigured) {
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
        )}`,
        '_blank',
      )
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      try {
        const emailjs = await import('@emailjs/browser')
        await emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          emailjsConfig.publicKey,
        )
        setStatus('success')
        formRef.current?.reset()
      } catch (err) {
        console.error('EmailJS send error:', err)
        setStatus('error')
      }
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Giant Parallax 'Contact' Word */}
      <motion.div
        style={{ y }}
        className="absolute pointer-events-none z-0 top-12 left-0 w-full flex justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* In front: Red Contact Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto relative z-10 rounded-tl-3xl md:rounded-tl-[3rem] shadow-2xl"
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/20">
          <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
            Reach Me
          </span>
          <a
            href={socialLinks.instagram || 'https://instagram.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all duration-300"
          >
            DM on Instagram
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          {/* Two columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Inputs */}
            <div className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  placeholder="First Name *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Right Textarea */}
            <div className="flex flex-col h-full">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                required
                className="w-full flex-1 min-h-[140px] resize-none bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          {/* Bottom Controls and Details */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
            {/* Permission checkbox */}
            <label className="flex items-start space-x-3 cursor-pointer text-white/80 text-xs md:text-sm">
              <input
                type="checkbox"
                required
                defaultChecked
                className="mt-0.5 rounded border-white/40 bg-transparent text-[#ff2a2a] focus:ring-white"
              />
              <span>
                I agree that my submitted information may be used to respond
                to this inquiry.
              </span>
            </label>

            {/* Response note */}
            <p className="text-white/70 text-xs md:text-sm">
              Your message will be sent directly to my inbox. I typically respond
              within 24-48 hours.
            </p>

            {/* Urgent direct mailto */}
            <p className="text-white/80 text-xs md:text-sm">
              Need a faster response? Email me directly at{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}?subject=Urgent Inquiry`}
                className="underline font-bold text-white hover:text-black transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer ${
                  status === 'sending'
                    ? 'bg-white/20 border border-white/20 text-white/60 cursor-wait'
                    : status === 'success'
                      ? 'bg-emerald-600 border border-emerald-500 text-white shadow-lg'
                      : status === 'error'
                        ? 'bg-red-950 border border-red-800 text-red-200'
                        : 'bg-transparent border border-white text-white hover:bg-white hover:text-[#ff2a2a] group shadow-md'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}
                {status === 'success' && <span>Sent Successfully ✓</span>}
                {status === 'error' && <span>Failed — Try Again</span>}
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 stroke-current transform transition-transform duration-300 group-hover:translate-x-1"
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
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

