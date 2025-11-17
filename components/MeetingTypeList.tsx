"use client";

import { Calendar, Plus, User, Video } from "lucide-react";
import MeetingCard from "./MeetingCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MeetingModal from "./MeetingModal";
import { toast } from "sonner";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isJoiningMeeting" | "isInstantMeeting" | "isSchedulingMeeting" | undefined
  >();

    const [values, setValues] = useState({
      dateTime: new Date(),
      description: "",
      link: "",
    });
    const [callDetails, setCallDetails] = useState<Call>();

    const { user } = useUser();
    const client = useStreamVideoClient();

    const createMeeting = async () => {
      if (!user || !client) return;

      try {
        if(!values.dateTime){
          toast.error("Please select a date and time")
          return;
        }
        const callId = crypto.randomUUID();

        const call = client.call("default", callId);

        if (!call) throw new Error("Failed to create call");

        const startsAt =
          values.dateTime.toISOString() || new Date(Date.now()).toISOString();

        const description = values.description || "Instant meeting";

        await call.getOrCreate({
          data: {
            starts_at: startsAt,
            custom: {
              description,
            },
          },
        });

        setCallDetails(call);

        if (!values.description) {
          router.push(`/meeting/${callId}`);
        }

        toast.success("Meeting created successfully!");
      } catch (error) {
        toast.error("error.message");
      }
    };

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <MeetingCard
        icon={Plus}
        iconbg="bg-orange-500"
        title="New Meeting"
        desc="Setup a new recording"
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-orange-500/80"
      />
      <MeetingCard
        icon={User}
        iconbg="bg-green-500"
        title="Join Meeting"
        desc="Via invitation link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-green-500/80"
      />
      <MeetingCard
        icon={Calendar}
        iconbg="bg-purple-600"
        title="Schedule Meeting"
        desc="Plan your meeting"
        handleClick={() => setMeetingState("isSchedulingMeeting")}
        className="bg-purple-600/80"
      />
      <MeetingCard
        icon={Video}
        iconbg="bg-blue-500"
        title="View Recordings"
        desc="Meeting recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-blue-500/80"
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instant meeting"
        buttonText="Start Meeting"
        className="text-center"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
