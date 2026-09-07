import { CONTACT, MARKETPLACE_MERCADOLIVRE_URL, MARKETPLACE_SHOPEE_URL, SITE } from "../config/site";

const footerLinks = [
  { label: "Início", href: "#home" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
  { label: "Mercado Livre", href: MARKETPLACE_MERCADOLIVRE_URL, external: true },
  { label: "Shopee", href: MARKETPLACE_SHOPEE_URL, external: true },
  { label: "Instagram", href: CONTACT.instagramUrl, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid gap-10 sm:grid-cols-2">
        <div>
          <p className="font-display font-bold text-xl tracking-widest">
            <span className="text-accent-light">HK</span> CUSTOM
          </p>
          <p className="mt-3 text-sm text-mist max-w-xs">{SITE.tagline}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-widest uppercase text-fog mb-1">
            Navegação
          </p>
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-mist hover:text-accent-light transition-colors w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <p className="max-w-7xl mx-auto px-5 lg:px-8 py-6 text-xs text-mist">
          © {SITE.currentYear} HK Custom — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
