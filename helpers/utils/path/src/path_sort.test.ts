import { path_sort } from "./path_sort";

describe("path_sort", () => {
  it("file should came after directory", () => {
    expect(
      path_sort(["file_b", "directory_a/", "file_a", "directory_b/"])
    ).toEqual(["directory_a/", "directory_b/", "file_a", "file_b"]);
  });
});
