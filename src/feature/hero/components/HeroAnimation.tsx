"use client";

import { lazy, Suspense } from "react";

const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((mod) => ({
    default: mod.DotLottieReact,
  }))
);

interface HeroAnimationProps {
  src: string;
  ariaLabel: string;
}

function AnimationSkeleton() {
  return (
    <div
      className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-[#12ACFF]/10 to-[#12ACFF]/5 rounded-full animate-pulse flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="w-32 h-32 border-4 border-[#12ACFF]/20 border-t-[#12ACFF] rounded-full animate-spin" />
    </div>
  );
}

export function HeroAnimation({ src, ariaLabel }: HeroAnimationProps) {
  return (
    <Suspense fallback={<AnimationSkeleton />}>
      <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]">
        <DotLottieReact
          src={src}
          loop
          autoplay
          className="w-full h-full"
          aria-label={ariaLabel}
        />
      </div>
    </Suspense>
  );
}