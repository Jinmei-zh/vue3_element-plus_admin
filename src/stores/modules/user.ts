import { login, logout, userInfo } from "@/api/user"
import type { TLoginRequest, TUser } from "@/api/user.d"
import { getToken, setToken, removeToken } from "@/utils/auth"
import { ElNotification } from "element-plus"

type stateType = {
  isLogin: boolean
  token: string | null
  info: TUser | null
}

export const userStore = defineStore("user", {
  state: (): stateType => ({
    isLogin: false,
    token: getToken(),
    info: null,
  }),
  actions: {
    isAdmin() {
      return this.info?.role_id == 1
    },
    login(params: TLoginRequest) {
      return new Promise((resolve, reject) => {
        login(params).then(async ({ data }) => {
          setToken(data.token)

          const user = await this.getInfo()
          resolve(user)
        })
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          removeToken()
          this.token = ""
          resolve("")
        })
      })
    },

    getInfo(): Promise<TUser> {
      return new Promise((resolve, reject) => {
        userInfo().then(({ data }) => {
          if (!data.avatar) {
            data.avatar = "https://img1.baidu.com/it/u=2996715769,794374351&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500"
          }
          this.info = data
          resolve(data)
        })
      })
    },
    resetToken() {},
  },
})
