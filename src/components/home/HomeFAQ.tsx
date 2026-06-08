"use client";
import { motion } from "motion/react";
import { fadeInUp } from "@/utils/transition";
import { useTranslations } from "next-intl";
import SplitText from "../SplitText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HomeFAQ() {
  const t = useTranslations("homepage.faq");

  const faqs = [
    { q: "q1", a: "a1" },
    { q: "q2", a: "a2" },
    { q: "q3", a: "a3" },
    { q: "q4", a: "a4" },
    { q: "q5", a: "a5" },
    { q: "q6", a: "a6" },
    { q: "q7", a: "a7" },
    { q: "q8", a: "a8" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      className="py-20 lg:py-30 flex justify-center"
    >
      <div className="xl:max-w-7xl w-full mx-auto flex flex-col px-4">
        <div className="text-center pt-4 mb-6">
          <SplitText
            text={t("heading")}
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

        <div className="max-w-6xl w-full mx-auto mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium hover:no-underline py-4">
                  {t(faq.q)}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-4 leading-relaxed">
                  {t(faq.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
}
