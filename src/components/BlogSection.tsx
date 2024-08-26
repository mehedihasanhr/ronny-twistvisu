import React from "react";
import { BlogCard } from "./BlogCard";
import { Button } from "./ui/Button";
import { CardReveal } from "./CardReveal";

export const BlogSection = () => {
  return (
    <section className="my-[160px]">
      <div className="container">
        <div className="w-full mx-auto max-w-[1200px] flex flex-col items-center">
          <p className="text-center text-2xl text-primary block mb-6">Blog</p>
          <h1 className="text-6xl font-bold leading-[64px] mb-[64px] text-center max-w-[488px]">
            Explore the latest trends & tips
          </h1>

          <div className="mb-[64px] grid grid-cols-12 gap-7">
            <CardReveal className="col-span-4">
              <BlogCard
                banner="/blog1.png"
                tag="UI Design"
                title="The top 10 templates to start building your beautiful website"
                published="August 22, 2024"
                duration="10 min read"
              />
            </CardReveal>
            <CardReveal className="col-span-4">
              <BlogCard
                banner="/blog2.png"
                tag="UI Design"
                title="The top 10 templates to start building your beautiful website"
                published="August 22, 2024"
                duration="10 min read"
              />
            </CardReveal>
            <CardReveal className="col-span-4">
              <BlogCard
                banner="/blog3.png"
                tag="UI Design"
                title="The top 10 templates to start building your beautiful website"
                published="August 22, 2024"
                duration="10 min read"
              />
            </CardReveal>
          </div>

          <Button className="py-[14px] px-7 text-lg leading-7 font-medium">
            See All Blog
          </Button>
        </div>
      </div>
    </section>
  );
};
