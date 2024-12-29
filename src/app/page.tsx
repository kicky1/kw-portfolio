"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceTimeline } from "./_components/experience-timeline";
import { Gallery } from "./_components/gallery";
import { AboutMe } from "./_components/about-me";
import { Contact } from "./_components/contact";
import { Skills } from "./_components/skills";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <>
      <motion.main
        initial="hidden"
        animate="visible"
        className="grid h-screen w-screen grid-cols-[3fr_3fr] overflow-hidden bg-background/10 text-foreground max-xl:hidden"
      >
        <section className="flex h-full flex-col">
          <Tabs
            defaultValue="experience"
            className="ml-6 mt-6 flex flex-col rounded-xl rounded-bl-none bg-muted py-6"
          >
            <TabsList className="grid w-full grid-cols-2 p-0 px-6 pb-4">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="h-full overflow-y-auto">
              <ScrollArea className="h-[calc(100vh-12rem)] px-6">
                <ExperienceTimeline />
              </ScrollArea>
            </TabsContent>
            <TabsContent
              value="gallery"
              className="h-[calc(100vh-12rem)] overflow-y-auto"
            >
              <Gallery />
            </TabsContent>
          </Tabs>
          <div className="mb-12 ml-6 flex">
            <div className="rounded-tl-0 rounded-tr-0 flex h-10 w-32 flex-1 flex-col rounded-bl-xl rounded-br-3xl bg-muted p-2" />
            <div className="flex w-40 bg-muted">
              <div className="flex max-w-40 flex-1 items-center justify-center rounded-tl-3xl bg-background p-2">
                <a
                  href="https://drive.google.com/file/d/1oWLCWht1ZiEUD54tmrJx_yaMvCSNzObC/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-medium text-muted-foreground text-zinc-100 transition-colors hover:text-[#40ce9f]"
                >
                  <span>Full Résumé</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="flex h-full flex-col overflow-hidden p-6">
          <div className="h-full space-y-3">
            <div className="grid h-60 grid-cols-[4fr_2fr] gap-3">
              <AboutMe />
              <Contact />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex h-full flex-col overflow-y-auto">
                <Skills />
              </div>
              <div className="flex h-full flex-col overflow-y-auto">
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </motion.main>
      <motion.main
        initial="hidden"
        animate="visible"
        className="bg-background/10 p-6 text-foreground xl:hidden"
      >
        <AboutMe />
        <section className="my-4 flex flex-col">
          <div className="grid grid-cols-1 gap-4">
            <ExperienceTimeline />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </section>
      </motion.main>
    </>
  );
}
