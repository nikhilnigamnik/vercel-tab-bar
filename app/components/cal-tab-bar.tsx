"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "analytics", label: "Analytics" },
  { id: "settings", label: "Settings" },
  { id: "help", label: "Help" },
  { id: "logout", label: "Logout" },
  { id: "login", label: "Login" },
  { id: "signup", label: "Signup" },
];

export function CalTabBar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");

  const handleNavItemHover = (navId: string) => setHoveredNavItem(navId);
  const handleNavItemMouseLeave = () => setHoveredNavItem(null);
  const handleTabClick = (navId: string) => setActiveTab(navId);

  return (
    <nav className="bg-primary rounded-full border-2 border-black">
      <div className="flex items-center p-2">
        {navItems.map((nav) => (
          <button
            key={nav.label}
            onMouseEnter={() => handleNavItemHover(nav.id)}
            onMouseLeave={handleNavItemMouseLeave}
            onClick={() => handleTabClick(nav.id)}
            className={`relative px-4 py-1 cursor-pointer group ${
              activeTab === nav.id && hoveredNavItem === null
                ? "bg-neutral-900 rounded-full"
                : ""
            }`}
          >
            <span
              className={`relative z-20 text-xs ${
                activeTab === nav.id && hoveredNavItem === null
                  ? "text-neutral-100"
                  : ""
              } group-hover:text-neutral-100 transition-colors`}
            >
              {nav.label}
            </span>
            <AnimatePresence>
              {hoveredNavItem === nav.id && (
                <motion.span
                  layoutId="hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", duration: 0.3 }}
                  className="absolute inset-0 bg-neutral-900 rounded-full z-10"
                />
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </nav>
  );
}
