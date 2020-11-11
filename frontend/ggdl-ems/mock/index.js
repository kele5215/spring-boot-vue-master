// 引入express
let express = require("express");

// 实例化express
let app = express();

// 作用是对post请求的请求体进行解析
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 自定义路径 前缀： '/api'
let config = {
  port: 3000
};
// /api为前缀，寻找api目录下的所有接口
// app.use("/api", Mock(path.join(__dirname, "api")));

// 获取port参数 可通过 --port自 定义启动端口
let args = process.argv;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--port" && i < args.length - 1 && args[i + 1] > 0) {
    config.port = args[i + 1];
    break;
  }
}

//user数据
let userRoutes = require("./api/user");
app.use("/users", userRoutes);

// 允许跨域
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  // 此处根据前端请求携带的请求头进行配置
  res.header("Access-Control-Allow-Headers", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  // 例如： 我们公司的请求头需要携带Authorization和Client-Type，此处就应该按照以下进行配置
  // res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Client-Type");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 监听端口 3000
app.listen("3000", () => {
  console.log("监听端口 3000");
});
