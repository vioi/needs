module.exports  = {
    title: {
        text: '需求&BUG',
        // subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['需求', 'BUG']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['王忍忠', '刘翔', '陈文庆', '唐静', '李毅', '袁彤彤', '樊澡','总量']
    },
    series: [
        {
            name: '需求',
            type: 'bar',
            data: [5, 3, 5, 5, 3,4,2, 33]
        },
        {
            name: 'BUG',
            type: 'bar',
            data: [5, 3, 3, 4, 2,4,2, 15]
        }
    ]
};
