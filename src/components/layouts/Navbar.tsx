import { Logo } from "@/components/layouts/Logo";
import Link from "next/link";
import { Button } from "../ui/Button";

export const Navbar = () => {
  return (
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

      <Button className="py-3 px-6 text-base leading-6 font-medium">
        Book a Meeting
      </Button>
    </div>
  );
};
