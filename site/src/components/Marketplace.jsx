import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { MARKETPLACE_MERCADOLIVRE_URL, MARKETPLACE_SHOPEE_URL } from "../config/site";
import useReveal from "../hooks/useReveal";

export default function Marketplace() {
  const [ref, visible] = useReveal();

  return (
    <section id="marketplace" className="relative py-24 lg:py-32 border-t border-line bg-graphite/20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-5 lg:px-8 ${visible ? "reveal" : "opacity-0"}`}
      >
        <SectionHeading
          eyebrow="Onde comprar"
          title="Compre pelos nossos canais oficiais"
          description="Escolha seu produto e compre com segurança através dos nossos canais oficiais."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          <a
            href={MARKETPLACE_MERCADOLIVRE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-4 rounded-3xl border border-line bg-graphite/60 p-10 hover:border-accent transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Icon name="cart" className="w-8 h-8 text-accent-light" />
            </div>
            <h3 className="font-display font-semibold text-xl text-white">Mercado Livre</h3>
            <p className="text-sm text-fog">
              Confira a loja oficial da HK Custom no Mercado Livre.
            </p>
            <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink group-hover:bg-accent-light transition-colors">
              Comprar no Mercado Livre
              <Icon name="externalLink" className="w-4 h-4" />
            </span>
          </a>

          <a
            href={MARKETPLACE_SHOPEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-4 rounded-3xl border border-line bg-graphite/60 p-10 hover:border-accent transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Icon name="cart" className="w-8 h-8 text-accent-light" />
            </div>
            <h3 className="font-display font-semibold text-xl text-white">Shopee</h3>
            <p className="text-sm text-fog">Confira a loja oficial da HK Custom na Shopee.</p>
            <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink group-hover:bg-accent-light transition-colors">
              Comprar na Shopee
              <Icon name="externalLink" className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
