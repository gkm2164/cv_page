export interface CareerNode {
  id: string;
  title: string;
  entries: any[];
}

export type CareerEntry = {[key: string]: CareerNode};

