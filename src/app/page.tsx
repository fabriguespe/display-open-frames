// ./app/page.tsx
"use client";
import React, { useState } from "react"; // Import useState from React
import { FrameUI, fallbackFrameContext } from "frames.js/render";
import { signFrameAction, FarcasterSigner } from "frames.js/render/farcaster";
import { FrameImageNext } from "frames.js/render/next";
import { useFrame } from "frames.js/render/use-frame";

export default function Page() {
  const [homeframeUrl, setHomeframeUrl] = useState(
    "https://a-frame-in-100-lines.vercel.app"
  ); // State to hold the current homeframeUrl

  const [inputUrl, setInputUrl] = useState(homeframeUrl); // State to hold the input value
  const farcasterSigner: FarcasterSigner = {
    fid: 1,
    status: "approved",
    publicKey: "0x829510E9b6a3b6e8DCf906e846d3bFB6B9FB1D89",
    privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  };

  const frameState = useFrame({
    homeframeUrl, // Use the state variable here
    frameActionProxy: "/frames",
    frameGetProxy: "/frames",
    frameContext: fallbackFrameContext,
    signerState: {
      hasSigner: true,
      signer: farcasterSigner,
      onSignerlessFramePress: () => {
        alert(
          "A frame button was pressed without a signer. Perhaps you want to prompt a login"
        );
      },
      signFrameAction: signFrameAction,
    },
  });

  // Function to handle the URL update
  const updateUrl = () => {
    setHomeframeUrl(inputUrl);
  };

  return (
    <div className="w-[400px]" style={{ width: "400px" }}>
      <div style={{ marginBottom: "0px" }}>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Enter home frame URL"
          style={{
            marginRight: "10px",
            width: "80%",
            border: "0px",
            color: "black",
          }}
        />
        <button
          onClick={updateUrl}
          style={{ width: "13%", backgroundColor: "blue" }}
        >
          Fetch
        </button>
      </div>
      <FrameUI frameState={frameState} theme={{}} FrameImage={FrameImageNext} />
    </div>
  );
}
