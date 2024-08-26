import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import cn from "@/lib/utils";

const separatorVariants = cva("block bg-divider rounded-full ", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

interface ISeparator {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const Separator = ({
  orientation = "horizontal",
  className,
}: ISeparator) => {
  return (
    <div
      data-orientation={orientation}
      className={cn(
        separatorVariants({
          orientation,
          className,
        })
      )}
    />
  );
};
