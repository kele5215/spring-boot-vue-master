import axios from "axios";

// axios
//   .get("db.json")
//   .then(response => {
//     const data = response.data;
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error.message());
//   });

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
  timeout: 5000 // 请求超时
});

export default request;
