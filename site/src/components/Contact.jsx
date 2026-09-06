import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { CONTACT, whatsappLink } from "../config/site";
import useReveal from "../hooks/useReveal";

const channels = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    href: whatsappLink(),
    show: true,
  },
  {
    icon: "instagram",
    label: "Instagram",
    href: CONTACT.instagramUrl,
    show: true,
  },
  {
    icon: "mail",
    label: CONTACT.email || "E-mail em breve",
    href: CONTACT.email ? `mailto:${CONTACT.email}` : undefined,
    show: Boolean(CONTACT.email),
  },
];

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contato" className="relative py-24 lg:py-32 border-t border-line">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-5 lg:px-8 text-center ${visible ? "reveal" : "opacity-0"}`}
      >
        <SectionHeading
          eyebrow="Contato"
          title="Fale com a HK Custom"
          description="Tire suas dúvidas sobre compatibilidade, instalação ou os produtos."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {channels
            .filter((c) => c.show)
            .map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-graphite/50 px-5 py-3 text-sm font-medium text-fog hover:border-accent hover:text-accent-light transition-colors"
              >
                <Icon name={channel.icon} className="w-4 h-4" />
                {channel.label}
              </a>
            ))}
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink hover:bg-accent-light transition-colors"
        >
          <Icon name="whatsapp" className="w-5 h-5" />
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
