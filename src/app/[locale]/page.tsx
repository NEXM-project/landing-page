import { HomeBanner } from "@/components/home/HomeBanner";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");
  return (
    <>
      <HomeBanner />
    </>
  );
}
