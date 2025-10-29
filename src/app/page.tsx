import { Hero, heroData } from "@/feature/hero";
import { HelloAnimation } from "@/shared/components/HelloAnimation";


export default function Home() {
  return (
    <>
      <HelloAnimation />
      <main className="overflow-hidden">
        <Hero data={heroData} />
      </main>
    </>
  );
}
