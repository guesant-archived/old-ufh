import { ArchiveReader } from "libarchive-wasm";
import { get_entry } from "./get_entry";
import { get_file_from_entry } from "./get_file_from_entry";

export const get_file = (
  reader: ArchiveReader,
  filename: string
): File | null => get_file_from_entry(get_entry(reader, filename));
