'use client'

import { motion } from "framer-motion";
import { AboutMe } from "../sections/about-me";
import { ExperienceTimeline } from "../sections/experience-timeline";
import { Projects } from "../sections/projects";
import { ResumeLink } from "../resume-link";
import { Skills } from "../skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Contact } from "../sections/contact";
import { Gallery } from "../sections/gallery";

export const DesktopLayout = () => {
    return (
      <motion.main
        initial="hidden"
        animate="visible"
        className="grid h-screen w-screen grid-cols-[3fr_3fr] overflow-hidden bg-background/10 text-foreground max-xl:hidden"
      >
        <section id="left-panel" aria-label="Experience and Gallery" className="flex h-full flex-col">
          <Tabs
            defaultValue="experience"
            className="ml-6 mt-6 flex flex-col rounded-xl rounded-bl-none bg-muted py-6"
          >
            <TabsList className="grid w-full grid-cols-2 p-0 px-6 pb-4">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="h-full overflow-y-auto">
              <section id="experience">
                <ScrollArea className="h-[calc(100vh-12rem)] px-6">
                  <ExperienceTimeline />
                </ScrollArea>
              </section>
            </TabsContent>
            <TabsContent
              value="gallery"
              className="h-[calc(100vh-12rem)] overflow-y-auto"
            >
              <section id="gallery">
                <Gallery />
              </section>
            </TabsContent>
          </Tabs>
          <ResumeLink />
        </section>
        <section id="right-panel" aria-label="Portfolio Information" className="flex h-full flex-col overflow-hidden p-6">
          <div className="h-full space-y-3">
            <div className="grid h-60 grid-cols-[4fr_2fr] gap-3">
              <section id="aboutme-section">
                <AboutMe />
              </section>
              <section id="contact-section">
                <Contact />
              </section>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <section id="skills-section" className="flex h-full flex-col overflow-y-auto">
                <Skills />
              </section>
              <section id="projects-section" className="flex h-full flex-col overflow-y-auto">
                <Projects />
              </section>
            </div>
          </div>
        </section>
      </motion.main>
    );
  };