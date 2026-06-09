import { Instagram } from "lucide-react";

const links = [
  { href: "#top", label: "Inicio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#menu", label: "Menú" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="relative bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="overflow-hidden">
          <div className="flex whitespace-nowrap marquee font-display text-[clamp(3rem,12vw,9rem)] leading-none text-foreground/10">
            <span className="pr-8">wöllen · estética · café · brunch · helado suizo ·&nbsp;</span>
            <span className="pr-8">wöllen · estética · café · brunch · helado suizo ·&nbsp;</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl text-foreground">wöllen</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Wöllen Estética &amp; Café · Santiago del Estero
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/75 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/wollen.sgo/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              <Instagram className="h-3.5 w-3.5" /> Instagram
            </a>
          </nav>

          <div className="text-sm text-muted-foreground md:text-right">
            <p>© {new Date().getFullYear()} Wöllen Estética &amp; Café</p>
            <p className="mt-1 text-xs">
              Sitio oficial:{" "}
              <a className="underline-offset-4 hover:underline" href="https://wollen.com.ar/" target="_blank" rel="noreferrer noopener">
                wollen.com.ar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
