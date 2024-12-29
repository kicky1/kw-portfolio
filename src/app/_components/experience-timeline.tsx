
import { JobInformation } from "./job-information";
import { motion } from "framer-motion";
import { linearAnimation } from "@/lib/animations";
import { useState } from "react";
import { EXPERIENCE_DATA } from "@/lib/constants";


export function ExperienceTimeline() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    return (
      <div className="space-y-4 bg-muted">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={index}
              custom={exp.custom}
              variants={linearAnimation}
            >
              <JobInformation
                {...exp}
                isSelected={selectedId === index}
                onClick={() => setSelectedId(selectedId === index ? null : index)}
              />
            </motion.div>
          ))}
      </div>
    );
  };
  