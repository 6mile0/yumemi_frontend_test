import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Header from "./Header";

test("Headerに文字が表示されること", async () => {
  render(<Header />);
  expect(screen.getByText("都道府県別人口比較")).toBeTruthy();
});
