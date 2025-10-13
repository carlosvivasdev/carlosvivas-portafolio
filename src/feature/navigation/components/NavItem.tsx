import Link from "next/link";
import type { NavItem as NavItemType } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faFolder, faHome, faKeyboard, faUser } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <li role="none">
      <Link
        href={item.href}
        role="menuitem"
        aria-label={`Ir a ${item.label}`}
        aria-current={isActive ? "page" : undefined}
        className={`
          group relative flex items-center justify-center 
          rounded-xl p-2 transition-all duration-200
          ${isActive
            ? "bg-[#12ACFF] text-white shadow-md"
            : "text-gray-700 hover:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
          }
        `}
      >
        <FontAwesomeIcon
          icon={iconMap[item.icon]}
          className={`
            text-2xl transition-transform duration-200
            ${isActive ? "scale-110" : "group-hover:scale-110"}
          `}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -top-12 
                     whitespace-nowrap rounded-lg bg-gray-900 
                     px-3 py-1.5 text-sm font-medium text-white 
                     opacity-0 shadow-lg transition-opacity 
                     group-hover:opacity-100 dark:bg-gray-100 
                     dark:text-gray-900"
          role="tooltip"
        >
          {item.label}
        </span>
      </Link>
    </li>
  );
}