// @代表的是 /src
import request from '@/utils/request'

// const BASE_URL = "http://localhost:8080/";
const BASE_URL = ''

// 测试1
request
  // .get(BASE_URL + "/db.json")
  .get(BASE_URL + '/users')
  .then(response => {
    const data = response.data
    console.log('get1', data)
  })
  .catch(error => {
    console.log(error.message())
  })

// 测试2 使用对象形式传入请求数据
request({
  // `url` 是用于请求的服务器 URL
  // url: BASE_URL + "/db.json",
  url: BASE_URL + '/users',

  // `method` 是创建请求时使用的方法
  method: 'get'
})
  .then(response => {
    const data = response.data
    console.log('get2', data)
  })
  .catch(error => {
    console.log(error.message)
  })

// 测试3 导出默认对象
export default {
  getDataList() {
    return request({
      //url: BASE_URL + "/db.json",
      url: BASE_URL + '/users',
      method: 'get'
    })
  }
}
