import { OpenedFileContext } from "@ufh/react-services/src/contexts/OpenedFileContext";
import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { getGlobForPath } from "../utils/getGlobForPath";

export const useOpenedFileGlob = () => {
  const openedFile = useContextSelector(
    OpenedFileContext,
    ({ openedFile }) => openedFile
  );
  return useMemo(() => getGlobForPath(openedFile?.name ?? ""), [openedFile]);
};
