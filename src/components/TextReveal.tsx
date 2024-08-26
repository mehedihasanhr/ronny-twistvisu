"use client";

import cn from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

interface TextRevealProps {
  children: string;
  className?: string;
}

export const TextReveal = ({ children, className }: TextRevealProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  return (
    <span ref={textRef} className={cn("", className)}>
      {children}
    </span>
  );
};
