import { Clock, Sunrise, Moon } from "lucide-react";
import { Reveal } from "./Reveal";

const schedule = [
  { icon: Sunrise, days: "Lunes a Jueves", hours: "7:30 — 01:00" },
  { icon: Clock, days: "Viernes y Sábados", hours: "7:30 — 02:00" },
  { icon: Moon, days: "Domingos", hours: "8:00 — 00:00" },
];

export function Horarios() {
  return (
    <section id="horarios" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="text-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              · Horarios
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight">
              Te esperamos todos los días.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {schedule.map((s, i) => (
            <Reveal key={s.days} delay={i * 100}>
              <div className="group flex flex-col items-start gap-5 rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-[var(--wood)]/40 hover:shadow-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--matcha)]/50 text-foreground transition-transform group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.days}
                  </p>
                  <p className="mt-2 font-display text-3xl tracking-tight text-foreground">
                    {s.hours}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
