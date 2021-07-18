import { path_cmp } from "./path_cmp";

test("path_cmp: compare between diffrent types. file should came after the directory", () => {
  const [dir, file] = ["1/", "file"];
  expect(path_cmp(file, dir)).toBe(1);
  expect(path_cmp(dir, file)).toBe(-1);
});

test("path_cmp: compare between same types", () => {
  const [dir1, dir2] = ["1/", "2/"];
  expect(path_cmp(dir1, dir2)).toBe(0);

  const [file1, file2] = ["1", "2"];
  expect(path_cmp(file1, file2)).toBe(0);
});
