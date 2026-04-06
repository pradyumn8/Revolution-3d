"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const text =
    "We are a design company that helps brands define and thrive in culture. Creating influential strategy, brand identity, packaging design and communications.";

  const words = text.split(" ");

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Label */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-muted)]">
              ( About Us )
            </span>
          </motion.div>

          {/* Large text */}
          <div className="md:w-2/3" ref={ref}>
            <p
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  initial={{ opacity: 0.15 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: "easeOut",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
