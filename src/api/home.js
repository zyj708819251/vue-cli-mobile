import service from '@utils/request'

export function getList (params) {
  return service({
    url: 'tailingStore/findWkkSatelliteImage',
    method: 'get',
    params
  })
}

export function login (data) {
  return service({
    url: 'app/login',
    method: 'post',
    data
  })
}
