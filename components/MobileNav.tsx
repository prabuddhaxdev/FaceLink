"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-64">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="text-white cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="max-sm:size-10"
            />
            <p className="text-2xl font-bold text-white">FaceLink</p>
          </Link>
          <div className="flex h-[calc(100vh - 72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="h-full flex flex-col gap-5 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    link.route === pathname ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex items-center gap-4 rounded-lg p-4 w-full max-w-60 transition-all duration-300",
                          isActive
                            ? "bg-brand text-white shadow-[0_0_20px_rgba(0,98,255,0.3)]"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <link.icon className={cn("w-6 h-6", {
                          "text-white": isActive,
                          "text-gray-400": !isActive
                        })} />
                        <p className="text-lg font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
