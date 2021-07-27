import { ArchiveReaderEntry } from "libarchive-wasm/dist/ArchiveReaderEntry";

export const get_file_from_entry = (
  entry: ArchiveReaderEntry | null
): File | null => {
  if (entry) {
    try {
      return new File([entry.readData()!], entry.getPathname());
    } catch (_) {}
  }
  return null;
};
