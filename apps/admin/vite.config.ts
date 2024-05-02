import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "~features": path.resolve(__dirname, "./src/features"),
      "~app": path.resolve(__dirname, "./src/app"),
      "~store": path.resolve(__dirname, "./src/app/store"),
      "~components": path.resolve(__dirname, "./src/components"),
      "~utils": path.resolve(__dirname, "./src/utils"),
      "~types": path.resolve(__dirname, "./src/types"),
      "~hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
