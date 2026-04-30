"use client";

import Link from "next/link";
import { Video } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-1/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight max-sm:hidden">FaceLink</span>
        </Link>

        {/* Desktop Routes (Only visible when Signed In) */}
        <SignedIn>
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {sidebarLinks.map((link) => {
              const isActive =
                link.route === pathname || pathname.startsWith(`${link.route}/`);
              return (
                <Link
                  href={link.route}
                  key={link.label}
                  className={cn(
                    "flex items-center gap-2 text-md font-semibold px-4 py-2 rounded-full transition-all duration-300",
                    {
                      "bg-brand/10 text-brand shadow-[0_0_15px_rgba(0,98,255,0.15)]": isActive,
                      "text-gray-300 hover:text-white hover:bg-white/5": !isActive,
                    }
                  )}
                >
                  <link.icon className={cn("w-[18px] h-[18px]", { "text-brand": isActive, "text-gray-400": !isActive })} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </SignedIn>

        <div className="flex items-center gap-4">
          <SignedOut>
            <Link href="/sign-in" className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition">
              Log in
            </Link>
            <Link href="/sign-up" className="text-sm font-medium bg-brand hover:bg-brand/90 text-white px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,98,255,0.4)]">
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton />
              <div className="md:hidden">
                <MobileNav />
              </div>
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
