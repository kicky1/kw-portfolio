import { Card } from "@/components/ui/card";
import { linearAnimation } from "@/lib/animations";
import { CONTACT_DATA } from "@/lib/constants";
import { motion } from "framer-motion";

type Props = {
  isMobile: boolean
}

export const Contact = ({isMobile}: Props) => {
  return (
    <nav className="space-y-3">
      {CONTACT_DATA.map((contact, index) => (
        <Card className="rounded-xl bg-muted px-4 py-3" key={index}>
          <motion.div custom={isMobile ? 5 :contact.custom} variants={linearAnimation}>
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
