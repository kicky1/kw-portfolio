import sevenet from "../../../public/sevenet.png";
import extendui from "../../../public/extendui.png";
import { JobInformation } from "./job-information";
import { motion } from "framer-motion";
import { linearAnimation } from "@/lib/animations";

export function ExperienceTimeline() {
    const experiences = [
        { 
            title: "Co-Founder", 
            logo: extendui.src,
            company: "Extend UI", 
            period: "2024 - Present",
            description: "Co-founded ExtendUI, a comprehensive library of user interface components designed to accelerate web development and enhance user experiences.",
            fullDescription: "",
            custom: 0,
        },
        { 
            title: "Mid Software Developer", 
            logo: sevenet.src,
            company: "Sevenet S.A.", 
            period: "2022 - Present",
            description: "Building modern web apps using React and collaborating on scalable solutions with Docker and nginx.",
            fullDescription: 
                "As a mid-level software developer, I contributed across various domains. I created detailed project and product documentation that supported development and delivery. I played a key role in web app development using React, Vue, and Vanilla JavaScript, while engaging in testing and debugging. My project management skills enabled me to create plans, track progress, and ensure timely deliveries while effectively communicating with stakeholders. I also focused on UI/UX design, wireframing, and prototyping, creating user-friendly interfaces. Additionally, I collaborated closely with customers, gathering feedback and ensuring their needs were met for overall product success.",
            custom: 1
        },
        { 
            title: "Junior Software Developer", 
            logo: sevenet.src,
            company: "Sevenet S.A.", 
            period: "2020 - 2022",
            description: "Developed interactive UIs with React and Vue. Gained experience in DevOps and team workflows.",
            fullDescription: 
                "As a junior developer, I played a key role in developing web apps using React, Vue, and JavaScript. I actively participated in writing, testing, and debugging code to ensure application performance. I also contributed to code reviews and used project management tools to track progress, meeting deadlines and milestones efficiently."
            , custom: 2
        },
        { 
            title: "Intern", 
            logo: sevenet.src,
            company: "Sevenet S.A.", 
            period: "2020",
            description: "Assisted with frontend tasks and basic design. Gained hands-on experience with modern development tools.",
            fullDescription: 
                "During my internship, I helped the development team by building small UI components and troubleshooting code under senior developer supervision. I learned React fundamentals and worked with tools like Git for version control and Docker for deployment. I also collaborated with designers on UI/UX tasks, creating wireframes in Figma. This experience laid the foundation for my career as a software developer."
            , custom: 3
        },
    ];

    return (
      <div className="space-y-4 bg-muted">
        {experiences.map((exp, index) => (
          <motion.div key={index} custom={exp.custom} variants={linearAnimation}>
            <JobInformation 
              logo={exp.logo} 
              title={exp.title} 
              company={exp.company} 
              period={exp.period} 
              description={exp.description} 
            />
          </motion.div>
        ))}
      </div>
    );
}
