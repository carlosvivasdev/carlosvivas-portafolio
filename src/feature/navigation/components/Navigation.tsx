/**
 * Navigation Component
 * 
 * Navegación tipo dock/mobile flotante en la parte inferior
 * Con animaciones fluidas usando Framer Motion
 * Siguiendo principios SOLID:
 * - Single Responsibility: Solo maneja la navegación principal
 * - Open/Closed: Extensible mediante props
 * - Dependency Inversion: Depende de abstracciones (tipos)
 */

"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type { NavigationData } from "../types";
import { NavItem } from "./NavItem";

interface NavigationProps {
  data: NavigationData;
}

export function Navigation({ data }: NavigationProps) {
  const pathname = usePathname();

  return (
    <motion.nav
      role="navigation"
      aria-label="Navegación principal"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="rounded-2xl border border-white/5 bg-white/10 
                   p-1 px-6 shadow-xl shadow-black/5
                   backdrop-blur-md
                   transition-all duration-300
                   dark:border-gray-700/30 dark:bg-gray-900/60
                   dark:shadow-black/20"
      >
        <ul role="menubar" className="flex gap-2.5">
          {data.items.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <NavItem
                key={item.href}
                item={item}
                isActive={isActive}
                index={index}
              />
            );
          })}
        </ul>
      </motion.div>
    </motion.nav>
  );
}