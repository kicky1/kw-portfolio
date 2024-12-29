import Image from "next/image"
import { LiquidCard } from "./liquid-card"
import oneup from '../../../public/1up.png'
import rickmorty from '../../../public/rickmorty.png'
import interviewtasks from '../../../public/interviewtasks.png'
import bingo from '../../../public/bingo.png'
import placeholder from '../../../public/placeholder.png'
import { motion } from "framer-motion"
import { linearAnimation } from "@/lib/animations"

export function Projects() {
	const projects = [
		{name:'1UP', web:'https://oneup-pi.vercel.app/', image:oneup.src, badge:[{name: 'Next.js 13'},{name: 'Typescript'}, {name: 'Zustand'}, {name: 'Mantine'}, {name: 'TanStack'}, {name: 'Supabase'}], github:'https://github.com/Cartel-1UP/1UP-website',  description:'Short description 1'},
    {name: 'Rick&Morty', web:'https://wiki-rickmorty.vercel.app/', image:rickmorty.src, badge:[{name: 'Next.js 14'}, {name: 'Typescript'}, {name: 'GraphQL'}, {name: 'TanStack'}, {name: 'Shadcn'}, {name: 'Tailwind'}], github: 'https://github.com/kicky1/rickmorty-wiki', description: 'Short description 2'},
    {name:'Interview Tasks', web:'https://interviewtasks.vercel.app/', image:interviewtasks.src, badge:[{name: 'Next.js 13'},{name: 'Typescript'}, {name: 'JavaScript'}, {name: 'Tailwind'}], github:'https://github.com/kicky1/interview',  description:'Short description 3'},
		{name: 'Bingo', web:'https://kith-bingo.vercel.app/', image:bingo.src, badge:[{name: 'Nextjs 14'},{name: 'Typescript'},{name: 'Shadcn'},{name: 'Clerk'}, {name: 'Drizzly'}, {name: 'Postgress'} ], github:'https://github.com/kicky1/bingo',  description:'Short description 4'},
    {name:'eTrener',image:'',  badge:[{name: 'Python'}, {name: 'OpenCV'}, {name: 'Tkinter'}, {name: 'Pandas'}, {name: 'Openpose'}], github:'https://github.com/kicky1/eTrener2', description:`Short description 5`},
		{name:'Activity Recognition',image:'',  badge:[{name: 'Python'}, {name: 'React.js'}, {name: 'CNN'}, {name: 'MLP'}, {name: 'RBM'}, {name: 'Tensorflow'}, {name: 'Keras'}], github:'https://github.com/kicky1/ActivityRecognition', description:`Short description 6`},
  ]
  
    return (
      <LiquidCard title="Projects">
        <ul className="space-y-4 px-4">
          {projects.map((project) => (
            <motion.div custom={10} variants={linearAnimation} key={project.name}>
            <li  className="flex items-center space-x-4 border-b py-4 px-4 mr-2 last:border-b-0 bg-background rounded-xl">
              <Image
                src={project.image ? project.image : placeholder.src}
                width={100}
                height={100}
                alt="Avatar"
                className="rounded-xl h-20 w-28 object-cover bg-foreground"
              />
              <div>
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </li>
            </motion.div>
          ))}
        </ul>
      </LiquidCard>
    )
  }
  
  