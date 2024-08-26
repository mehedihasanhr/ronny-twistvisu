"use client";

import cn from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface ISlider {
  direction?: "ltr" | "rtl";
  className?: string;
  speed?: number;
  children: React.ReactNode;
}

export const InfiniteMarqueeAnimation = ({
  direction = "ltr",
  speed = 60,
  className,
  children,
}: ISlider) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const container = ref.current;

      const items = gsap.utils.toArray(container.children);
      const itemCount = items.length;

      if (itemCount === 0) return;

      // Clone items for infinite effect
      items.forEach((item: any) => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
      });

      // GSAP animation
      const totalWidth = container.scrollWidth / 2;

      gsap.fromTo(
        container,
        { x: direction === "rtl" ? 0 : -totalWidth },
        {
          x: direction === "rtl" ? -totalWidth : 0,
          duration: totalWidth / speed,
          ease: "none",
          repeat: -1,
        }
      );

      return () => {
        // Cleanup function to kill GSAP animations
        gsap.killTweensOf(container);
      };
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      data-direction={direction}
      className={cn("flex items-center w-full gap-12", className)}
    >
      {children}
    </div>
  );
};
