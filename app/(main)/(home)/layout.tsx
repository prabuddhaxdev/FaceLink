
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "FaceLink",
  description: "Video Conferencing web application",
  icons: {
    icon: "/logo.png",
  },
};

const HomeLayout = ({ children }: {children: ReactNode}) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-24 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
}

export default HomeLayout