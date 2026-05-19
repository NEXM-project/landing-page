import { LogoLoop } from "../LogoLoop";

const imageLogos = [
  {
    src: "/images/client-projects-logo/nextpage.png",
    alt: "Company 1",
  },
  {
    src: "/images/client-projects-logo/mir.png",
    alt: "Company 2",
  },
  {
    src: "/images/client-projects-logo/gp.png",
    alt: "Company 3",
  },
  {
    src: "/images/client-projects-logo/skitto.png",
    alt: "Company 4",
  },
  {
    src: "/images/client-projects-logo/sundarban.png",
    alt: "Company 5",
  },
];
export const FeaturedProjects = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-20">
        <p className="text-center text-sm md:text-base text-primary">
          DELIVERING EXCELLENCE ACROSS INDUSTRIES.
        </p>
        <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-center pt-4">
          Featured Client Projects
        </h2>
        <div className="pt-4 lg:pt-8">
          <LogoLoop
            logos={imageLogos}
            speed={90}
            direction="left"
            logoHeight={90}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </>
  );
};
