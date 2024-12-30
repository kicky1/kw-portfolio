"use client";

import { LiquidCard } from "./liquid-card";
import { cloneElement } from "react";
import { motion } from "framer-motion";
import { linearAnimation } from "@/lib/animations";
import { SKILLS_DATA } from "@/lib/constants";

export const Skills = () => {
  return (
    <LiquidCard title="Skills">
      <ul className="grid grid-cols-2 gap-2 px-6 xl:grid-cols-3 3xl:grid-cols-4 5xl:grid-cols-5">
        {SKILLS_DATA.map((item) => (
          <div key={crypto.randomUUID()}>
            <motion.div
              custom={9}
              variants={linearAnimation}
              className="flex flex-col items-center rounded-xl px-4 py-4"
            >
              <div className="mb-2" style={{ color: item.color }}>
                {cloneElement(item.icon, { size: 24 })}
              </div>
              <div className="text-center">{item.name}</div>
            </motion.div>
          </div>
        ))}
      </ul>
    </LiquidCard>
  );
}
