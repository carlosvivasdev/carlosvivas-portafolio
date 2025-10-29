
"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GREETINGS = [
  "Hola",
  "Hello",
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは",
  "你好",
  "Привет",
] as const;

const STORAGE_KEY = "splash-shown";
const GREETING_DURATION = 600;
const ANIMATIONS = {
  container: {
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.7, ease: "easeOut" },
  },
  greeting: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  },
} as const;

export function HelloAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const hasShown = sessionStorage.getItem(STORAGE_KEY);

    if (hasShown) {
      setIsReady(true);
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(true);
    setIsReady(true);

    let index = 0;
    intervalRef.current = setInterval(() => {
      index++;

      if (index >= GREETINGS.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTimeout(() => setIsVisible(false), GREETING_DURATION);
        return;
      }

      setCurrentIndex(index);
    }, GREETING_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!isReady) {
    return <div className="fixed inset-0 z-[9999] bg-background" />;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={ANIMATIONS.container.exit}
          transition={ANIMATIONS.container.transition}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <motion.h1
            key={currentIndex}
            initial={ANIMATIONS.greeting.initial}
            animate={ANIMATIONS.greeting.animate}
            exit={ANIMATIONS.greeting.exit}
            transition={ANIMATIONS.greeting.transition}
            className="text-4xl md:text-6xl font-bold"
          >
            <span className="text-[#12ACFF]">.</span>
            {GREETINGS[currentIndex]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}