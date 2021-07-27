import { useContextSelector } from "use-context-selector";
import { LibArchiveEntriesContext } from "../../contexts/LibArchiveEntriesContext";

export const useSidebarEntriesQuery = () => {
  const isLoading = useContextSelector(
    LibArchiveEntriesContext,
    ({ entriesQuery: { isLoading } }) => isLoading
  );

  const data = useContextSelector(
    LibArchiveEntriesContext,
    ({ entriesQuery: { data } }) => data
  );

  return { data, isLoading };
};
