"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { routing, usePathname, useRouter } from "@/i18n/routing";

interface LocaleSwitcherSelectProps {
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect({
  defaultValue,
  label,
}: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    router.replace({ pathname }, { locale: nextLocale });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className={`w-18 p-0 md:p-4 text-sm font-medium transition duration-300 border-none bg-transparent shadow-none cursor-pointer focus:ring-0 `}
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing?.locales?.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale?.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
