import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { products } from "../data/products";
import { publicUrl } from "../lib/publicUrl";
import useReveal from "../hooks/useReveal";

export default function Manuals() {
  const [ref, visible] = useReveal();
  const manuals = products.filter((p) => p.manualUrl);

  return (
    <section id="manuais" className="relative py-24 lg:py-32 border-t border-line bg-graphite/20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-5 lg:px-8 ${visible ? "reveal" : "opacity-0"}`}
      >
        <SectionHeading
          eyebrow="Suporte técnico"
          title="Manuais de instalação"
          description="Consulte o passo a passo oficial antes de instalar seu módulo HK Custom."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {manuals.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-line bg-graphite/50 p-7 hover:border-accent/50 transition-colors"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon name="book" className="w-7 h-7 text-accent-light" />
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-light">
                  {product.category}
                </p>
                <h3 className="mt-1 font-display font-semibold text-lg text-white">
                  {product.name} {product.model}
                </h3>
                <p className="mt-1 text-sm text-fog">Manual de instalação em PDF</p>
              </div>

              <a
                href={publicUrl(product.manualUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent-light transition-colors shrink-0"
              >
                <Icon name="externalLink" className="w-4 h-4" />
                Ver manual
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-mist max-w-xl mx-auto">
          A instalação deve ser realizada por profissional qualificado, seguindo corretamente o
          manual e os procedimentos técnicos aplicáveis ao veículo.
        </p>
      </div>
    </section>
  );
}
