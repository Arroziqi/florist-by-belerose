import { motion } from "motion/react";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--ivory)]">
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-12 h-12 border-2 border-[var(--dusty-rose)]/20 border-t-[var(--dusty-rose)] rounded-full"
      />
    </div>
  );
}
