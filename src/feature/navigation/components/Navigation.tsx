"use client";

import { usePathname } from "next/navigation"
import { NavigationData } from "../types"
import { NavItem } from "./NavItem"

interface NavigationProps {
  data: NavigationData
}

export function Navigation({ data }: NavigationProps) {
  const pathname = usePathname();
  return (
    <nav
      role="navigation"
      aria-label="Navegación principal"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 
                 rounded-2xl border border-white/10 bg-white/5 
                 p-1 px-6 shadow-lg backdrop-blur-md
                 transition-all duration-300 hover:shadow-xl
                 dark:border-gray-700/50 dark:bg-gray-900/50"
    >
      <ul role="menubar" className="flex gap-2.5">
        {data.items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavItem
              key={item.href}
              item={item}
              isActive={isActive}
            />
          )
        })}
      </ul>
    </nav>
  )
}