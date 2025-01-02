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
  // {
  //   title: "Co-Founder",
  //   logo: "/extendui.png",
  //   company: "Extend UI",
  //   period: "2024 - Present",
  //   description:
  //     "Co-founded ExtendUI, a comprehensive library of user interface components designed to accelerate web development and enhance user experiences.",
  //   fullDescription: "As the co-founder of ExtendUI, I spearheaded the development of a comprehensive library of reusable user interface components aimed at streamlining web application development. Built on top of the shadcn/ui framework, ExtendUI offers a diverse range of pre-built, customizable components—including buttons, inputs, selects, commands, and date pickers—designed to enhance performance and facilitate seamless integration into React and Next.js projects. Our focus on performance optimization and ease of integration has enabled developers to accelerate their workflows and deliver high-quality user experiences more efficiently.",
  //   custom: 0,
  // },
  {
    title: "Mid Software Developer",
    logo: "/sevenet.png",
    company: "Sevenet S.A.",
    period: "2022 - Present",
    description:
      "Web app development (React, Vue, Vanilla JavaScript), project management, and UX/UI design. Skilled in delivering high-quality projects through testing, debugging, and effective communication with stakeholders.",
    fullDescription:
      "As a mid-level software developer, I have honed my skills in creating comprehensive project documentation, contributing to efficient software development and delivery. I specialize in developing web applications using React, Vue, and Vanilla JavaScript, while excelling in testing and debugging to ensure quality outcomes. My project management expertise includes creating detailed project plans, managing timelines and milestones, and maintaining clear communication with stakeholders to ensure successful delivery. Additionally, my strong understanding of UX/UI allows me to design intuitive and user-friendly interfaces through wireframing and prototyping. Exceptional communication skills enable me to effectively address customer needs, providing support that ensures satisfaction and contributes to overall product success.",
    custom: 0,
  },
  {
    title: "Junior Software Developer",
    logo: "/sevenet.png",
    company: "Sevenet S.A.",
    period: "2020 - 2022",
    description:
      "Developed interactive UIs with React and Vue. Gained experience in DevOps (Docker and Nginx) and team workflows.",
    fullDescription:
      "As a junior team member, I played an integral role in applications development using React, Vue, and Vanilla JavaScript. Collaborating closely with the team, I actively participated in writing, testing, and debugging code to ensure the functionality and efficiency of the applications. Moreover, I engaged in code reviews and effectively utilized project management tools to streamline progress tracking, ensuring that project timelines and milestones were met successfully.",
    custom: 1,
  },
  {
    title: "Intern",
    logo: "/sevenet.png",
    company: "Sevenet S.A.",
    period: "2020",
    description:
      "Assisted with frontend tasks and basic design. Gained hands-on experience with modern development tools.",
    fullDescription:
      "During my internship, I helped the development team by building small UI components and troubleshooting code under senior developer supervision. I learned React fundamentals and worked with tools like Git for version control and CI/CD tools for deployment. I also collaborated with designers on UI/UX tasks, creating wireframes in Figma. This experience laid the foundation for my career as a software developer.",
    custom: 2,
  },
];

export const PROJECT_DATA = [
  {
    name: "ExtendUI",
    web: "http://extend-ui.com/",
    image: "/extenduihome.png",
    badge: [
      { name: "Next.js 15" },
      { name: "Typescript" },
      { name: "Tailwind" },
      { name: "Motion"},
      { name: "MDX" },
      { name: "TanStack" }
    ],
    github: "http://animated.extend-ui.com/",
    description: "A library of user interface components designed to accelerate web development and enhance user experiences.",
    fullDescription: "ExtendUI provides a set of well-designed, flexible UI components that help developers build high-quality web applications efficiently. Its components range from simple buttons and forms to more complex features like modal windows and navigation elements. By using ExtendUI, developers can save time and effort in creating aesthetically pleasing and functional interfaces. It also offers responsive design features, making it ideal for modern, mobile-friendly websites."
  },
  {
    name: "Animated",
    web: "https://interviewtasks.vercel.app/",
    image: "/animated.png",
    badge: [
      { name: "Next.js 15" },
      { name: "Typescript" },
      { name: "Tailwind" },
      { name: "Stripe"},
      { name: "Supabase"},
      { name: "Motion"}
    ],
    github: "",
    description: "An app that turns code into animations to visually demonstrate how code changes.",
    fullDescription: "Animated helps developers and educators create step-by-step code animations that visually show the transformation of code in real-time. This tool is designed to make learning and teaching code easier by providing dynamic, engaging presentations of how coding changes affect the outcome. It is especially useful for tutorials, documentation, or explaining complex concepts in a more accessible format. By turning abstract code modifications into clear, visual animations, Animated offers a more effective way to communicate coding principles."
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
    description: "A platform offering a variety of interview tasks, designed to help developers prepare for coding interviews with challenges of varying difficulty levels.",
    fullDescription: "This website provides a collection of coding tasks ranging from easy to difficult, designed to help users prepare for interviews. The tasks cover different problem-solving areas such as UI creation, data handling, game development, and algorithm challenges, offering interactive solutions to practice. Whether you're a beginner or an advanced coder, this platform has tasks to enhance your coding skills and interview readiness.",
  },
  {
    name: "Activity Recognition",
    image: "/placeholder.png",
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
    description: `Project that uses machine learning to recognize and classify human activities from sensor data.`,
    fullDescription: "ActivityRecognition is a machine learning-based system that classifies human activities using data from accelerometers and gyroscope sensors. The project focuses on activity recognition, such as walking, running, or cycling, by training models on time-series data. It leverages advanced algorithms like Random Forests and Neural Networks to achieve high accuracy, making it ideal for applications like fitness tracking and health monitoring.",
  },
  {
    name: "eTrener",
    image: "/placeholder.png",
    badge: [
      { name: "Python" },
      { name: "OpenCV" },
      { name: "Tkinter" },
      { name: "Pandas" },
      { name: "Openpose" },
    ],
    github: "https://github.com/kicky1/eTrener2",
    description: `An application is an athlete training support system that uses image processing to analyze exercises in real-time, focusing on body part detection and reflex time measurement.`,
    fullDescription: "ETrener is a Python-based desktop application designed to assist athletes in training by analyzing movements through webcam-captured video. Using real-time multi-person 2D pose estimation, the system detects key body points during exercises like sit-ups and push-ups, ensuring correct form. It also measures response times with ball detection. This project is built with the CMU classification model for high accuracy and aims to help users track their physical performance and improve their reflexes through automated feedback.",
  },
  {
    name: "1UP",
    web: "https://oneup-pi.vercel.app/blog",
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
    description: "A blog platform where users can write articles and earn cryptocurrency rewards for their contributions.",
    fullDescription: "1UP is a decentralized blog platform that allows users to publish content, engage with the community, and earn cryptocurrencies as rewards. With an emphasis on rewarding creators, it offers a unique opportunity to monetize writing and share ideas with a growing network of like-minded individuals. Users can leverage the power of blockchain technology to earn while contributing valuable insights and knowledge to the digital space.",
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
    description: "A dynamic platform showcasing all characters from Rick and Morty.",
    fullDescription: "This site provides a comprehensive list of Rick and Morty characters, allowing users to easily browse detailed information about each one. Built with GraphQL, it offers seamless data retrieval, making the experience fast and interactive. Fans can explore their favorite characters with up-to-date info from the popular animated series.",
  },
];


export const CONTACT_DATA = [
  { icon: Github, label: "GitHub", href: "https://github.com/kicky1", custom: 5 },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/krzysztof-wicki-ba19571b5/", custom: 6 },
  { icon: Twitter, label: "Twitter", href: "https://x.com/CartelKicky", custom: 7 },
  { icon: Mail, label: "Email", href: "mailto:krzysztofwicki.it@gmail.com", custom: 8 },
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

export const ABOUT_DATA = {
  name: "Krzysztof Wicki",
  title: "Software Developer",
  description: "Software developer with over 5 years of professional experience building innovative solutions and optimizing digital products."
}
