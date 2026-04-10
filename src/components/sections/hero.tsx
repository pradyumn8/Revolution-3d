"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ImageTrail } from "@/components/ui/image-trail";

const projectImages = [
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&q=80",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Image trail — above text, shows on hover */}
      <div className="absolute inset-0 z-20">
        <ImageTrail
          containerRef={containerRef}
          interval={100}
          rotationRange={15}
          animationSequence={[
            [{ scale: 1, opacity: 1, y: 0 }, { duration: 0.5, ease: "circOut" }],
            [{ scale: 0.98, opacity: 1, y: -30 }, { duration: 1.5, ease: [0.4, 0, 0.2, 1] }],
            [{ scale: 0.95, opacity: 0, y: -60 }, { duration: 1, ease: "easeOut" }],
          ]}
        >
          {projectImages.map((url, index) => (
            <div
              key={index}
              className="w-40 h-52 md:w-52 md:h-64 lg:w-60 lg:h-72 rounded-sm overflow-hidden -translate-x-1/2 -translate-y-1/2 shadow-2xl"
            >
              <img
                src={url}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      {/* Hero text — behind trail images */}
      <div className="relative z-[1] text-center px-4 select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* PP Migra style (DM Serif Display) for main lines */}
          <motion.h2
            className="text-[11vw] md:text-[9vw] lg:text-[8vw] font-normal leading-[0.9] tracking-[-0.02em] uppercase"
            style={{ fontFamily: "var(--font-serif)" }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            We Believe
          </motion.h2>
          <motion.h2
            className="text-[11vw] md:text-[9vw] lg:text-[8vw] font-normal leading-[0.9] tracking-[-0.02em] uppercase"
            style={{ fontFamily: "var(--font-serif)" }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            Brands Shape The
          </motion.h2>
          {/* Sharp Grotesk style (Space Grotesk) for "FUTURE" */}
          <motion.h2
            className="text-[14vw] md:text-[12vw] lg:text-[11vw] font-bold leading-[0.85] tracking-[-0.04em] uppercase mt-1"
            style={{ fontFamily: "var(--font-grotesk)" }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            Future
          </motion.h2>
        </motion.div>
      </div>

      {/* Location line */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-8 text-xs tracking-[0.2em] uppercase text-[var(--color-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>Sydney</span>
        <span>|</span>
        <span>London</span>
      </motion.div>
    </section>
  );
}
