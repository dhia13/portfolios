# 3D Portfolio - Next.js 13 with Three.js

An immersive 3D portfolio website built with **Next.js 13**, **React Three Fiber**, and **Three.js**. Features interactive 3D elements, smooth animations, and a modern design.

![Portfolio Preview](https://via.placeholder.com/800x400)

## ✨ Features

### Core Features
- 🎮 **3D Graphics** - Interactive 3D models and animations using Three.js
- 🎨 **Modern Design** - Clean, professional UI with creative elements
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Next.js 13** - React framework with Pages Router
- 🎭 **Smooth Animations** - Animated text and UI elements
- 📊 **Data-Driven** - Content managed through `profile.json`
- 🔍 **SEO Optimized** - Meta tags and structured data
- 🎯 **Performance** - Optimized 3D rendering and code splitting

### Sections
- **Home** - Animated introduction with 3D elements
- **About** - Professional summary and languages
- **Skills** - Technical skills showcase
- **Projects** - Portfolio projects with details
- **Contact** - Contact information and form

### 3D Features
- Interactive 3D models
- Smooth camera movements
- Particle effects
- Lighting effects
- Responsive 3D rendering

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd my-portfolio/p3
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
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
p3/
├── src/
│   ├── Components/
│   │   ├── Main/
│   │   │   ├── Home.jsx          # Home section with 3D elements
│   │   │   ├── About.jsx         # About section
│   │   │   ├── Skills.jsx         # Skills showcase
│   │   │   ├── Projects.jsx       # Projects section
│   │   │   └── Contact.jsx       # Contact section
│   │   ├── Ui/
│   │   │   ├── Header.jsx        # Header component
│   │   │   ├── Navigation.jsx    # Navigation menu
│   │   │   └── Ui.jsx            # UI components
│   │   └── Utils/
│   │       ├── AnimatedText/     # Animated text components
│   │       ├── FlipIcon.jsx       # Icon animations
│   │       └── SingleSkill.jsx    # Skill component
│   ├── pages/
│   │   ├── _app.js               # App wrapper
│   │   ├── _document.js          # Document structure
│   │   └── index.js              # Main page
│   └── styles/
│       ├── globals.css           # Global styles
│       └── body.module.css      # Body styles
├── public/
│   ├── icons/                    # Icon assets
│   ├── images/                   # Image assets
│   ├── favicon.ico               # Favicon
│   └── MainLogo.png              # Logo
├── profile.json                  # Portfolio data
├── next.config.js               # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
└── package.json                  # Dependencies
```

## 🎨 Customization

### Updating Profile Data

Edit `profile.json` to update:
- Personal information
- About section
- Skills
- Projects
- Contact information

### 3D Models

3D models are located in `public/` directory. To add custom models:
1. Add GLTF/GLB files to `public/`
2. Import and use in components with React Three Fiber

### Styling

- **Tailwind CSS**: Configure in `tailwind.config.js`
- **Global Styles**: Edit `src/styles/globals.css`
- **Component Styles**: Use CSS modules or Tailwind classes

## 🛠️ Tech Stack

### Core
- **Next.js 13** - React framework
- **React 18** - UI library
- **React Three Fiber** - React renderer for Three.js
- **Three.js** - 3D graphics library

### Styling
- **Tailwind CSS** - Utility-first CSS
- **CSS Modules** - Component-scoped styles

### Animations
- **React Spring** - Animation library
- **Animate.css** - CSS animations
- **Custom animations** - Animated text components

### UI Libraries
- **Flowbite** - UI components
- **React Icons** - Icon library
- **React Tooltip** - Tooltip component
- **Styled Components** - CSS-in-JS

### Utilities
- **Axios** - HTTP client
- **React Creative Cursor** - Custom cursor

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deployment

#### Vercel (Recommended)
1. Push to GitHub
2. Import on Vercel
3. Deploy automatically

#### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

## 🎮 3D Performance Tips

1. **Optimize Models**: Use compressed GLTF files
2. **Lazy Loading**: Load 3D models on demand
3. **Reduce Polygons**: Simplify complex models
4. **Texture Optimization**: Compress textures
5. **Frame Rate**: Target 60fps for smooth experience

## 📱 Browser Support

- Chrome (latest) - Full support
- Firefox (latest) - Full support
- Safari (latest) - Full support
- Edge (latest) - Full support
- Mobile browsers - Limited 3D support

## 🔧 Configuration

### Next.js Config

Edit `next.config.js` for:
- Image optimization
- Webpack configuration
- Environment variables

### Tailwind Config

Edit `tailwind.config.js` for:
- Custom colors
- Fonts
- Breakpoints
- Plugins

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
- 3D graphics with [Three.js](https://threejs.org/) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Last Updated**: December 2024
