import interior from "@/assets/wollen-interior.jpg";
import { Reveal } from "./Reveal";

export function Historia() {
  return (
    <section id="historia" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              · Nuestra historia
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] text-foreground">
              El deseo de disfrutar con todos los sentidos.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                Wöllen nació en 2010 inspirada en la tradición del helado
                artesanal suizo. Su nombre significa <em>deseo</em> en alemán y
                representa la búsqueda constante de experiencias que se
                disfrutan con todos los sentidos.
              </p>
              <p>
                En Santiago del Estero, la propuesta evoluciona integrando
                gastronomía y estética en un mismo espacio: café de
                especialidad, brunch europeo, pastelería de autor y bienestar.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Desde</dt>
                <dd className="mt-1 font-display text-2xl text-foreground">2010</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Origen</dt>
                <dd className="mt-1 font-display text-2xl text-foreground">Suiza</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Sucursal</dt>
                <dd className="mt-1 font-display text-2xl text-foreground">SGO</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={interior}
                alt="Interior elegante de Wöllen con luz natural"
                width={1200}
                height={1400}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
