import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { Vuejs } from "@styled-icons/boxicons-logos/Vuejs";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Adobexd } from "@styled-icons/simple-icons/Adobexd";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Hive } from "@styled-icons/fa-brands/Hive";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Cisco } from "@styled-icons/simple-icons/Cisco";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Aws } from "@styled-icons/boxicons-logos/Aws";
import {
  Css3,
  Javascript,
  Html5,
  Typescript,
  Figma,
  Flask,
  Docker,
  Sass,
  Markdown,
  Nextdotjs,
  Nuxtdotjs,
  Supabase,
  Firebase,
  Tailwindcss,
  Mui,
  Graphql,
} from "@styled-icons/simple-icons";


export const GALLERY_IMAGES = [
  { id: 1, src: "/reaper.png", alt: "Project 1", width: 400, height: 400 },
  { id: 2, src: "/pingu.png", alt: "Project 2", width: 400, height: 400 },
  { id: 3, src: "/frog.png", alt: "Project 3", width: 400, height: 400 },
  { id: 4, src: "/chicken.png", alt: "Project 4", width: 500, height: 500 },
  { id: 5, src: "/alric.gif", alt: "Project 5", width: 400, height: 400 },
] as const;

export const EXPERIENCE_DATA = [
  {
    title: "Co-Founder",
    logo: "/extendui.png",
    company: "Extend UI",
    period: "2024 - Present",
    description:
      "Co-founded ExtendUI, a comprehensive library of user interface components designed to accelerate web development and enhance user experiences.",
    fullDescription: "",
    custom: 0,
  },
  {
    title: "Mid Software Developer",
    logo: "/sevenet.png",
    company: "Sevenet S.A.",
    period: "2022 - Present",
    description:
      "Building modern web apps using React and collaborating on scalable solutions with Docker and nginx.",
    fullDescription:
      "As a mid-level software developer, I contributed across various domains. I created detailed project and product documentation that supported development and delivery. I played a key role in web app development using React, Vue, and Vanilla JavaScript, while engaging in testing and debugging. My project management skills enabled me to create plans, track progress, and ensure timely deliveries while effectively communicating with stakeholders. I also focused on UI/UX design, wireframing, and prototyping, creating user-friendly interfaces. Additionally, I collaborated closely with customers, gathering feedback and ensuring their needs were met for overall product success.",
    custom: 1,
  },
  {
    title: "Junior Software Developer",
    logo: "/sevenet.png",
    company: "Sevenet S.A.",
    period: "2020 - 2022",
    description:
      "Developed interactive UIs with React and Vue. Gained experience in DevOps and team workflows.",
    fullDescription:
      "As a junior developer, I played a key role in developing web apps using React, Vue, and JavaScript. I actively participated in writing, testing, and debugging code to ensure application performance. I also contributed to code reviews and used project management tools to track progress, meeting deadlines and milestones efficiently.",
    custom: 2,
  },
  {
    title: "Intern",
    logo: "/sevenet.png",
    company: "Sevenet S.A.",
    period: "2020",
    description:
      "Assisted with frontend tasks and basic design. Gained hands-on experience with modern development tools.",
    fullDescription:
      "During my internship, I helped the development team by building small UI components and troubleshooting code under senior developer supervision. I learned React fundamentals and worked with tools like Git for version control and Docker for deployment. I also collaborated with designers on UI/UX tasks, creating wireframes in Figma. This experience laid the foundation for my career as a software developer.",
    custom: 3,
  },
];

export const PROJECT_DATA = [
  {
    name: "1UP",
    web: "https://oneup-pi.vercel.app/",
    image: "/1up.png",
    badge: [
      { name: "Next.js 13" },
      { name: "Typescript" },
      { name: "Zustand" },
      { name: "Mantine" },
      { name: "TanStack" },
      { name: "Supabase" },
    ],
    github: "https://github.com/Cartel-1UP/1UP-website",
    description: "Short description 1",
    fullDescription: "Full description",
  },
  {
    name: "Rick&Morty",
    web: "https://wiki-rickmorty.vercel.app/",
    image: "/rickmorty.png",
    badge: [
      { name: "Next.js 14" },
      { name: "Typescript" },
      { name: "GraphQL" },
      { name: "TanStack" },
      { name: "Shadcn" },
      { name: "Tailwind" },
    ],
    github: "https://github.com/kicky1/rickmorty-wiki",
    description: "Short description 2",
    fullDescription: "Full description",
  },
  {
    name: "Interview Tasks",
    web: "https://interviewtasks.vercel.app/",
    image: "/interviewtasks.png",
    badge: [
      { name: "Next.js 13" },
      { name: "Typescript" },
      { name: "JavaScript" },
      { name: "Tailwind" },
    ],
    github: "https://github.com/kicky1/interview",
    description: "Short description 3",
    fullDescription: "Full description",
  },
  {
    name: "Bingo",
    web: "https://kith-bingo.vercel.app/",
    image: "/bingo.png",
    badge: [
      { name: "Nextjs 14" },
      { name: "Typescript" },
      { name: "Shadcn" },
      { name: "Clerk" },
      { name: "Drizzly" },
      { name: "Postgress" },
    ],
    github: "https://github.com/kicky1/bingo",
    description: "Short description 4",
    fullDescription: "Full description",
  },
  {
    name: "eTrener",
    image: "",
    badge: [
      { name: "Python" },
      { name: "OpenCV" },
      { name: "Tkinter" },
      { name: "Pandas" },
      { name: "Openpose" },
    ],
    github: "https://github.com/kicky1/eTrener2",
    description: `Short description 5`,
    fullDescription: "Full description",
  },
  {
    name: "Activity Recognition",
    image: "",
    badge: [
      { name: "Python" },
      { name: "React.js" },
      { name: "CNN" },
      { name: "MLP" },
      { name: "RBM" },
      { name: "Tensorflow" },
      { name: "Keras" },
    ],
    github: "https://github.com/kicky1/ActivityRecognition",
    description: `Short description 6`,
    fullDescription: "Full description",
  },
];


export const CONTACT_DATA = [
  { icon: Github, label: "GitHub", href: "#", custom: 5 },
  { icon: Linkedin, label: "LinkedIn", href: "#", custom: 6 },
  { icon: Twitter, label: "Twitter", href: "#", custom: 7 },
  { icon: Mail, label: "Email", href: "mailto:john@example.com", custom: 8 },
];


export const SKILLS_DATA = [
  { name: "HTML", icon: <Html5 />, color: "#e34c26" },
  { name: "JavaScript", icon: <Javascript />, color: "#f0db4f" },
  { name: "TypeScript", icon: <Typescript />, color: "#007acc" },
  { name: "React.js", icon: <LogoReact />, color: "#61DBFB" },
  { name: "Next.js", icon: <Nextdotjs />, color: "#ffffff" },
  { name: "Vue.js", icon: <Vuejs />, color: "#41B883" },
  { name: "Nuxt.js", icon: <Nuxtdotjs />, color: "#41b883" },
  { name: "GraphQL", icon: <Graphql />, color: "#B82357" },
  { name: "Python", icon: <Python />, color: "#FFE873" },
  { name: "Flask", icon: <Flask />, color: "#ffffff" },
  { name: "Nodejs", icon: <Nodejs />, color: "#68A063" },
  { name: "Supabase", icon: <Supabase />, color: "#4DB33D" },
  { name: "Firebase", icon: <Firebase />, color: "#f0db4f" },
  { name: "AWS", icon: <Aws />, color: "#FF9900" },
  { name: "Docker", icon: <Docker />, color: "#0db7ed" },
  { name: "Sass", icon: <Sass />, color: "#B82357" },
  { name: "GIT", icon: <Github />, color: "#ffffff" },
  { name: "CSS", icon: <Css3 />, color: "#2965f1" },
  { name: "TailwindCss", icon: <Tailwindcss />, color: "#4FCCFE" },
  { name: "MUI", icon: <Mui />, color: "#4FCCFE" },
  { name: "Markdown", icon: <Markdown />, color: "#ffffff" },
  { name: "Photoshop", icon: <Adobephotoshop />, color: "#4FCCFE" },
  { name: "Figma", icon: <Figma />, color: "#A259FF" },
  { name: "AdobeXD", icon: <Adobexd />, color: "#B82357" },
  { name: "Cisco", icon: <Cisco />, color: "#049fd9" },
  { name: "Hive", icon: <Hive />, color: "#B82357" },
  { name: "Redux", icon: <Redux />, color: "#764abc" },
];
