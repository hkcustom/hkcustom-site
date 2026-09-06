import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { differentials } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Features() {
  const [ref, visible] = useReveal();

  return (
    <section id="diferenciais" className="relative py-24 lg:py-32 border-t border-line">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 ${visible ? "reveal" : "opacity-0"}`}
      >
        <SectionHeading
          eyebrow="Por que a HK Custom"
          title="Diferenciais"
          description="Tecnologia automotiva pensada do início ao fim para o seu veículo."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-graphite/50 p-7 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Icon name={item.icon} className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-fog leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
