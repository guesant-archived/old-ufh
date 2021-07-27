import { AbstractOpenedFile } from "@ufh/react-services/src/AbstractOpenedFile";
import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import minimatch from "minimatch";

export const getGlobHandlerForOpenedFile = (
  openedFile: AbstractOpenedFile,
  globHandlersList: IGlobHandler[]
) =>
  globHandlersList.find(({ pattern }) =>
    minimatch(openedFile.name, pattern, {
      dot: true,
    })
  ) || null;
