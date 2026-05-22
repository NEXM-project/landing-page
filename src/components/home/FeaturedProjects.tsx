"use client";
import { motion } from "motion/react";
import { fadeInUp } from "@/utils/transition";
import { LogoLoop } from "../LogoLoop";
import SplitText from "../SplitText";

const imageLogos = [
  {
    src: "/images/client-projects-logo/nextpage.png",
    alt: "Company 1",
  },
  {
    src: "/images/client-projects-logo/mir.png",
    alt: "Company 2",
  },
  {
    src: "/images/client-projects-logo/gp.png",
    alt: "Company 3",
  },
  {
    src: "/images/client-projects-logo/skitto.png",
    alt: "Company 4",
  },
  {
    src: "/images/client-projects-logo/sundarban.png",
    alt: "Company 5",
  },
];
export const FeaturedProjects = () => {
  return (
    <>
      <motion.div
        className=" px-4 py-10 lg:py-30"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <p className=" max-w-7xl mx-auto text-center text-sm md:text-base font-medium text-primary">
          DELIVERING EXCELLENCE ACROSS INDUSTRIES.
        </p>

        <div className="text-center pt-4 mb-6 ">
          <SplitText
            text="Featured Client Projects"
            className="max-w-7xl mx-auto text-3xl lg:text-5xl font-semibold text-center lg:min-h-16"
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
        </div>
        {/* <h2 className="max-w-7xl mx-auto text-3xl lg:text-5xl font-semibold mb-6 text-center pt-4">
          Featured Client Projects
        </h2> */}
        <div className="pt-4 lg:pt-8">
          <LogoLoop
            logos={imageLogos}
            speed={90}
            direction="left"
            logoHeight={90}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </motion.div>
    </>
  );
};
