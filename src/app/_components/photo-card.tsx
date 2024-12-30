"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { photoCardTransition, photoCardVariants } from "@/lib/animations";

type Props = {
  src: string;
  alt: string;
  rotation: number;
  index: number;
  totalCards: number;
  isExiting?: boolean;
  width: number;
  height: number;
}

export const PhotoCard = ({
  src,
  alt,
  rotation,
  index,
  totalCards,
  width,
  height,
}: Props) => {
  return (
    <motion.div
      className="absolute max-w-[220px] origin-[10%_120%] 3xl:max-w-[500px]"
      variants={photoCardVariants(rotation, index, totalCards)}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={photoCardTransition}
      style={{
        transformStyle: "preserve-3d" as const,
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="rounded-xl">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-md object-cover shadow-lg"
          priority={index === 0}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </motion.div>
  );
}

