"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Check, Copy, LucideIcon } from "lucide-react";
import toast from "react-hot-toast";

interface CallCardProps {
  icon: LucideIcon;
  title: string;
  date: string;
  isPreviousMeeting?: boolean;
  link: string;
  buttonIcon1?: LucideIcon;
  buttonText?: string;
  handleClick: () => void;
}

const CallCard = ({
  buttonText,
  date,
  icon: Icon,
  handleClick,
  link,
  title,
  isPreviousMeeting,
  buttonIcon1: ButtonIcon,
}: CallCardProps) => {
  const [copied, setCopied] = useState(false);

  return (
    <section className="w-full flex min-h-[258px] flex-col  justify-between rounded-[14px]  bg-dark-3 px-5 py-8">
      <article className="flex flex-col gap-5">
        <Icon size={30} className="text-white " />
        <span className="flex flex-col gap-2">
          <h1 className="font-semibold text-2xl">{title}</h1>
          <p className="font-normal text-base">{date}</p>
        </span>
      </article>
      <article className="flex justify-center relative">
        <div className="flex relative w-full max-sm:hidden">
          <Image
            src={"/avatar.jpg"}
            alt=""
            width={48}
            height={48}
            className="rounded-full object-cover border-2 border-white"
          />
        </div>
        {!isPreviousMeeting && (
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              onClick={handleClick}
              className="bg-[#0FB563] hover:bg-[#0FB563]/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-[0_0_20px_rgba(15,181,99,0.4)] px-6 w-full sm:w-auto"
            >
              {ButtonIcon && <ButtonIcon size={20} />}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                toast.success("Link copied!");
              }}
              className="bg-[#252A41] hover:bg-[#252A41]/80 transition-all duration-200 px-6 min-w-[140px] w-full sm:w-auto"
            >
              {copied ? (
                <>
                  <Check className="size-4 mr-2 text-green-400" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="size-4 mr-2" /> Copy Link
                </>
              )}
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default CallCard;
