import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeContactUs } from "@/components/home/HomeContactUs";
import { HomeEnviroment } from "@/components/home/HomeEnviroment";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");
  return (
    <>
      <HomeBanner />
      <HomeEnviroment />
      <FeaturedProjects />
      <HomeContactUs />
    </>
  );
}
