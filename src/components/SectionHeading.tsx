export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-xs uppercase tracking-[0.28em] ${
            light ? "text-wine/70" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`section-title text-3xl md:text-5xl ${
          light ? "text-burgundy" : "gold-text"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-5 w-28 shimmer-line" />
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            light ? "text-ink/70" : "text-champagne/75"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
