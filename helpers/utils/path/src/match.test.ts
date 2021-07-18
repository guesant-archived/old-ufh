import { match } from "./match";

test("match", () => {
  const entries = [
    "arquivo",
    "pasta/",
    "pasta/arquivo",
    "pasta/pasta2/",
    "pasta/pasta2/arquivo",
  ];

  expect(match(entries, "")).toEqual(["arquivo", "pasta/"]);
  expect(match(entries, "arquivo")).toEqual(["arquivo"]);
  expect(match(entries, "pasta/")).toEqual(["pasta/arquivo", "pasta/pasta2/"]);
  expect(match(entries, "pasta/pasta2/")).toEqual(["pasta/pasta2/arquivo"]);
});
