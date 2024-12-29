import { Card } from "@/components/ui/card";
import { linearAnimation } from "@/lib/animations";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Contact() {
  const contacts = [
    { icon: Github, label: "GitHub", href: "#", custom: 5 },
    { icon: Linkedin, label: "LinkedIn", href: "#", custom: 6 },
    { icon: Twitter, label: "Twitter", href: "#", custom: 7 },
    { icon: Mail, label: "Email", href: "mailto:john@example.com", custom: 8 },
  ];

  return (
    <nav className="space-y-3">
      {contacts.map((contact, index) => (
        <Card className="rounded-xl bg-muted px-4 py-3" key={index}>
          <motion.div custom={contact.custom} variants={linearAnimation}>
            <a
              key={index}
              href={contact.href}
              className="flex items-center justify-between text-white transition-colors hover:text-[#40ce9f]"
            >
              <span>{contact.label}</span>
              <contact.icon size={20} />
            </a>
          </motion.div>
        </Card>
      ))}
    </nav>
  );
}
