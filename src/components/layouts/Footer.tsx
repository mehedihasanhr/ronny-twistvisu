import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { Separator } from "../ui/Separator";
import { Button } from "../ui/Button";
import { Mail } from "../icons/Mail";
import { Whatsapp } from "../icons/Whatsapp";

export const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container">
        <div className="w-full mx-auto max-w-[1200px] pt-20 pb-10">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-4">
              <Link href="/" className="block mb-8">
                <Logo />
              </Link>

              <p className="text-light opacity-70 text-lg leading-7 w-full max-w-[320px]">
                Twistvisu is a specialized agency dedicated exclusively to UX/UI
                design and graphic design. With a sharp focus on crafting
                intuitive user experiences and visually compelling graphics.
              </p>
            </div>

            <div className="col-start-7 col-span-2">
              <ul className="flex flex-col gap-y-2.5 [&>li]:opacity-70 hover:[&>li]:opacity-100">
                <li className="mb-6 font-bold text-xl opacity-100">Company</li>
                <li>
                  <Link href="/">Services</Link>
                </li>
                <li>
                  <Link href="/">Portfolio</Link>
                </li>
                <li>
                  <Link href="/">Blogs</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2">
              <ul className="flex flex-col gap-y-2.5 [&>li]:opacity-70 hover:[&>li]:opacity-100">
                <li className="mb-6 font-bold text-xl opacity-100">Services</li>
                <li>
                  <Link href="/">Graphics Design</Link>
                </li>
                <li>
                  <Link href="/">UI/UX Design</Link>
                </li>
                <li>
                  <Link href="/">Web Development</Link>
                </li>
                <li>
                  <Link href="/" className="underline">
                    See All
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2">
              <ul className="flex flex-col gap-y-2.5 [&>li]:opacity-70 hover:[&>li]:opacity-100">
                <li className="mb-6 font-bold text-xl opacity-100">
                  Contact Us
                </li>
                <li>
                  <Link href="/" className="flex items-center gap-2.5">
                    <Mail />
                    info@twistvisu.com
                  </Link>
                </li>
                <li>
                  <Link href="/" className="flex items-center gap-2.5">
                    <Whatsapp />
                    +1 234 567 890
                  </Link>
                </li>
                <li className="mt-6">
                  <Button className="py-2.5 px-5 text-xl">
                    Book a Meeting
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-light/15" />
          {/* copyright */}
          <div className="flex items-center gap-4 pt-6 justify-between">
            <p>© 2024. TwistVisu.com</p>
            <div className="flex items-center gap-2">
              <a href="#">Linkedin</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
