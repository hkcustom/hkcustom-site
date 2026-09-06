import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import useReveal from "../hooks/useReveal";

export default function Products() {
  const [ref, visible] = useReveal();

  return (
    <section id="produtos" className="relative py-24 lg:py-32 border-t border-line bg-graphite/20">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 ${visible ? "reveal" : "opacity-0"}`}
      >
        <SectionHeading
          eyebrow="Nossas soluções"
          title="Produtos desenvolvidos para o seu veículo"
          description="Encontre o módulo ideal para carros, motos e caminhões."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
