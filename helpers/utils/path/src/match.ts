import { match as _match } from "minimatch";

export const match = (paths: string[], pattern: string) =>
  _match(
    paths,
    pattern.endsWith("/") || pattern.length === 0 ? `${pattern}*` : pattern
  );
