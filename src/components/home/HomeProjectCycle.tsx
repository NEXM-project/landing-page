import { fallbackImage } from "@/utils/secrets";
import { ImageWithFallback } from "../common/ImageWIthFallback";
import { Briefcase, FolderClosed, User } from "lucide-react";

export const HomeProjectCycle = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-10 lg:my-30">
      <div className="pb-10">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center">
          Flexible Process. Scalable Solutions.
        </h1>
        <p className="text-base lg:text-xl mt-4 text-center max-w-3xl mx-auto">
          Our agile approach enables faster delivery, better collaboration, and
          continuous refinement—ensuring every product is built to grow with
          your vision.
        </p>
      </div>

      <div className="mt-4 lg:mt-4 hidden lg:block relative">
        {/* Add any additional content or components for the project cycle section here */}
        <div className="w-full absolute min-h-40 px-4 pt-10">
          <ImageWithFallback
            src="/images/path.png"
            width={1000}
            height={1000}
            fallbackSrc={fallbackImage}
            alt="wave"
            className="object-fill w-full h-full  min-h-40 "
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Grid 1 */}
          <div className="flex gap- pt-36">
            <User className="shrink-0 size-12 text-primary" />
            <div className="flex gap-2">
              <p className="text-9xl font-semibold text-violet-300">1</p>
              <div>
                <p className="text-3xl mt-2">People</p>
                <p className="text-base mt-2">
                  People and teamwork matter most.
                </p>
              </div>
            </div>
          </div>

          {/* Grid 2 */}
          <div className="flex gap-2">
            <FolderClosed className="shrink-0 size-12 text-primary" />
            <div className="flex gap-2">
              <p className="text-9xl font-semibold text-violet-300">2</p>
              <div>
                <p className="text-3xl mt-2">Product</p>
                <p className="text-base mt-2 ">
                  Deliver functional products faster.
                </p>
              </div>
            </div>
          </div>

          {/* Grid 3 */}
          <div className="flex pt-36">
            <User className="shrink-0 size-12 text-primary -translate-y-4" />
            <div className="flex gap-2">
              <p className="text-9xl font-semibold text-violet-300">3</p>
              <div>
                <p className="text-3xl mt-2">Partnership</p>
                <p className="text-base mt-2 ">
                  Work closely with clients and feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Grid 4 */}
          <div className="flex gap-2">
            <div className="flex gap-2">
              <p className="text-9xl font-semibold bg-white  text-violet-300">
                4
              </p>
              <div>
                <p className="text-3xl mt-2">Adaptability</p>
                <p className="text-base mt-2 ">
                  Adapt quickly as needs evolve.
                </p>
              </div>
            </div>
            <User className="shrink-0 size-12 text-primary mt-20 rounded-full border border-violet-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
