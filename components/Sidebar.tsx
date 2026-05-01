"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0  h-screen w-fit lg:w-64 max-sm:hidden flex flex-col justify-between bg-dark-1 text-white p-6 pt-28">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            link.route === pathname || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex items-center justify-start gap-4 rounded-xl p-4 transition-all duration-300 group",
                isActive
                  ? "bg-brand text-white shadow-[0_0_20px_rgba(0,98,255,0.3)]"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon className={cn("w-6 h-6 transition-transform group-hover:scale-110", {
                "text-white": isActive,
                "text-gray-400 group-hover:text-blue-400": !isActive
              })} />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
