import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    outDir: "dist",
    assetsDir: "assets",

    // manifest: true,
    // rollupOptions: {
    //   input: {
    //     main: path.resolve(__dirname, 'index.html'),
    //   },
    // },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
