import type { WorkItem } from "./work";

export type Contribution = WorkItem & {
  category: string;
};
