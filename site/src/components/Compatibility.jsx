import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import useReveal from "../hooks/useReveal";

export default function Compatibility() {
  const [ref, visible] = useReveal();

  return (
    <section id="compatibilidade" className="relative py-24 lg:py-32 border-t border-line bg-graphite/20">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 ${visible ? "reveal" : "opacity-0"}`}
      >
        <SectionHeading
          eyebrow="Compatibilidade"
          title="Tecnologia universal para todas as marcas"
          description="Soluções inteligentes e universais para veículos 12V — carros, motos e caminhões."
        />

        <div className="mt-12 rounded-3xl border border-line bg-graphite/60 p-3 sm:p-6 overflow-hidden">
          <img
            src="/compatibility-brands.jpg"
            alt="Compatibilidade com as principais marcas automotivas: Toyota, Honda, Nissan, Hyundai, Chevrolet, Volkswagen, Fiat, Jeep, Ford, Renault, Peugeot, Citroën, Mitsubishi, Kia, RAM, Mercedes-Benz, BMW, Audi, Volvo, Lexus, Land Rover, Mini, Porsche, Bentley, Suzuki, Subaru, Chery, JAC, Lifan, Troller, Rolls-Royce, Maserati e Tesla"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-graphite/40 px-6 py-5 max-w-3xl mx-auto">
          <Icon name="alert" className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
          <p className="text-sm text-fog leading-relaxed">
            Alguns veículos equipados com rede CAN podem apresentar particularidades de
            compatibilidade. Consulte um profissional ou fale com a HK Custom antes da compra.
          </p>
        </div>
      </div>
    </section>
  );
}
