import { match } from "./match";

describe("match", () => {
  const entries = [
    "arquivo",
    "pasta/",
    "pasta/arquivo",
    "pasta/pasta2/",
    "pasta/pasta2/arquivo",
  ];

  it("empty string matches the first level entries", () => {
    expect(match(entries, "")).toEqual(["arquivo", "pasta/"]);
  });

  it("match exact filename", () => {
    expect(match(entries, "arquivo")).toEqual(["arquivo"]);
  });

  it("match directory entries", () => {
    expect(match(entries, "pasta/")).toEqual([
      "pasta/arquivo",
      "pasta/pasta2/",
    ]);
  });

  it("match subdirectory entries", () => {
    expect(match(entries, "pasta/pasta2/")).toEqual(["pasta/pasta2/arquivo"]);
  });
});
