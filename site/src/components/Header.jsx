import { useEffect, useState } from "react";
import Icon from "./Icon";
import { SITE } from "../config/site";

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#manuais", label: "Manuais" },
  { href: "#videos", label: "Vídeos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="font-display font-bold text-xl tracking-widest flex items-center gap-1">
          <span className="text-accent-light">HK</span>
          <span className="text-white">CUSTOM</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fog hover:text-accent-light transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#produtos"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink hover:bg-accent-light transition-colors"
        >
          Comprar online
          <Icon name="arrowRight" className="w-4 h-4" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 -mr-2"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <Icon name={open ? "close" : "menu"} className="w-7 h-7" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-line px-5 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="py-3 text-base font-medium text-fog hover:text-accent-light border-b border-line/60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#produtos"
            onClick={handleLinkClick}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink"
          >
            Comprar online
          </a>
        </div>
      )}
    </header>
  );
}
