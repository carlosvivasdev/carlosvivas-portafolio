import { Hero, heroData } from "@/feature/hero";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero data={heroData} />
    </main>
  );
}
