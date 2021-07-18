import { isdir } from "./isdir";

export const path_cmp = (a: string, b: string) => {
  if (!isdir(a) && isdir(b)) return 1;
  if (isdir(a) && !isdir(b)) return -1;
  return 0;
};
