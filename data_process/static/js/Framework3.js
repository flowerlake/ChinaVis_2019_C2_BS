$(function () {
    // var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var whdef = 100 / 916;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    // var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    //加载统计图1---当天工作

    loadoOption_multiple();

});


//加载折线图，填充类型
function loadoOption_multiple() {
    myChart1.clear();

    // 每小时共1200个时间点，横坐标为1200个点，然后再根据每个时间点统计次数嘛？

    var app = {};
    option = null;


    var grids = [];
    var xAxes = [];
    var yAxes = [];
    var series = [];
    var titles = [];
//var count = 0;

    $.get('../static/data/seconds_number_1.json', function (result) {

        for (var count = 0; count < 24; count++) {
            var data = [];
            for (var n = 0; n < result.length; n++) {
                if (result[n][0] === count) {
                    data.push([result[n][1], result[n][2]]);
                }
            }
            //		console.log(data);
            grids.push({
                show: true,
                borderWidth: 0,
                // backgroundColor: '#0078A8',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 2
            });
            xAxes.push({
                type: 'category',
                show: false,
//			min: 0,
//			max: 1,
                gridIndex: count
            });
            yAxes.push({
                type: 'value',
                show: false,
//			min: -0.4,
//			max: 1.4,
                gridIndex: count
            });
            series.push({
                name: count,
                type: 'line',
                smooth: true,
                xAxisIndex: count,
                yAxisIndex: count,
                data: data,
                showSymbol: false,
                animationEasing: count,
                animationDuration: 1000
            });
            titles.push({
                textAlign: 'center',
                text: count,
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal'
                }
            });
        }

        var rowNumber = Math.ceil(Math.sqrt(count));
        echarts.util.each(grids, function (grid, idx) {
            grid.left = ((idx % rowNumber) / rowNumber * 100 + 0.5) + '%';
            grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + '%';
            grid.width = (1 / rowNumber * 100 - 1) + '%';
            grid.height = (1 / rowNumber * 100 - 1) + '%';

            titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
            titles[idx].top = parseFloat(grid.top) + '%';
        });

        option = {
            title: titles.concat([{
//			text: 'Different Easing Functions',
                top: 'bottom',
                left: 'center'
            }]),
            grid: grids,
            xAxis: xAxes,
            yAxis: yAxes,
            series: series
        };
        if (option && typeof option === "object") {
            myChart1.setOption(option, true);
        }

    });


}




