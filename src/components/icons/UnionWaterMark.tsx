"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cn from "../../lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const UnionWaterMark = ({ className }: { className?: string }) => {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!ref?.current) return;
      const container = ref?.current;

      gsap.fromTo(
        container,
        { x: 120 },
        {
          x: 0,
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
          },
        }
      );
    },
    {
      scope: ref,
    }
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={112}
      height={144}
      viewBox="0 0 112 144"
      fill="none"
      ref={ref}
      className={cn("", className)}
    >
      <g opacity="0.2">
        <path
          d="M120 70.6654C125.523 70.6654 130 58.7263 130 43.9987C130 29.2711 125.523 17.332 120 17.332C114.477 17.332 110 29.2711 110 43.9987C110 58.7263 114.477 70.6654 120 70.6654Z"
          fill="#F5DAFF"
        />
        <path
          d="M98 55.9987C98 70.7263 93.5229 82.6654 88 82.6654C82.4771 82.6654 78 70.7263 78 55.9987C78 41.2711 82.4771 29.332 88 29.332C93.5229 29.332 98 41.2711 98 55.9987Z"
          fill="#F5DAFF"
        />
        <path
          d="M56 94.6654C61.5228 94.6654 66 82.7263 66 67.9987C66 53.2711 61.5228 41.332 56 41.332C50.4772 41.332 46 53.2711 46 67.9987C46 82.7263 50.4772 94.6654 56 94.6654Z"
          fill="#F5DAFF"
        />
        <path
          d="M24 106.669C29.5228 106.669 34 94.7302 34 80.0026C34 65.275 29.5228 53.3359 24 53.3359C18.4772 53.3359 14 65.275 14 80.0026C14 94.7302 18.4772 106.669 24 106.669Z"
          fill="#F5DAFF"
        />
        <path
          d="M152 58.6654C157.523 58.6654 162 46.7263 162 31.9987C162 17.2711 157.523 5.33203 152 5.33203C146.477 5.33203 142 17.2711 142 31.9987C142 46.7263 146.477 58.6654 152 58.6654Z"
          fill="#F5DAFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M176 32C176 67.3462 165.255 96 152 96C146.981 96 142.323 91.8921 138.47 84.8682C134.068 99.001 127.428 108 120 108C114.981 108 110.322 103.892 106.47 96.8682C102.068 111.001 95.4281 120 88 120C82.9813 120 78.3224 115.892 74.4703 108.868C70.0681 123.001 63.4281 132 56 132C50.9813 132 46.3224 127.892 42.4703 120.868C38.0681 135.001 31.4281 144 24 144C10.7452 144 0 115.346 0 80C0 44.6538 10.7452 16 24 16C29.0187 16 33.6776 20.1079 37.5297 27.1318C41.9319 12.999 48.5719 4 56 4C61.0187 4 65.6776 8.10791 69.5297 15.1318C73.9319 0.999023 80.5719 -8 88 -8C93.0187 -8 97.6776 -3.89209 101.53 3.13184C105.932 -11.001 112.572 -20 120 -20C125.019 -20 129.678 -15.8921 133.53 -8.86816C137.932 -23.001 144.572 -32 152 -32C165.255 -32 176 -3.34619 176 32ZM24 125.334C32.3672 125.334 39.3226 109.215 40.7372 87.9858C43.5073 103 49.3011 113.333 56 113.333C64.367 113.333 71.3223 97.2134 72.7371 75.9854C75.5071 91 81.3011 101.333 88 101.333C96.367 101.333 103.322 85.2134 104.737 63.9854C107.507 79 113.301 89.3325 120 89.3325C128.367 89.3325 135.322 73.2134 136.737 51.9854C139.507 67 145.301 77.3325 152 77.3325C161.389 77.3325 169 57.0361 169 31.9995C169 6.9624 161.389 -13.334 152 -13.334C143.633 -13.334 136.678 2.78467 135.263 24.0132C132.493 8.99854 126.699 -1.33398 120 -1.33398C111.633 -1.33398 104.678 14.7847 103.263 36.0132C100.493 20.9985 94.6989 10.666 88 10.666C79.633 10.666 72.6778 26.7847 71.2629 48.0132C68.4929 32.9985 62.6989 22.666 56 22.666C47.6328 22.666 40.6775 38.7856 39.2629 60.0146C36.4928 45 30.6989 34.668 24 34.668C14.6111 34.668 7 54.9644 7 80.0015C7 105.038 14.6111 125.334 24 125.334Z"
          fill="#F5DAFF"
        />
      </g>
    </svg>
  );
};
