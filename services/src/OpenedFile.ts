import { nanoid } from "nanoid";

export class OpenedFile {
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
