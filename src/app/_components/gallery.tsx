"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Photo } from "@/lib/types";
import { GALLERY_IMAGES } from "@/lib/constants";
import { PhotoCard } from "./photo-card";
import { linearAnimation } from "@/lib/animations";

function getInitialImages(): Photo[] {
  return GALLERY_IMAGES.map((img, i) => ({
    ...img,
    rotation: i === 0 ? 0 : Math.random() * 24 - 6,
  }));
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
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative mx-auto mt-6 w-full max-w-6xl px-8">
        <div className="flex items-center justify-between">
          <motion.div custom={1} variants={linearAnimation}>
            <Button
              onClick={moveBottomToTop}
              disabled={isAnimating}
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div
            custom={0}
            variants={linearAnimation}
            className="relative mx-8 flex-1"
          >
            <div className="perspective-300 relative flex min-h-[60vh] w-full items-center justify-center">
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
              <ChevronRight className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
