import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeContactUs } from "@/components/home/HomeContactUs";
import { HomeEnvironment } from "@/components/home/HomeEnvironment";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");
  return (
    <>
      <HomeBanner />
      <HomeEnvironment />
      <FeaturedProjects />
      <HomeContactUs />
    </>
  );
}
