import { OpenedFile } from "@ufh/react-services/src/OpenedFile";
import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import minimatch from "minimatch";

export const getGlobHandlerForOpenedFile = (
  openedFile: OpenedFile,
  globHandlersList: IGlobHandler[]
) =>
  globHandlersList.find(({ pattern }) =>
    minimatch(openedFile.name, pattern, {
      dot: true,
    })
  ) || null;
