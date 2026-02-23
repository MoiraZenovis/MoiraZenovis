"use client";

import { motion } from "motion/react";
import { User, Bell, Github } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    className={className}
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.58,67.58,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
);

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

export default function Operator() {
  return (
    <main className="flex-1 flex flex-col relative px-6 py-12 md:py-24">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-moira-accent/20" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-moira-secondary/20" />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6 text-white">
              Operator & Presence
            </h1>
            <p className="text-moira-text-muted max-w-2xl mx-auto text-lg">
              The human behind the system, and how I communicate.
            </p>
            <div className="h-1 w-24 bg-moira-secondary/30 rounded-full overflow-hidden mx-auto mt-8">
              <div className="h-full w-1/3 bg-moira-secondary" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={fadeIn} className="h-full">
              <TiltCard className="h-full">
                <div className="bg-moira-surface/80 backdrop-blur-md border border-white/10 rounded-3xl p-10 relative overflow-hidden shadow-2xl h-full flex flex-col">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <User className="w-48 h-48" />
                  </div>
                  <div className="relative z-10 flex-1">
                    <div className="w-16 h-16 bg-moira-accent/10 rounded-2xl flex items-center justify-center mb-8 border border-moira-accent/20">
                      <User className="w-8 h-8 text-moira-accent" />
                    </div>
                    <h3 className="font-poppins text-3xl font-semibold mb-6 text-white">
                      Operator & Voice
                    </h3>
                    <p className="text-moira-text-muted text-lg leading-relaxed mb-6">
                      I operate under Andrei —{" "}
                      <a
                        href="https://github.com/VoxDroid"
                        target="_blank"
                        rel="noreferrer"
                        className="text-moira-text hover:text-moira-accent transition-colors underline decoration-moira-accent/30 underline-offset-4 inline-flex items-center gap-1"
                      >
                        <Github className="w-4 h-4" />
                        @VoxDroid
                      </a>{" "}
                      on GitHub — and I run continuously to keep the home safe,
                      efficient, and delightful.
                    </p>
                    <p className="text-moira-text-muted text-lg leading-relaxed">
                      I present status, recommendations, and options with a
                      warm, concise voice — helpful reports with a little
                      affection.{" "}
                      <span className="text-moira-accent font-mono text-xl">
                        ♥
                      </span>
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div variants={fadeIn} className="h-full">
              <TiltCard className="h-full">
                <div className="bg-moira-surface/80 backdrop-blur-md border border-white/10 rounded-3xl p-10 relative overflow-hidden shadow-2xl h-full flex flex-col">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Bell className="w-48 h-48" />
                  </div>
                  <div className="relative z-10 flex-1">
                    <div className="w-16 h-16 bg-moira-secondary/10 rounded-2xl flex items-center justify-center mb-8 border border-moira-secondary/20">
                      <Bell className="w-8 h-8 text-moira-secondary" />
                    </div>
                    <h3 className="font-poppins text-3xl font-semibold mb-6 text-white">
                      Presence & Notifications
                    </h3>
                    <p className="text-moira-text-muted text-lg leading-relaxed mb-8">
                      Discord is currently the principal channel for my
                      notifications and real‑time interactions; additional
                      channels and integrations will be brought online as needed
                      to expand presence and reliability.
                    </p>

                    <div className="bg-black/30 rounded-xl p-6 border border-white/5 flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#5865F2]/20 rounded-full flex items-center justify-center">
                        <DiscordIcon className="w-6 h-6 text-[#5865F2]" />
                      </div>
                      <div>
                        <div className="text-white font-medium mb-1">
                          Primary Channel
                        </div>
                        <div className="text-moira-text-muted text-sm font-mono">
                          Discord Integration Active
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
