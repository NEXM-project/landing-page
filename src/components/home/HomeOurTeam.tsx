"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/transition";
import SplitText from "../SplitText";
import { FocusCards } from "../ui/focus-cards";
import { useTranslations } from "next-intl";

export const HomeOurTeam = () => {
  const t = useTranslations("homepage.team");

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 my-10 md:my-16 lg:my-20 min-h-screen flex flex-col justify-center gap-10"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          <SplitText
            text={t("heading")}
            className="text-base md:text-lg text-primary lg:text-xl font-semibold text-center"
            delay={10}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mt-4">
            {t("title")}
          </h3>
        </div>
        <div className="my-10">
          <FocusCards
            cards={t.raw("members").map((member: any) => ({
              name: member.name,
              designation: member.designation,
              address: member.address,
              image: `/images/our-team/${member.imageFile}.png`,
              imagePosition:
                member.imagePosition || "object-cover md:object-top",
              description: member.description,
            }))}
          />
        </div>
      </div>
    </motion.div>
  );
};
