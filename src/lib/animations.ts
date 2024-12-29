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
  }