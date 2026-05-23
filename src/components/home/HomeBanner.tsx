"use client";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BlurText from "../BlurText";
import { ImageWithFallback } from "../common/ImageWIthFallback";

export const HomeBanner = () => {
  return (
    <section>
      <div className="relative min-h-screen flex h-full w-full lg:h-200 items-center justify-center bg-white dark:bg-black overflow-hidden">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="absolute z-10 bg-linear-to-t lg:bg-linear-to-bottom from-white to-transparent w-full h-full lg:h-[150%]"></div>
        <div className="xl:max-w-7xl w-full relative mx-auto px-4 lg:px-0 min-h-[60vh] z-20 mt-10 lg:mt-48 mb-10 lg:mb-20 ">
          <div className="flex flex-col items-center justify-center w-full">
            <BlurText
              text="Custom Software"
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 max-w-3xl mt-6"
              delay={100}
              animateBy="words"
              direction="top"
            />
            <BlurText
              text={`Built for Scale`}
              className="text-3xl md:text-5xl lg:text-6xl font-semibold max-w-3xl text-center text-primary mx-auto"
              delay={100}
              animateBy="words"
              direction="top"
            />
          </div>

          <div className="absolute flex items-center justify-center w-full">
            <ImageWithFallback
              alt="underline"
              loading="eager"
              src="/images/underline.png"
              width={400}
              height={100}
              className="w-64 md:w-96 lg:w-134 h-3"
            />
          </div>

          <div className=" max-w-4xl mx-auto">
            <BlurText
              text={`We design and engineer AI-driven products, modern SaaS applications, and powerful internal systems with a focus on performance, reliability, and growth.`}
              className="mt-6 lg:mt-8 md:text-xl lg:text-2xl"
              delay={10}
              animateBy="words"
              direction="top"
              justify="justify-between md:justify-center"
            />
          </div>

          <div className="flex justify-center mt-10 lg:mt-12">
            <Link
              href="#"
              className="group relative inline-flex items-center gap-2 px-3 md:pl-6 md:pr-4 py-2 md:py-3 overflow-hidden bg-linear-to-b from-primary to-violet-900 rounded-full border border-primary text-white font-medium cursor-pointer"
            >
              <span className="relative z-10 transition-colors duration-600 group-hover:text-primary">
                Discuss Your Project
              </span>
              <ArrowUpRight className="group-hover:text-primary duration-600 transition-colors z-10" />
              <span
                className="absolute bottom-0 left-0 right-0 h-0 bg-white z-0 transition-all duration-500 group-hover:h-full"
                style={{ transformOrigin: "50% 100% 0px" }}
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
