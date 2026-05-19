import { Mail, MapPin } from "lucide-react";
import { HomeContactUsForm } from "./HomeContactUsForm";

export const HomeContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-16 px-4">
      {/* Contact Information */}
      <div className="max-w-md">
        <p className="text-primary lg:text-xl font-semibold">
          START A CONVERSATION
        </p>
        <h3 className="text-2xl lg:text-5xl font-semibold pt-4 lg:pt-6">
          Ready to build?
        </h3>
        <p className="pt-4 lg:pt-6 text-justify">
          Discuss your technical requirements with our engineering leads. We
          provide actionable insights and architectural proposals within 48
          hours.
        </p>

        <div className="pt-8 lg:pt-14 space-y-4">
          <div className="flex gap-4 items-center ">
            <Mail className="size-6 text-primary" />
            <p>hello@nexm.com</p>
          </div>
          <div className="flex gap-4 items-center ">
            <MapPin className="size-6 text-primary" />
            <p className="">Tokyo, Japan</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full">
        <HomeContactUsForm />
      </div>
    </div>
  );
};
