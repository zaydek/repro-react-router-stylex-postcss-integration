import { reactRouter } from "@react-router/dev/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // React
    react({
      // Babel integration
      babel: {
        // Make an explicit connection to babel.config.js
        // Note: Must use relative paths
        configFile: "./babel.config.js",
      },
    }),
    reactRouter(), // Goes after react()

    // TypeScript
    tsconfigPaths(),
  ],
  // PostCSS integration
  css: {
    // Make an explicit connection to postcss.config.cjs
    // Note: Must use relative paths
    postcss: "./postcss.config.cjs",
  },
});
