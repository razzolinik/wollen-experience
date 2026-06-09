import { ArrowDown, MapPin, Instagram } from "lucide-react";
import heroImg from "@/assets/wollen-hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Interior cálido de Wöllen Estética & Café con brunch, café y helado artesanal"
        width={1600}
        height={1100}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-5 pt-28 pb-10 md:px-10 md:pt-32 md:pb-14">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--matcha)]" />
              Santiago del Estero · Argentina
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95] text-white">
              Wöllen
              <span className="block italic text-white/90">Estética &amp; Café</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Una experiencia que combina heladería artesanal suiza, cafetería,
              brunch y bienestar en un mismo lugar.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--off-white)] px-6 py-3.5 text-sm font-medium text-[var(--cocoa)] shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                Ver menú
              </a>
              <a
                href="#ubicacion"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <MapPin className="h-4 w-4" /> Cómo llegar
              </a>
              <a
                href="https://www.instagram.com/wollen.sgo/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6">
          <Reveal delay={500}>
            <a
              href="#historia"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/80"
            >
              <span className="h-px w-10 bg-white/60 transition-all group-hover:w-16" />
              Descubrir
              <ArrowDown className="h-3 w-3 transition-transform group-hover:translate-y-0.5" />
            </a>
          </Reveal>
          <Reveal delay={500}>
            <div className="hidden text-right text-xs uppercase tracking-[0.3em] text-white/70 md:block">
              Est. 2010 · Swiss craft
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
