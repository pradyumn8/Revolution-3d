"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Designing For Better Sleep With UTS",
    category: "Selected Projects",
    date: "15-03-2023",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
    position: "left" as const,
  },
  {
    title: "The Azurial Picks Up Silver At FAB",
    category: "Featured News",
    date: "17-10-2022",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
    position: "right" as const,
  },
  {
    title: "Noble Fellows Brand Identity",
    category: "Selected Projects",
    date: "28-04-2023",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    position: "center" as const,
  },
  {
    title: "Yerbi Energy Rebrand",
    category: "Featured News",
    date: "24-08-2023",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80",
    position: "left" as const,
  },
  {
    title: "Hans Craft Meats Packaging",
    category: "Selected Projects",
    date: "12-06-2023",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=1200&q=80",
    position: "right" as const,
  },
];

function StickyProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-15%" });

  // Parallax: image stays fixed-feeling while container scrolls
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const getAlignment = () => {
    if (project.position === "left") return "items-start pl-8 md:pl-16 lg:pl-24";
    if (project.position === "right") return "items-end pr-8 md:pr-16 lg:pr-24";
    return "items-center";
  };

  const getSize = () => {
    if (index % 3 === 0)
      return "w-[80vw] md:w-[45vw] lg:w-[38vw] h-[55vh] md:h-[65vh]";
    if (index % 3 === 1)
      return "w-[70vw] md:w-[40vw] lg:w-[32vw] h-[50vh] md:h-[60vh]";
    return "w-[65vw] md:w-[38vw] lg:w-[30vw] h-[45vh] md:h-[55vh]";
  };

  return (
    <div
      ref={cardRef}
      className={`relative min-h-[80vh] flex flex-col justify-center ${getAlignment()}`}
    >
      <motion.div
        className={`relative ${getSize()} group cursor-pointer`}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Category & Date label */}
        <div className="absolute top-5 left-5 z-10 text-white text-[10px] tracking-[0.2em] uppercase text-center">
          <span>( {project.category} )</span>
          <br />
          <span className="mt-1 inline-block">{project.date}</span>
        </div>

        {/* Image container with fixed/parallax image inside */}
        <div className="relative w-full h-full overflow-hidden rounded-sm">
          <motion.div
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{ y: imageY }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
        </div>

        {/* Title */}
        <motion.p
          className="mt-5 text-sm md:text-base font-medium text-foreground"
          style={{ fontFamily: "var(--font-grotesk)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {project.title}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section className="relative py-16">
      {projects.map((project, index) => (
        <StickyProjectCard key={index} project={project} index={index} />
      ))}
    </section>
  );
}
