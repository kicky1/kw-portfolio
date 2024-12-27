import { ScrollArea } from "@radix-ui/react-scroll-area"
import { AccordionCard } from "./accordion-card"

export function Projects() {
    const projects = [
      { name: 'E-commerce Platform', description: 'A full-stack e-commerce solution built with Next.js and Stripe' },
      { name: 'Task Management App', description: 'A React-based task management application with real-time updates' },
      { name: 'Portfolio Website', description: 'A responsive portfolio website built with Next.js and Tailwind CSS' },
    ]
  
    return (
      <ScrollArea className="">
      <AccordionCard title="Projects">
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.name} className="border-b pb-2 last:border-b-0">
              <h3 className="font-bold">{project.name}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </li>
          ))}
        </ul>
      </AccordionCard>
      </ScrollArea>
    )
  }
  
  