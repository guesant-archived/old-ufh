import minimatch from "minimatch";
import { minimatchDefaultOptions } from "@ufh/react-services/src/consts/minimatchOptions";

export const match = (paths: string[], pattern: string) =>
  minimatch.match(
    paths,
    pattern.endsWith("/") || pattern.length === 0 ? `${pattern}*` : pattern,
    minimatchDefaultOptions
  );
