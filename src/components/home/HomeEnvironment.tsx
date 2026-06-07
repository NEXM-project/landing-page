"use client";
import { fallbackImage } from "@/utils/secrets";
import { ImageWithFallback } from "../common/ImageWIthFallback";
import { Zap, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import SplitText from "../SplitText";
import { motion } from "motion/react";
import { fadeInUp } from "@/utils/transition";

const cardsData = [
  {
    end: 40,
    suffix: "%",
    description: "FASTER MVP",
  },
  {
    end: 99.9,
    suffix: "%",
    description: "UPTIME",
  },
  {
    end: 50,
    suffix: "+",
    description: "INTEGRATIONS",
  },
];

export const HomeEnvironment = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          countersRef.current.forEach((ref, index) => {
            if (ref) {
              const countUp = new CountUp(ref, cardsData[index].end, {
                duration: 2.5,
                decimalPlaces: index === 1 ? 1 : 0,
                suffix: cardsData[index].suffix,
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
    <div className="max-w-7xl mx-auto px-4 my-10 lg:my-30 min-h-screen flex flex-col justify-center gap-6 ">
      {/* <SplitText
        text="The NEXMTECH Advantage"
        className="py-4 text-primary font-semibold text-base lg:text-lg"
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      /> */}
      <SplitText
        text="Why Businesses Can Trust Us"
        className="text-3xl md:text-2xl lg:text-5xl font-semibold leading-8 lg:leading-16"
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

      {/* Main Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        className="flex flex-col lg:flex-row gap-4 justify-between"
      >
        <div>
          <p className="max-w-lg lg:text-lg text-justify mt-4">
            We keep communication clear, delivery organized, and support
            available after launch.
          </p>
          {/*
          <div className="py-6 lg:py-10 space-y-6 lg:space-y-8 max-w-xl">
            <div className="flex gap-4 items-start ">
              <Zap className="bg-purple-300 min-h-12 min-w-12 text-primary rounded-md px-2" />
              <div>
                <h3 className="font-medium text-base lg:text-2xl pb-3">
                  Accelerated Delivery
                </h3>
                <p className="text-sm lg:text-base">
                  Rapid prototyping and iterative development cycles reduce
                  time-to-market without compromising quality.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start ">
              <Zap className="bg-purple-300 min-h-12 min-w-12 text-primary rounded-md px-2" />
              <div>
                <h3 className="font-medium text-base lg:text-2xl pb-3">
                  Enterprise Reliability
                </h3>
                <p className="text-sm lg:text-base">
                  Architectures designed for scale, security, and high
                  availability from day one.
                </p>
              </div>
            </div>
          </div> */}
          <div className="py-6 lg:py-10 space-y-4 lg:space-y-6 max-w-xl">
            {[
              "Direct and professional",
              "More website-friendly",
              "Strong, Simple and client-focused",
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-linear-to-r from-purple-50 to-transparent hover:shadow-md transition-shadow duration-300 border border-purple-100"
              >
                <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                <p className="text-lg lg:text-xl font-medium text-gray-800">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative max-w-2xl w-full h-full">
          <ImageWithFallback
            src="/images/home-enviroment.png"
            alt="home enviroment"
            loading="eager"
            fallbackSrc={fallbackImage}
            width={1500}
            height={900}
            className="rounded-md object-cover w-full lg:w-2xl lg:max-h-100 h-full"
          />
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        className="py-6 "
        ref={containerRef}
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {cardsData &&
            cardsData?.map((card, index) => (
              <div
                key={index}
                className="bg-[#EDEEF0] lg:max-w-40 w-full p-6 rounded-md shadow-md hover:shadow-lg text-center lg:text-start transition-shadow duration-300"
              >
                <h3
                  ref={(el) => {
                    countersRef.current[index] = el;
                  }}
                  className="text-2xl text-primary mb-2"
                >
                  0
                </h3>
                <p className="text-gray-600">{card?.description}</p>
              </div>
            ))}
        </div>
      </motion.div>
      {/* five horizontal image full rounded */}
      {/* each and every image should be floaty */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        className="flex flex-row justify-center flex-wrap gap-8 lg:gap-16 py-10"
      >
        <div className="flex flex-row justify-center flex-wrap gap-8 lg:gap-16 py-10">
          {[
            { src: "/images/bubbles/99.9.png", alt: "client1" },
            { src: "/images/bubbles/roi.png", alt: "client2" },
            { src: "/images/bubbles/dx.png", alt: "client3" },
            { src: "/images/bubbles/team.png", alt: "client4" },
            { src: "/images/bubbles/full.png", alt: "client5" },
          ].map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5 + (index % 3) * 0.5,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <ImageWithFallback
                src={item.src}
                alt={item.alt}
                loading="eager"
                fallbackSrc={fallbackImage}
                width={300}
                height={150}
                className="rounded-full object-cover w-20 h-20 lg:w-32 lg:h-32"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
