interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="hero-pattern text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
