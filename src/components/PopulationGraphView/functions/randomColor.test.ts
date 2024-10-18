import "@testing-library/jest-dom";
import { expect, test } from "vitest";

import { generateRandomColors } from "./randomColor";

test("ランダムな色が47色生成されるか", () => {
  expect(generateRandomColors()).toHaveLength(47);
});
