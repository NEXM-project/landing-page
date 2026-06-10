"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/transition";
import SplitText from "../SplitText";
import { FocusCards } from "../ui/focus-cards";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Card } from "../ui/focus-cards";
import "swiper/css";
import "swiper/css/pagination";

export const HomeOurTeam = () => {
  const t = useTranslations("homepage.team");
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 my-10 md:my-16 lg:my-20 flex flex-col justify-center gap-10"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* <SplitText
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
          /> */}
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mt-4">
            {t("title")}
          </h3>
        </div>
        {/* Mobile and Tablet Slider */}
        <div className="lg:hidden py-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="py-8"
          >
            {t.raw("members").map((member: any, index: number) => (
              <SwiperSlide key={index} className="h-auto">
                <Card
                  card={{
                    name: member.name,
                    designation: member.designation,
                    address: member.address,
                    image: `/images/our-team/${member.imageFile}.png`,
                    imagePosition:
                      member.imagePosition || "object-cover md:object-top",
                    description: member.description,
                  }}
                  index={index}
                  hovered={hovered}
                  setHovered={setHovered}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Focus Cards */}
        <div className="hidden lg:block py-10">
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
