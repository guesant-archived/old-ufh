import { isdir } from "./isdir";

describe("isdir", () => {
  it("empty string is not an directory", () => {
    expect(isdir("")).toBe(false);
  });
  it("root directory", () => {
    expect(isdir("/")).toBe(true);
  });
  it("file within root directory", () => {
    expect(isdir("/arquivo")).toBe(false);
  });
  it("directory within root directory", () => {
    expect(isdir("/arquivo/")).toBe(true);
  });
  it("relative directory", () => {
    expect(isdir("arquivo/")).toBe(true);
  });
});
