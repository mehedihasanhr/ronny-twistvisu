import React, { ReactElement } from "react";
import cn from "../lib/utils";

interface ISummaryCardProps {
  icon: ReactElement;
  waterMark: ReactElement;
  title: string;
  value: string;
  description: string;
  className?: string;
}

export const SummaryCard = ({
  icon,
  waterMark,
  title,
  value,
  description,
  className,
}: ISummaryCardProps) => {
  return (
    <div className={cn("rounded-3xl p-8 overflow-hidden relative", className)}>
      {/* watermark */}
      <div className="absolute top-0 right-0">{waterMark}</div>

      <div className="mb-10 bg-[#FBF2FF] flex items-center justify-center rounded-full p-4 w-fit">
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <span className="block text-2xl leading-7 font-normal">{title}</span>
        <h1 className="text-6xl leading-[64px] font-bold">{value}</h1>
        <p className="block text-2xl leading-7 font-normal">{description}</p>
      </div>
    </div>
  );
};
