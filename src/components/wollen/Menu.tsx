import { ArrowUpRight } from "lucide-react";
import icecream from "@/assets/wollen-icecream.jpg";
import coffee from "@/assets/wollen-coffee.jpg";
import breakfast from "@/assets/wollen-breakfast.jpg";
import brunch from "@/assets/wollen-brunch.jpg";
import lunch from "@/assets/wollen-lunch.jpg";
import pastry from "@/assets/wollen-pastry.jpg";
import drinks from "@/assets/wollen-drinks.jpg";
import { Reveal } from "./Reveal";

const categories = [
  { name: "Helados", image: icecream, note: "Artesanales suizos" },
  { name: "Cafetería", image: coffee, note: "Especialidad" },
  { name: "Desayunos", image: breakfast, note: "Desde 7:30" },
  { name: "Brunch", image: brunch, note: "Europeo" },
  { name: "Almuerzos", image: lunch, note: "Cocina ligera" },
  { name: "Pastelería", image: pastry, note: "De autor" },
  { name: "Bebidas", image: drinks, note: "Frías y calientes" },
];

export function Menu() {
  return (
    <section id="menu" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                · Menú
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
                Una carta para cada momento del día.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Ver menú completo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <a
                href="#contacto"
                className="group block overflow-hidden rounded-2xl bg-muted shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <h3 className="font-display text-lg leading-tight text-foreground">
                      {c.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {c.note}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-foreground/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
