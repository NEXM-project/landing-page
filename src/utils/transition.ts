import { cubicBezier } from "motion/react";

export const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cubicBezier(0.4, 0, 0.2, 1) },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: cubicBezier(0.4, 0, 0.2, 1) },
  },
};
