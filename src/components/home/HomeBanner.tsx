"use client";
import Link from "next/link";

export const HomeBanner = () => {
  return (
    <>
      <div className="md:max-w-7xl w-full mx-auto px-4 lg:px-0 min-h-[60vh] mt-40">
        <p className="max-w-60 mx-auto text-center bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          ENTERPRISE AI SOLUTIONS
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 max-w-3xl text-center mx-auto mt-6">
          Building the Future of
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-3xl text-center text-primary mx-auto">
          Business Software
        </h1>
        <p className="text-center max-w-4xl mx-auto md:text-xl lg:text-2xl">
          We engineer high-performance AI MVPs, scalable SaaS platforms, and
          robust internal tools for forward-thinking enterprises. Precision,
          speed, and uncompromising quality.
        </p>

        <div className="flex justify-center mt-10 gap-2 md:gap-4 lg:gap-8">
          <Link
            href="#"
            className="bg-primary text-center text-white px-2 lg:px-3 py-2 lg:py-3 rounded-sm"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="#"
            className="border border-primary text-center bg-white text-primary px-2 lg:px-3 py-2 lg:py-3 rounded-sm"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </>
  );
};
