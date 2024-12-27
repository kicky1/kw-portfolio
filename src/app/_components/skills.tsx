import { AccordionCard } from "./accordion-card"

export function Skills() {
    const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'Tailwind CSS']
  
    return (
      <AccordionCard title="Skills">
        <ul className="grid grid-cols-2 gap-2">
          {skills.map((skill) => (
            <li key={skill} className="bg-muted p-2 rounded">{skill}</li>
          ))}
        </ul>
      </AccordionCard>
    )
  }