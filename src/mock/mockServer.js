
const Mock = require('mockjs')
const needsMap = new Map([
    ['0',{
        key: '0',
        module: 'pppoe重构',
        issuer: '劳拉',
        receiver: ['酷狗'],
        state:"未接收",
        date:"2020/11/33",
        tags: ['隧道', 'PPPOE'],
      }],
      ['1',{
        key: '1',
        module: '物理接口添加',
        issuer: '劳拉',
        receiver: ['热铆'],
        state:'已接收',
        date:"2020/11/33",
        tags: ['接口', '物理接口'],
      }],
      ['2',{
        key: '2',
        module: '系统设置，选项添加中英文切换选项添加中英文切换选项添加中英文切换选项添加中英文切换',
        issuer: '杰克',
        state:'进行中',
        date:"2020/11/33",
        receiver: ['迈克尔'],
        tags: ['系统设置', '英文切换'],
      }],
      ['3',{
        key: '3',
        module: '聚合',
        issuer: '杰克',
        state:"已完成",
        date:"2020/11/33",
        receiver: ['迈克尔'],
        tags: ['系统设置', '英文切换'],
      }

      ]
])
const bugsMap = new Map([
    ['0',{
        key: '0',
        sn: '9022',
        product:'NGTOSV2.6',
        module:'路由',
        receiver: ['酷狗'],
        status:"NEW",
        des:"(小系统)添加静态路由时判断参数的可选或必选有误",
        date: '2020/6/33',
      }],
      ['1',{
        key: '1',
        sn: '3202',
        product:'NGTOSV2.6',
        module:'用户管理',
        receiver: ['酷狗'],
        status:"NEW",
        des:"(webui)用户及用户组导入导出异常",
        date: '2020/6/33',
      }],
      ['2',{
        key: '2',
        sn: '3202',
        product:'NGTOSV2.6',
        module:'虚系统',
        receiver: ['酷狗'],
        status:"FIXED",
        des:"(webui)虚系统终端显示超时功能异常",
        date: '2020/6/33',
      }],
      ['3',{
        key: '3',
        sn: '3203',
        product:'NGTOSV2.6',
        module:'地址转换',
        receiver: ['酷狗'],
        status:"REOP",
        des:"(webui)地址转换中对象名称后面是否显示对象类型不一致",
        date: '2020/6/33',
      }],
      ['4',{
        key: '4',
        sn: '3204',
        product:'NGTOSV2.6',
        module:'地址转换',
        receiver: ['酷狗'],
        status:"FIEXD",
        des:"(webui)地址池分配地址后，客户端释放地址，添加地址绑定分配地址，客户端获取的仍是地址池分配的地址",
        date: '2020/6/33',
      }],
])

const data = Mock.mock("http://localhost:3000/mock",{  
  //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
    "result":true,
    "data":{
        "needs|4":[{   			//生成四个如下格式的数据
            "id|+1":1, 						//数字从1开始，后续依次加1
            "name":"@cname",			//名字为随机中文名
            "age|18-28":25, 			//年龄是18-28之间的随机数
            "sex|1":["男","女"],	 //性别是数组里的随机一项
            "job|1":["web","teacher","python","php"]   //job是数组里的随机一项
        }],
    }
})
const needs = Mock.mock(/http:\/\/localhost:3000\/needs\/*\w*/,(data)=>{
    if(data.body!=''){
        const bodyObj = JSON.parse(data.body);
        const target = needsMap.get(bodyObj.id);
        return {
            "result":true,
            "data":{
                need:target
            }
        }
    }
    return {  
        //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
          "result":true,
          "data":{
              needs:[...needsMap.values()]
          }
      }
})
const needAdd = Mock.mock("http://localhost:3000/needAdd",(data)=>{
    let formdata = data.body;
    let key = String([...needsMap.values()].length);
    let item = {
        key: key,
      module: formdata.get('module').split(','),
      issuer: 'as@topsec.com.cn',
      receiver:formdata.get('receiver').split(','),
      state:formdata.get('state'),
      date:(new Date).toLocaleDateString(),
      tags: formdata.get('tags').split(',')
    }
    needsMap.set(key,item)
    return {
        "result":true,
        "data":'success'
    }
})

const needDel = Mock.mock("http://localhost:3000/needDel",(data)=>{
    const body = JSON.parse(data.body);
    let delKey = body.key;
    needsMap.delete(delKey);
    return {
        "result":true,
        "data":'success'
    }
})

const bugs = Mock.mock(/http:\/\/localhost:3000\/bugs\/*\w*/,(data)=>{
    if(data.body!=''){
        const bodyObj = JSON.parse(data.body);
        const target = needsMap.get(bodyObj.id);
        return {
            "result":true,
            "data":{
                bug:target
            }
        }
    }
    return {  
        //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
          "result":true,
          "data":{
              bugs:[...bugsMap.values()]
          }
      }
})

// 输出结果
// export {data,needs};