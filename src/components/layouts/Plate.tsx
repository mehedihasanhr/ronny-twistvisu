"use client";

import React, { useRef } from "react";
import cn from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Plate = ({
  className,
  options = {},
}: {
  className?: string;
  options?: Record<string, any>;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!svgRef?.current) return;

      gsap.fromTo(
        ".plate1",
        { x: -100, opacity: 0 },
        { opacity: 1, x: -8, delay: 1, ...options }
      );
      gsap.fromTo(
        ".plate2",
        { x: -100, opacity: 0 },
        { opacity: 1, x: 0, delay: 1, ...options }
      );
      gsap.fromTo(
        ".plate3",
        { x: -100, opacity: 0 },
        { opacity: 1, x: 0, delay: 1, ...options }
      );
      gsap.fromTo(
        ".plate4",
        { x: -100, opacity: 0 },
        { opacity: 1, x: 0, delay: 1, ...options }
      );
    },
    {
      scope: svgRef,
    }
  );

  return (
    <svg
      width={244}
      height={180}
      viewBox="0 0 244 180"
      fill="none"
      ref={svgRef}
      className={cn("", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="plate1 translate-x-0" filter="url(#filter0_b_2114_705)">
        <ellipse
          cx={50}
          cy={90}
          rx={50}
          ry={90}
          fill="url(#paint0_linear_2114_705)"
        />
        <path
          d="M99.5 90C99.5 114.784 93.9179 137.197 84.9183 153.397C75.9092 169.613 63.5431 179.5 50 179.5C36.4569 179.5 24.0908 169.613 15.0817 153.397C6.08206 137.197 0.5 114.784 0.5 90C0.5 65.2158 6.08206 42.8026 15.0817 26.6032C24.0908 10.3869 36.4569 0.5 50 0.5C63.5431 0.5 75.9092 10.3869 84.9183 26.6032C93.9179 42.8026 99.5 65.2158 99.5 90Z"
          stroke="url(#paint1_linear_2114_705)"
        />
      </g>
      <g
        className="plate2"
        transform="matrix(1,0,0,1,-40,0)"
        filter="url(#filter1_b_2114_705)"
      >
        <ellipse
          cx={98}
          cy={90}
          rx={50}
          ry={90}
          fill="url(#paint2_linear_2114_705)"
        />
        <path
          d="M147.5 90C147.5 114.784 141.918 137.197 132.918 153.397C123.909 169.613 111.543 179.5 98 179.5C84.4569 179.5 72.0908 169.613 63.0817 153.397C54.0821 137.197 48.5 114.784 48.5 90C48.5 65.2158 54.0821 42.8026 63.0817 26.6032C72.0908 10.3869 84.4569 0.5 98 0.5C111.543 0.5 123.909 10.3869 132.918 26.6032C141.918 42.8026 147.5 65.2158 147.5 90Z"
          stroke="url(#paint3_linear_2114_705)"
        />
      </g>
      <g
        className="plate3"
        transform="matrix(1,0,0,1,-88,0)"
        filter="url(#filter2_b_2114_705)"
      >
        <ellipse
          cx={146}
          cy={90}
          rx={50}
          ry={90}
          fill="url(#paint4_linear_2114_705)"
        />
        <path
          d="M195.5 90C195.5 114.784 189.918 137.197 180.918 153.397C171.909 169.613 159.543 179.5 146 179.5C132.457 179.5 120.091 169.613 111.082 153.397C102.082 137.197 96.5 114.784 96.5 90C96.5 65.2158 102.082 42.8026 111.082 26.6032C120.091 10.3869 132.457 0.5 146 0.5C159.543 0.5 171.909 10.3869 180.918 26.6032C189.918 42.8026 195.5 65.2158 195.5 90Z"
          stroke="url(#paint5_linear_2114_705)"
        />
      </g>
      <g
        className="plate4"
        transform="matrix(1,0,0,1,-136,0)"
        filter="url(#filter3_b_2114_705)"
      >
        <ellipse
          cx={194}
          cy={90}
          rx={50}
          ry={90}
          fill="url(#paint6_linear_2114_705)"
        />
        <path
          d="M243.5 90C243.5 114.784 237.918 137.197 228.918 153.397C219.909 169.613 207.543 179.5 194 179.5C180.457 179.5 168.091 169.613 159.082 153.397C150.082 137.197 144.5 114.784 144.5 90C144.5 65.2158 150.082 42.8026 159.082 26.6032C168.091 10.3869 180.457 0.5 194 0.5C207.543 0.5 219.909 10.3869 228.918 26.6032C237.918 42.8026 243.5 65.2158 243.5 90Z"
          stroke="url(#paint7_linear_2114_705)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_2114_705"
          x={-8}
          y={-8}
          width={116}
          height={196}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2114_705"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2114_705"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_2114_705"
          x={40}
          y={-8}
          width={116}
          height={196}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2114_705"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2114_705"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_b_2114_705"
          x={88}
          y={-8}
          width={116}
          height={196}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2114_705"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2114_705"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_b_2114_705"
          x={136}
          y={-8}
          width={116}
          height={196}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2114_705"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2114_705"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2114_705"
          x1={50}
          y1={0}
          x2={50}
          y2={180}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2114_705"
          x1={0}
          y1={90}
          x2={100}
          y2={90}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.32" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2114_705"
          x1={98}
          y1={0}
          x2={98}
          y2={180}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2114_705"
          x1={48}
          y1={90}
          x2={148}
          y2={90}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.32" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2114_705"
          x1={146}
          y1={0}
          x2={146}
          y2={180}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2114_705"
          x1={96}
          y1={90}
          x2={196}
          y2={90}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.32" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2114_705"
          x1={194}
          y1={0}
          x2={194}
          y2={180}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2114_705"
          x1={144}
          y1={90}
          x2={244}
          y2={90}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.32" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};
