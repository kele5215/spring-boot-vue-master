module.exports = {
  devServer: {
    port: 8888,
    host: "localhost",
    https: false, //是否开启https
    open: false, //配置自动启动浏览器

    proxy: {
      //"/dev-api": {
      [process.env.VUE_APP_BASE_API]: {
        // 目标服务器, 代理访问到 http://localhost:3000
        //target: "http://localhost:3000",
        target: process.env.VUE_APP_SERVICE_URL,

        // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，
        // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        changeOrigin: true, //开启代理

        // 如果你不想始终传递 /api ，则需要重写路径
        // 会将 /dev-api 替换为 '',也就是 /dev-api 会移除
        // 这时请求 /api/users 会被代理到请求 http://localhost:3000/users
        pathRewrite: {
          // "^/dev-api": ""
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },

  lintOnSave: true, //是否开启Eslint（保存时检查）
  productionSourceMap: false //生产环境是否生成 sourceMap 文件 设为false加快打包速度
};
