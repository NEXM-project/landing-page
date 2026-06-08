import Link from "next/link";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const companyLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Services" },
  { href: "#", label: "Case Studies" },
  { href: "#", label: "Nodi AI" },
  { href: "#", label: "Contact" },
];

const serviceLinks = [
  { href: "#", label: "Website Development" },
  { href: "#", label: "Software Development" },
  { href: "#", label: "UI/UX Design" },
  { href: "#", label: "AI Automation" },
  { href: "#", label: "Maintenance" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

const LinkItem = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-lg py-1 font-medium transition-all duration-300 cursor-pointer border-b-2 hover:text-primary border-b-transparent hover:border-b-primary w-fit text-muted-foreground hover:text-white"
  >
    {label}
  </Link>
);

export const Footer = () => {
  return (
    <footer className="text-white">
      <div className="bg-[#180331] py-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          <div className="flex flex-col gap-6 sm:col-span-2">
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-semibold">Nexm</h3>
              <p className="text-lg text-left xl:text-justify text-muted-foreground">
                NexM is a Japan-based digital solutions company helping
                businesses build websites, software, AI automation, and reliable
                digital systems.
              </p>
            </div>
            <div className="flex gap-4">
              {/* Social media icons */}
              <Link
                href="#"
                className="text-lg hover:text-primary transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </Link>
              <Link
                href="#"
                className="text-lg hover:text-primary transition-colors"
              >
                <FaXTwitter className="text-2xl" />
              </Link>
              <Link
                href="#"
                className="text-lg hover:text-primary transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">Company</h4>
            <div className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <LinkItem
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">Services</h4>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <LinkItem
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">Contact</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <p className="text-lg">Tokyo, Japan</p>
              <p className="text-lg">Online Consultation Available</p>
              <p className="text-lg">enquiry@nexmtech.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">Legal</h4>
            <div className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <LinkItem
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
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
