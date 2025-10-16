"use client";

interface HeroAnimationProps {
  src: string;
  ariaLabel: string;
}

export function HeroAnimation({ src, ariaLabel }: HeroAnimationProps) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label={ariaLabel}
      className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]"
    />
  );
}