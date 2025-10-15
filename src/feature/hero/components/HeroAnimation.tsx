"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface HeroAnimationProps {
  src: string;
  ariaLabel: string;
}

export function HeroAnimation({ src, ariaLabel }: HeroAnimationProps) {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]">
      <DotLottieReact
        src={src}
        loop
        autoplay
        className="w-full h-full"
      />
    </div>
  );
}