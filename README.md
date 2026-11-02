# Revanasidda — Portfolio

A high-performance developer portfolio showcasing full-stack Java, Spring Boot, and React engineering projects.

- **Live site:** https://revanasidda-portfolio.vercel.app/

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Tech Stack
- **Framework & Runtime:** React 19, Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, AOS (Animate On Scroll)
- **Interactive Effects:** WebGL Fluid Splash Cursor
- **Email Service:** EmailJS (`@emailjs/browser`)

## Run Locally
Clone the repository and run the following commands:

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build
```

## Environment Variables
To enable contact form delivery via EmailJS, create a `.env.local` file in the project root with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(Note: If these keys are not set, the contact form seamlessly falls back to formatted direct mailto communication).*

## License
MIT
