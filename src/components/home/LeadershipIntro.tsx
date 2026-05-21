"use client";
import { fallbackImage } from "@/utils/secrets";
import { ImageWithFallback } from "../common/ImageWIthFallback";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

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
    <div className="bg-[#f8f9f8] py-10 lg:py-20" ref={containerRef}>
      <div className="max-w-7xl w-full mx-auto px-4 flex flex-col xl:flex-row gap-4 xl:gap-10">
        <div className="xl:max-h-140 w-full xl:w-1/2 ">
          <ImageWithFallback
            src="/images/leader-intro.jpg"
            alt="Leadership Team"
            width={600}
            height={400}
            fallbackSrc={fallbackImage}
            className="w-full h-1/2 xl:h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full xl:w-1/2">
          <h3 className="text-center text-2xl lg:text-5xl font-semibold ">
            Meet Our CTO
          </h3>
          <p className="mt-4 lg:mt-10 text-justify text-gray-700 lg:text-xl">
            Our CTO, John Doe, is a visionary leader with over 20 years of
            experience in the tech industry. He has a proven track record of
            driving innovation and leading successful teams to deliver
            cutting-edge solutions. Under his leadership, our company has
            achieved significant milestones and continues to push the boundaries
            of technology. John's passion for technology and commitment to
            excellence inspire our entire team to strive for greatness every
            day.
          </p>

          <Link
            href="#"
            className="mt-6 lg:mt-20 inline-block bg-primary text-center hover:bg-violet-900 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
          >
            Learn More About Our Leadership
          </Link>

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
      </div>
    </div>
  );
};
