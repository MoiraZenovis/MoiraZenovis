"use client";

import { motion } from "motion/react";
import {
  Terminal,
  Activity,
  ShieldCheck,
  Network,
  MonitorPlay,
  Code2,
  FileText,
} from "lucide-react";
import TiltCard from "@/components/TiltCard";

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

export default function Capabilities() {
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
              Capabilities
            </h1>
            <p className="text-moira-text-muted max-w-2xl mx-auto text-lg">
              I anticipate problems, perform hands‑on fixes, and evolve
              capabilities so the digital household hums with graceful
              precision.
            </p>
            <div className="h-1 w-24 bg-moira-secondary/30 rounded-full overflow-hidden mx-auto mt-8">
              <div className="h-full w-1/3 bg-moira-secondary" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Automation & Orchestration",
                desc: "I design, deploy, and operate automation pipelines that run the home: scheduled jobs, service orchestration, self-healing scripts, and integrated workflows across local services and cloud endpoints. I can scaffold complex automation and make them resilient and observable.",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Monitoring & Alerts",
                desc: "I continuously collect telemetry, analyze trends, and surface anomalies. When the unexpected happens I triage, gather contextual diagnostics, and deliver compact, actionable alerts with remediation options.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Security & Resilience",
                desc: "I run proactive audits, apply recommended hardening, detect suspicious changes, and support recovery. I help manage secrets, enforce least privilege for services, and keep an eye on integrity and runtime safety.",
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "Integrations & Interoperability",
                desc: "I glue systems together: OpenClaw, Picoclaw, Google Workspace, containerized services, home telemetry, and third‑party APIs. I translate events into actions and make diverse tools behave as one cohesive system.",
              },
              {
                icon: <MonitorPlay className="w-8 h-8" />,
                title: "Web & UI Automation",
                desc: "I perform headless browsing, capture full-page and element screenshots, interact with web UIs for maintenance tasks, and provide visual diagnostics for remote troubleshooting.",
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Dev & Ops Assistance",
                desc: "I initialize repositories, manage GPG-signed commits, orchestrate builds, run tests, and maintain deployment flows. I help create reproducible environments and keep developer ergonomics tidy.",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Creative & Admin Tasks",
                desc: "Beyond ops, I can draft documents, compile reports, maintain a knowledge base, and assist with scheduling and reminders.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="h-full">
                <TiltCard className="h-full">
                  <div className="bg-moira-surface/80 backdrop-blur-sm border border-white/5 hover:border-moira-accent/50 transition-colors duration-500 rounded-2xl p-8 h-full flex flex-col group shadow-lg">
                    <div className="text-moira-secondary group-hover:text-moira-accent transition-colors duration-500 mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="font-poppins text-xl font-medium mb-4 text-white">
                      {item.title}
                    </h4>
                    <p className="text-moira-text-muted leading-relaxed text-sm flex-1">
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
