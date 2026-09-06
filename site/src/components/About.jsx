import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { aboutHighlights } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="sobre" className="relative py-24 lg:py-32 border-t border-line">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 ${visible ? "reveal" : "opacity-0"}`}
      >
        <SectionHeading
          eyebrow="Quem somos"
          title="HK Custom"
          description="Tecnologia, praticidade e funcionalidade para o universo automotivo."
        />

        <p className="mt-8 max-w-3xl mx-auto text-center text-fog leading-relaxed">
          A HK Custom está no mercado desde 2019, desenvolvendo soluções eletrônicas voltadas
          para o mercado automotivo. Nossa proposta é unir tecnologia, praticidade e
          funcionalidade em produtos desenvolvidos para facilitar a utilização e aumentar a
          segurança dos veículos. Nossos módulos são projetados para aplicações em carros, motos
          e caminhões, oferecendo soluções inteligentes para iluminação, bloqueio e controle de
          sistemas automotivos.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {aboutHighlights.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-3 text-center rounded-2xl border border-line bg-graphite/50 px-4 py-6 hover:border-accent/50 hover:bg-graphite transition-colors"
            >
              <Icon name={item.icon} className="w-7 h-7 text-accent-light" />
              <p className="text-sm text-fog font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
