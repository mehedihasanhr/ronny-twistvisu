import cn from "@/lib/utils";

export const EmojiSmile = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      className={cn("", className)}
    >
      <path
        d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
        fill="url(#paint0_linear_2099_245)"
        stroke="#7209B7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22.5C13.3682 24.3216 15.5464 25.5 18 25.5C20.4535 25.5 22.6318 24.3216 24 22.5"
        stroke="#7209B7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 12C22.5 12 21 13.5 21 15C22.125 13.5 24.375 13.5 25.5 15"
        stroke="#7209B7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 12C13.5 12 15 13.5 15 15C13.875 13.5 11.625 13.5 10.5 15"
        stroke="#7209B7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2099_245"
          x1={18}
          y1={3}
          x2={18}
          y2={33}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7209B7" stopOpacity={0} />
          <stop offset={1} stopColor="#7209B7" stopOpacity="0.24" />
        </linearGradient>
      </defs>
    </svg>
  );
};
