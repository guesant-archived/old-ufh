export const LIBARCHIVE_TYPE_FILE = "File";
export const LIBARCHIVE_TYPE_DIRECTORY = "Directory";

export type ILibArchiveEntryTypeFile = typeof LIBARCHIVE_TYPE_FILE;
export type ILibArchiveEntryTypeDirectory = typeof LIBARCHIVE_TYPE_DIRECTORY;

export type ILibArchiveEntryType =
  | ILibArchiveEntryTypeFile
  | ILibArchiveEntryTypeDirectory;

export type ILibArchiveEntry<Type = ILibArchiveEntryType> = {
  type: Type;
  size: number;
  pathname: string;
};

export type ILibArchiveEntryFile = ILibArchiveEntry<ILibArchiveEntryTypeFile>;
export type ILibArchiveEntryDirectory =
  ILibArchiveEntry<ILibArchiveEntryTypeDirectory>;

export type ILibArchiveEntries = ILibArchiveEntry[];
