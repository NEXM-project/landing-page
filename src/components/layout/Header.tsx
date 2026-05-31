"use client";

import { LocaleSwitcherSelect } from "@/components/layout/LocaleSwitcherSelect";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bluetooth, Hexagon, Menu } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationLinks = [
  { href: "#", label: "Services" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Nodi AI" },
  { href: "#", label: "Team" },
];

export const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    // <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full md:max-w-4xl xl:max-w-7xl px-4">
    <header className="mx-auto w-full z-50 md:max-w-4xl xl:max-w-7xl px-4 absolute top-6 left-1/2 transform -translate-x-1/2">
      <div className="backdrop-blue-md bg-white border border-black/20 rounded-lg px-8 sm:px-10 md:px-12 py-4 flex items-center justify-between gap-4">
        <div className="flex gap-2 items-center">
          <Hexagon className="fill-primary text-white" />
          <Link href="/" className="font-semibold text-2xl">
            NexM
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-black py-1 mx-2 font-medium transition-all duration-300 cursor-pointer border-b-2 ${
                isActive(link.href)
                  ? "border-b-primary"
                  : "hover:text-primary border-b-transparent hover:border-b-primary duration-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Locale Switcher */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="p-2 bg-primary text-white  rounded-sm">
            Get a quote
          </button>
          {/* <LocaleSwitcherSelect defaultValue={locale} label="Change language" /> */}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden">
            <Menu className="text-black" size={24} />
          </SheetTrigger>
          <SheetTitle className="sr-only"></SheetTitle>
          <SheetContent
            side="right"
            className="bg-white/80 border-l border-white/20 p-4"
          >
            <div className="flex flex-col gap-6 mt-8 ">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-black font-medium transition-all duration-300 cursor-pointer border-b-2 pb-2 ${
                    isActive(link.href)
                      ? "border-b-primary"
                      : "border-b-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="lg:hidden flex flex-col gap-4 ">
                <button className="p-2 bg-primary text-white  rounded-sm">
                  Get a quote
                </button>
                {/* <LocaleSwitcherSelect
                  defaultValue={locale}
                  label="Change language"
                /> */}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
