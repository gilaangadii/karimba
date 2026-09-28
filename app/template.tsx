"use client";

import { motion, MotionConfig } from "framer-motion";

/* Smooth, premium route transition (fade + subtle rise, ~600ms).
   Remounts on every route change; respects reduced-motion. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
