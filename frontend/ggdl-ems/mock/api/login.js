const Mock = require('mockjs')
const express = require('express')
const router = express.Router()

// const Random = MockSelf.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档

let userInfo = {
  error_code: 0,
  data: [
    {
      id: '1',
      userTitle: '管理员',
      username: 'admin',
      password: '123456',
      token: '123133123'
    },
    {
      id: '2',
      userTitle: '用户',
      username: 'root',
      password: 'root',
      token: '65454634'
    }
  ]
}

// https://blog.csdn.net/xw505501936/article/details/88396183
// 获取用户列表数据
router.get('/', function(req, res) {
  console.log('get请求参数对象 :', JSON.stringify(req.config))

  let username = req.query.username
  let password = req.query.password

  console.log('params.username:' + username)
  console.log('params.password:' + password)
  //
  // let userDataByNm = {
  //   data: {}
  // }
  //
  // userInfo.map(item => {
  //   if (item.username === username && item.password === password) {
  //     console.log(item.username)
  //     console.log(item.password)
  //     userDataByNm.data = item
  //   }
  // })

  //res.status(200).send(JSON.stringify(userDataByNm, null, 2))
  res.status(200).send(req.url)
})

// 新增一条数据post
router.post('/', function(req, res) {
  let username = req.params.username
  let password = req.params.password

  console.log('post.params.username:' + username)
  console.log('post.params.password:' + password)

  let userDataByNm = {
    data: {}
  }

  userInfo.map(item => {
    if (item.username === username && item.password === password) {
      console.log(item.username)
      console.log(item.password)
      userDataByNm.data = item

      res.status(200).send(JSON.stringify(userDataByNm, null, 2))
    } else {
      res.send({ message: '認証エラー' })
    }
  })
})

module.exports = router
