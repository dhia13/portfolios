# Creative Portfolio - Next.js with Glowing Effects

A creative portfolio website built with **Next.js** featuring glowing text effects, bouncy animations, and modern UI/UX design. Showcases projects and skills with an engaging visual experience.

![Portfolio Preview](https://via.placeholder.com/800x400)

## ✨ Features

### Core Features
- ✨ **Glowing Text Effects** - Eye-catching animated text with glow effects
- 🎨 **Creative Design** - Modern, unique UI with creative elements
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Next.js** - React framework with Pages Router
- 🎭 **Smooth Animations** - Bouncy text, typewriter effects, and transitions
- 📊 **Data-Driven** - Content managed through `profile.json`
- 🎯 **Performance** - Optimized rendering and code splitting
- 🌊 **Background Effects** - Fluid backgrounds and matrix effects

### Sections
- **Header** - Animated header with glowing text
- **About** - Professional summary and languages
- **Projects** - Portfolio projects showcase
- **Contact** - Contact information and floating social links

### Animation Features
- Glowing text animations
- Bouncy text effects
- Typewriter text
- Fluid background animations
- Matrix background effect
- Smooth page transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd my-portfolio/p4
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
p4/
├── Components/
│   ├── AnimatedText/
│   │   ├── GlowingText/          # Glowing text effects
│   │   ├── BouncyText/           # Bouncy text animations
│   │   └── TypeWriterText/       # Typewriter effect
│   ├── Background/
│   │   ├── FluidsBg/             # Fluid background
│   │   ├── MatrixBg/             # Matrix background
│   │   └── TriangleBg/           # Triangle background
│   ├── AboutMe/
│   │   └── Components/
│   │       ├── About.js          # About section
│   │       ├── MySkills.js       # Skills component
│   │       └── SingleSkill.js    # Single skill item
│   ├── MyProjects/
│   │   ├── MyProjects.js         # Projects section
│   │   └── SingleProject.js      # Single project card
│   ├── Contact/
│   │   └── Contact.js            # Contact form
│   ├── ContactFloters.js         # Floating social links
│   ├── Header/
│   │   └── Header.js             # Header component
│   ├── Navbar.js                 # Navigation bar
│   └── PageIndicator.js          # Page scroll indicator
├── pages/
│   ├── _app.js                   # App wrapper
│   ├── _document.js              # Document structure
│   └── index.js                  # Main page
├── public/
│   ├── images/                   # Image assets
│   ├── favicon.ico               # Favicon
│   └── favicon.png               # Favicon PNG
├── styles/
│   └── globals.css               # Global styles
├── profile.json                  # Portfolio data
├── next.config.js               # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
└── package.json                  # Dependencies
```

## 🎨 Customization

### Updating Profile Data

Edit `profile.json` to update:
- Personal information (name, title, greeting)
- About section (summary, languages)
- Projects (all 7 projects)
- Contact information

### Animation Customization

- **Glowing Text**: Edit `Components/AnimatedText/GlowingText/`
- **Bouncy Text**: Edit `Components/AnimatedText/BouncyText/`
- **Typewriter**: Edit `Components/AnimatedText/TypeWriterText/`
- **Backgrounds**: Edit `Components/Background/`

### Styling

- **Tailwind CSS**: Configure in `tailwind.config.js`
- **Global Styles**: Edit `styles/globals.css`
- **Component Styles**: CSS modules in component directories

## 🛠️ Tech Stack

### Core
- **Next.js 12** - React framework
- **React 18** - UI library

### Styling
- **Tailwind CSS** - Utility-first CSS
- **CSS Modules** - Component-scoped styles

### Animations
- **Typewriter Effect** - Typewriter text library
- **Custom CSS Animations** - Glowing and bouncy effects

### UI Libraries
- **Material Tailwind** - UI components
- **Tailwind UI** - UI components

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

## 🎯 Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Lazy Load Animations**: Load on scroll
3. **Reduce Animation Complexity**: For better performance
4. **Code Splitting**: Automatic with Next.js
5. **Minimize CSS**: Purge unused Tailwind classes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Configuration

### Next.js Config

Edit `next.config.js` for:
- Image domains
- Webpack configuration
- Environment variables

### Tailwind Config

Edit `tailwind.config.js` for:
- Custom colors
- Fonts
- Breakpoints
- Animation utilities

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
- Animations with custom CSS and [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect)

---

**Last Updated**: December 2024
