"use client";

import cn from "@/lib/utils";

interface IWindmill {
  className?: string;
}

export const Windmill = ({ className }: IWindmill) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={49}
      height={48}
      viewBox="0 0 49 48"
      fill="none"
      className={cn("min-w-12 h-12", className)}
    >
      <path
        d="M29.9709 23.945H48.2177C48.3729 23.945 48.5001 24.0721 48.5001 24.2274V47.6597C48.5001 47.8165 48.3715 47.9449 48.2149 47.9435C35.194 47.7924 24.666 37.2718 24.5007 24.2556V47.7177C24.5007 47.8731 24.3736 48 24.2183 48H0.785297C0.628522 48 0.499993 47.8716 0.501405 47.7148C0.653943 34.5912 11.3387 24.0015 24.4993 24H0.782478C0.627115 24 0.5 23.8729 0.5 23.7176V0.285294C0.5 0.128524 0.628522 1.5729e-08 0.785297 0.00141237C13.8061 0.152534 24.3341 10.6731 24.4993 23.6893V0.28247C24.4993 0.127111 24.6264 0 24.7818 0H48.2149C48.3715 0 48.5001 0.128524 48.4987 0.285294C48.3673 11.5544 40.4693 20.9564 29.9074 23.3885C29.5811 23.4633 29.6362 23.945 29.9724 23.945H29.9709Z"
        fill="url(#paint0_linear_2099_69)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2099_69"
          x1="-26.3657"
          y1="-5.55232"
          x2="58.8881"
          y2="27.9403"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.335" stopColor="#7209B7" />
          <stop offset="0.81" stopColor="#F8E2D4" />
        </linearGradient>
      </defs>
    </svg>
  );
};
