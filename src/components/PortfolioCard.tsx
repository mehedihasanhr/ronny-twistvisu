import cn from "../lib/utils";
import { Banding } from "./icons/Branding";
import { Brochure } from "./icons/Brochure";
import { Employee } from "./icons/Employee";
import { Marketing } from "./icons/Marketing";
import { Windmill } from "./icons/Windmill";
import { InfiniteMarqueeAnimation } from "./InfiniteMarqueeAnimation";
import { Rotation } from "./Rotation";
import { Button } from "./ui/Button";

export const PortfolioCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex gap-[128px] w-full mx-auto max-w-[1200px] pb-4",
        className
      )}
    >
      {/* Left content */}
      <div className="w-[388px] flex flex-col gap-y-16">
        <div className="flex items-center gap-x-10">
          <h1 className="w-[192px] text-5xl leading-[48px] font-normal">
            Graphics Design
          </h1>
          <Rotation>
            <Windmill className="size-20" />
          </Rotation>
        </div>

        {/* list */}
        <div>
          <ListItem icon={<Banding />} text="Brand Identity Design" />
          <ListItem icon={<Marketing />} text="Social Media Post Design" />
          <ListItem icon={<Employee />} text="Lead Magnet Design" />
          <ListItem icon={<Brochure />} text="Flyers & Brochures Design" />
        </div>

        <div className="flex items-center gap-2">
          <Button className="text-lg py-[14px] font-medium px-7">
            See All Services
          </Button>
          <Button
            variant="ghost"
            className="text-lg py-[14px] font-medium px-7 text-primary"
          >
            See Portfolio
          </Button>
        </div>
      </div>

      {/* Right content */}
      <div className="flex-1 flex flex-col gap-5 overflow-hidden">
        <InfiniteMarqueeAnimation className="gap-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="w-[300px] min-w-[300px] h-[242px] rounded-2xl bg-[#F3F2F8] items-center flex justify-center"
            >
              <span className="text-primary/50">Portfolio Image</span>
            </div>
          ))}
        </InfiniteMarqueeAnimation>
        <InfiniteMarqueeAnimation direction="rtl" className="gap-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="w-[300px] min-w-[300px] h-[242px] rounded-2xl bg-[#F3F2F8] items-center flex justify-center"
            >
              <span className="text-primary/50">Portfolio Image</span>
            </div>
          ))}
        </InfiniteMarqueeAnimation>
      </div>
    </div>
  );
};

const ListItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center [&>div]:py-4 [&>div]:border-b last:[&>div]:border-divider [&>div]:first:pt-0 [&>div]:last:pb-0 [&>div]:last:border-0 flex-row gap-x-7">
      <div className="border-transparent">{icon}</div>
      <div className="flex-1 text-2xl font-medium">{text}</div>
    </div>
  );
};
