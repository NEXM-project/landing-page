"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export const LocaleSwitcherMobile = () => {
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
      className="w-full flex items-center justify-between border border-primary px-4 py-3 rounded-md bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors duration-300"
      aria-label="Toggle language"
      title={locale === "en" ? "Switch to Japanese" : "Switch to English"}
    >
      <div className="flex items-center gap-3">
        <Globe size={20} className="text-primary" />
        <span className="font-medium text-sm text-black dark:text-white">
          {locale === "en" ? "Language" : "言語"}
        </span>
      </div>
      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
        {locale === "en" ? "日本語" : "English"}
      </span>
    </button>
  );
};
