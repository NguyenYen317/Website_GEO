import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName =
  process.env.VITE_GITHUB_REPOSITORY?.split("/")[1] || "TechGuide";
const base = process.env.GITHUB_PAGES === "true" ? `/${repoName}/` : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
