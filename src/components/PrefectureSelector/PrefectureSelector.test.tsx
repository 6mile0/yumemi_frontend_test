import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import PrefectureSelector from "./PrefectureSelector";

test("都道府県が2件表示されること", async () => {
  const mockPrefectureHandler = vi.fn();
  const prefectures = [
    { prefCode: 1, prefName: "北海道" },
    { prefCode: 2, prefName: "青森県" },
  ];

  render(
    <PrefectureSelector
      prefectures={prefectures}
      prefectureHandler={mockPrefectureHandler}
    />,
  );

  expect(screen.getByText("北海道")).toBeTruthy();
  expect(screen.getByText("青森県")).toBeTruthy();
});

test("都道府県4件表示されること", async () => {
  const mockPrefectureHandler = vi.fn();

  // 10件の都道府県データを作成
  const prefectures = [
    { prefCode: 1, prefName: "北海道" },
    { prefCode: 2, prefName: "青森県" },
    { prefCode: 3, prefName: "岩手県" },
    { prefCode: 4, prefName: "宮城県" },
  ];

  render(
    <PrefectureSelector
      prefectures={prefectures}
      prefectureHandler={mockPrefectureHandler}
    />,
  );

  expect(screen.getAllByRole("checkbox").length).toBe(4);
});

test("都道府県が選択された時にイベントが発火すること", async () => {
  const mockPrefectureHandler = vi.fn();
  const prefectures = [
    { prefCode: 1, prefName: "北海道" },
    { prefCode: 2, prefName: "青森県" },
  ];

  render(
    <PrefectureSelector
      prefectures={prefectures}
      prefectureHandler={mockPrefectureHandler}
    />,
  );

  const checkbox = screen.getByLabelText("北海道");
  checkbox.click();

  expect(mockPrefectureHandler).toHaveBeenCalled();
});
