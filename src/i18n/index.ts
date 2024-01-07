import { createI18n } from "vue-i18n"
import zhCN from "./locales/zh-cn.json"
import en from "./locales/en.json"
import numbersFormats from "./rules/numbers.js"

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: {
    "zh-cn": zhCN,
    en,
  },
  numbersFormats,
})
