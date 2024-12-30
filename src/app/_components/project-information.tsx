"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  web?: string;
  github?: string;
  badges?: { name: string }[];
  isSelected: boolean;
  onClick: () => void;
};

export const ProjectInformation = ({
  name,
  image,
  description,
  fullDescription,
  web,
  github,
  badges = [],
  isSelected,
  onClick,
}: Props) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (isSelected && e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleBackdropClick}
      className={`${
        isSelected
          ? "z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm 2xl:fixed 2xl:inset-0"
          : ""
      }`}
    >
      <motion.div
        layout
        className={`${isSelected ? "w-full max-w-4xl" : "w-full"}`}
        transition={{
          layout: { duration: 0.3, ease: "easeInOut" },
        }}
        onClick={(e) => {
          if (isSelected) {
            e.stopPropagation(); // Only stop propagation when card is selected
          } else {
            onClick(); // Trigger open when card is not selected
          }
        }}
      >
        <div
          className={`group relative overflow-hidden border-2 bg-muted transition-colors duration-300 ease-in-out ${
            !isSelected && "hover:cursor-pointer 2xl:hover:border-[#10B981]"
          } rounded-xl`}
        >
          {!isSelected && (
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={image}
                  width={1400}
                  height={1400}
                  alt={`${name} project`}
                  className="h-20 w-28 rounded-xl bg-foreground object-cover"
                />
                <div>
                  <p className="font-semibold leading-none tracking-tight">
                    {name}
                  </p>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            </div>
          )}
          {isSelected && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col 2xl:max-h-[600px] 2xl:flex-row"
            >
              <div className="m-4 w-full 2xl:w-1/2 flex items-center justify-center max-2xl:hidden">
                <Image
                  src={image || "/placeholder.svg?height=500&width=500"}
                  width={1400}
                  height={1200}
                  alt={`${name} project`}
                  className="bg-foreground h-72 rounded-xl object-cover"
                />
              </div>
              <div className="flex h-full flex-col p-6 2xl:w-1/2">
                <div className="flex-grow overflow-y-auto">
                  <div className="mb-6">
                    <h2 className="mb-4 text-2xl font-bold">{name}</h2>
                    <p className="leading-relaxed text-muted-foreground">
                      {fullDescription}
                    </p>
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-[#10B981]/10 px-3 py-1.5 text-sm font-medium text-[#10B981]"
                      >
                        {badge.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex space-x-4">
                      {web && (
                        <a
                          href={web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-medium text-[#10B981] hover:text-[#0D9668]"
                        >
                          Visit Website
                        </a>
                      )}
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-medium text-[#10B981] hover:text-[#0D9668]"
                        >
                          GitHub Repository
                        </a>
                      )}
                    </div>

                    <Button
                      onClick={() => onClick()}
                      className="w-full rounded-md bg-[#10B981] px-4 py-2 text-white transition-colors hover:bg-[#0D9668]"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectInformation;