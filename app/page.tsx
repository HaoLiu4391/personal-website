import { About } from "@/components/main/about";
import { Books } from "@/components/main/books";
import { CVSection } from "@/components/main/cv-section";
import { Friends } from "@/components/main/friends";
import { GameOfLife } from "@/components/main/game-of-life";
import { Hero } from "@/components/main/hero";
import { Publications } from "@/components/main/publications";
import { Research } from "@/components/main/research";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <Friends />
        <Research />
        <Publications />
        <Skills />
        <GameOfLife />
        <Books />
        <CVSection />
      </div>
    </main>
  );
}
