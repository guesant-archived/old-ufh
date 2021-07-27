import { ArchiveReader, libarchiveWasm } from "libarchive-wasm";
import { get_wasm_url } from "./get_wasm_url";

const locateFile = get_wasm_url;

export const reader_from_buffer = async (buffer: ArrayBuffer) => {
  const libarchiveModule = await libarchiveWasm({ locateFile });
  return new ArchiveReader(libarchiveModule, new Int8Array(buffer));
};
