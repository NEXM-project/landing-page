"use client";
import { useEffect, useState } from "react";
import { TeamCarousel } from "./TeamCarousel";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/transition";
import SplitText from "../SplitText";

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

export const HomeOurTeam = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("/db/members-db.json");
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Failed to load team members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 my-10 md:my-16 lg:my-20 min-h-screen flex flex-col justify-center gap-10"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          <SplitText
            text="THE MINDS BEHIND THE SOFTWARE"
            className="text-base md:text-lg text-primary lg:text-xl font-semibold text-center"
            delay={10}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          {/* <p className="text-base text-primary lg:text-xl font-semibold text-center">
          THE MINDS BEHIND THE SOFTWARE.
        </p> */}
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mt-4">
            Our Team
          </h3>
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-600">Loading team members...</p>
          </div>
        ) : (
          <TeamCarousel teamMembers={teamMembers} />
        )}
      </div>
    </motion.div>
  );
};
