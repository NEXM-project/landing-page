"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ImageWithFallback } from "../common/ImageWIthFallback";
import { fallbackImage } from "@/utils/secrets";
import "swiper/css";
import "swiper/css/effect-fade";

interface TechStack {
  src: string;
}

interface TeamMember {
  name: string;
  image: string;
  imagePosition?: string;
  alt: string;
  description: string;
  techStacks: TechStack[];
}

interface TeamCarouselProps {
  teamMembers: TeamMember[];
}

export const TeamCarousel = ({ teamMembers }: TeamCarouselProps) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={1200}
      spaceBetween={20}
      slidesPerView={1}
      className="my-10"
    >
      {teamMembers?.map((member, index) => (
        <SwiperSlide key={index} className="overflow-hidden">
          <div className="bg-primary text-white h-264 lg:h-130 rounded-sm w-full overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row gap-4 justify-between h-full">
              <div className="space-y-6 lg:space-y-8 px-4 py-4 lg:px-16 xl:py-20 max-w-2xl overflow-hidden">
                <h3 className="text-2xl lg:text-4xl font-bold">
                  {member?.name}
                </h3>
                <p className="text-justify lg:text-left text-sm lg:text-base leading-6 lg:leading-8 ">
                  {member?.description}
                </p>
                <Link
                  href="#"
                  className="text-text px-3 py-2 lg:px-6 lg:py-3 text-primary text-base lg:text-xl bg-white rounded-md hover:text-primary/50 font-semibold mt-0 lg:mt-8 inline-block "
                >
                  Learn more
                </Link>
                <div className="flex flex-wrap gap-4">
                  {member?.techStacks?.map((tech, index) => (
                    <ImageWithFallback
                      key={index}
                      src={tech.src}
                      loading="eager"
                      width={400}
                      height={400}
                      fallbackSrc={fallbackImage}
                      alt={`Tech stack icon ${index + 1}`}
                      className="object-contain w-10 h-10"
                    />
                  ))}
                </div>
              </div>
              <div className="relative w-full lg:w-150 h-150 lg:h-full overflow-hidden shrink-0">
                <div className="absolute z-100 bg-linear-to-t lg:bg-linear-to-r from-primary to-transparent w-full h-full"></div>
                <ImageWithFallback
                  src={member?.image}
                  width={400}
                  height={400}
                  fallbackSrc={fallbackImage}
                  alt={member?.alt}
                  className={`object-cover ${member?.imagePosition || "object-center"} w-full h-full grayscale`}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
