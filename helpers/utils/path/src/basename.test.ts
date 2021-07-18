import { basename } from "./basename";

describe("basename", () => {
  it("basename from an relative filename", () => {
    expect(basename("arquivo.txt")).toBe("arquivo.txt");
  });
  it("basename from file inside the root directory", () => {
    expect(basename("/arquivo.txt")).toBe("arquivo.txt");
  });
  it("basename from relative subdirectories", () => {
    expect(basename("caminho/ao/arquivo.txt")).toBe("arquivo.txt");
  });
  it("basename from root subdirectories", () => {
    expect(basename("/caminho/ao/arquivo.txt")).toBe("arquivo.txt");
  });
});
