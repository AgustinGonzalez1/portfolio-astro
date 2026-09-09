import type { WorkItem } from "./work";

export type Project = WorkItem & {
  year: number;
  stack: string;
};
