export interface Personal {
  name: string
  title: string
  greeting: string
  email: string
  location: string
  portfolioUrl?: string
  socialLinks: {
    github: string
    linkedin: string
  }
  cv: {
    pdf: string
    docx: string
  }
}

export interface ProfessionalExperience {
  company: string
  role: string
  duration: string
  status: string
  description: string
}

export interface TechnicalExpertise {
  languages: Array<{ name: string; tooltip: string }>
  frontend: Array<{ name: string; tooltip: string }>
  backend: Array<{ name: string; tooltip: string }>
  mobileDesktop: Array<{ name: string; tooltip: string }>
  databases: Array<{ name: string; tooltip: string }>
  devops: Array<{ name: string; tooltip: string }>
}

export interface About {
  summary: string
  professionalExperience: ProfessionalExperience[]
  technicalExpertise: TechnicalExpertise
  education: {
    degree: string
  }
  languages: Array<{ name: string; level: string }>
  topSkills: Array<{ name: string; percentage: number }>
}

export interface Skill {
  name: string
  percentage: number
}

export interface Skills {
  frontend: Skill[]
  backend: Skill[]
  databases: Skill[]
  mobileDesktop: Skill[]
  devops: Skill[]
}

export interface ExperienceTimeline {
  date: string
  role: string
  company: string
  description: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  image?: string
  description: string
  duration: string
  role: string
  status: string
  technologies: string[]
  features: string[]
  link?: string
  link2?: string
  github?: string
  playStore?: string
  appStore?: string
  badges: Array<{ type: string; text: string }>
  shortDescription: string
}

export interface Service {
  title: string
  icon: string
  description: string
}

export interface Testimonial {
  text: string
  author: string
  role: string
}

export interface Contact {
  title: string
  message: string
  location: string
  email: string
  portfolioUrl?: string
  github: string
  linkedin: string
}

export interface ProfileData {
  personal: Personal
  about: About
  skills: Skills
  experienceTimeline: ExperienceTimeline[]
  freelance: {
    title: string
    subtitle: string
    description: string
  }
  services: Service[]
  projects: Project[]
  testimonials: Testimonial[]
  contact: Contact
  seo: {
    title: string
    description: string
    keywords: string
    author: string
    og: {
      type: string
      url?: string
      title: string
      description: string
      image: string
      imageWidth: number
      imageHeight: number
      imageAlt: string
    }
    twitter: {
      card: string
      url?: string
      title: string
      description: string
      image: string
    }
    structuredData: any
  }
  footer: {
    quickLinks: Array<{ text: string; href: string }>
    resources: Array<{ text: string; href: string; download?: boolean; external?: boolean }>
    copyright: string
  }
  metadata: {
    exportDate: string
    version: string
    description: string
  }
}

