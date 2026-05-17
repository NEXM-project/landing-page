import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

//  routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
