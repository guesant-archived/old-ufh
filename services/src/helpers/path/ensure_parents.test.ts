import { ensure_parents } from "./ensure_parents";

describe("ensure_parents", () => {
  it("must create parent paths", () => {
    expect(
      ensure_parents([
        "arquivo",
        "pasta/",
        "pasta/arquivo",
        "pasta/pasta2/pasta3/arquivo",
      ]).sort()
    ).toEqual(
      [
        "arquivo",
        "pasta/",
        "pasta/arquivo",
        "pasta/pasta2/",
        "pasta/pasta2/pasta3/",
        "pasta/pasta2/pasta3/arquivo",
      ].sort()
    );
  });
});
