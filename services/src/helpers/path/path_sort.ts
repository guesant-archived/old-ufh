import { path_cmp } from "./path_cmp";

const locale_cmp = (a: string, b: string) =>
  a.localeCompare(b, "en", { sensitivity: "base" });

export const path_sort = (paths: string[], initialSortFN = locale_cmp) =>
  paths.sort(initialSortFN).sort(path_cmp);
