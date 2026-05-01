import Link from "next/link";
import { Video } from "lucide-react";
import { Show, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-1/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">FaceLink</span>
        </Link>

        <div className="flex items-center gap-4">
          <Show when="signed-out">
            <Link href="/sign-in" className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition">
              Log in
            </Link>
            <Link href="/sign-up" className="text-sm font-medium bg-brand hover:bg-brand/90 text-white px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,98,255,0.4)]">
              Get Started
            </Link>
          </Show>
          <Show when="signed-in">
            <Link href="/home" className="text-sm font-medium text-gray-300 hover:text-white transition mr-4">
              Home
            </Link>
            <UserButton />
          </Show>
        </div>
      </div>
    </nav>
  );
};
