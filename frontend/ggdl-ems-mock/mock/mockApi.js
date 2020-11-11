const express = require('express')
const Mock =  require('mockjs')
const router = express.Router()

// 请求 api/showWeather接口
router.get('/showWeather',function (req,res) {
    //调用mock方法，模拟数据
    let data = Mock.mock({
        "status":200,
        "content":{
            "date": '@date',
            "city":'@city',
            "weather":'sunny'
        },
        "message": '请求成功啦'
    })
    return res.json(data)
})

// 请求api/userInfo接口
router.route('/userInfo')
    .get(function (req, res) {
        //调用mock方法，模拟数据
        let data = Mock.mock({
            "status":200,
            "content":{
                "name": "@cname",
                "age": "@integer(0,35)",
                "from": "@city"
            },
            "message":"请求成功啦"
        })
        return res.json(data);
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

module.exports = router