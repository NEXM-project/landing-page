"use client";
import projectData from "@/../public/db/projects-db.json";
import { Clock4 } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Project {
  name: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

const projectCard = (project: Project) => {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden h-120 text-white">
      <div className="relative w-full h-full">
        <div className="absolute z-10 p-6 flex flex-col gap-1 text-left pointer-events-none bottom-0">
          {/* date */}
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <Clock4 size={15} />
            <p className=" text-gray-300">{project.date}</p>
          </div>
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          {/* description */}
          <div className="lg:overflow-hidden lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:transition-all lg:duration-500 lg:ease-in-out">
            <p className="text-sm text-gray-200 mt-2 text-justify">
              {project.description}
            </p>
          </div>
          {/* tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-800/50 backdrop-blur-sm px-2 py-1 rounded text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* <div className="bg-black/50 w-full h-full absolute inset-0 z-5"></div> */}
        {/* <div className="absolute inset-0 z-6 bg-linear-to-t from-black to-transparent pointer-events-none"></div> */}
        <div className="absolute inset-0 z-6 pointer-events-none bg-black/80 lg:bg-transparent lg:bg-linear-to-t lg:from-black lg:to-transparent"></div>
        <Image
          src={project.image}
          alt={project.name}
          height={1600}
          width={1200}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export const HomeProjects = () => {
  return (
    <>
      <style>{`
        .swiper-pagination-bullet {
          background-color: #d1d5db !important;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--color-primary, #3b82f6) !important;
        }
      `}</style>
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-4">
            Affiliated Projects
          </h2>
          <p className="text-center text-sm lg:text-lg mb-8">
            A selection of websites, apps, dashboards, and digital products
            built by our team and partner network.
          </p>
          {/* Mobile and Tablet Slider */}
          <div className="lg:hidden mb-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={16}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              className="py-8"
            >
              {projectData.map((project: Project, index: number) => (
                <SwiperSlide key={index}>{projectCard(project)}</SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projectData.map((project: Project, index: number) => (
              <div key={index}>{projectCard(project)}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
