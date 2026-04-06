"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "The Strategy",
    description:
      "The brands that 'get' the power of strategy are the brands that go the distance.",
    items: [
      "Brand Strategy",
      "Brand Architecture",
      "Brand Naming",
      "Brand Positioning",
      "Workshops & Research",
      "Competitor Analysis",
    ],
  },
  {
    number: "02",
    title: "The Design",
    description:
      "Your brand's symbology comes to life through creative design. The kind that doesn't just reflect the latest trends but leads them forward.",
    items: [
      "Brand Identity",
      "Packaging Design",
      "Brand Guidelines",
      "Art Direction",
      "Photography",
    ],
  },
  {
    number: "03",
    title: "The Communications",
    description:
      "Through the communication system of a brand, we create powerful ideas that drive people to think and feel differently.",
    items: [
      "Content Creation",
      "Campaign",
      "Copywriting",
      "Shopper Marketing",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="border-t border-foreground/10 py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Number & Title */}
        <div className="md:w-1/3">
          <motion.span
            className="text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] block mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {service.number}
          </motion.span>
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-serif)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {service.title}
          </motion.h3>
        </div>

        {/* Description & Items */}
        <div className="md:w-2/3">
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-[var(--color-muted)] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.description}
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {service.items.map((item, i) => (
              <motion.span
                key={item}
                className="text-xs tracking-[0.15em] uppercase border border-foreground/15 rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
