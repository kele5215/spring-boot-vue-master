import http from './http'

//const BASE_URL = ''

export function loginApi(data) {
  //const url = BASE_URL + '/login'
  const url = '/login'
  return http.post(url, data, false)
}
