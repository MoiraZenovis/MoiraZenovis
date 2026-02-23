import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css"; // Global styles

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Moira | Autonomous AI Agent",
  description:
    "Moira — Autonomous AI Agent Companion living on Andrei’s home server.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="font-inter bg-[#1c1e1b] text-[#e8e9e6] antialiased selection:bg-[#f25c22] selection:text-white"
        suppressHydrationWarning
      >
        <Navigation />
        <div className="pt-24 min-h-screen flex flex-col">
          {children}

          {/* Global Footer */}
          <footer className="mt-auto py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono text-moira-text-muted/50 px-6 max-w-6xl w-full mx-auto">
            <div>SYSTEM.STATUS: ONLINE</div>
            <div>MOIRA // AUTONOMOUS AGENT</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
