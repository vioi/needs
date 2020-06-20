
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
        state:"NEW",
        des:"(小系统)添加静态路由时判断参数的可选或必选有误",
        date: '2020/6/33',
      }],
      ['1',{
        key: '1',
        sn: '3202',
        product:'NGTOSV2.6',
        module:'用户管理',
        receiver: ['酷狗'],
        state:"NEW",
        des:"(webui)用户及用户组导入导出异常",
        date: '2020/6/33',
      }],
      ['2',{
        key: '2',
        sn: '3202',
        product:'NGTOSV2.6',
        module:'虚系统',
        receiver: ['酷狗'],
        state:"FIXED",
        des:"(webui)虚系统终端显示超时功能异常",
        date: '2020/6/33',
      }],
      ['3',{
        key: '3',
        sn: '3203',
        product:'NGTOSV2.6',
        module:'地址转换',
        receiver: ['酷狗'],
        state:"REOP",
        des:"(webui)地址转换中对象名称后面是否显示对象类型不一致",
        date: '2020/6/33',
      }],
      ['4',{
        key: '4',
        sn: '3204',
        product:'NGTOSV2.6',
        module:'地址转换]',
        receiver: ['酷狗'],
        state:"FIEXD",
        des:"(webui)地址池分配地址后，客户端释放地址，添加地址绑定分配地址，客户端获取的仍是地址池分配的地址",
        date: '2020/6/33',
      }],
      ['5',{
        key: '5',
        sn: '3204',
        product:'NGTOSV2.6',
        module:'地址转换]',
        receiver: ['酷狗'],
        state:"FIEXD",
        des:"(webui)地址池分配地址后，客户端释放地址，添加地址绑定分配地址，客户端获取的仍是地址池分配的地址",
        date: '2020/6/33',
      }],
      ['6',{
        key: '6',
        sn: '3204',
        product:'NGTOSV2.6',
        module:'地址转换]',
        receiver: ['酷狗'],
        state:"FIEXD",
        des:"(webui)地址池分配地址后，客户端释放地址，添加地址绑定分配地址，客户端获取的仍是地址池分配的地址",
        date: '2020/6/33',
      }],
      ['7',{
        key: '7',
        sn: '3204',
        product:'NGTOSV2.6',
        module:'地址转换]',
        receiver: ['酷狗'],
        state:"FIEXD",
        des:"(webui)地址池分配地址后，客户端释放地址，添加地址绑定分配地址，客户端获取的仍是地址池分配的地址",
        date: '2020/6/33',
      }],
      ['8',{
        key: '8',
        sn: '3204',
        product:'NGTOSV2.6',
        module:'地址转换]',
        receiver: ['酷狗'],
        state:"FIEXD",
        des:"(webui)地址池分配地址后，客户端释放地址，添加地址绑定分配地址，客户端获取的仍是地址池分配的地址",
        date: '2020/6/33',
      }],
      ['9',{
        key: '9',
        sn: '3204',
        product:'NGTOSV2.6',
        module:'地址转换]',
        receiver: ['酷狗'],
        state:"FIEXD",
        des:"(webui)地址池分配地址后，客户端释放地址，添加地址绑定分配地址，客户端获取的仍是地址池分配的地址",
        date: '2020/6/33',
      }],
      
])

const reportsMap = new Map([
  ['0',{
      key: '0',
      module:'日志查看',
      func: '编辑回显',
      picture:['/assets/reports/r7.png','/assets/reports/r8.png'],
      verifier:"王忍忠",
      des:"isInitShow属性无效，不能隐藏关键日志tab页",
      way: '已添加，taba也隐藏属性',
      other: ''
    }],
    ['1',{
      key: '1',
      module:'子接口',
      func: '编辑显示',
      picture:['/assets/reports/r9.png','/assets/reports/r10.png'],
      verifier:"袁桐桐",
      des:"1.如果IPV4有任意一条数据，则ipv6点击删除，删除不掉2.任意点开一个添加不填写数据，点击确定依旧下发",
      way: '详见《ISP路由WEBUI界面底层调用接口说明》文档，使用周二的版本包测试',
      other: ''
    }],
    ['2',{
      key: '2',
      module:'Isatap 6to4',
      func: '功能测试',
      picture:['/assets/reports/r1.png','/assets/reports/r2.png'],
      verifier:"王忍忠",
      des:"NGDropDown.setValues方法赋值下拉所有数据，如果已经赋值了下拉数据，再重新赋值，如果重新赋值的数据是空的（数据参数为空数组），则不会清空之前的下拉所有数据",
      way: '使用NGDropDown.setValues("控件id",[{"id":"empty","text":""}])',
      other: '本地地址选择数据后，再切换隧道出接口的数据后，本地地址的文本框数据仍然存在 ，不会清空',
    }],
    ['3',{
      key: '3',
      module:'Gre',
      func: '编辑',
      picture:['/assets/reports/r4.png'],
      verifier:"刘翔",
      des:"如图描述",
      way: '编辑的时候出接口不能修改，所以本地地址只能选这个出接口上的',
      other: '',
    }],
    ['4',{
      key: '4',
      module:'DHCP',
      func: '编辑',
      picture:['/assets/reports/r6.png'],
      verifier:"陈文庆",
      des:"一级页NGListPage下的form表单内的穿梭框回显存在问题，不能正常回显",
      way: '不是穿梭框的回显问题，是没有将选择的值下发下去',
      other: '',
    }],
    ['5',{
      key: '5',
      module:'ISP路由',
      func: '显示',
      picture:['/assets/reports/r5.png'],
      verifier:"唐静",
      des:"底层接口错误",
      way: '详见《ISP路由WEBUI界面底层调用接口说明》文档，使用周二的版本包测试',
      other: ''
    }]
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
    let putArray = [...needsMap.values()];
    let key = String( parseInt(putArray[putArray.length-1]['key'])+1);
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
        const target = bugsMap.get(bodyObj.id);
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

const reports = Mock.mock(/http:\/\/localhost:3000\/reports\/*\w*/,(data)=>{
  if(data.body!=''){
      const bodyObj = JSON.parse(data.body);
      const target = reportsMap.get(bodyObj.id);
      return {
          "result":true,
          "data":{
            report:target
          }
      }
  }
  return {  
      //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
        "result":true,
        "data":{
          reports:[...reportsMap.values()]
        }
    }
})

const reportAdd = Mock.mock("http://localhost:3000/reportAdd",(data)=>{
    let formdata = data.body;
    let putArray = [...reportsMap.values()];
    let key = String( parseInt(putArray[putArray.length-1]['key'])+1);
    let id = formdata.get('id');
    let picture = [];
    if(formdata.get('picture')){
      picture = formdata.get('picture').split(',')
    }
    let item = {
      module: formdata.get('module'),
      func: formdata.get('func'),
      des:formdata.get('des'),
      picture:picture,
      verifier:formdata.get('verifier'),
      way: formdata.get('way'),
      other: formdata.get('other'),
    }
    if(id!='add'){
      const orgItem = reportsMap.get(id);
      for(let k in item){
        if(item[k]!=''){
          orgItem[k] = item[k]
        }
      }
      key = id;
      reportsMap.set(key,orgItem)
    }else{
      item.key = key;
      reportsMap.set(key,item)
    }
    return {
        "result":true,
        "data":'success'
    }
})

// 输出结果
// export {data,needs};