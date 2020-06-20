const data = [
    {
      key: '1',
      name: '第三方问题',
      sn: 1,
      content: '底层没有告知',
      des: '命令行，或者接口修改后，没有发邮件告知，刘金未记录的内容',
      fixer: '底层',
      other:''
    },
    {
      key: '2',
      name: '第三方问题',
      sn: 2,
      content: '需求未明确',
      des: '底层未告知有关功能。底层根据BUG向前端提出的新功能，属于这个。',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '3',
      name: '第三方问题',
      sn: 3,
      content: 'apache原因',
      des: 'apache的配置导致的',
      fixer: '底层--王洪岩',
      other:''
    }, {
      key: '4',
      name: '测试相关',
      sn: 11,
      content: '易用性',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '5',
      name: '测试相关',
      sn: 12,
      content: '新需求',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '6',
      name: '测试相关',
      sn: 13,
      content: '重复',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '7',
      name: '测试相关',
      sn: 14,
      content: '之前版本有这个问题，现在没有，并且无需修改代码',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '8',
      name: '测试相关',
      sn: 15,
      content: '无效',
      des: '',
      fixer: '置为invalid的BUG',
      other:''
    }, {
      key: '9',
      name: '自身问题',
      sn: 21,
      content: '多次点击后报错',
      des: '多次点击确定按钮，多次点击菜单后报错',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '10',
      name: '自身问题',
      sn: 22,
      content: '没有思考其可能性',
      des: '需求文档、自测列表、常识文档中都没有描述的内容单一一个浏览器某个版本才出现的错误组件没有该方法',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '11',
      name: '自身问题',
      sn: 23,
      content: '代码没提交或者被覆盖',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '12',
      name: '自身问题',
      sn: 24,
      content: 'PHP问题',
      des: '',
      fixer: '刘喜',
      other:''
    }, {
      key: '13',
      name: '自身问题',
      sn: 25,
      content: '没有思考公共页面对其他模块的影响',
      des: '',
      fixer: '公共页面模块负责人fix',
      other:''
    }, {
      key: '14',
      name: '自身问题',
      sn: 26,
      content: '测试环境与自测环境不同',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '15',
      name: '自身问题',
      sn: 27,
      content: '网络特慢的情况下出现错误',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '16',
      name: '自身问题(简单BUG)',
      sn: 28,
      content: '没测（严重）',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '17',
      name: '自身问题(简单BUG)',
      sn: 29,
      content: '输入限制与需求文档不符',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '18',
      name: '自身问题(简单BUG)',
      sn: 30,
      content: '权限限制与需求文档不符',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '19',
      name: '自身问题(简单BUG)',
      sn: 31,
      content: '浏览器版本不兼容',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '20',
      name: '自身问题(简单BUG)',
      sn: 32,
      content: '样式与规定不符',
      des: '放大缩小后，样式混乱；没有对齐都属于这个范畴。',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '21',
      name: '自身问题(简单BUG)',
      sn: 33,
      content: '功能没有实现',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '22',
      name: '自身问题(简单BUG)',
      sn: 34,
      content: '自测列表中有的项出错',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '23',
      name: '自身问题(简单BUG)',
      sn: 35,
      content: '常识文档中有的项出错',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '24',
      name: '自身问题(简单BUG)',
      sn: 36,
      content: '需求文档中有的项出错',
      des: '',
      fixer: '模块负责人fix',
      other:''
    }, {
      key: '25',
      name: '领导问题',
      sn: 40,
      content: '分工不明确',
      des: '导致无负责人的情况下出现的BUG',
      fixer: '汪峥、樊璪',
      other:''
    }, {
      key: '26',
      name: '需求相关',
      sn: 51,
      content: '需求文档未明确',
      des: '该项在需求文档里，或者刘金自己列的需求清单里，但是没有明确写出的',
      fixer: '刘金',
      other:''
    }, {
      key: '27',
      name: '需求相关',
      sn: 52,
      content: '静态页面有问题，但是底层没有指出',
      des: '',
      fixer: '底层',
      other:''
    }, {
      key: '28',
      name: '组件问题(简单BUG)',
      sn: 60,
      content: '组件已有属性，方法，事件不可用，报错',
      des: '',
      fixer: '组件负责人fix',
      other:''
    }, {
      key: '29',
      name: '组件问题(简单BUG)',
      sn: 61,
      content: '组件样式错乱：1、放大缩小后，组件样式错乱2、在指定的三个尺寸里，组件样式错乱',
      des: '',
      fixer: '组件负责人fix',
      other:''
    }, {
      key: '30',
      name: '组件问题(简单BUG)',
      sn: 52,
      content: '未添加限制导致组件出现错误：1、没有设置输入参数长度限制的上限，导致页面错误。2、组件设置为必填项后，页面错误。',
      des: '',
      fixer: '组件负责人fix',
      other:''
    }, {
      key: '31',
      name: '组件问题(简单BUG)',
      sn: 63,
      content: '表单组件无法提供提交值',
      des: '即getValue出错',
      fixer: '组件负责人fix',
      other:''
    }, {
      key: '32',
      name: '组件问题(简单BUG)',
      sn: 64,
      content: '组件回显数据出错',
      des: '即setValue出错',
      fixer: '组件负责人fix',
      other:''
    }, {
      key: '33',
      name: '组件问题(简单BUG)',
      sn: 65,
      content: '命名错误',
      des: '每个组件都必须要有组件词根，ID与类名必须都是包含这个词根',
      fixer: '组件负责人fix',
      other:''
    }
]

export default data;