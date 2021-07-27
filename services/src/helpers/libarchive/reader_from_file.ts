import { buffer_from_file } from "../../utils/buffer_from_file";
import { reader_from_buffer } from "./reader_from_buffer";

export const reader_from_file = async (file: File) => {
  const buffer = await buffer_from_file(file);
  const reader = await reader_from_buffer(buffer);
  return reader;
};
