"use client"

import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type Photo } from "@/lib/types"
import { GALLERY_IMAGES } from "@/lib/constants"
import { PhotoCard } from "./photo-card"
import { linearAnimation } from "@/lib/animations"

function getInitialImages(): Photo[] {
  return GALLERY_IMAGES.map((img, i) => ({
    ...img,
    rotation: i === 0 ? 0 : Math.random() * 24 - 6
  }))
}

export function Gallery() {
  const [images, setImages] = useState<Photo[]>(getInitialImages);
  const [isAnimating, setIsAnimating] = useState(false);

  const moveTopToBottom = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const topImage = newImages.shift();
      if (topImage) {
        topImage.rotation = Math.random() * 12 - 6;
        newImages.push(topImage);
      }
      return newImages;
    });

    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const moveBottomToTop = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const bottomImage = newImages.pop();
      if (bottomImage) {
        bottomImage.rotation = 0;
        newImages.unshift(bottomImage);
      }
      return newImages;
    });

    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative w-full max-w-6xl mx-auto px-8 mt-6">
        <div className="flex items-center justify-between">
          <motion.div custom={1} variants={linearAnimation}>
            <Button
              onClick={moveBottomToTop}
              disabled={isAnimating}
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </motion.div>

          <motion.div 
            custom={0} 
            variants={linearAnimation}
            className="relative flex-1 mx-8"
          >
            <div className="relative flex justify-center items-center w-full min-h-[60vh] perspective-300">
              <AnimatePresence mode="popLayout">
                {images.map((image, index) => (
                  <PhotoCard
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    rotation={image.rotation}
                    index={index}
                    totalCards={images.length}
                    width={image.width}
                    height={image.height}
                  />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div custom={1} variants={linearAnimation}>
            <Button
              onClick={moveTopToBottom}
              disabled={isAnimating}
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}