"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface IServiceCard {
  icon: React.ReactElement | React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: IServiceCard) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref?.current) return null;

      gsap.fromTo(
        ref.current,
        {
          y: 130,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="p-8">
      <div className="mb-6">{icon}</div>
      <h2 className="text-2xl mb-4 font-medium leading-8 text-dark">{title}</h2>
      <p className="text-dolphin-gray text-[22px] leading-7 font-normal">
        {description}
      </p>
    </div>
  );
};
