import { DecorativeLine } from "@/feature/hero";
import { AboutMeProps } from "../types";
import { AboutMeDescription } from "./AboutMeDescription";
import { AboutMeTitle } from "./AboutMeTitle";
import { DecorativeTimeLine } from "./DecorativeTimeLine";



export function HeroAboutMe({ data }: AboutMeProps) {

  return (
    <section className="relative flex flex-col max-w-5xl mx-auto items-center justify-centers md:flex-row  gap-6 md:gap-10 pb-24 md:pb-18 "
      style={{
        minHeight: 'calc(100dvh - var(--header-height))',
        maxHeight: 'calc(100dvh - var(--header-height))',
      }}>
      <div className="flex flex-col-reverse md:flex-row w-full items-center relative z-10">

        <div className="md:w-1/2 flex flex-col items-center md:items-start px-6 md:px-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              aria-hidden="true"
              className="absolute right-full mr-3 w-1000 h-[2px] bg-gradient-to-r bg-primary md:w-1000"
            ></span>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Sobre mí
            </span>
          </div>

          <AboutMeTitle segments={data.title} />
          <AboutMeDescription description={data.description} />



        </div>

        <DecorativeTimeLine />

        <div className="flex flex-col md:w-1/2 justify-center gap-5">
          <div>
            Desarrollo de Aplicaciones Web
          </div>
          <div>Infraestructura como codigo</div>
          <div>Orquestacion de contenedores</div>

        </div>



      </div>
    </section>
  );
}