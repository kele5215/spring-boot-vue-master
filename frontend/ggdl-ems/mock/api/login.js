const Mock = require('mockjs')
const express = require('express')
const router = express.Router()

// const Random = MockSelf.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档

let userInfo = [
  {
    userId: 1,
    username: 'kele5215',
    password: 'a123456'
  },
  {
    userId: 2,
    username: 'kele9999',
    password: 'a999999'
  }
]

// https://blog.csdn.net/xw505501936/article/details/88396183
// 获取用户列表数据
router.get('/', function(req, res) {
  let id = req.params.username
  let password = req.params.password

  let userDataByNm = {
    data: {}
  }

  userInfo.data.map(item => {
    console.log(item.username)
    if (item.username === username && item.password === password) {
      userDataByNm.data = item
    }
  })

  res.status(200).send(JSON.stringify(userDataByNm, null, 2))
})

module.exports = router
