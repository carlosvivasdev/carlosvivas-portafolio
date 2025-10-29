/**
 * NavItem Component
 * 
 * Single Responsibility: Renderiza un item individual del menú de navegación
 * Componente reutilizable con estados hover y active
 * Animaciones fluidas con Framer Motion
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,

  faFolderOpen,

  faHome,
  faKeyboard,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import type { NavItem as NavItemType } from "../types";
import { ActiveIndicator } from "./ActiveIndicator";

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
  index: number;
}

// Mapeo de strings a iconos de FontAwesome
const iconMap: Record<string, IconDefinition> = {
  home: faHome,
  about: faUser,
  projects: faFolderOpen,
  keyboard: faKeyboard,
  contact: faEnvelope,
};

// Configuración de animaciones - Fácil de ajustar y testear
const ANIMATIONS = {
  item: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    getTransition: (index: number) => ({
      duration: 0.3,
      delay: index * 0.05,
      type: "spring" as const, // ✅ Literal type
      stiffness: 300,
      damping: 20,
    }),
  },
  icon: {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  },
} as const;

export function NavItem({ item, isActive, index }: NavItemProps) {
  const icon = iconMap[item.icon];

  return (
    <motion.li
      role="none"
      initial={ANIMATIONS.item.initial}
      animate={ANIMATIONS.item.animate}
      transition={ANIMATIONS.item.getTransition(index)}
    >
      <Link
        href={item.href}
        role="menuitem"
        aria-label={`Ir a ${item.label}`}
        aria-current={isActive ? "page" : undefined}
        className="group relative flex items-center justify-center rounded-xl p-2 transition-all duration-200"
      >
        {/* Background activo animado */}
        {isActive && <ActiveIndicator />}

        {/* Icono */}
        <motion.div
          className="relative z-10"
          whileHover={ANIMATIONS.icon.hover}
          whileTap={ANIMATIONS.icon.tap}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`
              text-2xl transition-all duration-200
              ${isActive
                ? "text-white drop-shadow-md"
                : "text-gray-800 dark:text-gray-200 group-hover:text-primary group-hover:drop-shadow-sm"}
            `}
            aria-hidden="true"
          />
        </motion.div>

        {/* Tooltip - Usa group-hover en lugar de whileHover */}
        <span
          className="pointer-events-none absolute -top-12 
                     whitespace-nowrap rounded-lg bg-gray-900 
                     px-3 py-1.5 text-sm font-medium text-white 
                     shadow-lg opacity-0 group-hover:opacity-100
                     transition-opacity duration-200
                     dark:bg-gray-100 dark:text-gray-900"
          role="tooltip"
        >
          {item.label}
          {/* Flecha del tooltip */}
          <span
            className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 
                       border-4 border-transparent border-t-gray-900 
                       dark:border-t-gray-100"
          />
        </span>
      </Link>
    </motion.li>
  );
}