var map;
var infoBoxTemp = null;

$(function () {
    // var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var whdef = 100/916;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    // var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    //创建地图
    initMap();
    getBoundary();

    findInfo();
    //加载统计图1
    loadoOption1(0);
    //加载统计图2
    loadoOption2(0);
    //加载统计图3
    loadoOption3(0);
    // guimoTop5();
    //加载距离排行榜
    loadjuliTop(109.088,34.321 );
    //重新按类型加载数据
    $("#seType").change(function(){
        //加载教育
        if($(this).val()==0){
            var grade=$("#seDj");
            grade.empty();
            grade.append("<option value='' selected>请选择</option>");
            grade.append("<option value='3' >高中</option>");            //添加下拉列表
            grade.append("<option value='2'>初中</option>");
            grade.append("<option value='1'>小学</option>");
            grade.append("<option value='0' >幼儿园</option>");

            var html='<input type="radio" class="rdo" name="seXz" onclick="searchDate()" value="教育部门" > 教育部门'+
                '<input type="radio" class="rdo" name="seXz" onclick="searchDate()" value="民办">民办'+
                '<input type="radio" class="rdo" name="seXz" onclick="searchDate()"  value="地方企业"> 地方企业'+
                '<input type="radio" class="rdo" name="seXz" onclick="searchDate()" value="事业单位"> 事业单位';
            $("#slexz").html(html);
            //加载区域边框
            getBoundary();

            findInfo();
            //加载统计图1
            loadoOption1(0);
            //加载统计图2
            loadoOption2(0);
            //加载距离排行榜
            loadjuliTop(109.088,34.321 );
            //加载医疗
        }else{

            var grade=$("#seDj");
            grade.empty();
            grade.append("<option value='' selected>请选择</option>");
            grade.append("<option value='村卫生室'>村卫生室</option>");            //添加下拉列表
            grade.append("<option value='普通诊所'>普通诊所</option>");
            grade.append("<option value='中医诊所'>中医诊所</option>");
            grade.append("<option value='综合医院'>综合医院</option>");
            var html='<input type="radio" class="rdo" name="seXz" onclick="searchDate()" value="测试" > 测试';
            $("#slexz").html(html);
            map.clearOverlays();
            getBoundary();
            $("#jlTop").html("");
            //加载区域边框
            getBoundary();
            findInfo1();
            loadoOption1(1);
            loadoOption2(1);
            //加载距离排行榜
            loadjuliTop(109.088,34.321 );
        }
    });

}) ;


/**
 * 地图添加标记点
 */
function findInfo(){
    //名称
    var seName= $("#seName").val();
    //类型（教育、医疗）
    var seType= $("#seType").val();
    var tophtml="";
    //等级（教育（高中、初中、小学、幼儿园）、医疗（诊所、医院））
    var seDj= $("#seDj").val();
    //等级（正常  停业  注销）
    var seZT= $('input[name="seZT"]:checked').val();
    //性质（教育（教育部门、民办、地方企业、事业单位）、医疗（诊所、医院））
    var seXz= $('input[name="seXz"]:checked').val();

}

/**
 * 地图添加标记点
 */
function findInfo1(){
    //名称
    var seName= $("#seName").val();
    //类型（教育、医疗）
    var seType= $("#seType").val();
    var tophtml="";
    //等级（教育（高中、初中、小学、幼儿园）、医疗（诊所、医院））
    var seDj= $("#seDj").val();
    //等级（正常  停业  注销）
    var seZT= $('input[name="seZT"]:checked').val();
    //性质（教育（教育部门、民办、地方企业、事业单位）、医疗（诊所、医院））
    // var seXz= $('input[name="seXz"]:checked').val();

}



// //加载学校规模排行榜
// function guimoTop5(){
//     var tophtml="";
//     jQuery.ajax({
//         type:"post",
//         dataType:"json",
//         cache:false,
//         url:ctx+"/front/guimoTop",
//         success:function(calendar_graph){
//             //如果返回success
//             if(calendar_graph.success){
//                 //循环返回json串中models的数据
//                 jQuery.each(calendar_graph.models,function(index,value){
//                     if(index>4){
//                         return false;
//                     }else{
//                         tophtml = tophtml+'<li><b>'+(index+1)+'</b><label>'+value.mc+'</label> ' +
//                             '<span class="r unchanged"><strong>'+value.rnrs+'</strong></span><span class="r unchanged1">' +value.bxxz+'</span></li>';
//                     }
//                 })
//             }
//             $("#gmTop").html(tophtml);
//         }
//     });
// }


//加载距离排行榜
function  loadjuliTop(jd,wd){
    //名称
    var seName= $("#seName").val();
    //类型（教育、医疗）
    var seType= $("#seType").val();
    //等级（教育（高中、初中、小学、幼儿园）、医疗（诊所、医院））
    var seDj= $("#seDj").val();
    var tophtml="";

}

//查询数据
function  searchDate(){
    //清除地图所有覆盖物
    map.clearOverlays();
    getBoundary();
    findInfo();
}
//加载统计图1数据
function  loadoOption1(type){
    myChart1.clear();

    var data = [{
        value:48,
        name: '教育部门'
    },{
        value:48,
        name: '地方企业'
    }, {
        value: 10,
        name: '事业单位'
    }, {
        value: 1,
        name: '民办'
    }, {
        value: 33,
        name: '其它'
    }];
    var option = {
        title: {
            text:'1000',
            subtext: '总数',
            left:'center',
            top:'50%',
            padding:[24,0],
            textStyle:{
                color:'#fff',
                fontSize:18,
                align:'center'
            }
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            top: '2%',
            left: 'center',
            data: ['教育部门', '地方企业', '民办', '事业单位','其它'],
            textStyle:{
                fontSize: 12,
                color: '#6cbbe6'
            }
        },
        series: [{
            name: '受理数',
            type: 'pie',
            selectedMode: 'single',
            center : ['50%', '60%'],
            radius: ['40%', '58%'],
            color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'],
            label: {
                normal: {
                    position: 'outside',
                    formatter: '{b}',
                    textStyle: {
                        color: '#3db3cb',
                        fontSize: 10
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    lineStyle: {
                        color: '#3db3cb'
                    }
                }
            },
            data: data
        }]
    };
    myChart1.setOption(option);

}
//加载统计图2数据
function  loadoOption2(type){
    var title,data,data1,data2;
    data1=['2014','2015','2016','2017','2018'];
    //教育
    if(type==0){
        // title="办学数量变化趋势";
        data=['教育部门','地方企业','民办','事业单位'];
        data2=[{value:335, name:'教育部门'},{value:310, name:'地方企业'}, {value:234, name:'民办'},{value:135, name:'事业单位'}];
        //医疗
    }else{
        // title="医疗机构数量变化趋势";
        data=['综合医院','村卫生室','普通诊所','中医诊所','社区卫生服务站'];
        data2=[{value:35, name:'综合医院'},{value:10, name:'村卫生室'}, {value:23, name:'中医诊所'},{value:35, name:'社区卫生服务站'},{value:5, name:'普通诊所'}];
    }
    var option2 = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            y:'top',
            data:data,
            textStyle:{
                color: '#6cbbe6'
            }
        },

        calculable : true,
        grid:{
            x:30,
            y:30,
            x2:20,
            height:'70%'
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data :data1 ,
                axisLabel:{
                    textStyle:{
                        color: '#6cbbe6'
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel:{
                    textStyle:{
                        color: '#6cbbe6'
                    }
                }
            }
        ],
        series : [
            {
                name:'教育部门',
                type:'line',
                stack: '总数',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[20, 32, 10, 34, 90, 30, 21]
            },
            {
                name:'地方企业',
                type:'line',
                stack: '总数',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[20, 18, 19, 23, 29, 33, 31]
            },
            {
                name:'民办',
                type:'line',
                stack: '总数',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[15, 23, 20, 15, 19, 33, 41]
            },
            {
                name:'其它',
                type:'line',
                stack: '总数',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[32, 33, 31, 34, 39, 33, 32]
            }
        ]
    };
    myChart2.clear();
    myChart2.setOption(option2);
}


//加载统计图3数据
function  loadoOption3(type){
    var Name = ['省级目标', '市级目标', '完成情况'];
    var color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];
    var data = {
        //['国家目标', '海南目标', '完成情况']
        "学前教育入园率(%)": [65, 60, 76.5],
        "义务教育巩固率(㎡)": [93, 93, 93.4],
        "高中教育毛入学率(%)": [87, 87, 88.3]
    };

    var xAxisData = [];
    var data1 = [],
        data2 = [],
        data3 = [];
    for (var i in data) {
        xAxisData.push(i);
        data1.push(data[i][0])
        data2.push(data[i][1])
        data3.push(data[i][2])
    }

    var label = {
        normal: {
            show: false,
            position: 'right',
            distance: 10,
            formatter: function(param) {
                return param.value + '%';
            },
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        }
    };


    var series = [];
    for (var j = 1; j < 4; j++) {
        if (j == 1) {
            var symbolOffset = [-48, 0];
            var dataArr = data1
        } else if (j == 2) {
            var symbolOffset = [0, 0];
            var dataArr = data2
        } else if (j == 3) {
            var symbolOffset = [48, 0];
            var dataArr = data3
        }

        series.push({
            name: Name[j - 1],
            type: 'bar',
            stack: j,
            xAxisIndex: 0,
            data: dataArr,
            label: label,
            barWidth: 8,
            barGap: 5,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[j * 2 - 2]
                    }, {
                        offset: 1,
                        color: color[j * 2 - 1]
                    }]),
                }
            },
            z: 2
        }, {
            name: Name[j - 1],
            type: 'scatter',
            stack: j,
            xAxisIndex: 0,
            symbolOffset: symbolOffset, //相对于原本位置的偏移量
            data: [0, 0, 0, 0],
            label: {
                normal: {
                    show: false,
                }
            },
            xAxisIndex: 2,
            symbolSize: 14,
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[j * 2 - 2]
                    }, {
                        offset: 1,
                        color: color[j * 2 - 1]
                    }]),
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: Name[j - 1],
            type: 'bar',
            xAxisIndex: 1,
            barGap: '140%',
            data: [dataArr[0] + 15, dataArr[1] + 15, dataArr[2] + 15, dataArr[3] + 15, ],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: Name[j - 1],
            type: 'bar',
            xAxisIndex: 2,
            data: [dataArr[0] + 15.5, dataArr[1] + 15.5, dataArr[2] + 15.5, dataArr[3] + 15.5, ],
            barWidth: 24,
            barGap: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[j * 2 - 2]
                    }, {
                        offset: 1,
                        color: color[j * 2 - 1]
                    }]),
                    barBorderRadius: 5,
                }
            },
            z: 0
        }, {
            name: Name[j - 1],
            type: 'scatter',
            hoverAnimation: false,
            data: [1.2, 1.2, 1.2, 1.2],
            xAxisIndex: 2,
            symbolOffset: symbolOffset, //相对于原本位置的偏移量
            symbolSize: 24,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[j * 2 - 2]
                    }, {
                        offset: 1,
                        color: color[j * 2 - 1]
                    }]),
                    opacity: 1,
                }
            },
            z: 2
        })
    }
    var option3 = {
        backgroundColor: '#142058',
        grid: {
            left: '3%',
            right: '3%',
            bottom: '5%',
            top: '10%',
            containLabel: true
        },
        tooltip: {
            show: "true",
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                shadowStyle: {
                    color: 'rgba(112,112,112,0)',
                },
            },
            // formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%',
            formatter: function(params) {
                var unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'));
                return params[0].name + ' ：<br />' + params[0].seriesName + ' ：' + params[0].data + unit + '<br />' + params[1].seriesName + ' ：' + params[1].data + unit + '<br />' + params[2].seriesName + ' ：' + params[2].data + unit;
            },
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        },
        legend: {
            top: 20,
            textStyle: {
                color: '#fff',
            },
            data: Name,
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
            data: xAxisData
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: xAxisData
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: xAxisData
        }],
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#32346c',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#32346c ',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
        },
        series: series
    };
    myChart3.clear();
    myChart3.setOption(option3);
}






//加载灞桥区行政区划边框
function getBoundary(){
    var bdary = new BMap.Boundary();
    bdary.get("陕西省西安市灞桥区", function(rs){       //获取行政区域
//			map.clearOverlays();        //清除地图覆盖物
        var count = rs.boundaries.length; //行政区域的点有多少个
        if (count === 0) {
            alert('未能获取当前输入行政区域');
            return ;
        }
        var pointArray = [];
        for (var i = 0; i < count; i++) {
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 3, strokeColor: "#FFD700",fillColor:"none"}); //建立多边形覆盖物
            pay1=ply;
            map.addOverlay(ply);  //添加覆盖物
            pointArray = pointArray.concat(ply.getPath());
        }
    });
}

// function initMap() {
//     map = bmap('map' , new BMap.Point(109.1007, 34.3163), 12,false,false,false);// new BMap.Map("container");    // 创建Map实例
//     //地图自定义样式
//     map.setMapStyle({
//         styleJson: [
//             {
//                 "featureType": "land",
//                 "elementType": "geometry.fill",
//                 "stylers": {
//                     "color": "#20254c",
//                     "hue": "#20254c",
//                     "visibility": "on"
//                 }
//             },
//             {
//                 "featureType": "water",
//                 "elementType": "geometry.fill",
//                 "stylers": {
//                     "color": "#2e5eb0"
//                 }
//             },
//             {
//                 "featureType": "green",
//                 "elementType": "geometry.fill",
//                 "stylers": {
//                     "color": "#079f3a"
//                 }
//             },
//             {
//                 "featureType": "road",
//                 "elementType": "all",
//                 "stylers": {
//                     "color": "#1892dd"
//                 }
//             },
//             {
//                 "featureType": "all",
//                 "elementType": "labels.text.fill",
//                 "stylers": {
//                     "color": "#857f7f"
//                 }
//             },
//             {
//                 "featureType": "all",
//                 "elementType": "labels.text.stroke",
//                 "stylers": {
//                     "color": "#182c5f"
//                 }
//             },
//             {
//                 "featureType": "poi",
//                 "elementType": "all",
//                 "stylers": {
//                     "visibility": "off"
//                 }
//             },
//             {
//                 "featureType": "all",
//                 "elementType": "labels.icon",
//                 "stylers": {
//                     "visibility": "off"
//                 }
//             },
//             {
//                 "featureType": "all",
//                 "elementType": "labels.text.fill",
//                 "stylers": {
//                     "color": "#2da0c6",
//                     "visibility": "on"
//                 }
//             },  {
//                 "featureType": "manmade",
//                 "elementType": "geometry.fill",
//                 "stylers": {
//                     "color": "#6a6666ff"
//                 }
//             }
//             ,  {
//                 "featureType": "building",
//                 "elementType": "geometry.fill",
//                 "stylers": {
//                     "color": "#857f7fff"
//                 }
//             }
//         ]
//     });
//
//
// }

