import React from "react";
import { InfiniteMarqueeAnimation } from "./InfiniteMarqueeAnimation";

export const ClientTestimonialSection = () => {
  return (
    <section className="my-[160px] flex flex-col items-center">
      <p className="text-center text-2xl text-primary block mb-6">
        Testimonials
      </p>
      <h1 className="text-6xl font-bold leading-[64px] mb-[64px] text-center max-w-[488px]">
        What Our Clients Are Saying
      </h1>

      <div>
        <div className="container relative flex flex-col overflow-hidden gap-5">
          <div className="absolute top-1/2 -translate-y-1/2 inset-y-0 left-0 w-[600px] h-[600px] z-10 bg-gradient-to-r from-light via-light/20 to-light/5" />
          <div className="absolute top-1/2 -translate-y-1/2 inset-y-0 right-0 bg-gradient-to-l from-light via-light/20 to-light/5 w-[600px] h-[600px] z-10" />

          <InfiniteMarqueeAnimation className="gap-5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} />
            ))}
          </InfiniteMarqueeAnimation>

          <InfiniteMarqueeAnimation direction="rtl" className="gap-5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} />
            ))}
          </InfiniteMarqueeAnimation>
        </div>
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <div className="min-w-[400px] rounded-[20px] p-6 flex-1 flex flex-col gap-y-5 bg-snow-white border-border border">
      <div className="flex items-center gap-6">
        <div className="bg-primary size-[58px] rounded-full" />
        <div>
          <h2 className="text-2xl font-medium">Client Name</h2>
          <p className="text-lg leading-6 text-dolphin-gray">
            CEO of Brandname
          </p>
        </div>
      </div>

      <p className="text-muted text-xl line-clamp-4 opacity-80">
        Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};
