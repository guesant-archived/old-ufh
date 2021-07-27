import { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { LibArchiveSelectedContext } from "../contexts/LibArchiveSelectedContext";
import { LibArchiveSidebarContext } from "../contexts/LibArchiveSidebarContext";

export const useSelectedRotation = () => {
  const data = useContextSelector(
    LibArchiveSidebarContext,
    ({ dataFiltered }) => dataFiltered
  );

  const selected = useContextSelector(
    LibArchiveSelectedContext,
    ({ selected }) => selected
  );

  const setSelected = useContextSelector(
    LibArchiveSelectedContext,
    ({ setSelected }) => setSelected
  );

  const getRotateResultIndex = useCallback(
    (rotate: number) => {
      if (selected && data) {
        const openedFileIndex = data.findIndex((i) => i === selected);
        if (openedFileIndex > -1) {
          const rotationResult = openedFileIndex + rotate;
          const resultIndex =
            rotationResult >= 0 && rotationResult < data.length
              ? rotationResult
              : -1;
          return resultIndex;
        }
      }
      return -1;
    },
    [data, selected]
  );

  const canRotate = useCallback(
    (rotate: number) => getRotateResultIndex(rotate) > -1,
    [getRotateResultIndex]
  );

  const rotate = useCallback(
    (rotate: number) => {
      const resultIndex = getRotateResultIndex(rotate);
      if (resultIndex > -1 && data) {
        setSelected(data[resultIndex]);
      }
    },
    [getRotateResultIndex]
  );

  const prev = useCallback(() => rotate(-1), [rotate]);
  const next = useCallback(() => rotate(1), [rotate]);

  return { rotate, canRotate, prev, next };
};
