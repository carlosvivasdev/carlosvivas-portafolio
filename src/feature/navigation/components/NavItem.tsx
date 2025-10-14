"use client"

import Link from "next/link";
import type { NavItem as NavItemType } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faFolder, faHome, faKeyboard, faUser } from "@fortawesome/free-solid-svg-icons";
import { ActiveIndicator } from "./ActiveIndicator";
import { motion } from "framer-motion";

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
}

const iconMap: Record<string, IconDefinition> = {
  home: faHome,
  about: faUser,
  projects: faFolder,
  keyboard: faKeyboard,
  contact: faEnvelope,
}

export function NavItem({ item, isActive }: NavItemProps) {
  const icon = iconMap[item.icon];
  return (
    <motion.li
      role="none"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >


      <Link
        href={item.href}
        role="menuitem"
        aria-label={`Ir a ${item.label}`}
        aria-current={isActive ? "page" : undefined}
        className="group relative flex items-center justify-center rounded-xl p-2 transition-all duration-200"
      >
        {isActive && <ActiveIndicator />}
        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`
              text-2xl transition-colors duration-200
              ${isActive ? "text-white" : "text-gray-700 dark:text-gray-300 group-hover:text-[#12ACFF]"}
            `}
            aria-hidden="true"
          />
        </motion.div>
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