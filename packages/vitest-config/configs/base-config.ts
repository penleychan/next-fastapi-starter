import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import path from "node:path";

export const baseConfig = defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: "istanbul",
      reporter: [
        [
          "json",
          {
            file: `../coverage.json`,
          },
        ],
      ],
      enabled: true,
    },
  },
});
