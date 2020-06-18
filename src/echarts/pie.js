module.exports= {
    // tooltip: {
    //     trigger: 'item',
    //     formatter: '{a} <br/>{b}: {c} ({d}%)'
    // },
    legend: {
        left: 10,
        data: ['监控', '访问控制', '对象', '地址转换', '网络管理', '高可用性', '虚拟系统', '系统设置', '管理服务', '其他']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 60, name: '需求', selected: true},
                {value: 32, name: 'Bug'},
                {value: 20, name: '任务'}


            ]
        },
        {
            name: '访问来源a',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
                {value: 20, name: '监控'},
                {value: 30, name: '访问控制'},
                {value: 10, name: '对象'},

                {value: 5, name: '地址转换'},
                {value: 15, name: '网络管理'},
                {value: 12, name: '高可用性'},

                {value: 12, name: '虚拟系统'},
                {value: 12, name: '系统设置'},
                {value: 8, name: '管理服务'},
                {value: 8, name: '其他'}

            ]
        }
    ]
};