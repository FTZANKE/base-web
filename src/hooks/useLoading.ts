import { ElLoading } from 'element-plus'
import type { LoadingOptions } from 'element-plus'
import { getType } from '@/utils'
import config from '@/assets/icons/config.svg?raw'

export default function useLoading(options: LoadingOptions | false = {}) {
  const defaultOptions: LoadingOptions = {
    lock: true,
    spinner: config,
    ...(getType(options) === 'Object' ? options : {}),
  }
  options ? ElLoading.service(defaultOptions) : ElLoading.service().close()
}
