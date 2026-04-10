"use client";

import { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import FeaturedWork from "@/components/sections/featured-work";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import FooterCTA from "@/components/sections/footer-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  const [footerVisible, setFooterVisible] = useState(false);
  const handleFooterVisibility = useCallback((visible: boolean) => {
    setFooterVisible(visible);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Add lenis class to html for CSS hooks
    document.documentElement.classList.add("lenis", "lenis-smooth");

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Navbar hidden={footerVisible} />
      <Hero />
      <FeaturedWork />
      <AboutSection />
      <ServicesSection />
      <FooterCTA />
      <Footer onVisibilityChange={handleFooterVisibility} />
    </main>
  );
}
