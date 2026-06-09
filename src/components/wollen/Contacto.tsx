import { Instagram, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const PHONE = "+543854000000";
const WHATSAPP = "5493854000000";
const MAPS = "https://maps.app.goo.gl/2iqTjYJXAFDLem5H9";

export function Contacto() {
  return (
    <section id="contacto" className="relative bg-[var(--cocoa)] py-24 text-[var(--off-white)] md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--matcha)]">
                · Contacto
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
                Visitanos, llamanos o escribinos.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-[var(--off-white)]/75">
                Estamos en pleno centro de Santiago del Estero. Reservas,
                consultas y pedidos por los canales que prefieras.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-10 space-y-5 text-sm">
                <Info icon={MapPin} label="Dirección" value="Av. Belgrano Sur y Pueyrredón, Santiago del Estero" />
                <Info icon={Phone} label="Teléfono" value="+54 385 400 0000" />
                <Info icon={Instagram} label="Instagram" value="@wollen.sgo" />
                <Info icon={Clock} label="Hoy" value="7:30 — 01:00" />
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={150}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <BigButton
                  href="https://www.instagram.com/wollen.sgo/"
                  icon={Instagram}
                  title="Instagram"
                  subtitle="@wollen.sgo"
                />
                <BigButton
                  href={`https://wa.me/${WHATSAPP}`}
                  icon={MessageCircle}
                  title="WhatsApp"
                  subtitle="Enviar mensaje"
                />
                <BigButton
                  href={MAPS}
                  icon={MapPin}
                  title="Cómo llegar"
                  subtitle="Google Maps"
                />
              </div>
            </Reveal>

            <Reveal delay={250}>
              <a
                href={`tel:${PHONE}`}
                className="mt-3 flex w-full items-center justify-between gap-4 rounded-2xl border border-[var(--off-white)]/15 bg-[var(--off-white)]/5 p-5 transition-colors hover:bg-[var(--off-white)]/10"
              >
                <span className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--matcha)] text-[var(--cocoa)]">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.25em] text-[var(--off-white)]/60">
                      Llamar al local
                    </span>
                    <span className="block font-display text-2xl">+54 385 400 0000</span>
                  </span>
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--matcha)]">
                  Llamar →
                </span>
              </a>
            </Reveal>

            <Reveal delay={350}>
              <div id="ubicacion" className="mt-6 overflow-hidden rounded-2xl border border-[var(--off-white)]/10">
                <iframe
                  title="Ubicación de Wöllen en Santiago del Estero"
                  src="https://www.google.com/maps?q=Av.+Belgrano+Sur+y+Pueyrred%C3%B3n,+Santiago+del+Estero,+Argentina&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[320px] w-full md:h-[380px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--off-white)]/20">
        <Icon className="h-4 w-4 text-[var(--matcha)]" />
      </span>
      <span>
        <span className="block text-[11px] uppercase tracking-[0.25em] text-[var(--off-white)]/55">
          {label}
        </span>
        <span className="mt-0.5 block text-[var(--off-white)]/95">{value}</span>
      </span>
    </li>
  );
}

function BigButton({
  href,
  icon: Icon,
  title,
  subtitle,
}: {
  href: string;
  icon: typeof Phone;
  title: string;
  subtitle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex h-full flex-col justify-between gap-6 rounded-2xl bg-[var(--off-white)] p-5 text-[var(--cocoa)] transition-all duration-500 hover:-translate-y-1"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--matcha)] text-[var(--cocoa)]">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block font-display text-2xl leading-tight">{title}</span>
        <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-[var(--cocoa)]/60">
          {subtitle}
        </span>
      </span>
    </a>
  );
}
