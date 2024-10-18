import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, test, beforeAll } from "vitest";

import PopulationGraphView from "./PopulationGraphView";
import { PopulationData } from "../../models/Population";

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test("人口増減グラフが表示されること", async () => {
  const populationData: PopulationData[] = [
    {
      prefCode: 1,
      prefName: "北海道",
      data: [
        {
          year: 1960,
          value: 5039206,
        },
        {
          year: 1965,
          value: 5171800,
        },
        {
          year: 1970,
          value: 5288139,
        },
        {
          year: 1975,
          value: 5348936,
        },
        {
          year: 1980,
          value: 5369409,
        },
        {
          year: 1985,
          value: 5381733,
        },
        {
          year: 1990,
          value: 5499850,
        },
        {
          year: 1995,
          value: 5610573,
        },
        {
          year: 2000,
          value: 5627737,
        },
        {
          year: 2005,
          value: 5627737,
        },
        {
          year: 2010,
          value: 5506419,
        },
        {
          year: 2015,
          value: 5381733,
        },
        {
          year: 2020,
          value: 5288139,
        },
      ],
    },
  ];

  const { container } = render(
    <PopulationGraphView populationData={populationData} />,
  );
  expect(
    container.querySelectorAll(".recharts-responsive-container"),
  ).toHaveLength(1);
});
