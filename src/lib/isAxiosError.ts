import { AxiosError } from 'axios'

export const isAxiosError = (err: Error | AxiosError): err is AxiosError =>
  (err as AxiosError).isAxiosError
