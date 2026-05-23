import { Hexagon } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaXTwitter } from "react-icons/fa6";

const navigationLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Security" },
  { href: "#", label: "Cookie Policy" },
];

export const Footer = () => {
  return (
    <footer className="text-white">
      <div className="bg-[#180331] py-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-20">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-semibold">NexmTech</h3>
            <p className="text-lg text-left xl:text-justify">
              Building scalable custom software, web applications, and cloud
              architectures for startups and enterprises.
            </p>
          </div>
          <div className="flex flex-col xl:items-end xl:text-right gap-4">
            <div className="w-fit">
              <h4 className="text-2xl font-semibold">Contact Us</h4>
              <p className="text-lg">+49 211 84 73 00</p>
              <p className="text-lg">info@nexmtech.com</p>
            </div>
            <div className="w-fit">
              <div className="flex flex-col pt-6 xl:pt-10">
                <h4 className="text-2xl font-semibold">Location</h4>
                <p className="text-lg">Tokyo, Japan</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:items-end xl:text-right gap-4">
            <h4 className="text-2xl font-semibold">Legal</h4>
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-lg py-1 font-medium transition-all duration-300 cursor-pointer border-b-2 hover:text-primary border-b-transparent hover:border-b-primary w-fit`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col xl:items-end gap-4">
            <h4 className="text-2xl font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              {/* Social media icons */}
              <Link href="#" className="text-lg hover:text-primary">
                <FaFacebook className="text-2xl" />
              </Link>
              <Link href="#" className="text-lg hover:text-primary">
                <FaXTwitter className="text-2xl" />
              </Link>
              <Link href="#" className="text-lg hover:text-primary">
                <FaLinkedin className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[73px] py-4 bg-[#2E1A47] flex items-center justify-center px-4 text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} NexmTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
