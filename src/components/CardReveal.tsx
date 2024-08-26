"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactNode, useRef } from "react";
import cn from "../lib/utils";

gsap.registerPlugin(useGSAP);

export const CardReveal = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const container = ref.current;

      gsap.fromTo(
        ref.current,
        { y: 200, opacity: 0, scale: 0.7 },
        {
          y: 0,
          opacity: 1,
          delay: 0.1,
          scale: 1,
          scrollTrigger: { trigger: container, start: "top 80%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {children}
    </div>
  );
};
