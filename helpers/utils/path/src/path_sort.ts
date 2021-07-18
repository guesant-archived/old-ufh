import { path_cmp } from "./path_cmp";

const locale_cmp = (a: string, b: string) =>
  a.localeCompare(b, "en", { sensitivity: "base" });

export const path_sort = (pathList: string[]) =>
  pathList.sort(locale_cmp).sort(path_cmp);
