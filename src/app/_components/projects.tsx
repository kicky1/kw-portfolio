"use client";

import { LiquidCard } from "./liquid-card";
import { motion } from "framer-motion";
import { linearAnimation } from "@/lib/animations";
import { PROJECT_DATA } from "@/lib/constants";
import { ProjectInformation } from "./project-information";
import { useState } from "react";

export function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <LiquidCard title="Projects">
      <ul className="space-y-4 px-4">
        {PROJECT_DATA.map((project, index) => (
          <motion.div custom={10} variants={linearAnimation} key={project.name}>
            <ProjectInformation
              name={project.name}
              image={project.image}
              description={project.description}
              fullDescription={project.fullDescription}
              web={project.web}
              github={project.github}
              badges={project.badge}
              isSelected={selectedId === index}
              onClick={() => setSelectedId(selectedId === index ? null : index)}
            />
          </motion.div>
        ))}
      </ul>
    </LiquidCard>
  );
}
