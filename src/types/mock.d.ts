export interface responseType<T> {
  code: number;
  msg: string;
  data: T;
}
