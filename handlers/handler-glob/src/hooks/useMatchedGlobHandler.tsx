import { GlobHandlersContext } from "@ufh/react-services/src/contexts/GlobHandlersContext";
import { OpenedFileContext } from "@ufh/react-services/src/contexts/OpenedFileContext";
import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { getGlobHandlerForOpenedFile } from "../utils/getGlobHandlerForOpenedFile";

export const useMatchedGlobHandler = () => {
  const openedFile = useContextSelector(
    OpenedFileContext,
    ({ openedFile }) => openedFile
  );

  const globHandlers = useContextSelector(
    GlobHandlersContext,
    ({ list }) => list
  );

  const matchedGlobHandler = useMemo<IGlobHandler | null>(
    () => openedFile && getGlobHandlerForOpenedFile(openedFile, globHandlers),
    [openedFile, globHandlers]
  );

  return matchedGlobHandler;
};
