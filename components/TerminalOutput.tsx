"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function TerminalOutput({ lines }: { lines: string[] }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(
        () => {
          setCurrentCharIndex((prev) => prev + 1);
        },
        20 + Math.random() * 30,
      ); // Random typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 300); // Pause between lines
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines]);

  return (
    <div className="font-mono text-sm md:text-base text-moira-secondary bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-moira-accent/50 to-transparent opacity-50" />

      {displayedLines.map((line, i) => (
        <div key={i} className="mb-2 flex">
          <span className="text-moira-text-muted mr-4 select-none">{">"}</span>
          <span dangerouslySetInnerHTML={{ __html: line }} />
        </div>
      ))}

      {currentLineIndex < lines.length && (
        <div className="flex">
          <span className="text-moira-text-muted mr-4 select-none">{">"}</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: lines[currentLineIndex].substring(0, currentCharIndex),
              }}
            />
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-moira-accent ml-1 align-middle"
            />
          </span>
        </div>
      )}

      {currentLineIndex >= lines.length && (
        <div className="flex">
          <span className="text-moira-text-muted mr-4 select-none">{">"}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-moira-accent align-middle"
          />
        </div>
      )}
    </div>
  );
}
