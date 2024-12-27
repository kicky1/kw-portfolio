import { Card } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Contact() {
  const contacts = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:john@example.com" },
  ]

  return (
    <nav className="space-y-3">
      {contacts.map((contact, index) => (
        <Card className="bg-muted py-3 px-4 rounded-xl" key={index}>
            <a 
              key={index} 
              href={contact.href}
              className="flex justify-between items-center text-white hover:text-[#40ce9f] transition-colors"
            >
              <span>{contact.label}</span>
              <contact.icon size={20} />
            </a>
        </Card>
      ))}
    </nav>
  )
}
