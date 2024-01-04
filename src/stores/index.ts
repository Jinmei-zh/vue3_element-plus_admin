import { createPinia } from "pinia"
import { useAppStore } from "./modules/app"
import { userStore } from "./modules/user"

export { useAppStore, userStore }

const pinia = createPinia()
export default pinia
