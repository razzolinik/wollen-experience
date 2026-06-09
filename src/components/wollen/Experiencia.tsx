import { type ReactNode } from "react";
import icecream from "@/assets/wollen-icecream.jpg";
import coffee from "@/assets/wollen-coffee.jpg";
import pastry from "@/assets/wollen-pastry.jpg";
import beauty from "@/assets/wollen-beauty.jpg";
import { Reveal } from "./Reveal";

type Card = {
  num: string;
  title: string;
  image: string;
  alt: string;
  items: string[];
};

const cards: Card[] = [
  {
    num: "01",
    title: "Helados Suizos",
    image: icecream,
    alt: "Helado artesanal suizo en copa de vidrio",
    items: ["Elaboración artesanal", "Materias primas premium", "Recetas de inspiración suiza"],
  },
  {
    num: "02",
    title: "Cafetería & Brunch",
    image: coffee,
    alt: "Café especial con arte latte",
    items: ["Cafés de especialidad", "Desayunos", "Almuerzos ligeros", "Meriendas"],
  },
  {
    num: "03",
    title: "Pastelería Artesanal",
    image: pastry,
    alt: "Pastelería artesanal y delikatessen",
    items: ["Delikatessen", "Clásicos e integrales", "Postres de autor"],
  },
  {
    num: "04",
    title: "Estética & Bienestar",
    image: beauty,
    alt: "Espacio de estética y bienestar",
    items: [
      "Manicuría",
      "Cejas y pestañas",
      "Tratamientos faciales",
      "Tratamientos corporales",
      "Depilación definitiva",
    ],
  },
];

export function Experiencia() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-[var(--matcha)]/40 py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/60">
                · La experiencia
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] text-foreground">
                Cuatro mundos, un mismo lugar.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-md text-base text-foreground/75">
              Cada rincón de Wöllen está pensado para ofrecer una pausa
              memorable: del primer café del día al último helado de la noche.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i * 90}>
              <ExperienceCard card={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ card }: { card: Card }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={card.image}
          alt={card.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
          {card.num}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-2xl leading-tight text-foreground">
          {card.title}
        </h3>
        <ul className="flex flex-1 flex-col gap-1.5 text-sm text-foreground/70">
          {card.items.map((it) => (
            <li key={it} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--wood)]" />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Wrap({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
void Wrap;
