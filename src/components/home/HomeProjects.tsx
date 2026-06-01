import projectData from "@/../public/db/projects-db.json";
import { Clock4 } from "lucide-react";
import Image from "next/image";

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
          <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <p className="text-sm text-gray-200 mt-2">{project.description}</p>
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
        <div className="absolute inset-0 z-6 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export const HomeProjects = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div>
        <h2 className="text-5xl font-semibold text-center mb-8">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projectData.map((project: Project, index: number) => (
            <div key={index}>{projectCard(project)}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
