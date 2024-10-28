"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "analytics",
    label: "Analytics",
  },
  {
    id: "settings",
    label: "Settings",
  },
  {
    id: "help",
    label: "Help",
  },
  {
    id: "logout",
    label: "Logout",
  },
  {
    id: "login",
    label: "Login",
  },
  {
    id: "signup",
    label: "Signup",
  },
];

export function VercelTabBar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");

  const handleNavItemHover = (navId: string) => {
    setHoveredNavItem(navId);
  };

  const handleNavItemMouseLeave = () => {
    setHoveredNavItem(null);
  };

  const handleTabClick = (navId: string) => {
    setActiveTab(navId);
  };

  return (
    <nav className="bg-primary text-foreground rounded-lg">
      <div className="flex items-center p-2">
        {navItems.map((nav) => (
          <button
            key={nav.label}
            onMouseEnter={() => handleNavItemHover(nav.id)}
            onMouseLeave={handleNavItemMouseLeave}
            onClick={() => handleTabClick(nav.id)}
            className="relative px-4 py-1 cursor-pointer"
          >
            <span
              className={`relative z-20 text-xs ${
                activeTab === nav.id
                  ? "text-neutral-800"
                  : "text-neutral-400  transition-colors"
              }`}
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
                  className="absolute inset-0 bg-neutral-200 rounded-md z-10 hover:text-neutral-800"
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {activeTab === nav.id && (
                <motion.span
                  layoutId="active"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-neutral-300 z-30"
                />
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </nav>
  );
}
