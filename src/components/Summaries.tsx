import React from "react";
import { SummaryCard } from "./SummaryCard";
import { Card } from "./icons/Card";
import { InfiniteMarqueeAnimation } from "./InfiniteMarqueeAnimation";
import { SuccessProjectWaterMark } from "./icons/SuccessProjectWaterMark";
import { UnionWaterMark } from "./icons/UnionWaterMark";
import { DotGridWaterMark } from "./icons/DotGridWaterMark";
import { Building } from "./icons/Building";
import { EmojiSmile } from "./icons/EmojiSmile";

export const Summaries = () => {
  return (
    <section className="overflow-hidden  mb-[160px]">
      <div className="container mb-[96px]">
        <div className="grid grid-cols-12 gap-5 mx-auto w-full max-w-[1200px]">
          <SummaryCard
            icon={<Card />}
            waterMark={<SuccessProjectWaterMark />}
            title="Over"
            value="875+"
            description="successful projects completed"
            className="col-span-4 bg-secondary text-secondary-foreground"
          />

          <SummaryCard
            icon={<Building />}
            waterMark={<UnionWaterMark />}
            title="Over"
            value="875+"
            description="successful projects completed"
            className="col-span-4 bg-primary text-primary-foreground"
          />

          <SummaryCard
            icon={<EmojiSmile />}
            waterMark={<DotGridWaterMark />}
            title="Over"
            value="875+"
            description="successful projects completed"
            className="col-span-4 bg-accent text-accent-foreground"
          />
        </div>
      </div>

      {/* Marquee animation */}

      <div className="flex flex-col gap-5">
        <InfiniteMarqueeAnimation className="gap-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="min-w-[320px] h-[110px] rounded-2xl bg-border block"
            />
          ))}
        </InfiniteMarqueeAnimation>

        <InfiniteMarqueeAnimation className="gap-5" direction="rtl">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="min-w-[320px] h-[110px] rounded-2xl bg-border block"
            />
          ))}
        </InfiniteMarqueeAnimation>
      </div>
    </section>
  );
};
