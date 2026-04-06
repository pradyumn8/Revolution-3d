"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference"
    >
      <button
        className="text-white text-xs tracking-[0.2em] uppercase font-medium hover:opacity-60 transition-opacity"
        style={{ fontFamily: "var(--font-grotesk)" }}
      >
        ( Menu )
      </button>

      <a href="/" className="absolute left-1/2 -translate-x-1/2">
        <h1
          className="text-white text-lg md:text-xl tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <span className="italic">Our</span>Revolution
        </h1>
      </a>

      <button
        className="text-white text-xs tracking-[0.2em] uppercase font-medium hover:opacity-60 transition-opacity"
        style={{ fontFamily: "var(--font-grotesk)" }}
      >
        ( Work* )
      </button>
    </motion.nav>
  );
}
