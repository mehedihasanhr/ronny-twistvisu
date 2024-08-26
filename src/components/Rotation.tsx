"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

export const Rotation = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({ yoyo: true });
      tl.to(ref.current, {
        rotation: 90,
        repeatDelay: Math.random() * (2 - 0.5) + 0.5,
        repeat: -1,
        scale: 1.2,
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
};
