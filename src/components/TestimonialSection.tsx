"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/Button";

gsap.registerPlugin(useGSAP);

const testimonials = [
  {
    id: "01",
    title: "Comprehensive Services",
    description:
      "From web development and design to SEO and content marketing, we offer a full suite of digital services.",
  },

  {
    id: "02",
    title: "Proven Track Record of Success",
    description:
      "We’ve helped over 100 businesses achieve their digital marketing goals, delivering measurable results that drive growth.",
  },

  {
    id: "03",
    title: "Cutting-Edge Technology and Tools",
    description:
      "We leverage the latest digital tools and technologies to ensure your business stays ahead of the competition.",
  },

  {
    id: "04",
    title: "Expert Team with Industry Experience",
    description:
      "Our team is composed of seasoned professionals with deep expertise across all digital marketing disciplines, from SEO to web development.",
  },

  {
    id: "05",
    title: "Commitment to Client Satisfaction",
    description:
      "Our client-first approach has earned us a high rate of repeat business and referrals, with 98% of our clients willing to recommend us.",
  },
];

export const TestimonialSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollContentContainer = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !ref.current ||
        !scrollContentContainer?.current ||
        !stickyContentRef?.current
      )
        return null;

      let content = scrollContentContainer.current;
      let container = ref.current;
      let stickyContent = stickyContentRef.current;

      const scrollHeight = content.offsetHeight - window.innerHeight * 2;

      gsap.to(content, {
        y: -scrollHeight,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: stickyContent,
          scrub: 0.1,
          end: `+=${content.offsetHeight - (window.innerHeight - 600)}`,
        },
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="border noise text-light bg-primary overflow-hidden py-[160px]"
    >
      <div className="container relative">
        <div className="w-full flex gap-[180px] max-w-[1200px] text-2xl font-medium text-accent">
          {/* Left */}
          <div ref={stickyContentRef}>
            <p className=" block mb-5">Why Choose Us</p>
            <h1 className="text-6xl leading-[60px] font-bold mb-8">
              5 Reason to Work with Us
            </h1>

            <p className="mb-12">
              Your Partner in Innovation: From website design to digital
              marketing, we create custom solutions that drive impact.
            </p>

            <Button variant="secondary" className="text-lg font-medium">
              Book a Meeting
            </Button>
          </div>

          {/* right */}

          <div ref={scrollContentContainer} className="flex flex-col">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[532px] py-[96px] first:pt-0 last:pb-0 flex gap-x-10 border-b last:border-0 border-light border-opacity-20"
              >
                <h1 className="text-6xl leading-[80px] font-bold opacity-20 text-light">
                  {testimonial.id}
                </h1>
                <div className="w-full max-w-[412px]">
                  <h1 className="text-4xl mb-6 font-bold">
                    {testimonial.title}
                  </h1>
                  <p className="leading-8 text-light opacity-80">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
