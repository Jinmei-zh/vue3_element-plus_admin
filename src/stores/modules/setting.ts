import Tr from "@/i18n/translation"

export const useSettingStore = defineStore("setting", () => {
  const locale = ref<string>(Tr.currentLocale)

  return { locale }
})
