import { minimatchDefaultOptions } from "@ufh/react-services/src/consts/minimatchOptions";
import { ensure_parents } from "@ufh/react-services/src/helpers/path/ensure_parents";
import { match as matchArrByPattern } from "@ufh/react-services/src/helpers/path/match";
import { path_sort } from "@ufh/react-services/src/helpers/path/path_sort";
import multimatch from "multimatch";
import { useCallback, useMemo, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { LibArchiveConfigContext } from "../contexts/LibArchiveConfigContext";
import { LibArchiveEntriesContext } from "../contexts/LibArchiveEntriesContext";

const identityFn = (arr: string[]) => arr;

export const useEntriesQueryMatch = () => {
  const [searchText, setSearchText] = useState("");
  const [isHighlightMode, setIsHighlightMode] = useState(false);

  const data = useContextSelector(
    LibArchiveEntriesContext,
    ({ entriesQuery: { data } }) => data || []
  );

  const highlightPatterns = useContextSelector(
    LibArchiveConfigContext,
    ({ config: { highlightPatterns } }) =>
      (highlightPatterns || []).filter((i) => i.length > 0)
  );

  const filter = useCallback(
    (arr: string[]) => {
      const highlighted = isHighlightMode
        ? multimatch(arr, highlightPatterns, minimatchDefaultOptions)
        : arr;

      const searched =
        searchText.length > 0
          ? multimatch(highlighted, searchText, minimatchDefaultOptions)
          : highlighted;
      return searched;
    },
    [searchText, isHighlightMode, highlightPatterns]
  );

  const dataFiltered = useMemo(
    () => path_sort(ensure_parents(filter(data))),
    [filter, data]
  );

  const match = useCallback(
    (pattern: string) => matchArrByPattern(dataFiltered, pattern),
    [dataFiltered]
  );

  return {
    match,
    filter,
    searchText,
    dataFiltered,
    setSearchText,
    isHighlightMode,
    setIsHighlightMode,
  };
};
