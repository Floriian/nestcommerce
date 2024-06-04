import type { ActiveOptionsForMenuItem } from "./types";

export const ACTIVE_OPTIONS: ActiveOptionsForMenuItem[] = [
  { text: "All", value: "ALL" },
  { text: "Yes", value: true },
  { text: "No", value: false },
] as const;
