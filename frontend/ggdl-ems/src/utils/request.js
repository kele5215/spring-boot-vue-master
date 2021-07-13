<<<<<<< HEAD
/****   request.js   ****/
=======
import axios from 'axios'

// axios
//   .get("db.json")
//   .then(response => {
//     const data = response.data;
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error.message());
//   });
>>>>>>> e42342a1ba64ef0de4cc7b53b9dcf1d31c79e37a

// blog.csdn.net/weixin_43216105/article/details/98877960
// 导入axios
import axios from 'axios'
import { Promise } from 'core-js'

// 使用element-ui Message做消息提醒
import { Message } from 'element-ui'

//1. 创建新的axios实例
// 手动创建一个 axios 对象,
// 参考: https://github.com/axios/axios#creating-an-instance
const request = axios.create({
  // 请求配置参考: https://github.com/axios/axios#request-config
  // 根据不同环境设置 baseURL, 最终发送请求时的URL为: baseURL + 发送请求时写URL ,
  // 比如 get('/test'), 最终发送请求是: /dev-api/test
  // baseURL: '/dev-api',
  // baseURL: '/',
  // 根目录下的 .env.development 与 .env.production 中配置 VUE_APP_BASE_API
  baseURL: process.env.VUE_APP_BASE_API, // "/dev-api"
<<<<<<< HEAD
  timeout: 3 * 1000 // 请求超时
})

// 2.请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    console.log('请求 then 处理前拦截它们', config)

    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.data = JSON.stringify(config.data) //数据转化,也可以使用qs转换
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded' //配置请求头
    }
    //注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    // const token = getCookie('名称') //这里取token之前，你肯定需要先拿到token,存一下
    // if (token) {
    //   config.params = { token: token } //如果要求携带在参数中
    //   config.headers.token = token //如果要求携带在请求头中
    // }
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error)
  }
)

// 3.响应拦截器
request.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log('响应 then 处理前拦截它们', response)

    //接收到响应数据并成功后的一些共有的处理，关闭loading等

    return response
  },
  error => {
    // 对响应错误做点什么
    console.log(error)

    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          window.location.href = '/NotFound'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        Message.error('服务器响应超时，请刷新当前页')
      }
      error.message('连接服务器失败')
    }

    Message.error(error.message)

    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.message)
  }
)

// 4.导出文件
=======
  timeout: 5000 // 请求超时
})

>>>>>>> e42342a1ba64ef0de4cc7b53b9dcf1d31c79e37a
export default request
