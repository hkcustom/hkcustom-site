import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { vehicleVideos } from "../data/content";
import { publicUrl } from "../lib/publicUrl";
import useReveal from "../hooks/useReveal";

export default function VideoGallery() {
  const [ref, visible] = useReveal();

  return (
    <section id="videos" className="relative py-24 lg:py-32 border-t border-line">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 ${visible ? "reveal" : "opacity-0"}`}
      >
        <SectionHeading
          eyebrow="Na prática"
          title="Funcionando em veículos reais"
          description="Confira o funcionamento dos módulos HK Custom instalados em diferentes veículos."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicleVideos.map((video) => (
            <div
              key={video.id}
              className="group rounded-2xl border border-line bg-graphite/50 overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video bg-ink">
                <video
                  src={publicUrl(video.src)}
                  controls
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  Seu navegador não suporta vídeo em HTML5.
                </video>
              </div>
              <div className="flex items-center gap-2 px-5 py-4">
                <Icon name={video.icon || "car"} className="w-4 h-4 text-accent-light shrink-0" />
                <p className="text-sm font-medium text-white">{video.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
