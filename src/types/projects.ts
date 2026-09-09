import type { WorkItem } from "./work";

export type Project = Pick<WorkItem, "title" | "description" | "link"> & {
  year: number;
  stack: string;
};
