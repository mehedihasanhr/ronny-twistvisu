"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactNode, useRef } from "react";
import cn from "../lib/utils";

gsap.registerPlugin(useGSAP);

export const CardReveal = ({
  children,
  className,
  control = "scroll",
  animationOptions = {
    delay: 0.5,
  },
}: {
  children: ReactNode;
  className?: string;
  control?: "scroll" | "auto";

  animationOptions?: Record<string, any>;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const container = ref.current;

      if (control === "scroll") {
        gsap.fromTo(
          ref.current,
          { y: 200, opacity: 0, scale: 0.7 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: { trigger: container, start: "top 80%" },
          }
        );
      } else {
        gsap.fromTo(
          ref.current,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            delay: 1.5,
            scale: 1,
            ease: "power4.out",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            ...animationOptions,
          }
        );
      }
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {children}
    </div>
  );
};
