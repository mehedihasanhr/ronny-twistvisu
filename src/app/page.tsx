import { Hero } from "@/components/layouts/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Rocket } from "@/components/icons/Rocket";
import { Separator } from "@/components/ui/Separator";
import { Windmill } from "@/components/icons/Windmill";
import { InfiniteMarqueeAnimation } from "@/components/InfiniteMarqueeAnimation";
import { Graph } from "../components/icons/Graph";
import { Card } from "../components/icons/Card";
import { Star } from "../components/icons/Star";
import { MarqueeText } from "../components/MarqueeText";
import { PortfolioContainer } from "../components/PortfolioContainer";
import { Summaries } from "../components/Summaries";
import { TestimonialSection } from "../components/TestimonialSection";
import { ClientTestimonialSection } from "../components/ClientTestimonialSection";
import { BlogSection } from "@/components/BlogSection";
import { Button } from "../components/ui/Button";
import { Building } from "../components/icons/Building";
import { EmojiSmile } from "../components/icons/EmojiSmile";
import Image from "next/image";
import { CardReveal } from "../components/CardReveal";
import { Footer } from "../components/layouts/Footer";
import { StickyNav } from "../components/layouts/StickyNav";
import { HeroVideoContainer } from "../components/HeroVideoContainer";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <Hero />
      {/* image container */}
      <section className="pt-[340px] relative">
        {/* video placeholder */}

        <div className="flex absolute -top-0 -translate-y-1/2 left-1/2 -translate-x-1/2  items-center justify-center w-full mx-w-[1200px] aspect-video rounded-[40px]">
          <HeroVideoContainer options={{ delay: 2.6 }} />
        </div>

        {/* service cards */}
        <div className="pt-20 w-full">
          <div className="flex items-center gap-[30px] mx-auto max-w-[1200px]">
            <ServiceCard
              icon={<Rocket />}
              title="Customized Strategies"
              description="We tailor our solutions to meet your unique business goals, ensuring maximum ROI."
            />

            <Separator
              orientation="vertical"
              className="bg-gradient-divider min-w-[1px] h-[260px]"
            />

            <ServiceCard
              icon={<Graph />}
              title="Data-Driven Results"
              description="Our decisions are guided by in-depth analytics, ensuring that every move is impactful."
            />

            <Separator
              orientation="vertical"
              className="bg-gradient-divider min-w-[1px] h-[260px]"
            />

            <ServiceCard
              icon={<Card />}
              title="Full-Service Approach"
              description="From concept to execution, we manage all aspects of your digital transformation."
            />
          </div>
        </div>
      </section>

      <Separator className="my-[160px] container max-w-[1200px] w-full" />

      {/* Marquee animation */}
      <section className="pb-[112px] overflow-hidden">
        <InfiniteMarqueeAnimation className="gap-12">
          <MarqueeText>Social Media Post Design</MarqueeText>
          <Star />
          <MarqueeText> Lead Magnet Design</MarqueeText>
          <Star />
          <MarqueeText> Landing Page Design </MarqueeText>
          <Star />
          <MarqueeText> Mobile App Design </MarqueeText>
          <Star />
        </InfiniteMarqueeAnimation>

        <InfiniteMarqueeAnimation className="gap-12" direction="rtl">
          <MarqueeText>Social Media Post Design</MarqueeText>
          <Windmill />
          <MarqueeText> Lead Magnet Design</MarqueeText>
          <Windmill />
          <MarqueeText> Landing Page Design </MarqueeText>
          <Windmill />
          <MarqueeText> Mobile App Design </MarqueeText>
          <Windmill />
        </InfiniteMarqueeAnimation>
      </section>
      {/* portfolio items */}
      <PortfolioContainer />
      <Separator className="my-[160px] container max-w-[1200px] w-full" />
      <Summaries />
      <TestimonialSection />
      <ClientTestimonialSection />
      <Separator className="container max-w-[1200px]" />
      <BlogSection />

      {/* discuss card */}
      <section className="mb-[160px]">
        <div className="container">
          <CardReveal>
            <div className="w-full relative max-w-[1200px] rounded-[40px] mx-auto overflow-hidden bg-primary text-primary-foreground bg-[url(/grid.svg)]">
              <div className="noise after:opacity-40 relative p-16">
                <div className="flex items-center justify-between">
                  {/* content */}
                  <div className="w-[564px] flex flex-col gap-y-6">
                    <h1 className="text-6xl leading-[64px] font-bold">
                      Let’s discuss about your next project.
                    </h1>

                    <p className="text-light opacity-80 text-[22px] leading-[28px]">
                      We offer a seamless after-sales service and provide the
                      flexibility to cancel your order at any time, no questions
                      asked, if you are not fully satisfied or decide not to
                      proceed. In such cases, refunds will be processed within
                      three to seven working days according to International
                      Standard Time.
                    </p>

                    <div className="pt-4">
                      <div className="flex items-center gap-8">
                        <Button
                          variant="secondary"
                          className="px-7 py-4 text-xl leading-7 font-medium hover:bg-light/10"
                        >
                          Book a Meeting
                        </Button>

                        <div className="flex">
                          <div className="p-4 rounded-full bg-accent border-[6px] border-primary">
                            <Card />
                          </div>
                          <div className="p-4 rounded-full bg-accent border-[6px] border-primary -translate-x-6">
                            <Building />
                          </div>
                          <div className="p-4 rounded-full bg-accent border-[6px] border-primary -translate-x-12">
                            <EmojiSmile />
                          </div>
                          <div className="p-4 rounded-full bg-accent border-[6px] border-primary -translate-x-20">
                            <Rocket />
                          </div>
                          <div className="p-4 rounded-full bg-accent border-[6px] border-primary -translate-x-28">
                            <Graph />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/discuss-card-watermark.png"
                      alt=""
                      width={284}
                      height={380}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
