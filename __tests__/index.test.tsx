import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, renderHook, act } from "@testing-library/react";
import { expect } from "@jest/globals";

import Eye from "../src/components/Eye";
import { useGlobalStore } from "../src/store";

describe("eye component", () => {
  test("should render <Eye /> component", async () => {
    const { container } = render(<Eye />);
    expect(container.getElementsByClassName("eye").length);
  });
});

describe("store", () => {
  test("should have 'false' default value for trendsBoxVisibility", () => {
    const { trendsBoxVisibility } = useGlobalStore.getState();
    expect(trendsBoxVisibility).toBe(false);
  });

  test("should set trendsBoxVisibility to 'true' when calling with 'true'", () => {
    const { result } = renderHook(() => useGlobalStore());

    act(() => {
      result.current.setTrendsBoxVisibility(true);
    });

    expect(result.current.trendsBoxVisibility).toBe(true);
  });
});
