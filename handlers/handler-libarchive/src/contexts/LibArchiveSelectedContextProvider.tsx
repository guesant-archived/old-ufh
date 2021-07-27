import { OpenedFileContext } from "@ufh/react-services/src/contexts/OpenedFileContext";
import { get_file } from "@ufh/react-services/src/helpers/libarchive/get_file";
import { reader_from_file } from "@ufh/react-services/src/helpers/libarchive/reader_from_file";
import { OpenedFile } from "@ufh/react-services/src/OpenedFile";
import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useContextSelector } from "use-context-selector";
import { LibArchiveSelectedContext } from "./LibArchiveSelectedContext";

export const LibArchiveSelectedContextProvider: React.FC = ({ children }) => {
  const openedFile = useContextSelector(
    OpenedFileContext,
    ({ openedFile }) => openedFile
  );

  const [selected, setSelected] = useState("");
  const hasSelectedFile = useMemo(() => selected.trim().length > 0, [selected]);

  const selectedQuery = useQuery(
    ["libarchive", "selected", openedFile!.id, selected],
    async () => {
      if (hasSelectedFile) {
        try {
          const reader = await reader_from_file(openedFile!.file);
          const file = get_file(reader, selected);
          reader.free();
          return file && new OpenedFile(file);
        } catch (error) {
          throw error;
        }
      }
      return null;
    }
  );

  return (
    <LibArchiveSelectedContext.Provider
      children={children}
      value={{
        selected,
        setSelected,
        hasSelectedFile,
        selectedQuery,
      }}
    />
  );
};
