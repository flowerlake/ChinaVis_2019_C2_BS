$(function () {
    // var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var whdef = 100 / 916;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    // var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    //加载统计图1
    // loadoOption1();
    // 加载道路图
    let test_y_data = [20.31400559011, 25.126829441643057, 20.076819939212747, 21.470302300345594, 18.183322890232805, 16.34524706393823, 24.084282232020943, 20.107658443208706, 15.02477456006072, 13.502983868637735, 11.317911964888957, 11.418635566588973, 15.398736106492892, 14.534980610405931, 13.884912239532847, 12.13153853116734, 13.652157402154419, 10.897322201852761, 11.255833969458804, 12.349996820869858, 13.422731281744502, 15.457074930719111, 19.027325939100535, 21.655438934064698];
    loadoOption2(test_y_data);

});

//加载统计图1数据
function loadoOption1() {
    percent_Chart.clear();

    //借用map和apply函数实现数组的初始化，参考链接：https://www.jianshu.com/p/ff5cbc2c69be
    let line_smooth_x_data = Array.apply(null, Array(24)).map((_, h) => h);
    let line_smooth_y_data = [0.19, 0.21, 0.16, 0.16, 0.10, 0.07, 0.09, 0.21, 0.28, 0.26, 0.32, 0.29, 0.32, 0.32, 0.32, 0.34, 0.28, 0.25, 0.32, 0.31, 0.34, 0.31, 0.29, 0.26]

    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        // title: {
        //     left: 'center',
        //     text: '拥堵路段占比',
        //     textStyle: {
        //         color: "#fff",
        //     }
        // },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: line_smooth_x_data,
            name: "小时/h",
            nameTextStyle: {
                color: "#fff"
            },
            axisLabel: {
                color: "#fff",
            }
        },
        yAxis: {
            type: 'value',
            // boundaryGap配置该轴的最小值和最大值的最大留空。10%即表示超过最大值10%的高度
            boundaryGap: [0, '10%'],
            name: "道路拥堵占比/%",
            nameTextStyle: {
                color: "#fff"
            },
            axisLabel: {
                color: "#fff",
            }

        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100,
            show: true,
        }, {
            start: 0,
            end: 24,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '50%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '拥堵道路占比',
                type: 'bar',
                // smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                data: line_smooth_y_data
            }
        ]
    };
    percent_Chart.setOption(option);

}

function loadoOption2(y_speed) {
    line_hour_Chart.clear();

    //借用map和apply函数实现数组的初始化，参考链接：https://www.jianshu.com/p/ff5cbc2c69be
    let line_smooth_x_data = Array.apply(null, Array(24)).map((_, h) => h);

    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        // title: {
        //     left: 'center',
        //     text: '拥堵路段占比',
        //     textStyle: {
        //         color: "#fff",
        //     }
        // },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: line_smooth_x_data,
            name: "时间点/h",
            nameTextStyle: {
                color: "#fff"
            },
            axisLabel: {
                color: "#fff",
            }
        },
        yAxis: {
            type: 'value',
            // boundaryGap配置该轴的最小值和最大值的最大留空。10%即表示超过最大值10%的高度
            boundaryGap: [0, '10%'],
            name: "速度(km/h)",
            nameTextStyle: {
                color: "#fff"
            },
            axisLabel: {
                color: "#fff",
            }

        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 50,
            show: false,
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '50%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: '拥堵道路占比',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                data: y_speed
            }
        ]
    };
    line_hour_Chart.setOption(option);
}

// 这里用来画多折线
function loadoOption3() {

}


function myFunction() {

    console.log("sdfsafasfd");
    //动态改变标题名称
    document.getElementById
    ('easyDialogTitle').innerHTML = '<a href="javascript:void(0)" title="关闭窗口" class="close_btn" id="closeBtn"><img src="../easydialog-v2.0/close.png" alt=""></a>' + "柱状图"

    easyDialog.open({

        container: 'dialog',
        fixed: false,
        overlay: true

    });

}







