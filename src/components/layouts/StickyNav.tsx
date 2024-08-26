"use client";

import React, { useRef } from "react";
import { Navbar } from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/Button";
import Link from "next/link";
import { Logo } from "./Logo";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const StickyNav = () => {
  const ref = useRef<HTMLHeadElement>(null);

  useGSAP(() => {
    if (!ref?.current) return;

    const header = ref.current;

    // Initial animation to hide the header
    gsap.fromTo(
      header,
      { y: -200 },
      {
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: header,
          start: "top top",
          end: "+=300",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );

    // Sticky effect on scroll
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: () => {
        if (window.scrollY <= 200) {
          gsap.to(header, { y: -200 });
        } else {
          gsap.to(header, { y: 0, display: "block", duration: 0.3 });
        }
      },
    });
  });

  return (
    <header
      ref={ref}
      className="bg-primary text-primary-foreground py-5 px-[120px] hidden fixed top-0 left-0 right-0 z-50 -translate-y-[200px]"
    >
      <div className="container flex items-center gap-4 justify-between">
        <Logo />
        <nav className="flex gap-4 items-center">
          <Link
            className="px-2 py-2.5 block text-light/70 hover:text-light"
            href="/"
          >
            Home
          </Link>
          <Link
            className="px-2 py-2.5 block text-light/70 hover:text-light"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="px-2 py-2.5 block text-light/70 hover:text-light"
            href="/portfolios"
          >
            Portfolios
          </Link>
          <Link
            className="px-2 py-2.5 block text-light/70 hover:text-light"
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="px-2 py-2.5 block text-light/70 hover:text-light"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <Button
          variant="secondary"
          className="py-3 px-6 text-base leading-6 font-medium hover:bg-light/20"
        >
          Book a Meeting
        </Button>
      </div>
    </header>
  );
};
