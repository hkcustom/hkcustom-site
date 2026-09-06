import Icon from "./Icon";
import { MARKETPLACE_MERCADOLIVRE_URL, MARKETPLACE_SHOPEE_URL } from "../config/site";
import useReveal from "../hooks/useReveal";

function FeatureCard({ feature }) {
  return (
    <div className="rounded-2xl border border-line bg-graphite/50 p-6 hover:border-accent/40 transition-colors">
      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
        <Icon name={feature.icon} className="w-5 h-5 text-accent-light" />
      </div>
      <h4 className="font-display font-semibold text-lg text-white">{feature.title}</h4>
      <p className="mt-2 text-sm text-fog leading-relaxed">{feature.text}</p>

      {feature.list && (
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {feature.list.map((item) => (
            <li
              key={item}
              className="text-xs font-medium text-accent-light bg-accent/10 rounded-lg px-3 py-2 text-center"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {feature.note && (
        <p className="mt-4 text-xs text-mist italic border-t border-line pt-3">{feature.note}</p>
      )}
    </div>
  );
}

export default function ProductDetails({ product, reverse = false }) {
  const [ref, visible] = useReveal();
  const isWelcomeLights = product.id === "welcome-lights";

  return (
    <section
      id={product.id}
      className={`relative py-24 lg:py-32 border-t border-line ${reverse ? "bg-graphite/20" : ""}`}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 ${visible ? "reveal" : "opacity-0"}`}
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={reverse ? "lg:order-2" : ""}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-light">
              {product.category}
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-white">
              {product.name} {product.model}
            </h2>
            <h3 className="mt-2 text-lg text-fog">{product.heroText}</h3>
            <p className="mt-5 text-fog leading-relaxed">{product.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MARKETPLACE_MERCADOLIVRE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink hover:bg-accent-light transition-colors"
              >
                Comprar no Mercado Livre
                <Icon name="externalLink" className="w-4 h-4" />
              </a>
              <a
                href={MARKETPLACE_SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent-light transition-colors"
              >
                Comprar na Shopee
                <Icon name="externalLink" className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            <div className="rounded-3xl border border-line bg-graphite/70 p-3 glow-ring">
              <img
                src={isWelcomeLights ? "/welcome-lights-before-after.jpg" : "/product-interblock.jpg"}
                alt={`${product.name} — demonstração`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h4 className="font-display font-semibold text-xl text-white mb-6">Funcionalidades</h4>
          <div className={`grid sm:grid-cols-2 ${product.features.length > 4 ? "lg:grid-cols-3" : ""} gap-5`}>
            {product.features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-graphite/40 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
          <div className="flex items-start gap-3">
            <Icon name="car" className="w-6 h-6 text-accent-light shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">Compatibilidade</p>
              <p className="text-sm text-fog mt-1">{product.compatibilityNote}</p>
            </div>
          </div>

          {product.compatibilityWarning && (
            <div className="flex items-start gap-3 rounded-xl border border-alert/30 bg-alert/10 px-4 py-3 max-w-sm">
              <Icon name="alert" className="w-5 h-5 text-alert-light shrink-0 mt-0.5" />
              <p className="text-xs text-alert-light leading-relaxed">
                <strong>Atenção:</strong> {product.compatibilityWarning}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
