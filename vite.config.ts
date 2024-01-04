import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { viteMockServe } from "vite-plugin-mock"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      mockPath: "mock/",
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia", "vue-i18n"], // 自动导入
      dts: "src/types/auto-import.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: "src/types/auto-component.d.ts",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
