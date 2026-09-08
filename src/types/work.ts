import type { ImageMetadata } from "astro";

export type WorkDetail = {
  label: string;
  value: string | number;
};

export type WorkItem = {
  title: string;
  description: string;
  link: string;
  img: ImageMetadata;
};
