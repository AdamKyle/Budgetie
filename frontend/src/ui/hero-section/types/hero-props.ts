import type { ReactNode } from 'react';

export default interface HeroSectionProps {
  title: string;
  subtitle: ReactNode;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}
