import { loginUser, logout, userInfo } from "@/api/user"
import type { TLoginRequest, TUser } from "@/api/user.d"
import { setToken, removeToken } from "@/utils/auth"

export const userStore = defineStore("user", () => {
  const user = ref<TUser>()

  const login = (params: TLoginRequest) => {
    return new Promise((resolve, reject) => {
      loginUser(params).then(async ({ data }) => {
        setToken(data.token)
        const user = await getInfo()
        resolve(user)
      })
    })
  }

  const logOut = () => {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        removeToken()
        resolve("")
      })
    })
  }

  const getInfo = (): Promise<TUser> => {
    return new Promise((resolve, reject) => {
      userInfo().then(({ data }) => {
        user.value = data
        resolve(data)
      })
    })
  }

  return {
    user,
    login,
    logOut,
    getInfo,
  }
  // resetToken() {},
})
