import Icon from "./Icon";
import { getProductById } from "../data/products";
import { publicUrl } from "../lib/publicUrl";
import useReveal from "../hooks/useReveal";

export default function Installation() {
  const [ref, visible] = useReveal();
  const interblock = getProductById("interblock");

  return (
    <section className="relative py-24 lg:py-32 border-t border-line bg-graphite/20">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-5 lg:px-8 text-center ${visible ? "reveal" : "opacity-0"}`}
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-light">
          INTERBLOCK
        </span>
        <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-white">Instalação</h2>
        <p className="mt-5 text-fog leading-relaxed max-w-2xl mx-auto">
          O INTERBLOCK deve ser corretamente conectado aos componentes elétricos do veículo
          conforme as orientações presentes no manual de instalação.
        </p>

        <div className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-alert/30 bg-alert/10 px-6 py-5 text-left max-w-xl">
          <Icon name="alert" className="w-6 h-6 text-alert-light shrink-0 mt-0.5" />
          <p className="text-sm text-alert-light leading-relaxed">
            A instalação deve ser realizada por profissional qualificado, seguindo corretamente o
            manual e os procedimentos técnicos aplicáveis ao veículo.
          </p>
        </div>

        <div className="mt-10">
          <a
            href={publicUrl(interblock.manualUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent-light transition-colors"
          >
            <Icon name="book" className="w-4 h-4" />
            Consulte o manual de instalação
          </a>
        </div>
      </div>
    </section>
  );
}
