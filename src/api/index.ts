import Request from '@/hooks/useRequest'

export function getContractOrderPageInfo(data: object) {
  return Request({
    url: '/notary/public/contract/order/getContractOrderPageInfo',
    method: 'post',
    data,
  })
}
