import Icon from "./Icon";
import { publicUrl } from "../lib/publicUrl";

const images = {
  "welcome-lights": publicUrl("/product-welcome-lights.jpg"),
  interblock: publicUrl("/product-interblock.jpg"),
};

export default function ProductCard({ product }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-line bg-graphite/50 overflow-hidden hover:border-accent/50 transition-colors">
      <div className="aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={images[product.id]}
          alt={`${product.name} ${product.model} — ${product.category}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-center gap-2 text-accent-light">
          <Icon name={product.icon} className="w-5 h-5" />
          <span className="text-xs font-semibold tracking-widest uppercase">
            {product.category}
          </span>
        </div>

        <h3 className="mt-3 font-display font-bold text-2xl text-white">
          {product.name} {product.model}
        </h3>

        <p className="mt-3 text-fog text-sm leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        <ul className="mt-5 flex flex-col gap-2">
          {product.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-fog">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <a
          href={`#${product.id}`}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-white group-hover:border-accent group-hover:text-accent-light transition-colors"
        >
          Ver produto
          <Icon name="arrowRight" className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}
