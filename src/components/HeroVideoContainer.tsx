"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import cn from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export const HeroVideoContainer = ({
  options,
  className,
}: {
  options?: Record<string, any>;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref?.current) return;
      const container = ref.current;

      gsap.fromTo(
        container,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.5,
          delay: 1,
          ...options,
        }
      );
    },
    {
      scope: ref,
    }
  );

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center w-full bg-accent max-w-[1200px] aspect-video rounded-[40px]",
        className
      )}
    >
      <h1 className="text-accent-foreground/20 text-[60px] font-bold leading-[64px] w-[373px] text-center">
        Portfolio Motion Video
      </h1>
    </div>
  );
};
