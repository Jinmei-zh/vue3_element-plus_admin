import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
import "./assets/iconfont/iconfont.css"
import "element-plus/dist/index.css"
import "./assets/main.css"
import pinia from "@/stores"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import i18n from "@/i18n/index.js"

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus, { locale: zhCn })

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(i18n)
app.mount("#app")
