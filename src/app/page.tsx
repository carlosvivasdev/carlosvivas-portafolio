import { Hero, heroData } from "@/feature/hero";


export default function Home() {
  return (
    <main>
      <Hero data={heroData} />
    </main>
  );
}
