import { type Variants } from "framer-motion";

export const linearAnimation = {
  hidden: { scale: 0 },
  visible: (index: number) => ({
    scale: 1,
    transition: {
      delay: index * 0.2,
      type: "linear",
      duration: 0.5,
    },
  }),
};


export const photoCardVariants = (rotation: number, index: number, totalCards: number): Variants => ({
  initial: {
    rotate: rotation,
    scale: 1 + (totalCards - index) * 0.02,
    y: -(totalCards - index) * 8,
    zIndex: totalCards - index,
    opacity: 1,
  },
  animate: {
    rotate: index === 0 ? 0 : rotation,
    scale: 1 + (totalCards - index) * 0.02,
    y: -(totalCards - index) * 8,
    zIndex: totalCards - index,
    opacity: 1,
  },
  exit: {
    rotate: rotation,
    scale: 0.98,
    y: 40,
    opacity: 0,
    zIndex: -1,
    transition: {
      duration: 0.4,
      ease: [0.32, 0.72, 0, 1],
    },
  },
});

export const photoCardTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};