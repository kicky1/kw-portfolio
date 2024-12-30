"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 672px)").matches);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const ProjectContent = () => (
    <div className="flex flex-col">
      <div className="flex h-full flex-col">
        <div className="flex-grow">
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
            {!isLargeScreen && (
              <Button
                onClick={onClick}
                className="w-full rounded-md bg-[#10B981] px-4 py-2 text-white transition-colors hover:bg-[#0D9668]"
              >
                Close
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (!isSelected) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={onClick}
        className="w-full"
      >
        <div className="group relative overflow-hidden border-2 bg-muted transition-colors duration-300 ease-in-out hover:cursor-pointer hover:border-[#10B981] rounded-xl">
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
                <p className="text-sm text-muted-foreground mt-2">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (isLargeScreen) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClick();
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          layout
          className="w-full max-w-4xl"
          transition={{
            layout: { duration: 0.3, ease: "easeInOut" },
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="rounded-xl border-2 bg-muted">
            <div className="flex flex-row max-h-[600px]">
              <div className="m-4 w-1/2 flex items-center justify-center">
                <Image
                  src={image}
                  width={1400}
                  height={1200}
                  alt={`${name} project`}
                  className="bg-foreground h-72 rounded-xl object-cover"
                />
              </div>
              <div className="w-1/2 p-6">
                <ProjectContent />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <Dialog open={isSelected} onOpenChange={() => onClick()}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-muted">
        <DialogTitle/>
        <ProjectContent />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectInformation;