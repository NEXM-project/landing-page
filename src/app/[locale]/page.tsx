import { div } from "motion/react-client";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");
  return (
    <div className="pt-30">
      {/* Demo */}
      {/* Components Will be created on components/home */}
      <div className="max-w-7xl mx-auto px-4">
        <h1>{t("herobanner.heading")}</h1>
        <p>{t("herobanner.description")}</p>
      </div>
      {/* Demo */}
    </div>
  );
}
