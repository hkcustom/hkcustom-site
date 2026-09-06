import { useState } from "react";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { faqItems } from "../data/content";
import useReveal from "../hooks/useReveal";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-white">{item.question}</span>
        <Icon
          name="chevronDown"
          className={`w-5 h-5 text-accent-light shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm text-fog leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, visible] = useReveal();

  return (
    <section id="faq" className="relative py-24 lg:py-32 border-t border-line">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-5 lg:px-8 ${visible ? "reveal" : "opacity-0"}`}
      >
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="FAQ"
          description="Tudo o que você precisa saber antes de comprar."
        />

        <div className="mt-12">
          {faqItems.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
