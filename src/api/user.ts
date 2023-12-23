import request from "@/utils/request"
import { PIResponseData } from "@/types/request"
import { TLoginRequest, userLoginResponse, TUser } from "./user.d.ts"

export function login(data: TLoginRequest): PIResponseData<userLoginResponse> {
  return request.post("/login", data)
}

/**
 * 退出登陆
 * @returns
 */
export function logout(): PIResponseData<any> {
  return request.get("/logout")
}

/**
 * 获取用户信息
 * @returns
 */
export function userInfo(): PIResponseData<TUser> {
  return request.get("/user")
}

export type TUserForm = {
  id: number
  name: string
  phone: string
  avatar: string
  password?: string
  password_confirmation?: string
}

/**
 * 更新当前登陆用户信息
 * @param data
 */
export const updateUser = (data: TUserForm): PIResponseData<any> => {
  return request.put("/user", data)
}
