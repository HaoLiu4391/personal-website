import { About } from "@/components/main/about";
import { CVSection } from "@/components/main/cv-section";
import { Experience } from "@/components/main/experience";
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
        <Research />
        <Publications />
        <Experience />
        <Skills />
        <CVSection />
      </div>
    </main>
  );
}
