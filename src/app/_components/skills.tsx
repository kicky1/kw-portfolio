import { ScrollArea } from "@radix-ui/react-scroll-area"
import { LiquidCard } from "./liquid-card"

export function Skills() {
    const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'Tailwind CSS']
  
    return (
      <LiquidCard title="Skills">
          <ScrollArea className="h-full">
        <ul className="grid grid-cols-2 gap-2">
          {skills.map((skill) => (
            <li key={skill} className="bg-muted p-2 rounded">{skill}</li>
          ))}
        </ul>
        </ScrollArea>
      </LiquidCard>
    )
  }