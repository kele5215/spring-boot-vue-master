const express = require('express')

//创建express 实例
const app = express()

//使用 express.Router 类来创建可安装的模块化路由处理程序
const router = express.Router();

// 基本路由： app.METHOD(PATH， HANDLER)
app.get('/',function (req,res) {
    res.send('Hello world!')
})

//方法1：
// router.use("/second",require('./mockApi'));
// app.use("/api",router)

//装入mockApi路由器模块
app.use('/api',require('./mockApi'))

//应用程序会启动服务器，并在端口 3001 上侦听连接
app.listen(3001,function (){
    console.log('Example app listening on port 3001!')
})
