import { Mail, MapPin } from "lucide-react";
import { HomeContactUsForm } from "./HomeContactUsForm";
import { ImageWithFallback } from "../common/ImageWIthFallback";

export const HomeContactUs = () => {
  return (
    <div className="min-h-screen pt-25 flex justify-center">
      <div className="xl:max-w-7xl mx-auto flex flex-col px-4">
        <h2 className="text-4xl xl:text-7xl py-4 font-semibold">
          Got plans? Let's turn them into something real
        </h2>
        <p className="xl:text-3xl py-4">Tell us what's on your mind </p>
        <div className="border-b"></div>
        <div className="grid grid-cols-1 xl:grid-cols-2 flex-1 gap-8">
          <div className="w-full xl:w-fit py-10">
            <div className="bg-primary/10 rounded-md p-5">
              <ImageWithFallback
                src="/images/contact-us-icon.png"
                width="70"
                height="70"
                alt="image"
              />
              <p className="pb-2">+49 211 84 73 00</p>
              <p className="pb-2">info@orchidstudio.com</p>
              <p className="pb-2">Königsallee 27, Düsseldorf, Germany</p>
            </div>
          </div>
          <div className="">
            <HomeContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};
