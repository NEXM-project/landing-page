"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export const LocaleSwitcherToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "jp" : "en";
    router.replace({ pathname }, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="fixed top-6 md:top-28 xl:top-6 right-8 z-40 group  inline-flex items-center justify-center w-19 h-fit rounded-md overflow-hidden bg-linear-to-b from-primary to-violet-900 border border-primary text-white shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 p-2"
      aria-label="Toggle language"
      title={locale === "en" ? "Switch to Japanese" : "Switch to English"}
    >
      <div className="flex items-center gap-1 relative z-10 group-hover:text-primary transition-colors duration-600">
        <Globe size={18} />
        <span className="text-xs font-semibold">
          {locale === "en" ? "日本語" : "EN"}
        </span>
      </div>
      <span
        className="absolute bottom-0 left-0 right-0 h-0 bg-white z-0 transition-all duration-500 group-hover:h-full"
        style={{ transformOrigin: "50% 100% 0px" }}
      ></span>
    </button>
  );
};
