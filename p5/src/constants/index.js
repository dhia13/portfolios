import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import profileData from "../../profile.json";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Map experience companies to icons
const companyIcons = {
  "Care-Me Platform": meta,
  "BistroDZ": shopify,
  "Various Clients": starbucks,
};

const experiences = profileData.experienceTimeline.map((exp) => ({
  title: exp.role,
  company_name: exp.company,
  icon: companyIcons[exp.company] || meta,
  iconBg: "#383E56",
  date: exp.date,
  points: exp.points || [exp.description],
}));

const testimonials = profileData.testimonials.map((testimonial) => ({
  testimonial: testimonial.testimonial,
  name: testimonial.name,
  designation: testimonial.designation,
  company: testimonial.company,
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=915EFF&color=fff`,
}));

// Map project images
const projectImages = {
  carrent: carrent,
  jobit: jobit,
  tripguide: tripguide,
};

const projects = profileData.projects.map((project) => ({
  name: project.name,
  description: project.description,
  tags: project.tags,
  image: projectImages[project.image] || carrent,
  source_code_link: project.source_code_link,
}));

export { services, technologies, experiences, testimonials, projects };
