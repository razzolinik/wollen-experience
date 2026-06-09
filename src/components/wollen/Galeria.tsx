import { Instagram } from "lucide-react";
import icecream from "@/assets/wollen-icecream.jpg";
import coffee from "@/assets/wollen-coffee.jpg";
import brunch from "@/assets/wollen-brunch.jpg";
import pastry from "@/assets/wollen-pastry.jpg";
import ambient from "@/assets/wollen-ambient.jpg";
import beauty from "@/assets/wollen-beauty.jpg";
import matcha from "@/assets/wollen-matcha.jpg";
import drinks from "@/assets/wollen-drinks.jpg";
import { Reveal } from "./Reveal";

const images = [
  { src: icecream, alt: "Helado artesanal" },
  { src: coffee, alt: "Café especial" },
  { src: brunch, alt: "Brunch europeo" },
  { src: pastry, alt: "Pastelería artesanal" },
  { src: ambient, alt: "Ambiente del local" },
  { src: beauty, alt: "Sector estética" },
  { src: matcha, alt: "Matcha latte" },
  { src: drinks, alt: "Bebidas" },
];

export function Galeria() {
  return (
    <section id="galeria" className="relative bg-muted py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                · Galería
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
                Postales de la casa.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a
              href="https://www.instagram.com/wollen.sgo/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Instagram className="h-4 w-4" /> @wollen.sgo
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <div
                className={[
                  "group relative overflow-hidden rounded-2xl bg-card shadow-soft",
                  i === 0 || i === 5 ? "md:row-span-2 md:aspect-[3/4]" : "aspect-square",
                ].join(" ")}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
