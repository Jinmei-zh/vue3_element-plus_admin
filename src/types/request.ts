// api返回格式
export type IResponseData<T> = {
  code: number
  message: string
  data: T
  meta: { total: number; per_page: number; pag: number; current_page: number }
}

export type PIResponseData<T> = Promise<IResponseData<T>>
