"use client";

import { useEffect, useState } from "react";
import { CircleFadingArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress =
        documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(scrolled > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate circumference for progress circle
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      {/* Background circle with progress border */}
      <div className="relative w-10 h-10 lg:w-15 lg:h-15 flex items-center justify-center">
        {/* Progress circle */}
        <svg
          className="absolute inset-0 w-10 h-10 lg:w-15 lg:h-15 transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-300 dark:text-gray-600"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-primary transition-all duration-100"
          />
        </svg>

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center bg-primary dark:bg-primary rounded-full w-8 h-8 lg:w-12 lg:h-12 hover:opacity-90 transition-colors">
          <CircleFadingArrowUp className="w-4 h-4 lg:w-8 lg:h-8 text-primary-foreground" />
        </div>
      </div>
    </button>
  );
}
