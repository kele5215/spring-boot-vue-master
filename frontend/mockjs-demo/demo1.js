/*
属性名 和 生成规则 之间用竖线 | 分隔。
生成规则 是可选的。
生成规则 有 7 种格式：
'name|min-max': value
'name|count': value
'name|min-max.dmin-dmax': value
'name|min-max.dcount': value
'name|count.dmin-dmax': value
'name|count.dcount': value
'name|+step': value
 */
const Mock = require('mockjs')

const data = Mock.mock({
    'memberList|4':[{
        // Number 自增1
        'id|+1':1,

        //String 随机生成1到3个 柠檬
        'name|1-3':'柠檬',

        //生成11个8
        'phone|11':'8',

        // Number 随机生成1-35
        'age|1-35': 1,

        // 生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位
        'salary|6000-15000.1-3':0,

        // 'name|1': boolean 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2
        'status|1':true,

        // 'name|min-max': value 随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
        'open|2-4':true,

        // 'name|count': object 从属性值 object 中随机选取 count 个属性
        'object1|2':{id:1,name:'对象1',price:1000},

        // 'name|min-max': object 从属性值 object 中随机选取 min 到 max 个属性。
        'object2|2-3':{id:1,name:'对象1',price:1000},

        // 'name': regexp 根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
        'idCard':/\d{15}|\d{18}/

    }]
})

console.log(JSON.stringify(data,null,2))