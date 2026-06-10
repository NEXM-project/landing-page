"use client";
import { fadeInUp } from "@/utils/transition";
import {
  Bot,
  Bug,
  Cloud,
  Logs,
  RefreshCw,
  ShieldCheck,
  PenTool,
  Smartphone,
  Monitor,
  SearchCheck,
  Palette,
  Target,
  Megaphone,
  Globe,
  ShoppingCart,
  FileText,
  AppWindow,
  Users,
  Link,
  CreditCard,
} from "lucide-react";
import { motion } from "motion/react";
import SplitText from "../SplitText";

export const HomeEngineeringExcellence = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-10 min-h-screen"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
    >
      {/* <h2 className="py-4 text-primary font-semibold text-center lg:text-lg">
        The NEXM ADVANTAGE
      </h2> */}
      {/* Main Section */}
      <div className="flex justify-center w-full">
        <div>
          <div className="text-center">
            <SplitText
              text="What We Build"
              className="text-xl md:text-2xl lg:text-5xl font-semibold leading-8 lg:leading-16 text-center"
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
          {/* <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold leading-8 lg:leading-16 text-center">
            Engineering Excellence
          </h2> */}
          <p className="font-sm lg:font-base text-center my-4">
            Comprehensive development services designed to scale your operations
            and integrate cutting-edge AI.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-7xl lg:px-4 *:shadow-md gap-4 *:rounded-md *:p-4 *:lg:p-8 ">
            <div className="lg:col-span-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Bot color="#6d28d9" size={32} className="-translate-y-0.5" />
                  <h3 className="text-lg md:text-xl lg:text-2xl">
                    Website Development
                  </h3>
                </div>
                <p className="my-4 mb-8 text-sm lg:text-base">
                  Custom-built websites and applications tailored to your unique
                  business needs.
                </p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                className="grid lg:grid-cols-2 grid-cols-1 *:h-20 *:rounded-md gap-4 *:p-4"
              >
                <div className="bg-gray-100 flex items-center gap-3">
                  <Globe color="#6d28d9" />
                  <div>
                    <h4 className="text-sm lg:text-base  font-medium">
                      Landing Pages
                    </h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      High-conversion designs
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-3">
                  <ShoppingCart color="#6d28d9" />
                  <div>
                    <h4 className="text-sm lg:text-base font-medium">
                      E-commerce
                    </h4>
                    <p className="text-xs lg:text-sm  text-muted-foreground">
                      Online stores & payments
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-3">
                  <FileText color="#6d28d9" />
                  <div>
                    <h4 className="text-sm lg:text-base  font-medium">
                      CMS Integration
                    </h4>
                    <p className="text-xs lg:text-[13px]  text-muted-foreground">
                      Easy content management
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-3">
                  <AppWindow color="#6d28d9" />
                  <div>
                    <h4 className="text-sm lg:text-base font-medium">
                      Web Applications
                    </h4>
                    <p className="text-xs lg:text-sm  text-muted-foreground">
                      Interactive experiences
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Bot color="#6d28d9" size={32} className="-translate-y-0.5" />
                  <h3 className="text-lg md:text-xl lg:text-2xl">
                    SaaS Development
                  </h3>
                </div>
                <p className="my-4 mb-8 text-sm lg:text-base">
                  Building scalable, secure, and user-friendly SaaS platforms
                  that drive business growth.
                </p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                className="grid lg:grid-cols-2 grid-cols-1 *:h-20 *:rounded-md gap-4 *:p-4"
              >
                <div className="bg-gray-100 flex items-center gap-3">
                  <Cloud color="#6d28d9" />
                  <div>
                    <h4 className="text-sm lg:text-base  font-medium">
                      Cloud Architecture
                    </h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      Scalable infrastructure
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-3">
                  <Link color="#6d28d9" />
                  <div>
                    <h4 className="text-sm lg:text-base font-medium">
                      API Integration
                    </h4>
                    <p className="text-xs lg:text-sm  text-muted-foreground">
                      Seamless data flow
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-3">
                  <Users color="#6d28d9" />
                  <div>
                    <h4 className="text-sm lg:text-base  font-medium">
                      Multi-tenant Systems
                    </h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      Secure user isolation
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-3">
                  <CreditCard color="#6d28d9" />
                  <div>
                    <h4 className="text-sm lg:text-base font-medium">
                      Subscription Models
                    </h4>
                    <p className="text-xs lg:text-sm  text-muted-foreground">
                      Automated billing
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3 flex lg:flex-row flex-col gap-4 justify-between">
              <div className="lg:max-w-96">
                <div className="flex items-center gap-2">
                  <ShieldCheck
                    color="#6d28d9"
                    size={32}
                    className="-translate-y-0.5"
                  />
                  <h3 className="text-lg md:text-xl lg:text-2xl">
                    Maintenance & Support
                  </h3>
                </div>
                <p className="my-4 mb-8 text-sm lg:text-base">
                  Ensuring long-term stability and performance for enterprise
                  systems.
                </p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                className="grid lg:grid-cols-3 text-sm grid-cols-1 *:h-full *:rounded-md gap-4    *:py-4"
              >
                <div className="bg-gray-100 flex flex-col items-center px-2 justify-center gap-2">
                  <RefreshCw color="#6d28d9" className="" />
                  <p className="text-center">Ongoing Maintenance</p>
                </div>
                <div className="bg-gray-100 flex flex-col items-center justify-center gap-2 px-2">
                  <Bug color="#6d28d9" />
                  <p>Bug Fix / Support</p>
                </div>
                <div className="bg-gray-100 flex flex-col items-center justify-center gap-2 px-2">
                  <Logs color="#6d28d9" />
                  <p>QA Automation</p>
                </div>
              </motion.div>
            </div>
            {/* UI/UX Design */}
            <div className="lg:col-span-3 flex lg:flex-row flex-col gap-4 justify-between bg-zorgit/20">
              <div className="lg:max-w-96">
                <div className="flex items-center gap-2">
                  <PenTool
                    color="#6d28d9"
                    size={32}
                    className="-translate-y-0.5"
                  />
                  <h3 className="text-lg md:text-xl lg:text-2xl">
                    UI/UX Design
                  </h3>
                </div>
                <p className="my-4 mb-8 text-sm lg:text-base">
                  Crafting beautiful interfaces that engage users and elevate
                  your brand.
                </p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                className="grid lg:grid-cols-3 text-sm grid-cols-1 *:h-full *:rounded-md gap-4 *:xl:min-w-43  *:py-4"
              >
                <div className="bg-zorgit/70 flex flex-col items-center px-2 justify-center gap-2">
                  <Smartphone color="#6d28d9" className="" />
                  <p className="">Mobile App Design</p>
                </div>
                <div className="bg-zorgit/70 flex flex-col items-center justify-center gap-2 px-2">
                  <Monitor color="#6d28d9" />
                  <p>Web & SaaS Design</p>
                </div>
                <div className="bg-zorgit/70 flex flex-col items-center justify-center gap-2 px-2">
                  <SearchCheck color="#6d28d9" />
                  <p>UX Audit</p>
                </div>
              </motion.div>
            </div>
            {/* Branding */}
            <div className="lg:col-span-3 flex lg:flex-row flex-col gap-4 justify-between bg-zorgit/20">
              <div className="lg:max-w-96">
                <div className="flex items-center gap-2">
                  <Palette
                    color="#6d28d9"
                    size={32}
                    className="-translate-y-0.5"
                  />
                  <h3 className="text-lg md:text-xl lg:text-2xl">Branding</h3>
                </div>
                <p className="my-4 mb-8 text-sm lg:text-base">
                  Establishing a cohesive brand identity and strategy to stand
                  out in the market.
                </p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                className="grid lg:grid-cols-3 text-sm grid-cols-1 *:h-full *:rounded-md gap-4 *:xl:min-w-43  *:py-4"
              >
                <div className="bg-zorgit/70 flex flex-col items-center px-2 justify-center gap-2">
                  <Target color="#6d28d9" className="" />
                  <p className="text-center">Brand Strategy</p>
                </div>
                <div className="bg-zorgit/70 flex flex-col items-center justify-center gap-2 px-2">
                  <Palette color="#6d28d9" />
                  <p className="text-center">Logo & Guidelines</p>
                </div>
                <div className="bg-zorgit/70 flex flex-col items-center justify-center gap-2 px-2">
                  <Megaphone color="#6d28d9" />
                  <p className="text-center">Marketing Materials</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
