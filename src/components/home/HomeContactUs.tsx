"use client";
import { motion } from "motion/react";
import { fadeInUp } from "@/utils/transition";
import { ImageWithFallback } from "../common/ImageWIthFallback";
import { HomeContactUsForm } from "./HomeContactUsForm";
import SplitText from "../SplitText";

export const HomeContactUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      className="min-h-screen pt-25 flex justify-center"
    >
      <div className="xl:max-w-7xl w-full mx-auto flex flex-col px-4">
        <SplitText
          text={`Let’s Talk About Your Project`}
          className="text-3xl sm:text-4xl xl:text-6xl text-nowrap py-4 font-semibold "
          delay={20}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
        />

        {/* <h2 className="text-4xl xl:text-7xl py-4 font-semibold">
          Got plans? Let's turn them into something real
        </h2> */}
        <p className="xl:text-3xl py-4">
          Tell us what you want to build. We will review your idea and suggest
          the next step.
        </p>
        <div className="border-b"></div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="w-full xl:w-fit xl:min-w-100  py-10">
            <div className="bg-primary/10 rounded-md p-5 ">
              <ImageWithFallback
                src="/images/contact-us-icon.png"
                width="100"
                height="100"
                loading="eager"
                alt="icon"
              />
              <p className="pb-2 lg:text-lg">+818095339061</p>
              <p className="pb-2 lg:text-lg">enquiry@nexmtech.com</p>
              <p className="pb-2 lg:text-lg">Tokyo, Japan</p>
            </div>
          </div>
          <div className="">
            <HomeContactUsForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
