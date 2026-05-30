import Link from "next/link";
import { ImageWithFallback } from "../common/ImageWIthFallback";
import { MoveRight } from "lucide-react";

export const HomeNodiAI = () => {
  return (
    <section className="py-16">
      <div className="relative xl:max-w-7xl flex justify-center mx-auto lg:px-4 min-h-96 h-460 lg:h-300 ">
        <div className="bg-gray-600 absolute min-h-96 h-460 w-full lg:h-256  xl:max-w-5xl mx-auto lg:rounded-full"></div>
        <div className="relative flex flex-col items-center gap-10 lg:gap-44">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-10 z-10 mt-10 lg:mt-40 px-4 lg:px-0">
            <div>
              <ImageWithFallback
                src="/images/nodi-ai-logo.webp"
                height={1000}
                width={1000}
                alt="Nodi AI Logo"
                className="w-24 h-12 mx-auto lg:mx-0 lg:w-64 lg:h-36 xl:w-80"
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

          <h2 className="z-10 text-white lg:text-3xl font-medium">
            Impressive results for clients like you
          </h2>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row gap-10 z-10 px-4 lg:px-0 mt-10 lg:mt-10 lg:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 lg:gap-8 items-center lg:mt-32 hover:scale-110 duration-300 cursor-pointer">
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
                Manage WhatsApp, Instagram, Facebook, Telegram, and email from
                one inbox.
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
                AI-Powered Lead Qualification & Auto Replies
              </h3>
              <p className="text-black text-center max-w-sm">
                AI replies instantly, answers questions, and identifies
                high-intent leads.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4 lg:gap-8 items-center lg:mt-32 hover:scale-110 duration-300">
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
                Automate meeting booking, follow-ups, quotations, and pipeline
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
