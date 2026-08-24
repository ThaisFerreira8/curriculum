import { Container } from "@/components/Container";
import { MainLayout } from "@/components/MainLayout";
import { Contact } from "@/sections/Contact";
import { Expertise } from "@/sections/Expertise";
import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { TechStack } from "@/sections/TechStack";

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <Hero />
        <Stats />
        <Expertise />
        <TechStack />
        <Contact />
      </Container>
    </MainLayout>
  );
}
