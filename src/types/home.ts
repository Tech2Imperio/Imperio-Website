import { ReactNode } from "react";

export type HeroProps = {
  img: string;
  altText?: string;
  header: string | ReactNode;
  subHeader: string | ReactNode;
  height?: boolean;
  curve?: boolean;
  children?: ReactNode;
  VideoProps: string;
};
export type ScrollData = {
  id: number;
  img: string;
  alt: string;
  header: string;
  subheader: string;
};

export type FuturePanelProps = {
  scroller: ScrollData[];
  mainHeader?: string | ReactNode;
  yellowHeader?: string | ReactNode;
  text?: string | ReactNode;
};

export type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  direction?: boolean;
};

export type TestimonialsData = {
  id: number;
  name: string;
  add: string;
  stars: number;
  quote: string;
  img: string;
  alt: string;
};

export type TestimonialsProps = {
  cards: TestimonialsData[];
  className?: string;
  direction?: boolean;
};

export interface ImageScrollProps {
  children: React.ReactNode;
  direction: number;
  className: string;
}

export interface ImageScrollsProps {
  className?: string;
}
