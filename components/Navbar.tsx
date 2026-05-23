"use client";

import Link from "next/link";
import { Video } from "lucide-react";
import { sidebarLinks } from "@/constants";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  useAuth,
  Show,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-1/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between w-full px-6 lg:px-10 h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight max-sm:hidden">
            FaceLink
          </span>
        </Link>

        {isSignedIn && pathname === "/" && (
          <div className="hidden md:flex items-center gap-6 mx-auto">
            {sidebarLinks.map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="text-md font-medium text-white/90 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
        {/* Right Actions */}
        <div className="flex items-center gap-4">

          {/* Signed Out */}
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition">
                Log in
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="text-sm font-medium bg-brand hover:bg-brand/90 text-white px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,98,255,0.4)]">
                Get Started
              </button>
            </SignUpButton>
          </Show>

          {/* Signed In */}
          <Show when="signed-in">
            <div className="flex items-center gap-4">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
              <div className="md:hidden">
                <MobileNav />
              </div>
            </div>
          </Show>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;