import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExperienceTimeline } from './_components/experience-timeline'
import { Gallery } from './_components/gallery'
import { AboutMe } from './_components/about-me'
import { Contact } from './_components/contact'
import { Skills } from './_components/skills'
import { Projects } from './_components/projects'

export default function Home() {
  return (
    <main className="h-screen w-screen grid grid-cols-[3fr_3fr] bg-background text-foreground overflow-hidden">
      <section className="h-full flex flex-col">
     
        <Tabs defaultValue="experience" className="flex flex-col p-6 mt-6 ml-6 rounded-xl rounded-bl-none bg-muted">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          <TabsContent
            value="experience"
            className="flex flex-col overflow-y-auto h-full" // This allows scrolling
          >
            <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
              <ExperienceTimeline />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="gallery" className="flex-1 flex flex-col overflow-y-auto h-full">
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <Gallery />
            </ScrollArea>
          </TabsContent>
        </Tabs>
        <div className="flex mb-12 ml-6">
          <div className="flex-1 flex flex-col p-2 h-10 rounded-tl-0 rounded-tr-0 rounded-bl-xl w-32 rounded-br-3xl bg-muted" />
          <div className="flex bg-muted w-40">
            <div className="flex-1 flex p-2 rounded-tl-3xl bg-background justify-center items-center max-w-40">
              <a
                href="https://drive.google.com/file/d/1oWLCWht1ZiEUD54tmrJx_yaMvCSNzObC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-100 group text-muted-foreground hover:text-[#40ce9f] transition-colors"
              >
                <span>Full Résumé</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="h-full flex flex-col p-6 overflow-hidden">
        <div className="space-y-3 h-full pb-2">
          <div className="grid grid-cols-[4fr_2fr] gap-3">
            <AboutMe />
            <Contact />
          </div>
          <ScrollArea className="overflow-auto">
              <Skills />
          </ScrollArea>
          <ScrollArea className="overflow-auto">
              <Projects />
          </ScrollArea>
        </div>
      </div>
    </main>
  )
}
