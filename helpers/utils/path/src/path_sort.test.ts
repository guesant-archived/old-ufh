import { path_sort } from "./path_sort";

test("path_sort: file should came after directory", () => {
  const initialPaths = ["file_b", "directory_a/", "file_a", "directory_b"];

  const expectedPaths = ["directory_a/", "directory_b", "file_a", "file_b"];

  expect(path_sort(initialPaths)).toEqual(expectedPaths);
});
