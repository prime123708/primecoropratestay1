declare module '@/components/Navigation/Navigation' {
  import type { FC } from 'react';
  export const Navigation: FC<any>;
}

declare module '@/components/Footer/Footer' {
  import type { FC } from 'react';
  export const Footer: FC<any>;
}

declare module '@/components/WhatsAppButton/WhatsAppButton' {
  import type { FC } from 'react';
  export const WhatsAppButton: FC<any>;
}

declare module '@/components/PageAnimations/PageAnimations' {
  import type { FC } from 'react';
  export const PageAnimations: FC<any>;
}

declare module '@/components/ParallaxBanner/ParallaxBanner' {
  import type { FC, ReactNode } from 'react';
  export const ParallaxBanner: FC<{ src: string; alt?: string; heightClass?: string; children?: ReactNode }>;
}
