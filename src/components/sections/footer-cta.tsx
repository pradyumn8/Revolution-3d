"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          ( Get In Touch )
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          What does the future hold for your brand?
        </motion.h2>
        <motion.p
          className="text-lg text-[var(--color-muted)] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Let&apos;s talk about how we can help you realise your brand&apos;s
          potential.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block text-xs tracking-[0.2em] uppercase border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}
