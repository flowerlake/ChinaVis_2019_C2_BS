var dom = document.getElementById("calender");

var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '笛卡尔坐标系上的热力图';

var hours = ['1', '2', '3', '4', '5', '6', '7',
        '8', '9', '10','11','12',
        '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23', '24'];
var days = ['科学大道', '瑞达路', '雪松路','国王大道'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0]];
data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        y: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}