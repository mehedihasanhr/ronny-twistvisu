import { TextReveal } from "@/components/TextReveal";
import { Navbar } from "@/components/layouts/Navbar";
import { Plate } from "@/components/layouts/Plate";
import { Button } from "../ui/Button";
import { CardReveal } from "../CardReveal";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full hero-background bg-dark h-[1064px] text-light">
      <div className="absolute bg-primary blur-[440px] size-[660px] rounded-[660px] -top-[200px] -left-[200px]" />

      <header className="sticky top-0 left-0 inset-0 z-50 bg-dark/10 backdrop-blur-[6px] py-5 px-[120px]">
        <Navbar />
      </header>

      <div className="relative h-[841px] w-full bg-[url(/grid.svg)] bg-repeat">
        <div className="flex items-center justify-center py-20">
          <div className="w-[900px] text-center">
            <h1 className="text-6xl leading-[64px] font-bold mb-8">
              <TextReveal>
                Empowering Your Digital Presence for Business Growth
              </TextReveal>
            </h1>
            <div className="flex items-center flex-col mb-4">
              <div className="flex flex-row gap-8 w-[716px] overflow-hidden">
                <div className="w-[244px]">
                  <Plate options={{ delay: 1.8 }} />
                </div>
                <TextReveal
                  tag="p"
                  options={{
                    delay: 2,
                  }}
                  className="text-left text-2xl leading-7 text-light/80 font-normal"
                >
                  Unlock the potential of your brand with our cutting-edge
                  digital strategies, tailored solutions, and data-driven
                  results. We build, optimize, and transform your digital
                  ecosystem to achieve sustainable growth.
                </TextReveal>
              </div>
            </div>

            {/* buttons */}
            <div className="flex justify-center items-center gap-2 pt-4">
              <CardReveal
                animationOptions={{ delay: 2.3 }}
                control="auto"
                className="w-fit"
              >
                <Button variant="secondary">Book a Meeting</Button>
              </CardReveal>

              <CardReveal
                animationOptions={{ delay: 2.5 }}
                control="auto"
                className="w-fit"
              >
                <Button variant="ghost">Contact Us</Button>
              </CardReveal>
            </div>
          </div>
        </div>
      </div>

      {/* blur effect */}
      <div className="absolute bg-primary blur-[440px] size-[660px] rounded-[660px] -bottom-[330px] -right-[200px]" />
    </section>
  );
};
