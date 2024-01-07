import i18n from "@/i18n"

const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
  },

  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE
  },

  set currentLocale(locale: string) {
    i18n.global.locale.value = locale
  },

  isLocaleSupported(locale: string) {
    return Trans.supportedLocales.includes(locale)
  },

  getUserLocale() {
    const locale = window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale
    return {
      locale,
      localeNoRegion: locale.split("-")[0],
    }
  },

  getPeristedLocale() {
    const peristedLocale = localStorage.getItem("user-locale") || ""
    if (Trans.isLocaleSupported(peristedLocale)) {
      return peristedLocale
    }
    return null
  },

  guessDefaultLocale() {
    const userPeristedLocale = Trans.getPeristedLocale()
    if (userPeristedLocale) {
      return userPeristedLocale
    }

    const userPerPerredLocale = Trans.getUserLocale()
    if (Trans.isLocaleSupported(userPerPerredLocale.locale)) {
      return userPerPerredLocale.locale
    }

    if (Trans.isLocaleSupported(userPerPerredLocale.localeNoRegion)) {
      return userPerPerredLocale.localeNoRegion
    }

    return Trans.defaultLocale
  },

  async switchLanguage(locale: string) {
    Trans.currentLocale = locale
    localStorage.setItem("user-locale", locale)
  },

  async routeMiddleware(to, from, next) {
    const locale = Trans.guessDefaultLocale()
    await Trans.switchLanguage(locale)
    next()
  },
}

export default Trans
