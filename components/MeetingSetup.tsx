"use client";

import { useState } from "react";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetUpComplete,
}: {
  setIsSetUpComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("usecall must be used within StreamCall component");
  }

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-3 text-white">
      <h1 className="font-bold text-2xl">Setup</h1>
      <VideoPreview />
      <div className="h-16 flex items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggleOn}
            onChange={async (e) => {
              const isChecked = e.target.checked;
              setIsMicCamToggleOn(isChecked);
              if (isChecked) {
                await call?.camera.disable();
                await call?.microphone.disable();
              } else {
                await call?.camera.enable();
                await call?.microphone.enable();
              }
            }}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="bg-brand text-white hover:bg-brand/20 rounded-md px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetUpComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </section>
  );
};

export default MeetingSetup;
