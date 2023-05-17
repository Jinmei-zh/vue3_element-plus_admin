import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
      hmr:true
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"], // 自动导入
      //这个一定要配置，会多出一个auto-import.d.ts文件，
      dts: "src/auto-import.d.ts",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
