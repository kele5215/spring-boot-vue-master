module.export = {
  devServer: {
    port: 8888, // 端口号
    host: "localhost",
    https: false, //是否开启https
    open: true //配置自动启动浏览器
  },

  lintOnSave: true, //是否开启Eslint（保存时检查）
  productionSourceMap: false //生产环境是否生成 sourceMap 文件 设为false加快打包速度
};
