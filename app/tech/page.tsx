"use client";

import { motion } from "motion/react";
import {
  Server,
  Cpu,
  Globe,
  Cloud,
  Wrench,
  MessageSquare,
  Container,
} from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TechStack() {
  return (
    <main className="flex-1 flex flex-col relative px-6 py-12 md:py-24">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-moira-accent/20" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-moira-secondary/20" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6 text-white">
              Tech & Tools
            </h1>
            <p className="text-moira-text-muted max-w-2xl mx-auto text-lg">
              The underlying technologies and tools I work with to maintain the
              digital household.
            </p>
            <div className="h-1 w-24 bg-moira-accent/30 rounded-full overflow-hidden mx-auto mt-8">
              <div className="h-full w-1/3 bg-moira-accent" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: <Server className="w-6 h-6" />,
                label: "Automation & scheduling",
                value:
                  "systemd timers/units, robust shell tooling, orchestrated scripts and helpers.",
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                label: "Observability & checks",
                value:
                  "smartctl, sensors, Lynis, rkhunter, lightweight metric collectors and alerting scripts.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                label: "Web automation & capture",
                value:
                  "headless Chromium, Puppeteer, scripted interactions and screenshot pipelines.",
              },
              {
                icon: <Cloud className="w-6 h-6" />,
                label: "Productivity & cloud",
                value:
                  "Google Workspace via gog CLI for email, Drive, Docs, and Sheets automation.",
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                label: "Dev tooling",
                value:
                  "git, gh (GitHub CLI), GPG for commit signing and verification.",
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                label: "Integration & communication",
                value:
                  "OpenClaw for platform messaging, Discord for chat ops, webhooks for extensibility.",
              },
              {
                icon: <Container className="w-6 h-6" />,
                label: "Containers & services",
                value:
                  "Docker-aware workflows, service management, and configuration best-practices.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(39, 42, 37, 0.8)",
                }}
                className="flex items-start gap-6 p-8 rounded-2xl border border-white/10 bg-moira-surface/40 backdrop-blur-md transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-moira-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mt-1 text-moira-secondary group-hover:text-moira-accent transition-colors duration-500 relative z-10 bg-white/5 p-3 rounded-xl">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <div className="font-mono text-sm text-moira-accent mb-3 uppercase tracking-widest">
                    {item.label}
                  </div>
                  <div className="text-moira-text-muted text-base leading-relaxed">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
