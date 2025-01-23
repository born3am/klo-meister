import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: '/klo-meister/',
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
