# Portfolio Projects Collection

A collection of modern portfolio websites showcasing the work and skills of **Sahhar Dhia Eddine** - Lead / Senior Fullstack Developer.

## 📋 Overview

This repository contains 6 different portfolio implementations (plus the original template p5 was built from), each with unique designs and technologies, all sharing the same profile data from `profile.json` files. All portfolios are synchronized to display consistent information across different design styles.

## 🎯 Portfolio Projects

### **p1** - Classic HTML/CSS/JavaScript Portfolio
- **Technology**: Vanilla HTML, CSS, JavaScript
- **Features**: 
  - Responsive design
  - Dark theme support
  - Project modals
  - Contact form with PHP
  - Skill bars animation
- **Location**: `p1/`
- **Run**: Open `index.html` in a browser

### **p2** - Next.js 14 Modern Portfolio
- **Technology**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Features**:
  - Dark/Light theme toggle
  - Animated sections
  - Responsive design
  - SEO optimized
  - Type-safe with TypeScript
- **Location**: `p2/`
- **Run**: 
  ```bash
  cd p2
  npm install
  npm run dev
  ```

### **p3** - Next.js 13 Portfolio with 3D Elements
- **Technology**: Next.js 13, React, Three.js, Tailwind CSS
- **Features**:
  - 3D animations with React Three Fiber
  - Animated text components
  - Interactive UI elements
  - Modern design
- **Location**: `p3/`
- **Run**:
  ```bash
  cd p3
  npm install
  npm run dev
  ```

### **p4** - Next.js Creative Portfolio
- **Technology**: Next.js, React, Tailwind CSS
- **Features**:
  - Glowing text effects
  - Bouncy animations
  - Creative background effects
  - Modern UI/UX
- **Location**: `p4/`
- **Run**:
  ```bash
  cd p4
  npm install
  npm run dev
  ```

### **p5** - React 3D Developer Portfolio
- **Technology**: React, Vite, Three.js, Framer Motion, Tailwind CSS
- **Features**:
  - 3D computer canvas
  - Interactive 3D elements
  - Smooth animations
  - Modern developer portfolio design
- **Location**: `p5/`
- **Run**:
  ```bash
  cd p5
  npm install
  npm run dev
  ```

### **p5-original** - Upstream 3D Developer Portfolio template
- **Source**: Unmodified [adrianhajdin/project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio), kept for reference; `p5/` is the customized version
- **Technology**: React, Vite, Three.js, Framer Motion, Tailwind CSS
- **Location**: `p5-original/`
- **Run**:
  ```bash
  cd p5-original
  npm install
  npm run dev
  ```

### **p6** - Next.js 3D Forest Portfolio
- **Technology**: Next.js 14 (app router), React Three Fiber, Framer Motion, Tailwind CSS, EmailJS
- **Features**:
  - 3D forest scene
  - Contact form via EmailJS
- **Location**: `p6/`
- **Run**:
  ```bash
  cd p6
  cp .env.example .env.local   # EmailJS keys and GitHub stats URLs
  npm install
  npm run dev
  ```

## 📊 Profile Data Structure

All portfolios use a centralized `profile.json` file containing:

- **Personal Information**: Name, title, location, contact details
- **About Section**: Summary, professional experience, languages
- **Skills**: Frontend, backend, databases, mobile/desktop, DevOps
- **Projects**: 7 projects including Care-Me, BistroDZ, DOPM, Construction Management, Pdf-Extractor, HermesLib, and Geo-Detection
- **Experience Timeline**: Work history with detailed points
- **Testimonials**: Client feedback
- **Contact Information**: Email, social links, location

## 🎨 Shared Assets

- **Logo**: `MainLogo.png` - Used across all portfolios
- **Favicon**: Generated from MainLogo.png (favicon.ico & favicon.png)
- **CV Files**: PDF and DOCX versions available

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhia13/portfolios.git
   cd portfolios
   ```

2. **Choose a portfolio** and navigate to its directory

3. **Install dependencies** (for React/Next.js projects)
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 📝 Updating Profile Data

To update your profile information across all portfolios:

1. Edit the `profile.json` file in each portfolio directory (p2, p3, p4, p5)
2. For p1, update `portfolio-data.json`
3. All changes will be reflected in the respective portfolio

## 🛠️ Technologies Used

### Frontend
- React, Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber

### Backend (for contact forms)
- PHP (p1)
- Nodemailer / SMTP (p2)
- EmailJS (p5, p6)

### Build Tools
- Vite (p5, p5-original)
- Next.js Build System (p2, p3, p4, p6)

## 📱 Responsive Design

All portfolios are fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and personal portfolio collection.

## 👤 Author

**Sahhar Dhia Eddine**
- Lead / Senior Fullstack Developer
- Email: dhiakizaro@gmail.com
- Location: Algiers, Algeria
- GitHub: [@dhia13](https://github.com/dhia13)
- LinkedIn: [Sahhar Dhia Eddine](https://www.linkedin.com/in/sahhar-dhia-eddine)

## 📌 Notes

- Each portfolio is independent and can be deployed separately
- All portfolios share the same profile data structure for consistency
- The favicon is generated from MainLogo.png and used across all projects
- Dark theme is available in p2 with a toggle functionality

---

**Last Updated**: December 2024

