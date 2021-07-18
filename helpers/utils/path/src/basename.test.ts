import { basename } from "./basename";

test("basename", () => {
  expect(basename("arquivo.txt")).toBe("arquivo.txt");
  expect(basename("/arquivo.txt")).toBe("arquivo.txt");
  expect(basename("caminho/ao/arquivo.txt")).toBe("arquivo.txt");
});
