import { OpenedFileContext } from "@ufh/react-services/src/contexts/OpenedFileContext";
import { list_entries } from "@ufh/react-services/src/helpers/libarchive/list_entries";
import { reader_from_file } from "@ufh/react-services/src/helpers/libarchive/reader_from_file";
import React from "react";
import { useQuery } from "react-query";
import { useContextSelector } from "use-context-selector";
import { LibArchiveEntriesContext } from "./LibArchiveEntriesContext";

export const LibArchiveEntriesContextProvider: React.FC = ({ children }) => {
  const openedFile = useContextSelector(
    OpenedFileContext,
    ({ openedFile }) => openedFile!
  );

  const entriesQuery = useQuery(
    ["libarchive", "all_entries_query", openedFile.id],
    async () => {
      try {
        const reader = await reader_from_file(openedFile!.file);
        const entries = list_entries(reader).map((i) => i.pathname);
        reader.free();
        return entries;
      } catch (error) {
        throw error;
      }
    }
  );

  return (
    <LibArchiveEntriesContext.Provider
      children={children}
      value={{ entriesQuery: entriesQuery }}
    />
  );
};
