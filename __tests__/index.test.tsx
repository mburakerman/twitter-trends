import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Eye from "../src/components/Eye";

describe("eye component", () => {
  test("should render <Eye /> component", async () => {
    const { container } = render(<Eye />);
    expect(container.getElementsByClassName("eye").length);
  });
});
