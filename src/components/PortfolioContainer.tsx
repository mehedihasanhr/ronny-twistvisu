"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { PortfolioCard } from "./PortfolioCard";

export const PortfolioContainer = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return null;

    let container = ref.current;
    let sections = gsap.utils.toArray(container.children);

    // Calculate the total width
    let totalWidth = sections.reduce((total, section: any) => {
      return total + section.offsetWidth;
    }, 0);

    let endValue = Number(totalWidth) - 120;

    gsap.to(sections, {
      xPercent: -113.5 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.1,
        start: "top 25%",
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: `+=${endValue}`,
      },
    });
  }, {});

  return (
    <section>
      <div ref={ref} className="container flex gap-40 overflow-hidden">
        <div className="w-full max-w-[1200px] translate-x-[120px] mx-auto">
          <PortfolioCard />
        </div>
        <div className="w-full max-w-[1200px] translate-x-[120px] mx-auto">
          <PortfolioCard />
        </div>
      </div>
    </section>
  );
};
