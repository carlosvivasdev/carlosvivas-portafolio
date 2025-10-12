import { HeroTitle } from "./HeroTitle";
import type { HeroProps } from '../types/index';
import { HeroCTA } from "./HeroCTA";
import { HeroAnimation } from "./HeroAnimation";
import { DecorativeLine } from "./DecorativeLine";

export function Hero({ data }: HeroProps) {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto px-4 relative"
        style={{
          minHeight: 'calc(100dvh - var(--header-height))',
        }}

        aria-labelledby="hero-heading"
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <HeroTitle
            greeting={data.greeting}
            name={data.name}
            role={data.role}
          />
          <p className="my-2 max-w-md hidden md:block text-gray-600">
            {data.description}
          </p>
          <HeroCTA
            primary={data.cta.primary}
            secondary={data.cta.secondary}
          />
        </div>
        <HeroAnimation src={data.animation.src} ariaLabel={data.animation.ariaLabel} />
      </section>
      <DecorativeLine />
    </>
  )
}