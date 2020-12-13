import http from './http'

const BASE_URL = ''

export function loginApi(data) {
  const url = BASE_URL + '/login'
  return http.get(url, data, false)
}
