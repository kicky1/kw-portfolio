"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface PhotoCardProps {
  src: string
  alt: string
  rotation: number
  index: number
  totalCards: number
  isExiting?: boolean
  width: number
  height: number
}

export function PhotoCard({
  src,
  alt,
  rotation,
  index,
  totalCards,
  width,
  height,
}: PhotoCardProps) {
  return (
    <motion.div
      className="absolute max-w-[220px] 3xl:max-w-[500px] origin-[10%_120%]"
      initial={{ 
        rotate: rotation,
        scale: 1 + (totalCards - index) * 0.02,
        y: -(totalCards - index) * 8,
        zIndex: totalCards - index,
        opacity: 1
      }}
      animate={{ 
        rotate: index === 0 ? 0 : rotation,
        scale: 1 + (totalCards - index) * 0.02,
        y: -(totalCards - index) * 8,
        zIndex: totalCards - index,
        opacity: 1
      }}
      exit={{ 
        rotate: rotation,
        scale: 0.98,
        y: 40,
        opacity: 0,
        zIndex: -1,
        transition: {
          duration: 0.4,
          ease: [0.32, 0.72, 0, 1]
        }
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }}
    >
      <div className="rounded-xl">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover rounded-md shadow-lg"
            priority={index === 0}
          />
      </div>
    </motion.div>
  )
}