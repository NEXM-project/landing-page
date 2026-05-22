"use client";
import { fallbackImage } from "@/utils/secrets";
import { ImageWithFallback } from "../common/ImageWIthFallback";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import { motion } from "motion/react";
import { fadeInUp } from "@/utils/transition";
import SplitText from "../SplitText";
import { ArrowUpRight } from "lucide-react";

const statsData = [
  { end: 40, suffix: "+", description: "Startups Supported" },
  { end: 10, suffix: "+", description: "Projects Delivered" },
  { end: 5, suffix: "+", description: "Years of Experience" },
];

export const LeadershipIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          countersRef.current.forEach((ref, index) => {
            if (ref) {
              const countUp = new CountUp(ref, statsData[index].end, {
                duration: 2.5,
                decimalPlaces: 0,
                suffix: statsData[index].suffix,
              });
              if (!countUp.error) {
                countUp.start();
              }
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-[#f8f9f8] flex flex-col justify-center items-center py-12"
      ref={containerRef}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        className="max-w-7xl w-full mx-auto px-4 flex flex-col xl:flex-row gap-4 xl:gap-10"
      >
        <div className="xl:max-h-140 w-full xl:w-1/2 ">
          <ImageWithFallback
            src="/images/leader-intro.jpg"
            alt="Leadership Team"
            width={600}
            height={400}
            fallbackSrc={fallbackImage}
            loading="eager"
            className="w-full h-1/2 xl:h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full xl:w-1/2">
          <SplitText
            text="Meet Our CTO"
            className="text-center text-2xl lg:text-5xl font-semibold"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <p className="mt-4 lg:mt-10 text-gray-700 lg:text-xl text-justify">
            Our CTO, John Doe, is a visionary leader with over 20 years of
            experience in the tech industry. He has a prove track record of
            driving innovation and leading successful teams to deliver
            cutting-edge solutions. Under his leadership, our company has
            achieved significant milestones and continues to push the boundaries
            of technology. John's passion for technology and commitment to
            excellence inspire our entire team to strive for greatness everyday.
          </p>

          {/* <SplitText
            text="Our CTO, John Doe, is a visionary leader with over 20 years of experience in the tech industry. He has a prove track record of driving innovation and leading successful teams to deliver cutting-edge solutions. Under his leadership, our company has achieved significant milestones and continues to push the boundaries of technology. John's passion for technology and commitment to excellence inspire our entire team to strive for greatness everyday."
            className="mt-4 lg:mt-10 text-gray-700 lg:text-xl"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          /> */}

          <div className="mt-10 lg:mt-12">
            <Link
              href="#"
              className="group relative inline-flex items-center gap-2 px-3 md:px-6 py-2 md:py-3 overflow-hidden bg-linear-to-b from-primary to-violet-900 rounded-full border border-primary text-white font-medium cursor-pointer"
            >
              <span className="relative z-10 text-center md:text-start transition-colors duration-600 group-hover:text-primary">
                Learn More About Our Leaders
              </span>
              <ArrowUpRight className="group-hover:text-primary duration-600 transition-colors z-10" />
              <span
                className="absolute bottom-0 left-0 right-0 h-0 bg-white z-0 transition-all duration-500 group-hover:h-full"
                style={{ transformOrigin: "50% 100% 0px" }}
              ></span>
            </Link>
          </div>

          <div className="flex flex-col xl:flex-row gap-4 mt-6 lg:mt-12">
            <div className="lg:border-r lg:border-gray-300  px-2 flex gap-2 justify-center">
              <span
                className="font-medium text-2xl lg:text-4xl lg:w-20"
                ref={(el) => {
                  countersRef.current[0] = el;
                }}
              >
                0+
              </span>
              <span className="text-gray-700 text-base lg:text-xl">
                Startups Supported
              </span>
            </div>
            <div className="lg:border-r lg:border-gray-300 flex gap-2 justify-center px-2">
              <span
                className="font-medium text-2xl lg:text-4xl xl:w-18"
                ref={(el) => {
                  countersRef.current[1] = el;
                }}
              >
                0+
              </span>
              <span className="text-gray-700 text-base lg:text-xl">
                Projects Delivered
              </span>
            </div>
            <div className=" flex gap-2 justify-center">
              <span
                className="font-medium text-2xl lg:text-4xl xl:w-12"
                ref={(el) => {
                  countersRef.current[2] = el;
                }}
              >
                0+
              </span>
              <span className="text-gray-700 text-base xl:text-xl">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
