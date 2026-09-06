export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-light">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">{title}</h2>
      {description && <p className="text-fog text-base sm:text-lg">{description}</p>}
    </div>
  );
}
