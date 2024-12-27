'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"

export function AccordionCard({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div className="relative">
       <div className="flex">
        <div className="flex bg-muted w-40">
            <div className="flex-1 flex p-2 rounded-br-3xl bg-background justify-center items-center max-w-40">
              <a
                href="https://drive.google.com/file/d/1oWLCWht1ZiEUD54tmrJx_yaMvCSNzObC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-100 group text-muted-foreground hover:text-[#40ce9f] transition-colors"
              >
                <span>{title}</span>
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col p-2 h-10 rounded-bl-none rounded-tl-3xl rounded-tr-3xl w-32 bg-muted">
          <Button
              variant="ghost"
              className="w-full flex justify-end items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </Button>
            </div>
        </div>
        <Card className="bg-muted relative border-none rounded-tr-none  py-6">
          {isOpen && <CardContent>{children}</CardContent>}
        </Card>
      </div>
      
    )
  }