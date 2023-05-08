import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ["vue", "vue-router"], // 自动导入
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
