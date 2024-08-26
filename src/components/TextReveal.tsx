"use client";

import cn from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HTMLAttributeAnchorTarget, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

interface TextRevealProps {
  children: string;
  className?: string;
  tag?: any;
  options?: Record<string, any>;
}

export const TextReveal = ({
  children,
  className,
  tag = "span",
  options,
}: TextRevealProps) => {
  const textRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!textRef?.current) return;

      const content = textRef.current;

      const split = SplitType.create(content, {
        tagName: "span",
      });

      gsap.fromTo(
        split.lines,
        { y: 100, opacity: 0, delay: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1.5,
          delay: 1,
          ease: "power4.out",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ...options,
        }
      );
    },
    {
      scope: textRef,
    }
  );

  const Tag = tag;

  return (
    <Tag ref={textRef} className={cn("[span]>opacity-0", className)}>
      {children}
    </Tag>
  );
};
