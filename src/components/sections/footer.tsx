"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
  { label: "Ventures", href: "/ventures" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const socialLinks = [
  { label: "Linkedin", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
];

// Animated footer text: even letters (0,2,4...) slide from top, odd letters (1,3,5...) slide from bottom
function AnimatedFooterText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const text = "OurRevolution";

  return (
    <div ref={ref} className="w-full overflow-hidden" style={{ maxHeight: "22vw" }}>
      <div
        className="text-[18vw] md:text-[16vw] lg:text-[14.5vw] font-normal leading-[1] tracking-[-0.03em] text-white flex whitespace-nowrap"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {text.split("").map((letter, i) => {
          const isEven = i % 2 === 0;

          return (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{
                  y: isEven ? "-110%" : "110%",
                  opacity: 0,
                }}
                animate={
                  isInView
                    ? { y: "0%", opacity: 1 }
                    : { y: isEven ? "-110%" : "110%", opacity: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {letter}
              </motion.span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Footer({
  onVisibilityChange,
}: {
  onVisibilityChange?: (visible: boolean) => void;
}) {
  const footerRef = useRef<HTMLElement>(null);
  const footerInView = useInView(footerRef, { margin: "-100px" });

  useEffect(() => {
    onVisibilityChange?.(footerInView);
  }, [footerInView, onVisibilityChange]);

  return (
    <footer ref={footerRef} className="relative bg-[#0a0a0a] text-white">
      {/* Top section with links */}
      <div className="px-6 md:px-12 lg:px-24 pt-24 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Sitemap */}
          <div>
            <h4
              className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              ( Sitemap )
            </h4>
            <ul className="space-y-2">
              {sitemapLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-grotesk)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h4
              className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              ( Copyright )
            </h4>
            <p
              className="text-sm text-white/60"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              2025 Our Revolution PTY Ltd
            </p>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              ( Social )
            </h4>
            <ul className="space-y-2 mb-8">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-grotesk)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sydney */}
          <div>
            <h4
              className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              ( Sydney )
            </h4>
            <p
              className="text-sm text-white/60 leading-relaxed"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              C26, 99 Jones Street,
              <br />
              Ultimo, Sydney, 2007,
              <br />
              NSW, Australia
              <br />
              +61 (02) 8034 2611
            </p>
          </div>

          {/* London */}
          <div>
            <h4
              className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              ( London )
            </h4>
            <p
              className="text-sm text-white/60 leading-relaxed"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              86-90 Paul Street,
              <br />
              London, EC2A 4NE,
              <br />
              United Kingdom
              <br />
              +44 (0)20 3131 0036
            </p>
          </div>
        </div>
      </div>

      {/* Large animated brand text — full width, bottom clipped */}
      <div className="w-full overflow-hidden">
        <AnimatedFooterText />
      </div>
    </footer>
  );
}
