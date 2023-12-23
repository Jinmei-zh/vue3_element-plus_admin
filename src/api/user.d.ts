export type TLoginRequest = {
  username: string
  password: string
}

export type userLoginResponse = {
  token: string
  name: string
}

export type TUser = {
  id: number
  name: string
  phone: string
  avatar: string
  role_id: number
  state: number
  created_at: string
}
