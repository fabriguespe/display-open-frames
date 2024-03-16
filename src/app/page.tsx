// ./app/page.tsx
"use client";
import { FrameUI, fallbackFrameContext } from "frames.js/render";
import { signFrameAction, FarcasterSigner } from "frames.js/render/farcaster";
import { FrameImageNext } from "frames.js/render/next";
import { useFrame } from "frames.js/render/use-frame";

export default function Page() {
  const farcasterSigner: FarcasterSigner = {
    fid: 1,
    status: "approved",
    publicKey: "0x829510E9b6a3b6e8DCf906e846d3bFB6B9FB1D89",
    privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  };

  const frameState = useFrame({
    homeframeUrl: "https://a-frame-in-100-lines.vercel.app",
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

  return (
    <div className="w-[400px]" style={{ width: "400px" }}>
      <FrameUI frameState={frameState} theme={{}} FrameImage={FrameImageNext} />
    </div>
  );
}
