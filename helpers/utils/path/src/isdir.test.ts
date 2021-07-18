import { isdir } from "./isdir";

test("isdir", () => {
  expect(isdir("")).toBe(false);
  expect(isdir("/")).toBe(true);
  expect(isdir("/arquivo")).toBe(false);
  expect(isdir("/arquivo/")).toBe(true);
  expect(isdir("arquivo/")).toBe(true);
});
