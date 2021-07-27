import { AbstractOpenedFile } from "@ufh/react-services/src/AbstractOpenedFile";
import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import { minimatchDefaultOptions } from "@ufh/react-services/src/consts/minimatchOptions";
import minimatch from "minimatch";

export const getGlobHandlerForOpenedFile = (
  openedFile: AbstractOpenedFile,
  globHandlersList: IGlobHandler[]
) =>
  globHandlersList.find(({ pattern }) =>
    minimatch(openedFile.name, pattern, minimatchDefaultOptions)
  ) || null;
