import { ArchiveReader } from "libarchive-wasm";
import { ILibArchiveEntries, ILibArchiveEntryType } from "./types";

export const list_entries = (reader: ArchiveReader): ILibArchiveEntries => {
  const entries = [];
  for (const entry of reader.entries()) {
    entries.push({
      size: entry.getSize(),
      pathname: entry.getPathname(),
      type: entry.getFiletype() as ILibArchiveEntryType,
    });
  }
  return entries;
};
