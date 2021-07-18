import { path_cmp } from "./path_cmp";

describe("path_cmp", () => {
  it("files should came after directories", () => {
    expect(path_cmp("file", "1/")).toBe(1);
  });

  it("directories should came before files", () => {
    expect(path_cmp("1/", "file")).toBe(-1);
  });

  it("two files has no change", () => {
    expect(path_cmp("1", "2")).toBe(0);
  });

  it("two directories has no change", () => {
    expect(path_cmp("1/", "2/")).toBe(0);
  });
});
