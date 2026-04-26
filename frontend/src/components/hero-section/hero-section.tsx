import { useId } from 'react';

import type HeroSectionProps from './types/hero-props';

const HeroSection = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
}: HeroSectionProps) => {
  const titleId = useId();
  const subtitleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={subtitleId}
      className="min-h-screen bg-white px-6 py-16 text-slate-950 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-400">
            Budgetie
          </p>

          <h1
            id={titleId}
            className="mt-4 max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>

          <p
            id={subtitleId}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">{children}</div>
        </div>

        <div className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-900">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
