import Link from "next/link";
import { ImageWithFallback } from "../common/ImageWIthFallback";
import { MoveRight } from "lucide-react";
import BlurText from "../BlurText";

export const HomeNodiAI = () => {
  return (
    <section className="py-16">
      <BlurText
        text="Featuring Our AI Solution"
        className="text-4xl md:text-5xl font-semibold mb-4 lg:mb-16 max-w-3xl mx-auto"
        delay={100}
        animateBy="words"
        direction="top"
      />
      <div className="relative xl:max-w-7xl flex justify-center mx-auto lg:px-4 min-h-96 h-540 lg:h-300 ">
        <div className="bg-gray-600 absolute min-h-96 h-520 w-full lg:h-256  xl:max-w-5xl mx-auto lg:rounded-full"></div>
        <div className="relative flex flex-col items-center gap-10 lg:gap-22">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-10 z-10 mt-4 lg:mt-0 px-4 lg:px-0">
            <div>
              <ImageWithFallback
                src="/images/feature-nodi-ai.svg"
                height={1000}
                width={1000}
                alt="Nodi AI Logo"
                className="w-80 h-80 mx-auto lg:mx-0 lg:w-64 lg:h-120 xl:w-124"
              />
            </div>
            <div className=" flex gap-4 items-center max-w-lg">
              <div className="text-white space-y-4 max-w-sm">
                <h2 className="text-2xl lg:text-6xl font-medium">Nodi AI</h2>
                <p>Your AI agent handles leads. Your team closes the deals.</p>
              </div>
              <Link
                href="https://www.usenodi.com/"
                target="_blank"
                className="flex items-center bg-violet-500 hover:bg-primary duration-500 text-white font-bold py-4 px-4 rounded-full"
              >
                <MoveRight className="inline-block w-4 h-4" />
              </Link>
            </div>
          </div>

          <h2 className="z-10 text-white lg:text-4xl font-medium">
            Impressive results for clients like you
          </h2>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row gap-10 z-10 px-4 lg:px-0 mt-10 lg:mt-4 lg:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 lg:gap-8 items-center lg:mt-28 hover:scale-110 duration-300 cursor-pointer">
              <ImageWithFallback
                src="/images/placeholder-image.png"
                width={1000}
                height={1000}
                alt="feature 1"
                className="w-72 h-72 object-cover rounded-full"
              />
              <h3 className="text-black text-xl lg:text-2xl font-medium text-center">
                Unified Inbox Across Platforms
              </h3>
              <p className="text-black text-center max-w-sm">
                Manage Line, WhatsApp, Instagram, Facebook, Telegram, email, and
                website inquiries from one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 lg:gap-8 items-center hover:scale-110 duration-300">
              <ImageWithFallback
                src="/images/placeholder-image.png"
                width={1000}
                height={1000}
                alt="feature 2"
                className="w-72 h-72 object-cover rounded-full"
              />
              <h3 className="text-black text-xl lg:text-2xl font-medium text-center max-w-sm">
                AI Lead Qualification
              </h3>
              <p className="text-black text-center max-w-sm">
                Nodi identifies high-intent leads and engages them with
                professional, human-centered responses, empowering your team to
                focus on closing deals.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4 lg:gap-8 items-center lg:mt-28 hover:scale-110 duration-300">
              <ImageWithFallback
                src="/images/placeholder-image.png"
                width={1000}
                height={1000}
                alt="feature 3"
                className="w-72 h-72 object-cover rounded-full"
              />
              <h3 className="text-black text-xl lg:text-2xl font-medium text-center max-w-sm">
                Sales Automation
              </h3>
              <p className="text-black text-center max-w-sm">
                Automate follow-ups, meeting booking, quotations, and pipeline
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
