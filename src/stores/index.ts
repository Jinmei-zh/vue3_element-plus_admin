import { createPinia } from "pinia"
import { useAppStore } from "./modules/app"
import { userStore } from "./modules/user"
import { useSettingStore } from "./modules/setting"

export { useAppStore, userStore, useSettingStore }

const pinia = createPinia()
export default pinia
