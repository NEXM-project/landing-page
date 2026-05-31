"use client";
import { useState, useEffect } from "react";
import reviewData from "@/../public/db/reviews-db.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  company: string;
  position: string;
  stars: number;
  review: string;
  image: string;
  imagePosition: string;
}

const ReviewNavigation = ({ total }: { total: number }) => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  // Calculate progress width to start at 0% and end at 100%
  const progress = total <= 1 ? 0 : (activeIndex / (total - 1)) * 100;

  return (
    <div className="absolute bottom-0 w-full flex md:grid md:grid-cols-[auto_1fr] md:gap-16 z-10 pointer-events-none mb-6 md:mb-16 lg:mb-20 px-4 md:px-0">
      <div className="hidden md:block md:w-64" />
      <div className="flex-1 flex items-center gap-4 pointer-events-auto md:pr-8 max-w-sm mx-auto md:max-w-none md:mx-0 w-full justify-center md:justify-start">
        <button
          onClick={() => swiper.slidePrev()}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition shrink-0 bg-white md:bg-transparent"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={() => swiper.slideNext()}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition shrink-0 bg-white md:bg-transparent"
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export const HomeReview = () => {
  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Swiper className="!pb-28 md:!pb-24 select-none" grabCursor={true}>
          {reviewData.map((review: Review, index: number) => (
            <SwiperSlide key={index}>
              <div className="my-8 md:my-16 lg:my-20 flex flex-col justify-center">
                <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-center md:items-stretch">
                  <div className="flex items-center justify-center w-full md:w-auto">
                    <img
                      src={review.image}
                      alt={`${review.name}'s profile picture`}
                      className={`w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-sm pointer-events-none ${review.imagePosition}`}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-4 text-center md:text-left px-2 md:px-0">
                    <div className="flex items-center justify-center md:justify-start gap-1">
                      {Array.from({ length: review.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-500 w-5 h-5 md:w-6 md:h-6 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="text-base md:text-lg italic">
                      &quot;{review.review}&quot;
                    </p>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">
                        {review.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-500">
                        {review.position} at {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <ReviewNavigation total={reviewData.length} />
        </Swiper>
      </div>
    </section>
  );
};
