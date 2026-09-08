import type { ImageMetadata } from "astro";

export type Project = {
  title: string;
  description: string;
  link: string;
  img: ImageMetadata;
  year: number;
  role: string;
};
