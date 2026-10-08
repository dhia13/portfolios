# Modern Portfolio - Next.js 14

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features dark/light theme toggle, smooth animations, and a fully data-driven architecture using `profile.json`.

![Portfolio Preview](https://via.placeholder.com/800x400)

## ✨ Features

### Core Features
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark/Light Theme** - Toggle between themes with persistent storage
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Next.js 14** - Latest Next.js with App Router and Server Components
- 🔷 **TypeScript** - Type-safe codebase for better development experience
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📊 **Data-Driven** - All content managed through `profile.json`
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 🎯 **Performance** - Optimized images, lazy loading, and code splitting

### Sections
- **Hero** - Animated introduction with experience counter
- **About** - Professional summary and expertise
- **Skills** - Categorized skills with progress indicators
- **Experience** - Timeline of work experience
- **Projects** - Showcase of 7 projects with details
- **Services** - Services offered
- **Testimonials** - Client feedback
- **Contact** - Contact form and information
- **Footer** - Quick links and resources

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd my-portfolio/p2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
p2/
├── app/
│   ├── layout.tsx          # Root layout with metadata and theme provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header with logo and theme toggle
│   ├── Hero.tsx            # Hero section with animated text
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx         # Projects showcase
│   ├── Services.tsx         # Services section
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer component
│   └── ThemeToggle.tsx     # Dark/light theme toggle
├── contexts/
│   └── ThemeContext.tsx     # Theme management context
├── types/
│   └── index.ts            # TypeScript type definitions
├── profile.json            # Portfolio data (single source of truth)
├── public/
│   ├── MainLogo.png        # Logo
│   ├── favicon.ico         # Favicon
│   └── *.pdf, *.docx       # CV files
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Updating Profile Data

All portfolio content is managed through `profile.json`. Simply edit this file to update:

- **Personal Information**: Name, title, location, email, social links
- **About Section**: Summary, professional experience, languages
- **Skills**: Frontend, backend, databases, mobile, DevOps
- **Projects**: All 7 projects with descriptions, technologies, links
- **Experience**: Work timeline with detailed points
- **Testimonials**: Client feedback
- **Contact**: Email, location, social media links
- **SEO**: Meta tags, Open Graph, structured data

### Theme Customization

The theme colors can be customized in:
- `tailwind.config.ts` - Tailwind color configuration
- `app/globals.css` - CSS custom properties for dark mode

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Add corresponding data to `profile.json` if needed

## 🛠️ Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Custom Properties** - For theme management

### Animations
- **Framer Motion** - Animation library

### Icons
- **Lucide React** - Icon library

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deployment Options

#### Vercel (Recommended)
1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

#### Other Platforms
- AWS Amplify
- Railway
- Render
- Any Node.js hosting platform

## 🔧 Environment Variables

No environment variables required for basic functionality. Optional variables for contact form:

```env
# Optional: For contact form integration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components and images
- **Font Optimization**: Next.js font optimization

## 📝 License

This project is private and personal portfolio.

## 👤 Author

**Sahhar Dhia Eddine**
- Lead / Senior Fullstack Developer
- Email: dhiakizaro@gmail.com
- Location: Algiers, Algeria
- GitHub: [@dhia13](https://github.com/dhia13)
- LinkedIn: [Sahhar Dhia Eddine](https://www.linkedin.com/in/sahhar-dhia-eddine)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

**Last Updated**: December 2024
