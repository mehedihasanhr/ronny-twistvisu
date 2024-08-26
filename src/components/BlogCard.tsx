import Image from "next/image";
import React from "react";
import { Separator } from "./ui/Separator";
import cn from "../lib/utils";
import Link from "next/link";

interface IBlogCard {
  banner: string;
  tag: string;
  title: string;
  published: string;
  duration: string;
  className?: string;
}

export const BlogCard = ({
  banner,
  tag,
  title,
  published,
  duration,
  className,
}: IBlogCard) => {
  return (
    <div className={cn("rounded-t-[20px] overflow-hidden", className)}>
      <div className="mb-8 w-full aspect-[381/256]">
        <Image
          src={banner}
          alt="title"
          width={381}
          height={256}
          className="w-full h-full object-fill"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="py-[3px] w-fit rounded-[32px] bg-accent text-accent-foreground px-[14px] text-base leading-6">
          {tag}
        </div>
        <Link href="/" className="hover:text-primary">
          <h2 className="text-2xl leading-[30px] font-medium line-clamp-2">
            {title}
          </h2>
        </Link>
        <div className="flex items-center gap-4 text-dolphin-gray">
          <span className="inline-block whitespace-nowrap">{published}</span>
          <Separator orientation="vertical" className="h-5 bg-[#EDECF2]" />
          <span className="inline-block whitespace-nowrap">{duration}</span>
        </div>
      </div>
    </div>
  );
};
