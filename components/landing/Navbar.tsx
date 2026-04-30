import Link from "next/link";
import { Video } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-1/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#0FB563] p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">FaceLink</span>
        </Link>

        <div className="flex items-center gap-4">
          <SignedOut>
            <Link href="/sign-in" className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition">
              Log in
            </Link>
            <Link href="/sign-up" className="text-sm font-medium bg-[#0FB563] hover:bg-[#0FB563]/90 text-white px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(15,181,99,0.4)]">
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/home" className="text-sm font-medium text-gray-300 hover:text-white transition mr-4">
              Home
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
