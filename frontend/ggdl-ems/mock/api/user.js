const Mock = require("mockjs");
const express = require("express");
const router = express.Router();

// const Random = MockSelf.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档

let userInfo = Mock.mock({
  "data|50-100": [
    {
      id: "@id",
      name: "@cname",
      "age|18-100": 1,
      create_time: "@datetime",
      // avatar: function() {
      //   return Mock.Random.image()(
      //     "100x100",
      //     Mock.Random.color(),
      //     Mock.Random.string("upper", 3)
      //   );
      // },
      address: "@county(true)",
      email: "@email",
      love_color: "@color",
      description: "@csentence(20, 40)"
    }
  ]
});

// 获取用户列表数据
router.get("/", function(req, res) {
  // req.headers.pagesize 此处必须为小写 原因没有找到
  let pageSize = req.headers && req.headers.pagesize;
  let current = req.headers && req.headers.current;

  res.header("total", userInfo.data.length);
  res
    .status(200)
    .send(
      JSON.stringify(
        userInfo.data.slice((current - 1) * pageSize, current * pageSize),
        null,
        2
      )
    );
});

// 获取单个用户详情
// 可以获取到比较优雅的路由地址参数;
// eg: 127.0.0.1:3000/users/参数
router.get("/:id", function(req, res) {
  let id = req.params.id;
  let userByIdData = {
    data: {}
  };

  userInfo.data.map(item => {
    console.log(item.id);
    if (item.id == id) {
      userByIdData.data = item;
    }
  });

  res.status(200).send(JSON.stringify(userByIdData, null, 2));
});

router.post("/", function(req, res) {
  res.send("POST handler for /dogs route.");
});

module.exports = router;
