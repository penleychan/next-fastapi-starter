import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import { describe, it, expect } from "vitest";

describe("Home page", () => {
  it("renders the Hello World button", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: /hello world/i });
    expect(button).toBeDefined();
  });
});
