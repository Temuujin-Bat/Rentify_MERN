import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   include: ["@mui/material", "@emotion/react", "@emotion/styled"],
  // },
  server: {
    host: true,
  },
  // test: {
  //   coverage: {
  //     reporter: ["text", "html"],
  //   },
  // },
  build: {
    outDir: "build", // Specify the output directory
  },
});
