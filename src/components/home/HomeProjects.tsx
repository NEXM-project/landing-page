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
        <div className="absolute inset-0 z-6 pointer-events-none bg-black/90 lg:bg-transparent lg:bg-linear-to-t lg:from-black lg:to-transparent"></div>
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
          Affiliated Projects
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
