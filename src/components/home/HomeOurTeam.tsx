import { promises as fs } from "fs";
import path from "path";
import { TeamCarousel } from "./TeamCarousel";

interface TechStack {
  src: string;
}

interface TeamMember {
  name: string;
  image: string;
  alt: string;
  description: string;
  techStacks: TechStack[];
}

export const HomeOurTeam = async () => {
  const filePath = path.join(process.cwd(), "public/db/members-db.json");
  const data = await fs.readFile(filePath, "utf-8");
  const teamMembers: TeamMember[] = JSON.parse(data);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:py-30">
      <div>
        <p className="text-base text-primary lg:text-xl font-semibold text-center">
          THE MINDS BEHIND THE SOFTWARE.
        </p>
        <h3 className="text-2xl lg:text-5xl font-bold text-center mt-4">
          Our Team
        </h3>
      </div>
      <TeamCarousel teamMembers={teamMembers} />
    </div>
  );
};
