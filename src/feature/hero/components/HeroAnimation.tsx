"use client";

import { lazy, Suspense, useState, useEffect } from "react";

// Lazy load de DotLottieReact para code splitting
const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((mod) => ({
    default: mod.DotLottieReact,
  }))
);

interface HeroAnimationProps {
  src: string;
  ariaLabel: string;
}

// Skeleton loader mientras carga el componente
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Durante SSR y antes del mount, muestra skeleton
  if (!isMounted) {
    return <AnimationSkeleton />;
  }

  // Después del mount, usa Suspense para lazy loading
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