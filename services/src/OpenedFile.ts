import { nanoid } from "nanoid";
import { AbstractOpenedFile } from "./AbstractOpenedFile";

export class OpenedFile implements AbstractOpenedFile {
  constructor(public file: File, public id: string = nanoid()) {}

  get size() {
    return this.file.size;
  }

  get name() {
    return this.file.name;
  }

  get lastModified() {
    return this.file.lastModified;
  }
}
