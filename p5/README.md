# 3D Developer Portfolio - React + Three.js

An impressive 3D developer portfolio built with **React**, **Vite**, **Three.js**, and **Framer Motion**. Features interactive 3D computer canvas, smooth animations, and a modern developer-focused design.

![Portfolio Preview](https://via.placeholder.com/800x400)

## ✨ Features

### Core Features
- 🖥️ **3D Computer Canvas** - Interactive 3D computer model with animations
- 🌍 **3D Earth** - Rotating 3D Earth in contact section
- ⭐ **3D Stars** - Animated starfield background
- 🎨 **Modern Design** - Clean, professional developer portfolio design
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📊 **Data-Driven** - Content managed through `profile.json`
- 🎯 **Performance** - Optimized 3D rendering and code splitting

### Sections
- **Hero** - 3D computer canvas with introduction
- **About** - Professional summary and services
- **Tech** - Technology stack showcase
- **Experience** - Work experience timeline
- **Works** - Portfolio projects showcase
- **Feedbacks** - Client testimonials
- **Contact** - Contact form with 3D Earth

### 3D Features
- Interactive 3D computer model
- Rotating 3D Earth
- Animated starfield
- Smooth camera movements
- Particle effects
- Responsive 3D rendering

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd my-portfolio/p5
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:5173](http://localhost:5173) (Vite default port)

## 📁 Project Structure

```
p5/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Hero with 3D computer
│   │   ├── About.jsx              # About section
│   │   ├── Tech.jsx               # Technology showcase
│   │   ├── Experience.jsx         # Experience timeline
│   │   ├── Works.jsx              # Projects showcase
│   │   ├── Feedbacks.jsx          # Testimonials
│   │   ├── Contact.jsx            # Contact form with 3D Earth
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── Loader.jsx             # Loading component
│   │   └── canvas/
│   │       ├── Computers.jsx      # 3D computer model
│   │       ├── Earth.jsx           # 3D Earth model
│   │       ├── Stars.jsx           # Starfield
│   │       └── Ball.jsx            # 3D ball component
│   ├── assets/
│   │   ├── tech/                  # Technology icons
│   │   ├── company/               # Company logos
│   │   └── *.png, *.svg           # Other assets
│   ├── constants/
│   │   └── index.js               # Constants and profile data
│   ├── hoc/
│   │   └── SectionWrapper.jsx     # Higher-order component
│   ├── utils/
│   │   └── motion.js              # Animation variants
│   ├── styles.js                  # Style constants
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # Entry point
├── public/
│   ├── desktop_pc/                # 3D computer model files
│   ├── planet/                    # 3D Earth model files
│   ├── favicon.ico                # Favicon
│   ├── favicon.png                # Favicon PNG
│   └── MainLogo.png               # Logo
├── profile.json                   # Portfolio data
├── vite.config.js                 # Vite configuration
├── tailwind.config.cjs            # Tailwind configuration
└── package.json                   # Dependencies
```

## 🎨 Customization

### Updating Profile Data

Edit `profile.json` to update:
- Personal information
- About section
- Skills and technologies
- Projects
- Experience timeline
- Testimonials
- Contact information

### 3D Models

3D models are located in `public/`:
- **Computer Model**: `public/desktop_pc/` (GLTF format)
- **Earth Model**: `public/planet/` (GLTF format)

To add custom models:
1. Add GLTF/GLB files to `public/`
2. Import and use in canvas components with React Three Fiber

### Styling

- **Tailwind CSS**: Configure in `tailwind.config.cjs`
- **Style Constants**: Edit `src/styles.js`
- **Component Styles**: Use Tailwind classes

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Three Fiber** - React renderer for Three.js
- **Three.js** - 3D graphics library
- **@react-three/drei** - Useful helpers for R3F

### Styling
- **Tailwind CSS** - Utility-first CSS

### Animations
- **Framer Motion** - Animation library
- **React Tilt** - Tilt effect component

### UI Components
- **React Vertical Timeline** - Timeline component
- **EmailJS** - Contact form email service

### Utilities
- **Maath** - Math utilities for 3D
- **React Router DOM** - Routing (if needed)

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deployment

#### Vercel (Recommended)
1. Push to GitHub
2. Import on Vercel
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy automatically

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

#### Other Platforms
- AWS Amplify
- Railway
- Render
- Any static hosting platform

## 🎮 3D Performance Tips

1. **Optimize Models**: Use compressed GLTF files
2. **Reduce Polygons**: Simplify 3D models
3. **Texture Compression**: Compress textures
4. **Lazy Loading**: Load 3D models on demand
5. **Frame Rate**: Target 60fps
6. **Suspense**: Use React Suspense for 3D components

## 📱 Browser Support

- Chrome (latest) - Full support
- Firefox (latest) - Full support
- Safari (latest) - Full support
- Edge (latest) - Full support
- Mobile browsers - Limited 3D support

## 🔧 Configuration

### Vite Config

Edit `vite.config.js` for:
- Build options
- Plugin configuration
- Server options

### Tailwind Config

Edit `tailwind.config.cjs` for:
- Custom colors
- Fonts
- Breakpoints
- Plugins

### Environment Variables

Create `.env` file for EmailJS (optional):

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

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

- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- 3D graphics with [Three.js](https://threejs.org/) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)

---

**Last Updated**: December 2024
