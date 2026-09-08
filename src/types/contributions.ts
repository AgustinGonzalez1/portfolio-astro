import type { ImageMetadata } from "astro";

export type Contribution = {
  title: string;
  description: string;
  link: string;
  img: ImageMetadata;
};
