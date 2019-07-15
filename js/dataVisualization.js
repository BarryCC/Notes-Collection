var vm = new Vue({
    el:'.container',
    data:{
        styleType:true,//主题变化
        chart1Color:['rgba(0, 255, 255, 0.9)', 'rgba(0, 255, 255, 0.6)',  'rgba(240, 231, 80, 0.9)', 'rgba(240, 231, 80, 0.4)'],
        mapBorderColor:'#3fdaff',
        mapBorderShadowColor:'rgba(63, 218, 255, 0.5)',
        chartPieColor:['rgb(27, 109, 246)', '#dcdcdc', '#9b9b9b', '#575555'],
        //center
        mapRoot:'',
        centerCtnTitle:'1-11月各区综合能耗前8',
        centerCtnType:0,
        areaMapData:{
            "黄浦区": [121.490317, 31.222771],
            '徐汇区': [121.43752, 31.179973],
            '长宁区': [121.4222, 31.218123],
            '静安区': [121.448224, 31.229003],
            '普陀区': [121.392499, 31.241701],
            '闸北区': [121.465689, 31.25318],
            '虹口区': [121.491832, 31.26097],
            '杨浦区': [121.522797, 31.270755],
            '闵行区': [121.401435,31.067194],
            '宝山区': [121.422131,31.391543],
            '嘉定区': [121.214012,31.382419],
            '浦东新区': [121.63715,31.114694],
            //'金山区': [121.345093,30.783679],
            '金山区': [121.299387,30.903731],
            '松江区': [121.147322,31.02586],
            '青浦区': [121.113021, 31.151209],
            '奉贤区': [121.458472, 30.912345],
            '崇明区': [121.843832,31.492595],
        },
        areaData:[
            {
                name: '黄浦区',
                value: 100
            }, {
                name: '徐汇区',
                value: 100
            }, {
                name: '长宁区',
                value: 100
            }, {
                name: '静安区',
                value: 100
            }, {
                name: '普陀区',
                value: 100
            }, {
                name: '闸北区',
                value: 100
            }, {
                name: '虹口区',
                value: 100
            }, {
                name: '杨浦区',
                value: 800
            }, {
                name: '闵行区',
                value: 850
            }, {
                name: '宝山区',
                value: 700
            }, {
                name: '嘉定区',
                value: 350
            }, {
                name: '浦东新区',
                value: 950
            }, {
                name: '金山区',
                value: 100
            }, {
                name: '松江区',
                value: 500
            }, {
                name: '青浦区',
                value: 400
            }, {
                name: '奉贤区',
                value: 600
            }, {
                name: '崇明区',
                value: 100
            }],
        areaRankingData:[
            {
                name: '黄浦区',
                value: 0
            }, {
                name: '徐汇区',
                value: 0
            }, {
                name: '长宁区',
                value: 0
            }, {
                name: '静安区',
                value: 0
            }, {
                name: '普陀区',
                value: 0
            }, {
                name: '闸北区',
                value: 0
            }, {
                name: '虹口区',
                value: 0
            }, {
                name: '杨浦区',
                value: 3
            }, {
                name: '闵行区',
                value: 2
            }, {
                name: '宝山区',
                value: 4
            }, {
                name: '嘉定区',
                value: 8
            }, {
                name: '浦东新区',
                value: 1
            }, {
                name: '金山区',
                value: 0
            }, {
                name: '松江区',
                value: 6
            }, {
                name: '青浦区',
                value: 7
            }, {
                name: '奉贤区',
                value: 5
            }, {
                name: '崇明县',
                value: 0
            }],
        groupMapData:{
            '电力公司': [121.43752, 31.179973],
            '电力股份': [121.465689, 31.25318],
            '华能电力': [121.422131,31.391543],
            '上海船舶': [121.214012,31.382419],
            '高桥石化': [121.63715,31.114694],
            '华谊集团': [121.147322,31.02586],
            '申能集团': [121.113021, 31.151209],
            '宝武集团': [121.458472, 30.912345]
        },
        groupData:[
            {
                name: '电力股份',
                value: 219
            }, {
                name: '华能电力',
                value: 339
            }, {
                name: '上海船舶',
                value: 190
            }, {
                name: '电力公司',
                value: 429
            }, {
                name: '高桥石化',
                value: 389
            }, {
                name: '华谊集团',
                value: 352
            }, {
                name: '申能集团',
                value: 329
            }, {
                name: '宝武集团',
                value: 532
            }],
        groupRankingData:[
            {
                name: '电力股份',
                value: 8
            }, {
                name: '华能电力',
                value: 7
            }, {
                name: '上海船舶',
                value: 6
            }, {
                name: '电力公司',
                value: 5
            }, {
                name: '高桥石化',
                value: 4
            }, {
                name: '华谊集团',
                value: 3
            }, {
                name: '申能集团',
                value: 2
            }, {
                name: '宝武集团',
                value: 1
            }],
        //left
        chart1Root:'',
        chart2Root:'',
        leftNumData:[],
        leftNum:'004653',
        leftChartShow:true,
        leftPieData:[
            [2000, 122, 3121, 54, 60, 2630, 1150, 2442, 1292, 1292, 1292, 1292, 1292],
            [1130, 812, 1134, 2361, 413, 1330, 1301, 594, 1230, 1292, 1292, 1292, 1292]
        ],
        leftBarData:[
            {value:435, name:'钢铁'},
            {value:679, name:'服务'},
            {value:848, name:'餐饮'},
            {value:348, name:'运输'}
        ],
        //right
        chart3Root:'',
        chart4Root:'',
        rightNumData:[],
        rightNum:'024531',
        rightChartShow:true,
        rightPieData:[
            [4.9, 7.3, 9.2, 5.6, 7.7, 5.6, 4.2, 3.6, 6, 6.4, 6.4, 6.4],
            [2.9, 5, 4.4, 2.7, 5.7, 4.6, 1.2, 2.7, 4.8, 6.0, 6.4, 6.4]
        ],
        rightBarData:[
            {value:9, name:'钢铁'},
            {value:1, name:'服务'},
            {value:4, name:'餐饮'},
            {value:20, name:'运输'}
        ],
        //边框修饰
        dateTime:''
    },
    methods:{
        setPlaySpeed: function () {
            var myVid = document.getElementById("videoPlay");
            //方法一
            //myVid.defaultPlaybackRate=0.2;
            //myVid.load();
            //方法二
            //myVid.playbackRate=0.2;
        },
        //center
        initMap: function () {
            echarts.registerMap('shanghai', shangData);
            this.mapRoot = echarts.init(document.getElementById('SHMap'));
            this.contentTitle = '1-11月各区综合能耗前8';
            this.mapData1();
        },
        mapData1: function () {
            var that = this;
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = that.areaMapData[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            that.mapRoot.setOption({
                tooltip: {
                    show: true
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: 1000,
                    left: '20%',
                    bottom: '40',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                    seriesIndex: [0],
                    dimension: 0,
                    inRange: {
                        color: ['rgba(15, 12, 41,0.8)', 'rgba(0, 0, 0, 0.5)'] // 黑紫黑
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'shanghai',
                    roam: false, //是否允许缩放
                    zoom: 1.4,
                    center: [121.470999,31.115312],
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(51, 69, 89, .5)', //地图背景色
                            borderColor: 'rgba(100,149,237,1)' //省市边界线
                        },
                        emphasis: {
                            color: 'rgba(37, 43, 61, .5)' //悬浮背景
                        }
                    },
                },
                series: [
                    {
                        name:'上海',
                        type: 'map',
                        map: 'shanghai',
                        roam: false,//鼠标缩放
                        zoom: 1.4,
                        center: [121.470999,31.115312],
                        label: {
                            normal: {
                                show: true,
                                color: '#dcdcdc',
                                fontSize: 14,
                            },
                            emphasis: {
                                show: true,
                                color: '#dcdcdc',
                                fontSize: 14
                            }
                        },
                        itemStyle: {
                            normal: {
                                show:false,
                                areaColor: '#000204',
                                borderWidth: 2,
                                borderColor: this.mapBorderColor,
                                shadowColor: this.mapBorderShadowColor,
                                shadowBlur: 8
                            },
                            emphasis: {
                                areaColor: '#1288a2'
                            }
                        },
                        animation: true,
                        data: this.areaData
                    },
                    {
                        name: '全部区',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        symbolSize: function (val) {
                            return val[2] / 30;
                        },
                        symbolOffset:[0,-50],
                        animation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: [30, 0],
                                show: false,
                                color: '#dcdcdc',
                                fontSize: 16
                            },
                            emphasis: {
                                show: false,
                                color: '#dcdcdc',
                                fontSize: 16
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#24DCC5'
                            },
                            emphasis: {
                                color: '#fff'
                            }
                        },
                        data: convertData(this.areaData.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 8))
                    },
                    {
                        name: '排名',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: 45,
                        symbolOffset:[0,-50],
                        label: {
                            normal: {
                                formatter: function (params) {
                                    return params.value[2];
                                },
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 20
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#F62157' //标志颜色
                            }
                        },
                        data: convertData(this.areaRankingData.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 8))
                    }
                ]
            }, true);
            that.clickCenterMap();
        },
        mapData2: function () {
            var that = this;
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = that.groupMapData[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            that.mapRoot.setOption({
                tooltip: {
                    show: true
                },
                geo: {
                    map: 'shanghai',
                    roam: false, //是否允许缩放
                    zoom: 1.4,
                    center: [121.470999,31.115312],
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(51, 69, 89, .5)', //地图背景色
                            borderColor: 'rgba(100,149,237,1)' //省市边界线
                        },
                        emphasis: {
                            color: 'rgba(37, 43, 61, .5)' //悬浮背景
                        }
                    },
                },
                series: [
                    {
                        name:'上海',
                        type: 'map',
                        map: 'shanghai',
                        roam: false,//鼠标缩放
                        zoom: 1.4,
                        center: [121.470999,31.115312],
                        label: {
                            normal: {
                                show: false,
                                color: '#dcdcdc',
                                fontSize: 16
                            },
                            emphasis: {
                                show: false,
                                color: '#dcdcdc',
                                fontSize: 14
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: 'rgba(0, 0, 0, 0.6)',
                                borderWidth: 2,
                                borderColor: this.mapBorderColor,
                                shadowColor: this.mapBorderShadowColor,
                                shadowBlur: 8
                            },
                            emphasis: {
                                areaColor: '#1288a2'
                            }
                        },
                        animation: true,
                        data: this.groupData
                    },
                    {
                        name: '全部区',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        symbolSize: function (val) {
                            return val[2] / 20;
                        },
                        animation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: [30, 0],
                                show: true,
                                color: '#dcdcdc',
                                fontSize: 16
                            },
                            emphasis: {
                                show: true,
                                color: '#dcdcdc',
                                fontSize: 16
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#05C3F9'
                            },
                            emphasis: {
                                color: '#05C3F9'
                            }
                        },
                        data: convertData(this.groupData.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 8))
                    },
                    {
                        name: '排名',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: 45,
                        label: {
                            normal: {
                                formatter: function (params) {
                                    return params.value[2];
                                },
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 20
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#F62157' //标志颜色
                            }
                        },
                        data: convertData(this.groupRankingData.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 8))
                    }
                ]
            }, true);
            that.clickCenterMap();
        },
        clickCenterMap: function () {
            var that = this;
            that.mapRoot.on("click", function (param) {
                if (that.centerCtnType == 0) {
                    window.location.href = './area.html';
                } else {
                    window.location.href = './集团.html';
                }
            })
        },
        //left
        initLeftChart:function () {
            this.chart1Root = echarts.init(document.getElementById('indexMap1'));
            this.chart2Root = echarts.init(document.getElementById('indexMap2'));
            this.setChart1Option();
            this.setChart2Option();
            var that = this;
            setInterval(function () {
                that.chart1Root.clear();
                that.chart2Root.clear();
                that.setChart1Option();
                that.setChart2Option();
            },4000);
        },
        setChart1Option:function () {
            this.chart1Root.setOption({
                color: ['#00ffff', '#00ffa2', '#f0e750'],
                tooltip: {
                    trigger: 'axis',
                    formatter: '{b}月<br />{a0}: {c0}<br />{a1}: {c1}',
                    textStyle: {
                        fontSize: 13,
                        color: "#fff"
                    }
                },
                grid: {
                    show: false,
                    left: 5,
                    top: 20,
                    right: 20,
                    bottom: 22,
                    borderWidth: 1,
                    borderColor: 'rgba(170,172,178,0.33)'
                },
                calculable: true,
                legend: {
                    data: ['去年', '今年'],
                    textStyle: {
                        color: '#ccc'
                    },
                    top:'-5',
                    right:'20'
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12'],
                    splitLine: { //坐标轴在 grid 区域中的分隔线；
                        show: true,
                        lineStyle: {
                            color: 'rgba(170,172,178,0.33)'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel: {
                        margin:7,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        }
                    },
                }],
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 4000,
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(170,172,178,0.33)'
                        }
                    },
                    axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                        show: true,
                        lineStyle: {
                            color: 'rgba(170,172,178,0.53)'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.83)',
                            fontSize: 12,
                        },
                    },
                    splitArea: {
                        show: false,
                        areaStyle: {
                            color: ['#112245', 'rgba(34,50,82,0.4)']
                        }
                    }
                }],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 15;
                },
                series: [
                    {
                        name: '去年',
                        type: 'line',
                        smooth: true, //是否平滑曲线显示
                        lineStyle: { //线条样式
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: { //区域填充样式
                            normal: {
                                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: this.chart1Color[0]
                                }, {
                                    offset: 0.7,
                                    color: this.chart1Color[1]
                                }], false),

                                shadowColor: 'rgba(0, 0, 0, 0.9)', //阴影颜色
                                shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果
                            }
                        },
                        itemStyle: { //折现拐点标志的样式
                            normal: {
                                color: 'rgb(0,255,255)'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 15;
                        },
                        data: this.leftPieData[0]
                    },
                    {
                        name: '今年',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: this.chart1Color[2]
                                }, {
                                    offset: 0.8,
                                    color: this.chart1Color[3]
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.9)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(240,231,80)'

                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 15;
                        },
                        data: this.leftPieData[1]
                    }
                ]
            },true);
        },
        setChart2Option:function () {
            this.chart2Root.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color: ['#ffd400 ', '#ccff00', '#00ff00', '#00baff'],
                grid: {
                    show: false,
                    left: 5,
                    top: 20,
                    right: 30,
                    bottom: 0,
                    borderWidth: 1,
                    borderColor: 'rgba(170,172,178,0.33)'
                },
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['0%', '80%'],
                        roseType : 'radius',
                        label: {
                            normal: {
                                show:true,
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize:14
                                },
                                formatter: '{b}\n{d}%'
                            }
                        },
                        labelLine: {
                            normal: {
                                show:true,
                                lineStyle: {
                                    //color: '#fff',
                                    fontSize:'10'
                                },
                                smooth: 0.2,
                                length: 7
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 150;
                        },
                        data:this.leftBarData
                    }
                ]
            });
        },
        //right
        initRightChart:function () {
            this.chart3Root = echarts.init(document.getElementById('indexMap3'));
            this.chart4Root = echarts.init(document.getElementById('indexMap4'));
            this.setChart3Option();
            this.setChart4Option();
            var that = this;
            setInterval(function () {
                that.chart3Root.clear();
                that.chart4Root.clear();
                that.setChart3Option();
                that.setChart4Option();
            },4000);
        },
        setChart3Option:function () {
            this.chart3Root.setOption({
                tooltip: {
                    trigger: 'axis',
                    formatter: '{b}月<br />{a0}: {c0}<br />{a1}: {c1}',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
                grid: {
                    show: false,
                    left: 5,
                    top: 20,
                    right: 20,
                    bottom: 22,
                    borderWidth: 1,
                    borderColor: 'rgba(170,172,178,0.33)'
                },
                legend: {
                    data: ['去年', '今年'],
                    textStyle: {
                        color: '#ccc'
                    },
                    top:'-5',
                    right:'20'
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,//坐标轴两边留白
                        data: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12'],
                        axisLabel: {
                            margin:7,
                            textStyle: {
                                color: '#fff',
                                fontSize: 12
                            }
                        },
                        axisTick:{
                            show: false
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#fff',
                                opacity:0.2
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show:false
                        },
                        axisLine:{
                            show: false
                        },
                        axisTick:{
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['rgba(170,172,178,0.2)']
                            }
                        }
                    }
                ],
                series : [
                    {
                        name:'去年',
                        type:'bar',
                        data:this.rightPieData[0],
                        barWidth: 6,
                        barGap:0.2,//柱间距离
                        label: {
                            normal: {
                                show: false,
                                position: 'top',
                                textStyle: {
                                    color: '#a8aab0',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 12,
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [5, 5, 0, 0],
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                                },{
                                    offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                                },{
                                    offset: 0.31, color: 'rgba(0, 208, 208, 0.7)'
                                },{
                                    offset: 0.15, color: 'rgba(0, 208, 208, 0.7)'
                                }, {
                                    offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                                }], false),
                            },
                        },
                        animationDelay: function (idx) {
                            return idx * 150;
                        }
                    },
                    {
                        name:'今年',
                        type:'bar',
                        data:this.rightPieData[1],
                        barWidth: 6,
                        barGap:0.2,//柱间距离
                        label: {
                            normal: {
                                show: false,
                                position: 'top',
                                textStyle: {
                                    color: '#a8aab0',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 12
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [5, 5, 0, 0],
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                                },{
                                    offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                                },{
                                    offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                                }, {
                                    offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                                }], false),
                            },
                        },
                        animationDelay: function (idx) {
                            return idx * 150;
                        }
                    }
                ]
            });
        },
        setChart4Option:function () {
            this.chart4Root.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color: this.chartPieColor,
                grid: {
                    show: false,
                    left: 5,
                    top: 12,
                    right: 30,
                    bottom: 0,
                    borderWidth: 1,
                    borderColor: 'rgba(170,172,178,0.33)'
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '80%'],
                        label: {
                            normal: {
                                show:true,
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize:14
                                },
                                formatter: '{b}\n{d}%'
                            }
                        },
                        labelLine: {
                            normal: {
                                show:false,
                                lineStyle: {
                                    color: '#fff',
                                    fontSize:'10'
                                },
                                smooth: 0.2,
                                length: 7
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 150;
                        },
                        data:this.rightBarData
                    }
                ]
            });
        },
        //切换主题
        chooseTheme:function (state) {
            this.styleType = state;
            if(state){
                this.chart1Color = ['rgba(0, 255, 255, 0.9)', 'rgba(0, 255, 255, 0.6)',  'rgba(240, 231, 80, 0.9)', 'rgba(240, 231, 80, 0.4)'];
                this.mapBorderColor = '#3fdaff';
                this.mapBorderShadowColor = 'rgba(63, 218, 255, 0.5)';
                this.chartPieColor = ['rgb(27, 109, 246)', '#dcdcdc', '#9b9b9b', '#575555'];
            }else {
                this.chart1Color = ['rgba(43, 204, 250, 0.9)', 'rgba(43, 204, 250, 0.6)',  'rgba(115, 21, 243, 0.9)', 'rgba(115, 21, 243, 0.6)'];
                this.mapBorderColor = '#5B82FF';
                this.mapBorderShadowColor = '#5B82FF';
                this.chartPieColor = ['#5D61DC', '#dcdcdc', '#9b9b9b', '#575555'];
            }
            this.setChart1Option();
            this.setChart2Option();
            this.setChart4Option();
            this.mapData1();
            this.mapData2();
        },
        //时间显示
        /*getTime: function () {
            var myDate = new Date();
            this.dateTime = myDate.toLocaleString();
        },*/
        //菜单跳转
        goPage:function (page) {
            window.location.href = './'+page+'.html';
        }
    },
    watch: {
        leftNum: function(newValue, oldValue) {
            var vm = this;
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber: oldValue })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: newValue }, 1000)
                .onUpdate(function () {
                    vm.leftNumData = this.tweeningNumber.toFixed(0).split('');
                })
                .start();
            animate()
        },
        rightNum: function(newValue, oldValue) {
            var vm = this;
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber: oldValue })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: newValue }, 1000)
                .onUpdate(function () {
                    vm.rightNumData = this.tweeningNumber.toFixed(0).split('');
                })
                .start();
            animate()
        }
    },
    mounted:function () {
        //视频背景播放速度设置
        this.setPlaySpeed();
        //center地图
        this.initMap();
        //left
        this.initLeftChart();
        this.leftNum = '004653';
        this.leftNumData = this.leftNum.split('');
        this.leftChartShow = true;
        //right
        this.initRightChart();
        this.rightNum = '024531';
        this.rightNumData = this.rightNum.split('');
        this.rightChartShow = true;
        //内容切换
        var that = this;
        var num = 0;
        setInterval(function () {
            num++;
            if(num%2===0){
                //center
                that.centerCtnTitle = '1-11月各区综合能耗前8';
                that.centerCtnType = 0;
                that.mapData1();
                //left
                that.leftNum = '114653';
                that.leftChartShow = true;
                //right
                that.rightNum = '124531';
                that.rightChartShow = true;
            }else {
                //center
                that.centerCtnTitle = '1-11月各集团综合能耗前8';
                that.centerCtnType = 1;
                that.mapData2();
                //left
                that.leftNum = '174109';
                that.leftChartShow = false;
                //right
                that.rightNum = '140179';
                that.rightChartShow = false;
            }
        },10000);
        //时间显示
        /*setInterval(function () {
            var myDate = new Date();
            that.dateTime = myDate.toLocaleString();
        },1000);*/
    }
});