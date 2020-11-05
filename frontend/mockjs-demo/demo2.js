/*
数据占位符定义规范 DPD
    Type	Method
    Basic	boolean, natural, integer, float, character, string, range, date, time, datetime, now
    Image	image, dataImage
    Color	color
    Text	paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
    Name	first, last, name, cfirst, clast, cname
    Web	url, domain, email, ip, tld
    Address	area, region
    Helper	capitalize, upper, lower, pick, shuffle
    Miscellaneous	guid, id
 */
const Mock = require('mockjs')

// 拓展mockjs
Mock.Random.extend({
    phone: function (){
        const phonePrefix = ['132','138','139']
        return this.pick(phonePrefix) + Mock.mock(/\d{8}/)
    }
})

const data = Mock.mock({
    'mepList|4':[{
        'id|+1':1,
        'name':'@cname', // 中文名称
        'phone':'@phone', // 自己写 随机手机号码
        'age': '@integer(1,35)', // Number 随机生成1-35
        'price': '@float',
        'birthday':'@date',
        'entryDate': '@date("yyyy/MM/dd")',
        'createDate':'@datetime',
        'updateDate':'@datetime("yyyy/MM/dd HH:mm:ss")',
        'picture':'@image',
        'title': '`@ctitle(3,6)',
        'content': '@csentence(8,12)',
        'firstNm':'@first',
        'lastNm': '@last',
        'url': '@url',
        'domain': '@domain',
        'ip': '@ip',
        'email':'@email',
        'area':'@region',
        'address':'@county(true)',
        'zipCode':'@zip',
        'salary|6000-15000.1-3':0,
        'status|1':'@boolean',
        'open|2-4':true,
        'object1|2':{id:1,name:'对象1',price:1000},
        'object2|2-3':{id:1,name:'对象1',price:1000},
        'idCard':/\d{15}|\d{18}/

    }]
})

console.log(JSON.stringify(data,null,2))