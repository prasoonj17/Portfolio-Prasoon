"use client"; // Optional: Add if you're using Next.js 13+ App Router

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

type Props = {
  animationPath: string;
};

// Dynamically import Lottie component (disable SSR)
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const GreetingLottie = ({ animationPath }: Props) => {
  const [options, setOptions] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOptions({
        loop: true,
        autoplay: true,
        animationData: undefined, // Leave as undefined, use path
        path: animationPath, // Path to the JSON animation file
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    }
  }, [animationPath]);

  if (!options) return null;

  return (
    <div onClick={() => null}>
      <Lottie options={options} />
    </div>
  );
};

export default GreetingLottie;
