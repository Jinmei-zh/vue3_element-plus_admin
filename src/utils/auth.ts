const tokenKey = "user-token"

export const getToken = () => {
  return localStorage.getItem(tokenKey)
}

export const setToken = (data: any) => {
  return localStorage.setItem(tokenKey, JSON.stringify(data))
}

export const removeToken = () => {
  localStorage.removeItem(tokenKey)
}
