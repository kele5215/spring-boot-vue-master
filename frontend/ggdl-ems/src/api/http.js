/****  封装请求——http.js   ****/

// 导入封装好的axios实例
import request from '../utils/request'

const http = {
  /**
   * get 请求
   * @param url 接口路由
   * @param data 接口参数
   * @param auth 是否需要带登录信息
   * @returns request 对应请求对象
   */
  get(url, data, auth = false) {
    const config = {
      methods: 'get',
      url: url
    }

    // 接口参数设定
    if (data) config.params = data

    // 是否需要带登录信息判断
    if (auth) {
      config.headers = {
        Authorization: 'Your back-end user authenticates information'
      }
    }

    return request(config)
  },

  /**
   * post 请求
   *
   * @param url 接口路由
   * @param data 接口参数
   * @param auth 是否需要带登录信息
   * @returns request 对应请求对象
   */
  post(url, data, auth = false) {
    const config = {
      method: 'post',
      url: url
    }

    // 接口参数设定
    if (data) config.params = data

    // 是否需要带登录信息判断
    if (auth) {
      config.headers = {
        Authorization: 'Your back-end user authenticates information'
      }
    }

    return request(config)
  },

  /**
   * put请求
   * @param url 接口路由
   * @param data 接口参数
   * @param auth 是否需要带登录信息
   * @returns request 对应请求对象
   */
  put(url, data, auth = false) {
    const config = {
      method: 'put',
      url: url
    }

    // 接口参数设定
    if (data) config.params = data

    // 是否需要带登录信息判断
    if (auth) {
      config.headers = {
        Authorization: 'Your back-end user authenticates information'
      }
    }

    return request(config)
  },

  /**
   * 删除
   * @param url 接口路由
   * @param data 接口参数
   * @param auth 是否需要带登录信息
   * @returns request 对应请求对象
   */
  delete(url, data, auth = false) {
    const config = {
      method: 'delete',
      url: url
    }

    // 接口参数设定
    if (data) config.params = data

    // 是否需要带登录信息判断
    if (auth) {
      config.headers = {
        Authorization: 'Your back-end user authenticates information'
      }
    }

    return request(config)
  },

  /**
   * 上传文件
   * @param url 接口路由
   * @param file 接口文件
   * @param auth 是否需要带登录信息
   */
  uploader(url, file, auth = false) {
    const config = {
      method: 'post',
      url: url
    }

    // 接口参数设定
    if (file) config.file = file

    // 是否需要带登录信息判断
    if (auth) {
      config.headers = {
        Authorization: 'Your back-end user authenticates information'
      }
    }

    return request(config)
  }
}

// 导出 http
export default http
