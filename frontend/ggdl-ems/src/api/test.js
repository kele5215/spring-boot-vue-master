// @代表的是 /src
import request from '@/utils/request'

// const BASE_URL = "http://localhost:8080/";
const BASE_URL = ''
<<<<<<< HEAD
=======

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    console.log('请求 then 处理前拦截它们', config)
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log('响应 then 处理前拦截它们', response)
    return response
  },
  error => {
    // 对响应错误做点什么
    return error
  }
)
>>>>>>> e42342a1ba64ef0de4cc7b53b9dcf1d31c79e37a

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
