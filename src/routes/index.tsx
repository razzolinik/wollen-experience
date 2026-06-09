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
  head: () => ({
    meta: [
      { title: "Wöllen Estética & Café · Santiago del Estero" },
      {
        name: "description",
        content:
          "Heladería artesanal suiza, cafetería de especialidad, brunch europeo y bienestar en Santiago del Estero. Una experiencia premium, cálida y memorable.",
      },
      { property: "og:title", content: "Wöllen Estética & Café · Santiago del Estero" },
      {
        property: "og:description",
        content:
          "Heladería suiza, café, brunch y estética en un mismo lugar. Av. Belgrano Sur y Pueyrredón.",
      },
    ],
  }),
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
