// src/utils/request.ts
import axios from "axios"
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { ElMessage } from "element-plus"
import { getToken, removeToken } from "@/utils/auth"

//创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 8000,
})

//请求拦截
service.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> => {
  if (getToken()) {
    config.headers["Authorization"] = "Bearer " + getToken()
  }

  if (config.headers["Content-Type"] == "application/x-www-form-urlencoded") {
    config.data = JSON.stringify(config.data)
  }
  return config
})

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, status, statusText, config } = response
    if (status !== 200 || data.code !== 200) {
      if (data.code === 401) {
        // 未登陆
        ElMessage.error("未登陆")
        removeToken()
        location.reload()
      }
      ElMessage.error(data.message)
      return Promise.reject(data.message)
    }
    // 直接返回后端data的数据，后端数据格式{code:200, message:"", data: []}
    return data
  },
  (error: any) => {
    ElMessage.error("网络异常，请稍候再试")
    // 在响应错误的时候的逻辑处理
    return Promise.reject(error)
  }
)
export default service
