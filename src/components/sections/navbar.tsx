"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "#about" },
  { label: "NEWS", href: "#news" },
  { label: "VENTURES", href: "#ventures" },
  { label: "CONTACT", href: "#contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const menuOverlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease, delay: 0.2 },
  },
};

const menuItemVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease,
      delay: 0.1 + i * 0.06,
    },
  }),
  exit: (i: number) => ({
    y: -40,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease,
      delay: i * 0.03,
    },
  }),
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference"
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-xs tracking-[0.2em] uppercase font-medium hover:opacity-60 transition-opacity"
          style={{ fontFamily: "var(--font-grotesk)" }}
        >
          {menuOpen ? "( Close )" : "( Menu )"}
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-overlay"
            variants={menuOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "var(--color-background)" }}
          >
            {/* ( YOU ARE HERE ) markers */}
            <div className="absolute top-28 left-1/2 -translate-x-1/2 flex items-center gap-[20vw] pointer-events-none">
              <span
                className="text-xs tracking-[0.2em] uppercase text-foreground/40"
                style={{ fontFamily: "var(--font-grotesk)" }}
              >
                ( YOU ARE HERE )
              </span>
              <span
                className="text-xs tracking-[0.2em] uppercase text-foreground/40"
                style={{ fontFamily: "var(--font-grotesk)" }}
              >
                ( YOU ARE HERE )
              </span>
            </div>

            <nav className="flex flex-col items-center gap-2 md:gap-4">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setMenuOpen(false)}
                  className="menu-link relative text-[clamp(3rem,10vw,8rem)] leading-[0.95] font-normal text-foreground transition-colors duration-300 hover:text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
