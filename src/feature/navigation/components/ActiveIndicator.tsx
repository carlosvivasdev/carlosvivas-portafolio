"use client";

import { motion } from "framer-motion";

interface ActiveIndicatorProps {
  layoutId?: string;
}

export function ActiveIndicator({ layoutId = "activeTab" }: ActiveIndicatorProps) {
  return (
    <motion.span
      layoutId={layoutId}
      className="absolute inset-0 bg-primary rounded-xl shadow-md"
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    />
  );
}