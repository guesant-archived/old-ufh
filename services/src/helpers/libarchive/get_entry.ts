import { ArchiveReader } from "libarchive-wasm";
import { ArchiveReaderEntry } from "libarchive-wasm/dist/ArchiveReaderEntry";

export const get_entry = (
  reader: ArchiveReader,
  filename: string
): ArchiveReaderEntry | null => {
  for (const entry of reader.entries()) {
    if (entry.getPathname() === filename) {
      return entry;
    }
  }
  return null;
};
