"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { Check, Copy, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
    <h1 className="text-base font-base text-brand-light lg:text-lg md:min-w-32">
      {title}:
    </h1>
    <p className="text-sm font-semibold break-all lg:text-xl">
      {description}
    </p>
  </div>
);

const MyRooms = () => {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const { user, isLoaded: isUserLoaded } = useUser();
  const meetingId = user?.id;
  const displayName = user?.fullName || user?.username || user?.firstName || "Your";

  const client = useStreamVideoClient();

  const { call, isCallLoading } = useGetCallById(meetingId!);

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  const startRoom = async () => {
    if (!client || !user) return;

    if (!call) {
      const newCall = client.call("default", meetingId!);
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    router.push(`/meeting/${meetingId}?personal=true`);
    toast.success("meeting created!");
  };

  if (isCallLoading || !isUserLoaded)
    return <Loader className="animate-spin size-6 text-white mt-5" />;

  return (
    <section className=" size-full flex flex-col gap-10  text-white">
      <h1 className="text-3xl font-bold">My Room</h1>

      <div className="w-full xl:max-w-[900px]  flex flex-col gap-8">
        <Table title="Topic" description={`${displayName}'s Meeting Room`} />
        <Table title="Meeting ID" description={`${meetingId}`} />
        <Table title="Invite Link" description={`${meetingLink}`} />
      </div>
      <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
        <Button
          className="bg-brand hover:bg-brand/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-[0_0_20px_rgba(0,98,255,0.4)] w-full sm:w-auto"
          onClick={startRoom}
        >
          Start Meeting
        </Button>
        <Button
          className="bg-dark-3 hover:bg-dark-3/80 transition-all duration-200 min-w-[150px] w-full sm:w-auto"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            toast.success("Link copied!");
          }}
        >
          {copied ? (
            <>
              <Check className="size-4 mr-2 text-brand-light" /> Copied!
            </>
          ) : (
            <>
              <Copy className="size-4 mr-2" /> Copy Invitation
            </>
          )}
        </Button>
      </div>
    </section>
  );
};

export default MyRooms;
