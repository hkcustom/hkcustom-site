import Icon from "./Icon";
import { SITE } from "../config/site";
import { publicUrl } from "../lib/publicUrl";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:pt-32"
    >
      <div className="absolute inset-0 grid-fade" />
      <div className="absolute -top-40 right-0 w-[560px] h-[560px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center w-full">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-graphite/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent-light uppercase">
            Desde {SITE.foundedYear} · Tecnologia automotiva
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-6 text-white">
            TECNOLOGIA QUE <span className="text-gradient">TRANSFORMA</span> A
            EXPERIÊNCIA COM SEU VEÍCULO
          </h1>

          <p className="mt-6 text-lg text-fog max-w-xl">
            Soluções inteligentes para iluminação, segurança e controle automotivo.
          </p>

          <p className="mt-3 text-sm text-mist max-w-xl">
            Desde {SITE.foundedYear} desenvolvendo módulos eletrônicos para carros, motos e
            caminhões.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink hover:bg-accent-light transition-colors"
            >
              Conheça nossos produtos
              <Icon name="arrowRight" className="w-4 h-4" />
            </a>
            <a
              href="#marketplace"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-white hover:border-accent hover:text-accent-light transition-colors"
            >
              Comprar online
            </a>
          </div>
        </div>

        <div className="reveal relative" style={{ animationDelay: "0.15s" }}>
          <div className="relative rounded-3xl border border-line bg-graphite/70 p-3 glow-ring">
            <div className="absolute -inset-6 rounded-[2rem] border border-accent/20 animate-pulse-slow pointer-events-none" />
            <img
              src={publicUrl("/hero-module.jpg")}
              alt="Módulo eletrônico automotivo HK Custom com conectores originais"
              className="w-full h-full object-cover rounded-2xl aspect-square lg:aspect-[4/3]"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-line bg-graphite px-5 py-4 shadow-xl shadow-black/40">
            <Icon name="shield" className="w-8 h-8 text-accent-light" />
            <div>
              <p className="text-sm font-semibold text-white">100% Universal</p>
              <p className="text-xs text-mist">Compatível com todos os veículos 12V</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
