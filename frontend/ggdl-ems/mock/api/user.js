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

// https://blog.csdn.net/xw505501936/article/details/88396183
// 获取用户列表数据
router.get("/", function(req, res) {
  let pageSize = 5;
  let current = 1;

  // req.headers.pageSize 此处必须为小写 原因没有找到
  if (req.headers.pagesize != null) {
    pageSize = req.headers && req.headers.pagesize;
  }

  if (req.headers.pagesize != null) {
    current = req.headers && req.headers.current;
  }

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
  let userDataById = {
    data: {}
  };

  userInfo.data.map(item => {
    console.log(item.id);
    if (item.id === id) {
      userDataById.data = item;
    }
  });

  res.status(200).send(JSON.stringify(userDataById, null, 2));
});

// 新增一条数据post
router.post("/", function(req, res) {
  let user = req.body;
  user.id = Mock.mock("@id");
  userInfo.data.push(user);

  res.status(200).json(user);
});

// 修改一条数据put
router.put("/:id", function(req, res) {
  let id = req.params.id;
  let selIndex = 0;

  userInfo.data.map((item, index) => {
    if (item.id === id) {
      selIndex = index;
      userInfo.data[index].description = "通过put方式 修改了name属性";
    }
  });

  res.status(200).send(JSON.stringify(userInfo.data[selIndex], null, 2));
});

// 删除一条数据del
router.delete("/:id", function(req, res) {
  let id = req.params.id;

  console.log("userInfo 删除前的长度为：%d", userInfo.data.length);

  userInfo.data.map((item, index) => {
    if (item.id === id) {
      userInfo.data.splice(index, 1);
    }
  });

  console.log("userInfo 删除后的长度为：%d", userInfo.data.length);

  res.status(200).json({ id: id });
});

module.exports = router;
