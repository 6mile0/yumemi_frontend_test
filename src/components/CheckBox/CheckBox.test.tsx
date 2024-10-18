import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import CheckBox from "./CheckBox";

test("CheckBoxに文字が表示されること", async () => {
  const onChangeMock = vi.fn(() => {});
  render(<CheckBox onChange={onChangeMock} label="CheckBox" />);
  expect(screen.getByText("CheckBox")).toBeTruthy();
});

test("CheckBoxロールであること", async () => {
  const onChangeMock = vi.fn(() => {});
  render(<CheckBox onChange={onChangeMock} label="CheckBox" />);

  expect(screen.getByRole("checkbox").getAttribute("type")).toBe("checkbox");
});
