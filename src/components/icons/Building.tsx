import cn from "@/lib/utils";

export const Building = ({ className }: { className?: string }) => {
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
        d="M24 15L27.2241 15.9672C29.2839 16.5852 30.3138 16.8942 30.9069 17.6913C31.5 18.4884 31.5 19.5638 31.5 21.7141V33"
        stroke="#7209B7"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.5H16.5M12 19.5H16.5"
        stroke="#7209B7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 33H33"
        stroke="#7209B7"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 33V10.0759C4.5 6.30974 4.5 4.42667 5.68677 3.49236C6.87356 2.55806 8.62113 3.06533 12.1163 4.07985L19.6163 6.25683C21.7254 6.86906 22.7801 7.17516 23.39 8.00948C24 8.84381 24 9.98016 24 12.2529V33"
        fill="url(#paint0_linear_2099_232)"
      />
      <path
        d="M4.5 33V10.0759C4.5 6.30974 4.5 4.42667 5.68677 3.49236C6.87356 2.55806 8.62113 3.06533 12.1163 4.07985L19.6163 6.25683C21.7254 6.86906 22.7801 7.17516 23.39 8.00948C24 8.84381 24 9.98016 24 12.2529V33"
        stroke="#7209B7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0001 32.7006V28.3806C18.0001 27.023 18.0001 26.3442 17.5607 25.9224C17.1214 25.5006 16.4143 25.5006 15.0001 25.5006H13.5001C12.0859 25.5006 11.3788 25.5006 10.9394 25.9224C10.5001 26.3442 10.5001 27.023 10.5001 28.3806V32.7006"
        stroke="#7209B7"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2099_232"
          x1="14.25"
          y1={3}
          x2="14.25"
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
