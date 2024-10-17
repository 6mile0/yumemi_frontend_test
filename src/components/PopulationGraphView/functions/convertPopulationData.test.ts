import "@testing-library/jest-dom";
import { expect, test } from "vitest";

import { convertPopulationData, GraphData } from "./convertPopulationData";
import { PopulationData } from "../../../models/Population";

test("テストデータがグラフ描画に必要なデータ形式に変換されるか", () => {
  const input: PopulationData[] = [
    {
      prefCode: 13,
      prefName: "東京都",
      data: [
        { year: 2020, value: 100 },
        { year: 2021, value: 200 },
        { year: 2022, value: 300 },
      ],
    },
  ];

  const result: GraphData[] = [
    { year: 2020, 東京都: 100 },
    { year: 2021, 東京都: 200 },
    { year: 2022, 東京都: 300 },
  ];

  expect(convertPopulationData(input)).toEqual(result);
});
