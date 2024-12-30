'use client'
import { motion } from "framer-motion";
import { AboutMe } from "../sections/about-me";
import { ExperienceTimeline } from "../sections/experience-timeline";
import { Projects } from "../sections/projects";
import { Skills } from "../skills";
import { Contact } from "../sections/contact";


export const MobileLayout = () => {
  return (
      <motion.main
        initial="hidden"
        animate="visible"
        className={`bg-background/10 p-6 text-foreground xl:hidden`}
      >
        <section id="mobile-about" aria-label="About Me">
          <AboutMe isMobile/>
        </section>
        <section id="mobile-content" aria-label="Portfolio Content" className="my-4 flex flex-col">
          <div className="grid grid-cols-1 gap-4">
            <section id="mobile-experience" aria-label="Experience">
              <ExperienceTimeline isMobile/>
            </section>
            <section id="mobile-skills" aria-label="Skills">
              <Skills isMobile/>
            </section>
            <section id="mobile-projects" aria-label="Projects">
              <Projects isMobile/>
            </section>
            <section id="mobile-contact" aria-label="Contact">
              <Contact isMobile/>
            </section>
          </div>
        </section>
      </motion.main>
  );
};