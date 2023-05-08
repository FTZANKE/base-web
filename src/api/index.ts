import Request from '@/hooks/useRequest'

export function getContractOrderPageInfo(data: object) {
  return Request({
    baseURL: '/api',
    url: '/public/auth/login',
    method: 'post',
    data,
  })
}
