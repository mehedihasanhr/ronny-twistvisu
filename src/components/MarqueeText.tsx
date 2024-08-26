import React from "react";
import cn from "@/lib/utils";

export const MarqueeText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex-1 text-6xl uppercase leading-[64px] font-bold whitespace-nowrap text-[#E1E0E8]",
        className
      )}
    >
      {children}
    </div>
  );
};
