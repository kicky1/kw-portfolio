"use client";

import { LiquidCard } from "../liquid-card";
import { motion } from "framer-motion";
import { linearAnimation } from "@/lib/animations";
import { PROJECT_DATA } from "@/lib/constants";
import { ProjectInformation } from "../project-information";
import { useState } from "react";

type Props = {
  isMobile?: boolean
}

export const Projects = ({isMobile}: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <LiquidCard title="Projects">
      <ul className="space-y-4">
        {PROJECT_DATA.map((project, index) => (
          <motion.div
            custom={isMobile ? 4 : 10}
            variants={linearAnimation}
            key={project.name}
            className={`px-6 ${selectedId === index ? '2xl:fixed inset-0 z-50 p-4 2xl:p-0' : ''}`}
          >
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

