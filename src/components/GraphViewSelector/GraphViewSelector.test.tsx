import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import GraphViewSelector from "./GraphViewSelector";

test("人口種別のタブが4つ表示されること", async () => {
  const populationData = {
    totalPopulation: [],
    youngPopulation: [],
    workingPopulation: [],
    elderlyPopulation: [],
  };

  render(<GraphViewSelector {...populationData} />);
  expect(screen.getAllByRole("tab").length).toBe(4);
});
