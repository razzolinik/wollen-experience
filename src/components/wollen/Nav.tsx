import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const links = [
  { href: "#historia", label: "Historia" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#menu", label: "Menú" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-foreground">
            wöllen
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Estética & Café
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/wollen.sgo/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors hover:bg-accent md:inline-flex"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={[
          "md:hidden overflow-hidden bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100 border-b border-border" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-2xl text-foreground hover:bg-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/wollen.sgo/"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            <Instagram className="h-4 w-4" /> Seguinos en Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
