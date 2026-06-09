import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeContactUs } from "@/components/home/HomeContactUs";
import { HomeEngineeringExcellence } from "@/components/home/HomeEngineeringExcellence";
import { HomeEnvironment } from "@/components/home/HomeEnvironment";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { HomeNodiAI } from "@/components/home/HomeNodiAI";
import { HomeOurTeam } from "@/components/home/HomeOurTeam";
import { HomeProjectCycle } from "@/components/home/HomeProjectCycle";
import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeReview } from "@/components/home/HomeReview";
import { LeadershipIntro } from "@/components/home/LeadershipIntro";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");
  return (
    <>
      <HomeBanner />
      <HomeNodiAI />
      <HomeEnvironment />
      {/* <LeadershipIntro /> */}
      <HomeOurTeam />
      <HomeEngineeringExcellence />
      <HomeProjects />
      <FeaturedProjects />
      {/* <HomeProjectCycle /> */}
      <HomeReview />
      <HomeFAQ />
      <HomeContactUs />
    </>
  );
}
