// Slide Variants
export const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.15,
    },
  },
};

export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.15,
    },
  },
};

export const slideUp = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.15,
    },
  },
};

export const slideDown = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.15,
    },
  },
};

export const slideVariants = {
  left: slideInLeft,
  right: slideInRight,
  up: slideUp,
  down: slideDown,
};

// Zoom Variants
export const zoomIn = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.15,
    },
  },
};

export const zoomOut = {
  initial: { scale: 1.5, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.15,
    },
  },
};

export const zoomVariants = {
  in: zoomIn,
  out: zoomOut,
};

// Rotate Variant
export const rotateIn = {
  initial: { rotate: -90, opacity: 0 },
  animate: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.15,
    },
  },
};

// Bounce Variant
export const bounceIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: [0.8, 1.1, 0.95, 1],
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.15 },
  },
};
