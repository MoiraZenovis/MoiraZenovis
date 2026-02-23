"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function AICore() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center [perspective:1000px]">
      <motion.div
        animate={{
          rotateX: mousePosition.y,
          rotateY: -mousePosition.x,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* Outer Data Ring */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-moira-secondary/20 border-dashed"
          style={{ transform: "translateZ(-20px)" }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-moira-secondary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(142,166,155,0.8)]" />
        </motion.div>

        {/* Middle Energy Ring */}
        <motion.div
          animate={{ rotateZ: -360, scale: [1, 1.02, 1] }}
          transition={{
            rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-8 rounded-full border border-moira-accent/30"
          style={{ transform: "translateZ(10px)" }}
        >
          <div className="absolute bottom-0 right-1/4 w-3 h-1 bg-moira-accent rounded-full shadow-[0_0_15px_rgba(242,92,34,0.8)]" />
        </motion.div>

        {/* Inner Core Glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-20 rounded-full bg-moira-accent/20 blur-2xl"
          style={{ transform: "translateZ(30px)" }}
        />

        {/* The Core */}
        <div
          className="absolute inset-24 rounded-full bg-gradient-to-br from-moira-accent to-[#8a2b0a] border border-moira-accent/50 shadow-[0_0_60px_rgba(242,92,34,0.4)] flex items-center justify-center overflow-hidden"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Core internal texture */}
          <motion.div
            animate={{ rotateZ: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.3)_360deg)]"
          />
          <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_20px_white]" />
        </div>

        {/* Floating Particles */}
        {[
          { dur: 3.2, del: 0.5, left: "35%", top: "40%", z: 30 },
          { dur: 2.5, del: 1.2, left: "65%", top: "30%", z: 45 },
          { dur: 3.8, del: 0.8, left: "45%", top: "70%", z: 25 },
          { dur: 2.1, del: 1.5, left: "75%", top: "60%", z: 50 },
          { dur: 3.5, del: 0.2, left: "25%", top: "50%", z: 35 },
        ].map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.del,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-moira-accent rounded-full"
            style={{
              left: p.left,
              top: p.top,
              transform: `translateZ(${p.z}px)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
