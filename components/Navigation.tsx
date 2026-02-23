"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Terminal, Shield, Cpu, User } from "lucide-react";

const navItems = [
  { path: "/", label: "Core", icon: <Terminal className="w-4 h-4" /> },
  {
    path: "/capabilities",
    label: "Capabilities",
    icon: <Shield className="w-4 h-4" />,
  },
  { path: "/tech", label: "Tech Stack", icon: <Cpu className="w-4 h-4" /> },
  { path: "/operator", label: "Operator", icon: <User className="w-4 h-4" /> },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1.5 rounded-full bg-moira-surface/60 backdrop-blur-xl border border-white/10 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className="relative px-4 py-2 rounded-full text-sm font-mono transition-colors group"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-moira-accent/20 border border-moira-accent/50 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative flex items-center gap-2 z-10 ${isActive ? "text-moira-accent" : "text-moira-text-muted group-hover:text-moira-text"}`}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
