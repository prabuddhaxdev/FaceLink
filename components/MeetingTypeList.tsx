"use client";

import { Calendar, Copy, Plus, User, Video } from "lucide-react";
import MeetingCard from "./MeetingCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MeetingModal from "./MeetingModal";
import { toast } from "sonner";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";

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
        toast.error(
          error instanceof Error ? error.message : "Something went wrong"
        );
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
      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === "isSchedulingMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-5">
              Add a description
            </label>
            <Textarea
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-dark-2"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-5">
              Selete a date and time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date: Date | null) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM dd, yyyy h:mm aa"
              className="w-full rounded bg-dark-2 p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isSchedulingMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          buttonText="Copy meeting link"
          className="text-center"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast.success("Link copied!");
          }}
          buttonIcon={Copy}
          image="/checked.png"
        />
      )}

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instant meeting"
        buttonText="Start Meeting"
        className="text-center"
        handleClick={createMeeting}
      />
      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        buttonText="Join Meeting"
        className="text-center"
        handleClick={() => router.push(values.link)}
      >
        <input
          type="text"
          className="bg-dark-2 p-2 border-none outline-none rounded"
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
        />
      </MeetingModal>
    </section>
  );
};

export default MeetingTypeList;
