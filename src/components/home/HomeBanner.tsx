"use client";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Code2, Cpu, Globe, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import BlurText from "../BlurText";
import { ImageWithFallback } from "../common/ImageWIthFallback";
import { fallbackImage } from "@/utils/secrets";
import { fadeInUp } from "@/utils/transition";

export const HomeBanner = () => {
  return (
    <section>
      <div className="relative my-12 flex h-full w-full lg:h-200 items-center justify-center bg-white dark:bg-black overflow-hidden">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="absolute z-10 bg-linear-to-t lg:bg-linear-to-bottom from-white to-transparent w-full h-full lg:h-[150%]"></div>
        <div className="xl:max-w-7xl w-full relative flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 mx-auto px-4 xl:px-0 min-h-[60vh] z-20 mt-20 lg:mt-36 mb-10 lg:mb-20 ">
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
            <div className="flex flex-col items-left justify-center w-full">
              <BlurText
                text="Plan. Move. Scale"
                className="text-4xl md:text-5xl font-semibold mb-3 max-w-3xl mt-6 text-primary"
                delay={100}
                animateBy="words"
                direction="top"
              />
            </div>

            <div className="flex items-center justify-center max-w-2xl w-full">
              <ImageWithFallback
                alt="underline"
                loading="eager"
                src="/images/underline.png"
                width={400}
                height={100}
                className="w-64 md:w-96 lg:w-134 h-3"
              />
            </div>

            <div className="max-w-2xl mx-auto ">
              <BlurText
                text={`We help businesses build websites, software, internal systems, and AI-powered sales automation through a reliable remote engineering team based in Japan and globally.`}
                className="mt-6 lg:mt-8 md:text-xl lg:text-xl"
                delay={10}
                animateBy="words"
                direction="top"
                justify="justify-center"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 justify-center mt-10 lg:mt-12">
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
              <Link
                href="#"
                className="group relative inline-flex items-center gap-2 px-3 md:pl-6 md:pr-4 py-2 md:py-3 overflow-hidden bg-linear-to-b from-primary to-violet-900 rounded-full border border-primary text-white font-medium cursor-pointer "
              >
                <span className="relative z-10 transition-colors duration-600 group-hover:text-primary">
                  View Our Work
                </span>
                <ArrowUpRight className="group-hover:text-primary duration-600 transition-colors z-10" />
                <span
                  className="absolute bottom-0 left-0 right-0 h-0 bg-white z-0 transition-all duration-500 group-hover:h-full"
                  style={{ transformOrigin: "50% 100% 0px" }}
                ></span>
              </Link>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 hidden lg:flex items-center justify-center">
            {/* gradient blob, behind */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-250 w-80 lg:h-250 h-80 rounded-full bg-[radial-gradient(circle,_white_0%,_transparent_100%)] pointer-events-none" />

            {/* video on top */}
            <video
              autoPlay
              muted
              className="relative z-10 w-50 lg:w-100 h-50 lg:h-80 object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            >
              <source src="videos/orbit.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        className="flex flex-row justify-center flex-wrap gap-8 lg:gap-16"
      >
        <div className="flex flex-row justify-center flex-wrap gap-8 lg:gap-16 pb-10">
          {[
            { src: "/images/bubbles/based.png", alt: "client1" },
            { src: "/images/bubbles/ai.png", alt: "client2" },
            { src: "/images/bubbles/remote.png", alt: "client3" },
            { src: "/images/bubbles/project.png", alt: "client4" },
            { src: "/images/bubbles/ai2.png", alt: "client5" },
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
                className="object-contain w-30 h-30 lg:w-44 lg:h-48"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

{
  /* <div className="relative mt-20 lg:mt-0 w-full lg:w-1/2 flex items-center justify-center min-h-75 lg:min-h-100 z-10">
            {/* Background glowing rings */
}
{
  /* <motion.div
              className="absolute w-62.5 h-62.5 md:w-[320px] md:h-80 rounded-full border-2 border-dashed border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            /> */
}
{
  /* <motion.div
              className="absolute w-[320px] h-80 md:w-105 md:h-105 rounded-full border border-violet-500/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            /> */
}

{
  /* Central Element */
}
{
  /* <motion.div
              className="relative z-10 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-linear-to-tr from-primary/90 to-violet-600/90 shadow-[0_0_40px_rgba(124,58,237,0.4)] backdrop-blur-md border border-white/20"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cpu className="w-10 h-10 md:w-14 md:h-14 text-white" />
            </motion.div> */
}

{
  /* Orbiting / Floating Element 1 */
}
{
  /* <motion.div
              className="absolute top-4 left-4 md:top-10 md:left-10 lg:left-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800"
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </motion.div> */
}

{
  /* Orbiting / Floating Element 2 */
}
{
  /* <motion.div
              className="absolute bottom-8 right-8 md:bottom-20 md:right-10 lg:-right-4 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800"
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Globe className="w-8 h-8 md:w-10 md:h-10 text-violet-600" />
            </motion.div> */
}

{
  /* Orbiting / Floating Element 3 */
}
{
  /* <motion.div
              className="absolute top-1/2 right-2 md:right-8 lg:-right-8 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800"
              animate={{ y: [-10, 15, -10], rotate: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
            </motion.div>
          </div>  */
}
