import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/wollen/Nav";
import { Hero } from "@/components/wollen/Hero";
import { Historia } from "@/components/wollen/Historia";
import { Experiencia } from "@/components/wollen/Experiencia";
import { Menu } from "@/components/wollen/Menu";
import { Galeria } from "@/components/wollen/Galeria";
import { Horarios } from "@/components/wollen/Horarios";
import { Contacto } from "@/components/wollen/Contacto";
import { Footer } from "@/components/wollen/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Historia />
      <Experiencia />
      <Menu />
      <Galeria />
      <Horarios />
      <Contacto />
      <Footer />
    </main>
  );
}