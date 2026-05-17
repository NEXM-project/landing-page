import { Hexagon } from "lucide-react";
import Link from "next/link";

const navigationLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Security" },
  { href: "#", label: "Cookie Policy" },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-black/20 bg-white py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex gap-2 items-center">
          <Hexagon className="fill-primary text-white" />
          <Link href="/" className="font-semibold text-2xl">
            NexM
          </Link>
        </div>
        <div className="flex flex-col lg:min-w-5xl ">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-black font-medium transition-all duration-300 cursor-pointer hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} NexM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
