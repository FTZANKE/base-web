import axios, { CancelTokenStatic, AxiosRequestConfig, AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { useGlobalStore } from '@/stores'
import { hasOwn, hasOwnDefault } from '@/utils'
import { ElMessage } from 'element-plus'
/**
 * @description: 请求配置
 * @param {extendHeaders} {[key: string]: string} 扩展请求头用于不满足默认的 Content-Type、token 请求头的情况
 * @param {ignoreLoading} boolean 是否忽略 loading 默认 false
 * @param {ignoreToken} boolean 是否忽略 token 默认 false
 * @param {ignoreCR} boolean 是否取消请求 默认 false
 * @param {ignoreCRMsg} string 取消请求的提示信息 默认 Request canceled
 * @param {contentType} $ContentType 重新定义 Content-Type 默认 json
 * @param {baseURL} $baseURL baseURL 默认 horizon
 * @param {timeout} number 超时时间 默认 10000
 * @return {_AxiosRequestConfig}
 **/
interface _AxiosRequestConfig extends AxiosRequestConfig {
  extendHeaders?: { [key: string]: string }
  ignoreLoading?: boolean
  ignoreToken?: boolean
  ignoreCR?: boolean
  ignoreCRMsg?: string
}
const $ContentType = {
  json: 'application/json',
  form: 'application/x-www-form-urlencoded',
  file: 'multipart/form-data',
}
const Request = axios.create() as AxiosInstance
const CancelToken = axios.CancelToken as CancelTokenStatic
const source = CancelToken.source() as { cancel: (arg0: string) => void; token: any }
const globalStore = useGlobalStore()
Request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log(config)
    config.headers['Content-Type'] = $ContentType[hasOwnDefault(config, 'contentType', 'json')]
    config.baseURL = hasOwnDefault(config, 'baseURL', '/api')
    if (hasOwnDefault(config, 'ignoreToken', true)) config.headers.token = globalStore.token
    if (hasOwn(config, 'extendHeaders')) config.headers = { ...config.headers, ...hasOwnDefault(config, 'extendHeaders', {}) }
    if (!hasOwnDefault(config, 'ignoreLoading', true)) globalStore.setGlobalState('loading', true)
    config.timeout = hasOwnDefault(config, 'timeout', 10000)
    config.cancelToken = source.token
    config.withCredentials = true
    if (hasOwnDefault(config, 'ignoreCR', false)) source.cancel(hasOwnDefault(config, 'ignoreCRMsg', 'Request canceled'))
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
Request.interceptors.response.use(
  (response: AxiosResponse) => {
    globalStore.setGlobalState('loading', false)
    const { data, status } = response
    let obj = { ...data }
    if (!hasOwn(data, 'status')) obj.status = status
    return obj
  },
  (error: AxiosError) => {
    globalStore.setGlobalState('loading', false)
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
export default (config?: _AxiosRequestConfig) => Request(config)
