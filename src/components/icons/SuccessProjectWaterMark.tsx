"use client";

import cn from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const SuccessProjectWaterMark = ({
  className,
}: {
  className?: string;
}) => {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!ref?.current) return;

      const container = ref.current;

      let tl = {
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      };

      gsap.fromTo(".circle1", { x: 30 }, { x: 0, duration: 0.1 + 1, ...tl });
      gsap.fromTo(".circle2", { x: 60 }, { x: 0, duration: 0.2 + 1, ...tl });
      gsap.fromTo(".circle3", { x: 90 }, { x: 0, duration: 0.3 + 1, ...tl });
      gsap.fromTo(".circle4", { x: 120 }, { x: 0, duration: 0.4 + 1, ...tl });
      gsap.fromTo(".circle5", { x: 150 }, { x: 0, duration: 0.5 + 1, ...tl });
      gsap.fromTo(".circle6", { x: 180 }, { x: 0, duration: 0.6 + 1, ...tl });
    },
    { scope: ref }
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={112}
      height={192}
      viewBox="0 0 112 192"
      fill="none"
      className={cn("", className)}
      ref={ref}
    >
      <g opacity="0.2">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M142 80C142 96.5686 128.569 110 112 110C95.4315 110 82 96.5686 82 80C82 63.4314 95.4315 50 112 50C128.569 50 142 63.4314 142 80ZM136 80C136 93.2549 125.255 104 112 104C98.7452 104 88 93.2549 88 80C88 66.7451 98.7452 56 112 56C125.255 56 136 66.7451 136 80Z"
          fill="#7209B7"
          className="circle1"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M160 80C160 106.51 138.51 128 112 128C85.4904 128 64 106.51 64 80C64 53.4902 85.4904 32 112 32C138.51 32 160 53.4902 160 80ZM154 80C154 103.196 135.196 122 112 122C88.804 122 70 103.196 70 80C70 56.804 88.804 38 112 38C135.196 38 154 56.804 154 80Z"
          fill="#7209B7"
          className="circle2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M176 80C176 115.346 147.346 144 112 144C76.6537 144 48 115.346 48 80C48 44.6538 76.6537 16 112 16C147.346 16 176 44.6538 176 80ZM170 80C170 112.032 144.033 138 112 138C79.9675 138 54 112.032 54 80C54 47.9675 79.9675 22 112 22C144.033 22 170 47.9675 170 80Z"
          fill="#7209B7"
          className="circle3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112 160C156.183 160 192 124.183 192 80C192 35.8171 156.183 0 112 0C67.8172 0 32 35.8171 32 80C32 124.183 67.8172 160 112 160ZM112 154C152.869 154 186 120.869 186 80C186 39.1309 152.869 6 112 6C71.1309 6 38 39.1309 38 80C38 120.869 71.1309 154 112 154Z"
          fill="#7209B7"
          className="circle4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112 176C165.019 176 208 133.019 208 80C208 26.9807 165.019 -16 112 -16C58.9807 -16 16 26.9807 16 80C16 133.019 58.9807 176 112 176ZM112 170C161.706 170 202 129.706 202 80C202 30.2944 161.706 -10 112 -10C62.2944 -10 22 30.2944 22 80C22 129.706 62.2944 170 112 170Z"
          fill="#7209B7"
          className="circle5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M224 80C224 141.856 173.856 192 112 192C50.1441 192 0 141.856 0 80C0 18.144 50.1441 -32 112 -32C173.856 -32 224 18.144 224 80ZM218 80C218 138.542 170.542 186 112 186C53.4578 186 6 138.542 6 80C6 21.4578 53.4578 -26 112 -26C170.542 -26 218 21.4578 218 80Z"
          fill="#7209B7"
          className="circle6"
        />
      </g>
    </svg>
  );
};
