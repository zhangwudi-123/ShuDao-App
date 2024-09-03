import * as echarts from 'echarts';
import { isElement, isNull } from 'lodash';
// import Imageredio from '../../../../asserts/image/编组 11.png';
// import Imageredio from '../../../../asserts/image/编组 11.png';
import moment from 'moment';
import './style.css';
export const getLeftFirstecharts = (value, value2, type) => {
  // //////console.log(value2);
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////console.log(listnumber, 'oooooo');
  //   type = [listnumber];
  //   value = [0];
  //   value2 = [0];
  // }
  // if (value.length == 0 || value == null) {
  //   value = [0, 0, 0, 0, 0, 0];
  // }

  // const option = {
  //   backgroundColor: '',
  //   // tooltip: {
  //   //   trigger: 'axis',
  //   //   axisPointer: {
  //   //     lineStyle: {
  //   //       color: {
  //   //         type: 'linear',
  //   //         x: 0,
  //   //         y: 0,
  //   //         x2: 0,
  //   //         y2: 1,
  //   //         colorStops: [
  //   //           {
  //   //             offset: 0,
  //   //             color: 'rgba(0, 255, 233,0)'
  //   //           },
  //   //           {
  //   //             offset: 0.5,
  //   //             color: 'rgba(255, 255, 255,1)'
  //   //           },
  //   //           {
  //   //             offset: 1,
  //   //             color: 'rgba(0, 255, 233,0)'
  //   //           }
  //   //         ],
  //   //         global: false
  //   //       }
  //   //     }
  //   //   },
  //   //   renderMode: 'html',
  //   //   backgroundColor: 'rgba(15, 45, 83, 0.9)',
  //   //   borderWidth: 0,
  //   //   borderColor: 'rgba(15, 45, 83, 0.9)',
  //   //   textStyle: {
  //   //     color: '#fff'
  //   //   }
  //   //   // formatter: val => {
  //   //   //   const style =
  //   //   //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
  //   //   //   const tooltip = val
  //   //   //     .map(i => {
  //   //   //       const { seriesName, color, value } = i;
  //   //   //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
  //   //   //     })
  //   //   //     .join('<br />');
  //   //   //   return tooltip;
  //   //   // }
  //   // },
  //   legend: {
  //     data: ['镍钴粉', '氢氧化钴'],
  //     right: 10,
  //     top: 20,
  //     textStyle: {
  //       color: '#fff',
  //       fontSize: 2.4 * window.rem + 'px'
  //     }
  //   },
  //   // grid: {
  //   //   top: '20%',
  //   //   // left: '13%',
  //   //   // right: '12%',
  //   //   bottom: '16%'
  //   //   // containLabel: false
  //   // },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       // name: '(天)',
  //       axisLine: {
  //         show: true,
  //         lineStyle: {
  //           color: '#d1e6eb'
  //         }
  //       },
  //       splitArea: {
  //         color: '#f00',
  //         lineStyle: {
  //           color: '#f00'
  //         }
  //       },
  //       // axisLabel: {
  //       //   // 设置 interval
  //       //   interval: (index, value) => {
  //       //     return type.length > 12 ? index % Math.ceil(type.length / 12) === 0 : true;
  //       //   },
  //       //   color: '#d1e6eb'
  //       // },
  //       splitLine: {
  //         show: false
  //       },
  //       axisTick: {
  //         show: false
  //       },
  //       boundaryGap: true,
  //       data: type
  //     }
  //   ],

  //   yAxis: {
  //     type: 'value',
  //     name: '单位:t',
  //     splitNumber: 4,
  //     axisLine: {
  //       show: false, //y轴竖线去掉
  //       lineStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisLabel: {
  //       show: true,
  //       textStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     splitLine: {
  //       lineStyle: {
  //         type: 'dashed',
  //         color: '#39608F'
  //       }
  //     }
  //   },
  //   series: [
  //     {
  //       name: '镍钴粉',
  //       type: 'pie',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#6E9DFF'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value
  //     },
  //     {
  //       name: '氢氧化钴',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#21FFFF'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value2
  //     }
  //   ]
  // };
  const servalue = [];
  const color = [];
  console.log(value, '9999999');
  value.sort((a, b) => {
    return a.revenueValue - b.revenueValue;
  });
  const newvalue = value.filter(item => {
    if (item.companyName != '总营收') {
      color.push(item.revenueColor);
      servalue.push({
        name: item.companyName,
        value: Number(item.revenueValue).toFixed(0),
        revenueProportion: item.revenueProportion
        // label: { show: true, position: 'inside', formatter: '{b}  {d}  {c}' }
      });
    }
    return item.companyName != '总营收';
  });

  // var data5 = [
  //   { name: '营收1', value: 20, revenueProportion: '2600万元' },
  //   { name: '营收2', value: 17, amount: '2500万元' },
  //   { name: '营收3', value: 18, amount: '2400万元' },
  //   { name: '营收4', value: 20, amount: '2600万元' },
  //   { name: '营收5', value: 20, amount: '2600万元' }
  // ];

  console.log(color, '99999999');
  var option = {
    // tooltip: {
    //   trigger: 'item', // 设置触发方式为鼠标悬停
    //   formatter: function(params) { // 自定义提示框内容
    //     var data = params.data; // 获取当前鼠标悬停的数据项
    //     var content = data.name + ': ' + data.value; // 格式化数据项的名称和值
    //     return content; // 返回格式化后的内容
    //   }
    // },
    // tooltip: {
    //   trigger: 'item'
    // },
    // tooltip: {
    //   trigger: 'item', // 设置触发方式为鼠标悬停
    //   formatter: function(params) {
    //     var data = params.data; // 获取当前鼠标悬停的数据项
    //     // 返回一个格式化后的字符串，包括数据项的名称、值等信息
    //     return data.name + ': ' + data.value;
    //   }
    // },
    // 图例放置在右侧
    // legend: {
    //   type: 'scroll',
    //   right: 0,
    //   top: 70,
    //   pageIconSize: [10, 10], // 设置切换页图标的大小

    //   // pageButtonItemGap: 5,

    //   // pageIconSize: false, // 隐藏切换页图标
    //   orient: 'vertical',
    //   // pageButtonItemGap: 5,

    //   // pageIconSize: false, // 隐藏切换页图标
    //   // orient: 'vertical',
    //   // right: 0,
    //   // top: 40,
    //   height: 'auto', // 设置图例的高度为自适应
    //   //inactiveColor: 'red', // 翻页按钮未激活状态颜色
    //   pageIconColor: '#3E88FF', // 翻页下一页的三角按钮颜色
    //   pageIconInactiveColor: '#333', // 翻页（即翻页到头时）按钮颜色
    //   // data: newvalue,
    //   textStyle: {
    //     fontSize: 3 * window.rem + 'px',
    //     color: 'white'
    //   },
    //   pageTextStyle: {
    //     color: 'transparent' // 设置文本颜色为透明，隐藏文本内容
    //     // height: '10'
    //   },
    //   // graphic: {
    //   //   elements: [
    //   //     {
    //   //       type: 'image',
    //   //       style: {
    //   //         image: 'your_image_url_here', // 图片的URL地址
    //   //         width: 100, // 图片宽度
    //   //         height: 100, // 图片高度
    //   //         x: 'center', // 图片的水平位置
    //   //         y: 'center' // 图片的垂直位置
    //   //       }
    //   //     }
    //   //   ]
    //   // },
    //   formatter: function(params) {
    //     var revenueValue = 0;
    //     var revenueProportion = 0;
    //     //console.log(newvalue, '55555');
    //     newvalue.map(item => {
    //       if (item.companyName == params) {
    //         revenueValue = item.revenueValue;
    //         revenueProportion = item.revenueProportion;
    //       }
    //     });
    //     return params + '   ' + revenueProportion + '% ' + '  ' + revenueValue;
    //     // const a = data5.map(item => {
    //     //   return item.name + ' ' + item.value + '% ' + item.amount;
    //     // });
    //     // return a;
    //   }
    // },
    // grid: {
    //   top: '20%',
    //   // left: '13%',
    //   // right: '12%',
    //   bottom: '16%'
    //   // containLabel: false
    // },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        color: color,
        // label: {
        //   show: false,
        //   position: 'top'
        // },
        // emphasis: {
        //   label: {
        //     show: true,
        //     // fontSize: 2.4 * window.rem + 'px',
        //     fontWeight: 'bold',
        //     position: 'top',
        //     formatter: '{b}: {c}' // {b} 表示名称，{c} 表示值
        //   }
        // },
        // labelLine: {
        //   show: false
        // },
        label: {
          normal: {
            position: 'outside',
            // formatter: '{bb|{b}}\n{dd|{d}%}',
            formatter: params => {
              //console.log(params, '????');
              // if (params.name !== '') {
              //   // return `{name|${name}: ${params.value} 万元}` + `\n占比{value|${params.percent === undefined ? 0 : params.percent}%}`
              // }
              return `{name|${params.name}: ${params.value} }` + `\n占比{value|${params.percent}%}`;
              // return + '  ' +  + '%' + '  ' + ;
            },
            textStyle: {
              color: '#FFFFFF',
              fontWeight: 'normal',
              // fontSize: 2.4 * window.rem + 'px'
              fontSize: '10px'
            },
            rich: {
              bb: {
                fontWeight: 'normal',
                align: 'center',
                fontSize: 2.4 * window.rem + 'px'
              },
              dd: {
                fontWeight: 'normal',
                align: 'center',
                fontSize: 2.4 * window.rem + 'px'
              }
            }
          }
        },
        data: servalue
        // formatter: function(params) {
        //   var revenueValue = 0;
        //   var revenueProportion = 0;
        //   //console.log(newvalue, '55555');
        //   newvalue.map(item => {
        //     if (item.companyName == params) {
        //       revenueValue = item.revenueValue;
        //       revenueProportion = item.revenueProportion;
        //     }
        //   });
        //   return params + '   ' + revenueProportion + '% ' + '  ' + revenueValue;
        //   // const a = data5.map(item => {
        //   //   return item.name + ' ' + item.value + '% ' + item.amount;
        //   // });
        //   // return a;
        // },
        // graphic: [
        //   {
        //     type: 'image',
        //     id: 'logo',
        //     left: 'center',
        //     top: 'center',
        //     z: 10,
        //     bounding: 'raw',
        //     origin: [75, 75], // 原点位置，与半径相等
        //     style: {
        //       image: Imageredio, // 图片的 URL
        //       width: 150,
        //       height: 150
        //     }
        //   }
        // ]
        // 其他配置项
      }
    ]
  };
  // //////console.log(type, '555');
  // if (type.length > 12) {
  //   //////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////console.log(listnumber, '天数');

  //   let listoverstart = 0;
  //   let listoverend = 0;
  //   // if (listnumber < 25) {
  //   //   listoverstart = lastmouth - 25 + listnumber - 6;
  //   //   listoverend = lastmouth - 25 + listnumber - 1;
  //   //   // liststart = 0;
  //   //   // listend = 0;
  //   // }
  //   if (listnumber < 25) {
  //     listoverstart = lastmouth - 25 + listnumber - 6;
  //     listoverend = lastmouth - 25 + listnumber;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   if (listnumber >= 25) {
  //     listoverstart = 0;
  //     listoverend = 6;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   option.dataZoom = [
  //     //给x轴设置滚动条
  //     {
  //       type: 'slider', //slider表示有滑动块的，inside表示内置的
  //       startValue: listoverstart, // 开始列的索引
  //       endValue: listoverend, // 结束列的索引
  //       // start: 0, //默认为0  可设置滚动条从在后进行展示
  //       // end: listend, //默认为100
  //       show: true,
  //       xAxisIndex: [0],
  //       handleSize: 0, //滑动条的 左右2个滑动条的大小
  //       height: 2, //组件高度
  //       left: '5%', //左边的距离
  //       right: '5%', //右边的距离
  //       bottom: -2, //右边的距离
  //       borderColor: '#eee',
  //       fillerColor: '#E7E7E7',
  //       backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
  //       showDataShadow: false, //是否显示数据阴影 默认auto
  //       showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
  //       realtime: true, //是否实时更新
  //       filterMode: 'filter',
  //       handleStyle: {
  //         borderRadius: '20'
  //       }
  //     },
  //     //下面这个属性是里面拖到
  //     {
  //       type: 'inside',
  //       show: true,
  //       xAxisIndex: [0],
  //       start: 0, //默认为1
  //       end: 100, //默认为100
  //       moveOnMouseWheel: false,
  //       preventDefaultMouseMove: false
  //     }
  //   ];
  // } else {
  //   //////////console.log('mmm');
  //   delete option.dataZoom;
  // }

  return option;
};
export const getLeftSecondecharts = (xData, LegendData, SeriesData, dataIsEmpty) => {
  console.log(SeriesData);
  const YData = dataIsEmpty ? { min: 0, max: 12 } : {};
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      },
      renderMode: 'html',
      backgroundColor: 'rgba(15, 45, 83, 0.9)',
      borderWidth: 0,
      borderColor: 'rgba(15, 45, 83, 0.9)',
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      // data: ['镍钴粉', '氢氧化钴'],
      data: LegendData,
      right: '5%',
      left: '5%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      left: '15%',
      top: '20%',
      bottom: '25%'
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d1e6eb'
          }
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: true,
        // data: type
        data: xData
      }
    ],

    yAxis: {
      type: 'value',
      ...YData,
      name: '单位:t',
      splitNumber: 4,
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#d1e6eb'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#39608F'
        }
      }
    },
    series: SeriesData
    // series: [
    //   {
    //     name: '镍钴粉',
    //     type: 'line',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#6E9DFF'
    //     },
    //     showSymbol: true,
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value
    //   },
    //   {
    //     name: '氢氧化钴',
    //     type: 'line',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#21FFFF'
    //     },
    //     showSymbol: true,
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value2
    //   }
    // ]
  };

  // if (type.length > 12) {
  if (xData.length > 12) {
    const listnumber = Number(moment(new Date()).format('DD'));
    const lastmouth = moment(new Date())
      .subtract(1, 'month')
      .daysInMonth();

    let listoverstart = 0;
    let listoverend = 0;

    if (listnumber < 25) {
      listoverstart = lastmouth - 25 + listnumber - 6;
      listoverend = lastmouth - 25 + listnumber;
    }
    if (listnumber >= 25) {
      listoverstart = 0;
      listoverend = 6;
    }
    option.dataZoom = [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        startValue: listoverstart, // 开始列的索引
        endValue: listoverend, // 结束列的索引
        // start: 0, //默认为0  可设置滚动条从在后进行展示
        // end: listend, //默认为100
        show: true,
        xAxisIndex: [0],
        handleSize: 0, //滑动条的 左右2个滑动条的大小
        height: 2, //组件高度
        left: '5%', //左边的距离
        right: '5%', //右边的距离
        bottom: -2, //右边的距离
        borderColor: '#eee',
        fillerColor: '#E7E7E7',
        backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        filterMode: 'filter',
        handleStyle: {
          borderRadius: '20'
        }
      },
      //下面这个属性是里面拖到
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0, //默认为1
        end: 100, //默认为100
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false
      }
    ];
  } else {
    delete option.dataZoom;
  }

  return option;
};
export const getLeftThirdecharts = (value, value2, value3, value4, type) => {
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////console.log(listnumber, 'oooooo');
  //   type = [listnumber];
  //   value = [0];
  //   value2 = [0];
  // }
  // if (value.length == 0 || value == null) {
  //   value = [0, 0, 0, 0, 0, 0];
  // }
  // 定义一个存储月份和对应属性值的数组

  // 定义一个存储月份和对应属性值的数组
  let newname = '';
  let lowvalue = Number.MAX_VALUE;
  let topvalue = 0;
  const endPrices = [];
  const endPricesall = [];
  const endPrices2 = [];
  const endPricesall2 = [];
  const threeYearHigh = [];
  const threeYearLow = [];
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ];
  const cnMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  console.log(value, value2, '2222222222');
  // 遍历每个数据对象
  if (value != null) {
    console.log('进入判断value');
    // value.forEach(item => {
    //   // 遍历对象的属性

    // });
    for (const key in value) {
      if (key == 'materialName') {
        // //console.log(value[key], '555');
        newname = value[key];
      }
      // 检查属性名是否包含 "End"
      if (key == 'threeYearHigh') {
        for (let i = 0; i < 12; i++) {
          threeYearHigh.push(value[key]);
        }
      }

      if (key == 'threeYearLow') {
        for (let i = 0; i < 12; i++) {
          threeYearLow.push(value[key]);
        }
      }
      if (key.includes('End')) {
        // 提取月份信息
        const month = key.slice(0, -8); // 去除属性名中的 "End"，剩下的部分即为月份
        // 将月份和对应的属性值存储到数组中
        endPrices.push({ month: month, value: value[key] });
      }
    }
    //console.log(threeYearHigh, threeYearLow, '00000000');
    // 按照月份进行排序

    endPrices.sort((a, b) => {
      // 将月份名称转换为对应的数字进行比较
      return months.indexOf(a.month.toLowerCase()) - months.indexOf(b.month.toLowerCase());
    });
    console.log(endPrices, '|||');
    endPrices.forEach(item => {
      // //console.log(lowvalue, '====');
      if (item.value < lowvalue && item.value != null) {
        lowvalue = item.value;
      }
      if (item.value > topvalue && item.value != null) {
        topvalue = item.value;
      }
      endPricesall.push(item.value);
    });
  }
  if (value2 != null) {
    console.log('进入判断');
    // value.forEach(item => {
    //   // 遍历对象的属性

    // });
    for (const key in value2) {
      // if (key == 'materialName') {
      //   // //console.log(value[key], '555');
      //   newname = value[key];
      // }
      // // 检查属性名是否包含 "End"
      // if (key == 'threeYearHigh') {
      //   for (let i = 0; i < 12; i++) {
      //     threeYearHigh.push(value[key]);
      //   }
      // }

      // if (key == 'threeYearLow') {
      //   for (let i = 0; i < 12; i++) {
      //     threeYearLow.push(value[key]);
      //   }
      // }
      if (key.includes('UnitPrice')) {
        // 提取月份信息
        const month2 = key.slice(0, -9); // 去除属性名中的 "End"，剩下的部分即为月份
        // console.log(month2);
        // 将月份和对应的属性值存储到数组中
        endPrices2.push({ month: month2, value: value2[key] });
      }
    }
    //console.log(threeYearHigh, threeYearLow, '00000000');
    // 按照月份进行排序
    console.log(endPrices2, '++++++');
    // endPrices2.sort((a, b) => {
    //   // 将月份名称转换为对应的数字进行比较
    //   return months.indexOf(a.month.toLowerCase()) - months.indexOf(b.month.toLowerCase());
    // });
    // console.log(endPrices2, '|||');
    // endPrices.forEach(item => {
    //   // //console.log(lowvalue, '====');
    //   if (item.value < lowvalue && item.value != null) {
    //     lowvalue = item.value;
    //   }
    //   if (item.value > topvalue && item.value != null) {
    //     topvalue = item.value;
    //   }
    //   endPricesall.push(item.value);
    // });
  }
  console.log(endPrices2, '{{{{{');
  const outPrice = {
    name: '销售价格',
    type: 'line',
    // show: endPrices2.length > 0?true:false,
    // stack: 'Total',
    symbol: 'diamond', // 这里将 'diamond' 改
    // smooth: true, //平滑
    itemStyle: {
      // 设置柱状图的样式
      color: '#54FF9F' // 指定柱状图的颜色
    },
    // lineStyle: {
    //   width: 2,
    //   type: 'dashed',
    //   color: 'rgba(0,0,0,0,)'
    // },
    showSymbol: true,
    // areaStyle: {
    //   opacity: 0.8
    //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //   //   {
    //   //     offset: 0,
    //   //     color: 'rgb(128, 255, 165)'
    //   //   },
    //   //   {
    //   //     offset: 1,
    //   //     color: 'rgb(1, 191, 236)'
    //   //   }
    //   // ])
    // },
    emphasis: {
      focus: 'series'
    },
    data: endPrices2.length > 0 ? endPrices2 : []
  };
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      },
      renderMode: 'html',
      backgroundColor: 'rgba(15, 45, 83, 0.9)',
      borderWidth: 0,
      borderColor: 'rgba(15, 45, 83, 0.9)',
      textStyle: {
        color: '#fff'
      }
      // formatter: val => {
      //   const style =
      //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
      //   const tooltip = val
      //     .map(i => {
      //       const { seriesName, color, value } = i;
      //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
      //     })
      //     .join('<br />');
      //   return tooltip;
      // }
    },
    legend: {
      data: [`市场价格`, endPrices2.length > 0 ? '销售价格' : ''],
      right: '15%',
      top: '5%',
      // icon:
      //   'path://M934.4 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM115.2 490.666667h-34.133333a25.6 25.6 0 1 0 0 51.2h34.133333a25.6 25.6 0 1 0 0-51.2zM388.266667 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM251.733333 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM524.8 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM797.866667 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM661.333333 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2z', // 虚线模式

      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      top: '20%',
      left: '13%',
      // right: '12%',
      bottom: '20%'
      // containLabel: false
    },
    xAxis: [
      {
        type: 'category',
        // name: '(天)',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d1e6eb'
          }
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        // axisLabel: {
        //   // 设置 interval
        //   interval: (index, value) => {
        //     return type.length > 12 ? index % Math.ceil(type.length / 12) === 0 : true;
        //   },
        //   color: '#d1e6eb'
        // },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: true,
        data: cnMonths
      }
    ],

    yAxis: {
      type: 'value',
      // name: '单位:元/吨',
      // splitNumber: 4,
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#d1e6eb'
        }
      },
      axisTick: {
        show: false
      },
      interval: (topvalue * 1.1 - lowvalue * 0.5).toFixed(0) / 4, // 手动设置刻度线间隔
      // splitLine: {
      //   lineStyle: {
      //     type: 'dashed',
      //     color: '#39608F'
      //   },

      // },
      min: (lowvalue * 0.5).toFixed(0), // 最小值
      max: (topvalue * 1.1).toFixed(0) // 最大值，根据实际情况调整
    },
    series: [
      {
        name: `市场价格`,
        type: 'line',
        // areaStyle: {},
        // stack: 'Total',
        symbol: 'diamond', // 这里将 'diamond' 改
        // smooth: true, //平滑
        // itemStyle: {
        //   borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        //     { offset: 0, color: 'rgba(110, 157, 255, 0)' },
        //     { offset: 0.25, color: 'rgba(255, 255, 255, 0)' },
        //     { offset: 0.5, color: 'rgba(255, 255, 255, 1)' },
        //     { offset: 0.75, color: 'rgba(110, 157, 255, 1)' },
        //     { offset: 1, color: 'rgba(110, 157, 255, 1)' }
        //   ]),
        //   borderWidth: 2
        // },
        lineStyle: {
          width: 2,
          color: '#6E9DFF'
        },
        // showSymbol: true,
        // areaStyle: {
        //   opacity: 0.8
        //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   //   {
        //   //     offset: 0,
        //   //     color: 'rgb(128, 255, 165)'
        //   //   },
        //   //   {
        //   //     offset: 1,
        //   //     color: 'rgb(1, 191, 236)'
        //   //   }
        //   // ])
        // },
        // emphasis: {
        //   focus: 'series'
        // },
        data: endPricesall
      },

      {
        name: '三年最高',
        type: 'scatter',
        show: false,
        // stack: 'Total',
        symbol: 'none', // 这里将 'diamond' 改
        smooth: true, //平滑
        lineStyle: {
          width: 2,
          color: 'rgba(0,0,0,0,)',
          type: 'dashed'
        },
        itemStyle: {
          // 设置柱状图的样式
          color: '#FF4829' // 指定柱状图的颜色
        },
        showSymbol: true,
        // areaStyle: {
        //   opacity: 0.8
        //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   //   {
        //   //     offset: 0,
        //   //     color: 'rgb(128, 255, 165)'
        //   //   },
        //   //   {
        //   //     offset: 1,
        //   //     color: 'rgb(1, 191, 236)'
        //   //   }
        //   // ])
        // },
        emphasis: {
          focus: 'series'
        },
        data: threeYearHigh
      },
      {
        name: '三年最低',
        type: 'scatter',
        show: false,
        // stack: 'Total',
        symbol: 'none', // 这里将 'diamond' 改
        smooth: true, //平滑
        itemStyle: {
          // 设置柱状图的样式
          color: '#FFCF16' // 指定柱状图的颜色
        },
        lineStyle: {
          width: 2,
          type: 'dashed',
          color: 'rgba(0,0,0,0,)'
        },
        showSymbol: true,
        // areaStyle: {
        //   opacity: 0.8
        //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   //   {
        //   //     offset: 0,
        //   //     color: 'rgb(128, 255, 165)'
        //   //   },
        //   //   {
        //   //     offset: 1,
        //   //     color: 'rgb(1, 191, 236)'
        //   //   }
        //   // ])
        // },
        emphasis: {
          focus: 'series'
        },
        data: threeYearLow
      }
    ]
  };
  if (endPrices2.length > 0) {
    option['series'].push(outPrice);
  }
  //////console.log(type, '555');
  // if (cnMonths.length > 6) {
  //   //////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////console.log(listnumber, '天数');

  //   let listoverstart = 0;
  //   let listoverend = 0;
  //   // if (listnumber < 25) {
  //   //   listoverstart = lastmouth - 25 + listnumber - 6;
  //   //   listoverend = lastmouth - 25 + listnumber - 1;
  //   //   // liststart = 0;
  //   //   // listend = 0;
  //   // }
  //   if (listnumber < 25) {
  //     listoverstart = lastmouth - 25 + listnumber - 6;
  //     listoverend = lastmouth - 25 + listnumber;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   if (listnumber >= 25) {
  //     listoverstart = 0;
  //     listoverend = 6;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   option.dataZoom = [
  //     //给x轴设置滚动条
  //     {
  //       type: 'slider', //slider表示有滑动块的，inside表示内置的
  //       startValue: 0, // 开始列的索引
  //       endValue: 12, // 结束列的索引
  //       maxValueSpan: 5, //显示数据的条数(默认显示10个)
  //       start: 0, //默认为0  可设置滚动条从在后进行展示
  //       end: 100, //默认为100
  //       show: true,
  //       xAxisIndex: [0],
  //       handleSize: 0, //滑动条的 左右2个滑动条的大小
  //       height: 2, //组件高度
  //       left: '5%', //左边的距离
  //       right: '5%', //右边的距离
  //       bottom: -2, //右边的距离
  //       borderColor: '#eee',
  //       fillerColor: '#E7E7E7',
  //       backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
  //       showDataShadow: false, //是否显示数据阴影 默认auto
  //       showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
  //       realtime: true, //是否实时更新
  //       filterMode: 'filter',
  //       handleStyle: {
  //         borderRadius: '20'
  //       }
  //     },
  //     //下面这个属性是里面拖到
  //     {
  //       type: 'inside',
  //       show: true,
  //       xAxisIndex: [0],
  //       start: 0, //默认为1
  //       end: 100, //默认为100
  //       moveOnMouseWheel: false,
  //       preventDefaultMouseMove: false
  //     }
  //   ];
  // } else {
  //   //////////console.log('mmm');
  //   delete option.dataZoom;
  // }

  return option;
};
export const getMiddleFirstecharts = (value, value2, type) => {
  // //////console.log(value2);
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////console.log(listnumber, 'oooooo');
  //   type = [listnumber];
  //   value = [0];
  //   value2 = [0];
  // }
  // if (value.length == 0 || value == null) {
  //   value = [0, 0, 0, 0, 0, 0];
  // }

  // const option = {
  //   backgroundColor: '',
  //   // tooltip: {
  //   //   trigger: 'axis',
  //   //   axisPointer: {
  //   //     lineStyle: {
  //   //       color: {
  //   //         type: 'linear',
  //   //         x: 0,
  //   //         y: 0,
  //   //         x2: 0,
  //   //         y2: 1,
  //   //         colorStops: [
  //   //           {
  //   //             offset: 0,
  //   //             color: 'rgba(0, 255, 233,0)'
  //   //           },
  //   //           {
  //   //             offset: 0.5,
  //   //             color: 'rgba(255, 255, 255,1)'
  //   //           },
  //   //           {
  //   //             offset: 1,
  //   //             color: 'rgba(0, 255, 233,0)'
  //   //           }
  //   //         ],
  //   //         global: false
  //   //       }
  //   //     }
  //   //   },
  //   //   renderMode: 'html',
  //   //   backgroundColor: 'rgba(15, 45, 83, 0.9)',
  //   //   borderWidth: 0,
  //   //   borderColor: 'rgba(15, 45, 83, 0.9)',
  //   //   textStyle: {
  //   //     color: '#fff'
  //   //   }
  //   //   // formatter: val => {
  //   //   //   const style =
  //   //   //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
  //   //   //   const tooltip = val
  //   //   //     .map(i => {
  //   //   //       const { seriesName, color, value } = i;
  //   //   //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
  //   //   //     })
  //   //   //     .join('<br />');
  //   //   //   return tooltip;
  //   //   // }
  //   // },
  //   legend: {
  //     data: ['镍钴粉', '氢氧化钴'],
  //     right: 10,
  //     top: 20,
  //     textStyle: {
  //       color: '#fff',
  //       fontSize: 2.4 * window.rem + 'px'
  //     }
  //   },
  //   // grid: {
  //   //   top: '20%',
  //   //   // left: '13%',
  //   //   // right: '12%',
  //   //   bottom: '16%'
  //   //   // containLabel: false
  //   // },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       // name: '(天)',
  //       axisLine: {
  //         show: true,
  //         lineStyle: {
  //           color: '#d1e6eb'
  //         }
  //       },
  //       splitArea: {
  //         color: '#f00',
  //         lineStyle: {
  //           color: '#f00'
  //         }
  //       },
  //       // axisLabel: {
  //       //   // 设置 interval
  //       //   interval: (index, value) => {
  //       //     return type.length > 12 ? index % Math.ceil(type.length / 12) === 0 : true;
  //       //   },
  //       //   color: '#d1e6eb'
  //       // },
  //       splitLine: {
  //         show: false
  //       },
  //       axisTick: {
  //         show: false
  //       },
  //       boundaryGap: true,
  //       data: type
  //     }
  //   ],

  //   yAxis: {
  //     type: 'value',
  //     name: '单位:t',
  //     splitNumber: 4,
  //     axisLine: {
  //       show: false, //y轴竖线去掉
  //       lineStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisLabel: {
  //       show: true,
  //       textStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     splitLine: {
  //       lineStyle: {
  //         type: 'dashed',
  //         color: '#39608F'
  //       }
  //     }
  //   },
  //   series: [
  //     {
  //       name: '镍钴粉',
  //       type: 'pie',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#6E9DFF'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value
  //     },
  //     {
  //       name: '氢氧化钴',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#21FFFF'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value2
  //     }
  //   ]
  // };
  let allsumin = 0;
  const servalue = [];
  let newvalue = [];
  if (value != null) {
    value.forEach(item => {
      allsumin += item.costValue;
    });

    newvalue = value.map(item => {
      servalue.push({ name: item.projectName, value: item.costValue });
      item.inProportion = ((item.costValue / allsumin) * 100).toFixed(2);
      return item;
    });
  }
  // var data5 = [
  //   { name: '直接材料', value: 20, amount: '2600万元' },
  //   { name: '辅助材料', value: 17, amount: '2500万元' },
  //   { name: '人工成本', value: 18, amount: '2400万元' },
  //   { name: '燃料动力', value: 20, amount: '2600万元' },
  //   { name: '折旧摊销', value: 20, amount: '2600万元' },
  //   { name: '制造费用', value: 20, amount: '2600万元' },
  //   { name: '期间费用', value: 20, amount: '2600万元' }
  // ];
  // //////console.log(window.rem, '111');
  var option = {
    // 图例放置在右侧
    legend: {
      type: 'scroll',
      pageIconSize: [10, 10], // 设置切换页图标的大小
      // pageButtonItemGap: 5,

      // pageIconSize: false, // 隐藏切换页图标
      orient: 'vertical',
      right: 0,
      top: 60,
      //inactiveColor: 'red', // 翻页按钮未激活状态颜色
      pageIconColor: '#3E88FF', // 翻页下一页的三角按钮颜色
      pageIconInactiveColor: '#333', // 翻页（即翻页到头时）按钮颜色
      height: 'auto', // 设置图例的高度为自适应
      // data: newvalue,
      pageTextStyle: {
        color: 'transparent' // 设置文本颜色为透明，隐藏文本内容
        // height: '10'
      },

      // pageButtonGap: 5,
      textStyle: {
        fontSize: 2.8 * window.rem + 'px',
        color: 'white'
      },
      // graphic: {
      //   elements: [
      //     {
      //       type: 'image',
      //       style: {
      //         image: 'your_image_url_here', // 图片的URL地址
      //         width: 100, // 图片宽度
      //         height: 100, // 图片高度
      //         x: 'center', // 图片的水平位置
      //         y: 'center' // 图片的垂直位置
      //       }
      //     }
      //   ]
      // },
      formatter: function(params) {
        var costValue = 0;
        var inProportion = 0;
        newvalue.map(item => {
          if (item.projectName == params) {
            costValue = isNull(item.costValue) ? 0 : item.costValue;
            inProportion = isNaN(item.inProportion) ? 0 : item.inProportion;
          }
        });
        return params + '   ' + inProportion + '% ' + '    ' + costValue + '元';
      }
    },
    // grid: {
    //   top: '20%',
    //   // left: '13%',
    //   // right: '12%',
    //   bottom: '16%'
    //   // containLabel: false
    // },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        // radius: ['50%', '70%'],
        label: {
          show: false,
          position: 'top'
        },
        emphasis: {
          label: {
            show: true,
            // fontSize: 2.4 * window.rem + 'px',
            fontWeight: 'bold',
            position: 'top',
            formatter: '{b}: {c}' // {b} 表示名称，{c} 表示值
          }
        },
        labelLine: {
          show: false
        },
        data: servalue
        // graphic: [
        //   {
        //     type: 'image',
        //     id: 'logo',
        //     left: 'center',
        //     top: 'center',
        //     z: 10,
        //     bounding: 'raw',
        //     origin: [75, 75], // 原点位置，与半径相等
        //     style: {
        //       image: Imageredio, // 图片的 URL
        //       width: 150,
        //       height: 150
        //     }
        //   }
        // ]
        // 其他配置项
      }
    ]
  };
  // //////console.log(type, '555');
  // if (type.length > 12) {
  //   //////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////console.log(listnumber, '天数');

  //   let listoverstart = 0;
  //   let listoverend = 0;
  //   // if (listnumber < 25) {
  //   //   listoverstart = lastmouth - 25 + listnumber - 6;
  //   //   listoverend = lastmouth - 25 + listnumber - 1;
  //   //   // liststart = 0;
  //   //   // listend = 0;
  //   // }
  //   if (listnumber < 25) {
  //     listoverstart = lastmouth - 25 + listnumber - 6;
  //     listoverend = lastmouth - 25 + listnumber;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   if (listnumber >= 25) {
  //     listoverstart = 0;
  //     listoverend = 6;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   option.dataZoom = [
  //     //给x轴设置滚动条
  //     {
  //       type: 'slider', //slider表示有滑动块的，inside表示内置的
  //       startValue: listoverstart, // 开始列的索引
  //       endValue: listoverend, // 结束列的索引
  //       // start: 0, //默认为0  可设置滚动条从在后进行展示
  //       // end: listend, //默认为100
  //       show: true,
  //       xAxisIndex: [0],
  //       handleSize: 0, //滑动条的 左右2个滑动条的大小
  //       height: 2, //组件高度
  //       left: '5%', //左边的距离
  //       right: '5%', //右边的距离
  //       bottom: -2, //右边的距离
  //       borderColor: '#eee',
  //       fillerColor: '#E7E7E7',
  //       backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
  //       showDataShadow: false, //是否显示数据阴影 默认auto
  //       showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
  //       realtime: true, //是否实时更新
  //       filterMode: 'filter',
  //       handleStyle: {
  //         borderRadius: '20'
  //       }
  //     },
  //     //下面这个属性是里面拖到
  //     {
  //       type: 'inside',
  //       show: true,
  //       xAxisIndex: [0],
  //       start: 0, //默认为1
  //       end: 100, //默认为100
  //       moveOnMouseWheel: false,
  //       preventDefaultMouseMove: false
  //     }
  //   ];
  // } else {
  //   //////////console.log('mmm');
  //   delete option.dataZoom;
  // }

  return option;
};
export const getMiddleFirstechartsb = (xData, SeriesData1, SeriesData2, dataIsEmpty) => {
  const YData = dataIsEmpty ? { min: 0, max: 120 } : {};
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      },
      renderMode: 'html',
      backgroundColor: 'rgba(15, 45, 83, 0.9)',
      borderWidth: 0,
      borderColor: 'rgba(15, 45, 83, 0.9)',
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      data: ['执行成本', '市场价格'],
      right: '5%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      left: '15%',
      top: '20%',
      bottom: '16%'
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d1e6eb'
          }
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: true,
        data: xData
      }
    ],

    yAxis: {
      type: 'value',
      ...YData,
      name: '单位:元',
      splitNumber: 4,
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#d1e6eb'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#39608F'
        }
      }
    },
    series: [
      {
        name: '执行成本',
        type: 'bar',
        symbol: 'diamond',
        smooth: true, //平滑
        lineStyle: {
          width: 2,
          color: '#21FFFF'
        },
        showSymbol: true,
        emphasis: {
          focus: 'series'
        },
        data: SeriesData1
      },
      {
        name: '市场价格',
        type: 'bar',
        symbol: 'diamond',
        smooth: true, //平滑
        lineStyle: {
          width: 2,
          color: '#6E9DFF'
        },
        showSymbol: true,
        emphasis: {
          focus: 'series'
        },
        data: SeriesData2
      }
    ]
  };

  if (xData.length > 12) {
    const listnumber = Number(moment(new Date()).format('DD'));
    const lastmouth = moment(new Date())
      .subtract(1, 'month')
      .daysInMonth();

    let listoverstart = 0;
    let listoverend = 0;
    if (listnumber < 25) {
      listoverstart = lastmouth - 25 + listnumber - 6;
      listoverend = lastmouth - 25 + listnumber;
    }
    if (listnumber >= 25) {
      listoverstart = 0;
      listoverend = 6;
    }
    option.dataZoom = [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        startValue: listoverstart, // 开始列的索引
        endValue: listoverend, // 结束列的索引
        // start: 0, //默认为0  可设置滚动条从在后进行展示
        // end: listend, //默认为100
        show: true,
        xAxisIndex: [0],
        handleSize: 0, //滑动条的 左右2个滑动条的大小
        height: 2, //组件高度
        left: '5%', //左边的距离
        right: '5%', //右边的距离
        bottom: -2, //右边的距离
        borderColor: '#eee',
        fillerColor: '#E7E7E7',
        backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        filterMode: 'filter',
        handleStyle: {
          borderRadius: '20'
        }
      },
      //下面这个属性是里面拖到
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0, //默认为1
        end: 100, //默认为100
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false
      }
    ];
  } else {
    ////console.log('mmm');
    delete option.dataZoom;
  }

  return option;
};
export const getMiddleSecendecharts = (xData, LegendData, SeriesData) => {
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      },
      renderMode: 'html',
      backgroundColor: 'rgba(15, 45, 83, 0.9)',
      borderWidth: 0,
      borderColor: 'rgba(15, 45, 83, 0.9)',
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      data: LegendData,
      right: '5%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      left: '15%',
      top: '20%',
      bottom: '16%'
    },
    xAxis: [
      {
        type: 'category',
        // name: '(天)',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d1e6eb'
          }
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: true,
        data: xData
      }
    ],

    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      interval: 25,
      name: '回收率:%',
      splitNumber: 4,
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#d1e6eb'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#39608F'
        }
      }
    },
    series: SeriesData
    // series: [
    //   {
    //     name: '硫酸钴',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#21FFFF'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value
    //   },
    //   {
    //     name: '硫酸锰',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#6E9DFF'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value2
    //   },
    //   {
    //     name: '硫酸镍',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#FFBA32'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value3
    //   },
    //   {
    //     name: '硫酸锂',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#31F6B8'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value4
    //   }
    // ]
  };

  if (xData.length > 12) {
    const listnumber = Number(moment(new Date()).format('DD'));
    const lastmouth = moment(new Date())
      .subtract(1, 'month')
      .daysInMonth();
    console.log(listnumber, '天数');

    let listoverstart = 0;
    let listoverend = 0;
    if (listnumber < 25) {
      listoverstart = lastmouth - 25 + listnumber - 6;
      listoverend = lastmouth - 25 + listnumber;
    }
    if (listnumber >= 25) {
      listoverstart = 0;
      listoverend = 6;
    }
    option.dataZoom = [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        startValue: listoverstart, // 开始列的索引
        endValue: listoverend, // 结束列的索引
        // start: 0, //默认为0  可设置滚动条从在后进行展示
        // end: listend, //默认为100
        show: true,
        xAxisIndex: [0],
        handleSize: 0, //滑动条的 左右2个滑动条的大小
        height: 2, //组件高度
        left: '5%', //左边的距离
        right: '5%', //右边的距离
        bottom: -2, //右边的距离
        borderColor: '#eee',
        fillerColor: '#E7E7E7',
        backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        filterMode: 'filter',
        handleStyle: {
          borderRadius: '20'
        }
      },
      //下面这个属性是里面拖到
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0, //默认为1
        end: 100, //默认为100
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false
      }
    ];
  } else {
    delete option.dataZoom;
  }

  return option;
};
export const getBottomRight2 = value => {
  const seriesLabel = {
    show: true,
    color: '#fff', //文字的颜色
    position: 'right', //文字的位置
    fontSize: 2.4 * window.rem + 'px'
  };
  const option = {
    tooltip: {
      trigger: 'axis', // 触发类型：坐标轴触发
      formatter: function(params) {
        let res = params[0].name + '<br/>';
        for (let i = 0; i < params.length; i++) {
          res += params[i].marker + params[i].seriesName + ': ' + params[i].value + '<br/>';
        }
        return res;
      }
    },
    xAxis: [
      {
        type: 'category',
        // name: '(月)',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d1e6eb'
          }
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        axisLabel: {
          color: '#fff'
          // formatter: function(value, index) {
          //   //////////console.log(index);
          //   if (index === 5) {
          //     return value + ' 单位';
          //   }
          //   return value;
          // }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: true
      }
    ],

    // xAxis: [
    //   {
    //     type: 'category',
    //     axisTick: {
    //       show: false // 不显示刻度线
    //     },
    //     axisLine: {
    //       // 自定义轴线样式
    //       show: true,
    //       lineStyle: {
    //         color: '#bfbfbf', // 设置轴线的颜色
    //         width: 1 // 设置轴线的宽度
    //       }
    //     },
    //     axisLabel: {
    //       show: false // 隐藏轴标签
    //     },

    //     axisLine: {
    //       show: true,
    //       lineStyle: {
    //         color: '#d1e6eb'
    //       }
    //     }
    //   }
    // ],
    yAxis: {
      type: 'value',
      name: '（吨）',
      splitNumber: 8, // 建议的刻度数量
      // min: 0, // 可以设置 y 轴的最小值
      // max: 140, // 可以设置 y 轴的最大值
      // data: [0, 20, 40, 60, 80, 100, 120, 140],
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      }
    },
    grid: {
      // top: '15%',
      left: '20%',
      // right: '12%',
      // bottom: '20%',
      containLabel: false
    },
    legend: {
      data: [`出矿量`],
      icon: 'path://M30 10 L50 30 L30 50 L10 30 Z', // 自定义图例图标为菱形
      right: 100, // 图例距离右边界10像素
      top: 0, // 图例距离上边界10像素
      textStyle: {
        color: 'white'
      }
    },
    series: [
      {
        name: `出矿量`,
        type: 'line',
        // stack: 'Total',
        symbol: 'diamond',
        smooth: true, //平滑
        lineStyle: {
          width: 2,
          color: '#6EE1FA'
        },
        showSymbol: false,
        // areaStyle: {
        //   opacity: 0.8
        //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   //   {
        //   //     offset: 0,
        //   //     color: 'rgb(128, 255, 165)'
        //   //   },
        //   //   {
        //   //     offset: 1,
        //   //     color: 'rgb(1, 191, 236)'
        //   //   }
        //   // ])
        // },
        emphasis: {
          focus: 'series'
        },
        data: value
      }
    ]
  };
  return option;
};
export const getMiddleThirdecharts = (value, value2, type) => {
  //////console.log(value, type);
  // //////console.log(value2);
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////console.log(listnumber, 'oooooo');
  //   type = [listnumber];
  //   value = [0];
  //   value2 = [0];
  // }
  // if (value.length == 0 || value == null) {
  //   value = [0, 0, 0, 0, 0, 0];
  // }

  // const option = {
  //   backgroundColor: '',
  //   // tooltip: {
  //   //   trigger: 'axis',
  //   //   axisPointer: {
  //   //     lineStyle: {
  //   //       color: {
  //   //         type: 'linear',
  //   //         x: 0,
  //   //         y: 0,
  //   //         x2: 0,
  //   //         y2: 1,
  //   //         colorStops: [
  //   //           {
  //   //             offset: 0,
  //   //             color: 'rgba(0, 255, 233,0)'
  //   //           },
  //   //           {
  //   //             offset: 0.5,
  //   //             color: 'rgba(255, 255, 255,1)'
  //   //           },
  //   //           {
  //   //             offset: 1,
  //   //             color: 'rgba(0, 255, 233,0)'
  //   //           }
  //   //         ],
  //   //         global: false
  //   //       }
  //   //     }
  //   //   },
  //   //   renderMode: 'html',
  //   //   backgroundColor: 'rgba(15, 45, 83, 0.9)',
  //   //   borderWidth: 0,
  //   //   borderColor: 'rgba(15, 45, 83, 0.9)',
  //   //   textStyle: {
  //   //     color: '#fff'
  //   //   }
  //   //   // formatter: val => {
  //   //   //   const style =
  //   //   //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
  //   //   //   const tooltip = val
  //   //   //     .map(i => {
  //   //   //       const { seriesName, color, value } = i;
  //   //   //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
  //   //   //     })
  //   //   //     .join('<br />');
  //   //   //   return tooltip;
  //   //   // }
  //   // },
  //   legend: {
  //     data: ['镍钴粉', '氢氧化钴'],
  //     right: 10,
  //     top: 20,
  //     textStyle: {
  //       color: '#fff',
  //       fontSize: 2.4 * window.rem + 'px'
  //     }
  //   },
  //   // grid: {
  //   //   top: '20%',
  //   //   // left: '13%',
  //   //   // right: '12%',
  //   //   bottom: '16%'
  //   //   // containLabel: false
  //   // },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       // name: '(天)',
  //       axisLine: {
  //         show: true,
  //         lineStyle: {
  //           color: '#d1e6eb'
  //         }
  //       },
  //       splitArea: {
  //         color: '#f00',
  //         lineStyle: {
  //           color: '#f00'
  //         }
  //       },
  //       // axisLabel: {
  //       //   // 设置 interval
  //       //   interval: (index, value) => {
  //       //     return type.length > 12 ? index % Math.ceil(type.length / 12) === 0 : true;
  //       //   },
  //       //   color: '#d1e6eb'
  //       // },
  //       splitLine: {
  //         show: false
  //       },
  //       axisTick: {
  //         show: false
  //       },
  //       boundaryGap: true,
  //       data: type
  //     }
  //   ],

  //   yAxis: {
  //     type: 'value',
  //     name: '单位:t',
  //     splitNumber: 4,
  //     axisLine: {
  //       show: false, //y轴竖线去掉
  //       lineStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisLabel: {
  //       show: true,
  //       textStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     splitLine: {
  //       lineStyle: {
  //         type: 'dashed',
  //         color: '#39608F'
  //       }
  //     }
  //   },
  //   series: [
  //     {
  //       name: '镍钴粉',
  //       type: 'pie',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#6E9DFF'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value
  //     },
  //     {
  //       name: '氢氧化钴',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#21FFFF'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value2
  //     }
  //   ]
  // };
  console.log(value, 'wowoowowowo');
  const newvalueX = [];
  const newvalueex = [];
  const newvaluean = [];
  const newvalueex2 = [];
  const newvaluean2 = [];
  const newvalueex3 = {};
  const newvaluean3 = {};
  value.forEach(item => {
    newvaluean.push(((item.annual / item.annual) * 100).toFixed(0));
    newvalueex.push(((item.reality / item.annual) * 100).toFixed(2));
    newvaluean2.push(item.annual);
    newvalueex2.push(item.reality);
    newvaluean3[item.projectName] = item.annual;
    newvalueex3[item.projectName] = item.reality;
    // newvalueex3.push(item.reality);
    newvalueX.push(item.projectName);
  });
  // //console.log(newreality2, newrealvaluezhanshi, '<<<<');
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      },
      renderMode: 'html',
      backgroundColor: 'rgba(15, 45, 83, 0.9)',
      borderWidth: 0,
      borderColor: 'rgba(15, 45, 83, 0.9)',
      textStyle: {
        color: '#fff'
      },
      formatter: function(params) {
        // console.log(params);
        let content = '';
        let name = '';

        // let value = 500;
        params.forEach(function(item) {
          console.log(item, '*****');
          name = item.axisValue;
          if (item.seriesName == '实际') {
            content +=
              item.marker + item.seriesName + '：' + newvalueex3[item.axisValue] + '吨' + '<br>';
          } else {
            content +=
              item.marker + item.seriesName + '：' + newvaluean3[item.axisValue] + '吨' + '<br>';
          }

          // if (value < 0) {
          //   item.value = 0;
          // }
          //console.log(newrealvaluezhanshiquanyuji, '--++');
          // for (const key in newrealvaluezhanshi) {
          //   //console.log(item.seriesName, '--++');
          //   if (key === item.seriesName) {
          //     value = 0;
          //   }
          // }
          // console.log(name, content); // formatter: params => {)
          // formatter: params => {
          //   params.forEach(item => {
          //     return item.marker + item.seriesName + ':' + item.data + '%';
          //   });
          // }
        });
        return name + '<br>' + content;
      }
      // formatter: val => {
      //   const style =
      //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
      //   const tooltip = val
      //     .map(i => {
      //       const { seriesName, color, value } = i;
      //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
      //     })
      //     .join('<br />');
      //   return tooltip;
      // }
    },
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     lineStyle: {
    //       color: {
    //         type: 'linear',
    //         x: 0,
    //         y: 0,
    //         x2: 0,
    //         y2: 1,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: 'rgba(0, 255, 233,0)'
    //           },
    //           {
    //             offset: 0.5,
    //             color: 'rgba(255, 255, 255,1)'
    //           },
    //           {
    //             offset: 1,
    //             color: 'rgba(0, 255, 233,0)'
    //           }
    //         ],
    //         global: false
    //       }
    //     }
    //   },
    //   renderMode: 'html',
    //   backgroundColor: 'rgba(15, 45, 83, 0.9)',
    //   borderWidth: 0,
    //   borderColor: 'rgba(15, 45, 83, 0.9)',
    //   textStyle: {
    //     color: '#fff'
    //   },
    //   formatter: function(params) {
    //     // console.log(params);
    //     let content = '';
    //     let name = '';
    //     // let value = 500;
    //     params.forEach(function(item) {
    //       // console.log(item, '*****');
    //       name = item.axisValue;
    //       content = item.marker + item.seriesName + ':' + item.value + '%';
    //       // if (value < 0) {
    //       //   item.value = 0;
    //       // }
    //       //console.log(newrealvaluezhanshiquanyuji, '--++');
    //       // for (const key in newrealvaluezhanshi) {
    //       //   //console.log(item.seriesName, '--++');
    //       //   if (key === item.seriesName) {
    //       //     value = 0;
    //       //   }
    //       // }
    //       // console.log(name, content); // formatter: params => {)
    //       return name + '<br>' + content; // formatter: params => {
    //       //   params.forEach(item => {
    //       //     return item.marker + item.seriesName + ':' + item.data + '%';
    //       //   });
    //       // }
    //     });
    //   }
    // },
    legend: {
      data: ['全年', '实际'],
      right: '5%',
      // top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      top: '20%',
      left: '13%',
      // right: '12%',
      bottom: '25%'
      // containLabel: false
    },
    xAxis: {
      type: 'category',
      splitNumber: 6,
      // name: '%',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      splitArea: {
        color: '#f00',
        lineStyle: {
          color: '#f00'
        }
      },
      axisLabel: {
        interval: 0, // 显示所有标签
        rotate: -45, // 旋转标签为45度
        // margin: 20, // 增加标签之间的距离
        color: '#d1e6eb'
      },
      data: newvalueX,
      // axisLabel: {
      //   // 设置 interval
      //   interval: (index, value) => {
      //     return type.length > 12 ? index % Math.ceil(type.length / 12) === 0 : true;
      //   },
      //   color: '#d1e6eb'
      // },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      boundaryGap: true
      // axisLabel: {
      //   show: true,
      //   color: '#d1e6eb',
      //   // formatter: function(value, index) {
      //   //   // // 您可以在这里自定义 X 轴显示的标签内容
      //   //   // const customLabels = [0, 20, 40, 60, 80, 100, 120, 140]; // 您希望显示的数据
      //   //   return value + '%'; // 返回自定义标签值
      //   // },
      //   interval: -1 // 让 ECharts 自动计算最佳的标签间隔
      // }
      // data: [20, 20, 20, 20, 20]
    },

    yAxis: {
      type: 'value',
      show: false,
      // name: '单位:吨',
      // splitNumber: 6,
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#d1e6eb'
        },
        formatter: function(value, index) {
          // // 您可以在这里自定义 X 轴显示的标签内容
          // const customLabels = [0, 20, 40, 60, 80, 100, 120, 140]; // 您希望显示的数据
          return value + '%'; // 返回自定义标签值
        },
        interval: -1 // 让 ECharts 自动计算最佳的标签间隔
      },
      // axisLabel: {
      //   show: true,
      //   color: '#d1e6eb',
      //   formatter: function(value, index) {
      //     // // 您可以在这里自定义 X 轴显示的标签内容
      //     // const customLabels = [0, 20, 40, 60, 80, 100, 120, 140]; // 您希望显示的数据
      //     return value + '%'; // 返回自定义标签值
      //   },
      //   interval: -1 // 让 ECharts 自动计算最佳的标签间隔
      // },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#39608F'
        }
      }
      // data: newY
    },
    series: [
      {
        name: '全年',
        type: 'bar',
        // stack: 'Total',
        symbol: 'diamond',
        barGap: '80%', // 设置柱形图之间的间隙
        smooth: true, //平滑
        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度
        clickable: true,
        // onclick: function(params) {
        //   // 在这里实现点击事件的逻辑
        //   //console.log('点击了实际系列');
        // },
        lineStyle: {
          width: 2,
          color: '#31F6B8'
        },
        itemStyle: {
          // 设置柱状图的样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#6E9DFF' },
            { offset: 1, color: 'rgba(110,157,255,0.3)' }
          ])
        },
        label: {
          show: false, // 显示数据标签
          position: 'top', // 数据标签显示位置，可以根据需求调整
          color: 'white' // 数据标签文字颜色
          // formatter: function(params) {
          //   ////console.log(newannualprice, params);
          //   // params.value 是当前柱状图的值
          //   // 这里可以根据需要返回一个新的值作为数据标签
          //   // const customData = [50, 60, 70, 90, 150]; // 新的数据数组

          //   return newvaluean2[params.dataIndex].toFixed(2) + '万';
          // }
          // formatter: function(params) {
          //   ////console.log(newannualprice, params);
          //   // params.value 是当前柱状图的值
          //   // 这里可以根据需要返回一个新的值作为数据标签
          //   // const customData = [50, 60, 70, 90, 150]; // 新的数据数组

          //   return newannualprice[params.dataIndex].toFixed(2) + '万';
          // }
        },

        // itemStyle: {
        //   // 设置柱状图的样式
        //   color: '#6E9DFF;' // 指定柱状图的颜色
        // },
        showSymbol: true,
        // areaStyle: {
        //   opacity: 0.8
        //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   //   {
        //   //     offset: 0,
        //   //     color: 'rgb(128, 255, 165)'
        //   //   },
        //   //   {
        //   //     offset: 1,
        //   //     color: 'rgb(1, 191, 236)'
        //   //   }
        //   // ])
        // },
        emphasis: {
          focus: 'series'
        },
        data: newvaluean
      },
      // {
      //   name: '阶段',
      //   type: 'bar',
      //   // stack: 'Total',
      //   symbol: 'diamond',
      //   barGap: '80%', // 设置柱形图之间的间隙
      //   smooth: true, //平滑
      //   lineStyle: {
      //     width: 2,
      //     color: '#31F6B8'
      //   },
      //   barWidth: 10, // 减小柱形图的宽度
      //   barHeight: 10, // 减小柱形图的高度
      //   itemStyle: {
      //     // 设置柱状图的样式
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //       { offset: 0, color: 'rgba(41,219,227,0.3)' },
      //       { offset: 1, color: '#6EE0FF' }
      //     ])
      //   },
      //   showSymbol: true,
      //   label: {
      //     show: true, // 显示数据标签
      //     position: 'right', // 数据标签显示位置，可以根据需求调整
      //     color: 'white', // 数据标签文字颜色
      //     formatter: function(params) {
      //       // params.value 是当前柱状图的值
      //       // 这里可以根据需要返回一个新的值作为数据标签
      //       // const customData = [50, 60, 70, 90, 150]; // 新的数据数组
      //       // if () {

      //       // }

      //       return newexpectedprice[params.dataIndex].toFixed(2) + '万';
      //     }
      //   },

      //   //   opacity: 0.8
      //   //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //   //   //   {
      //   //   //     offset: 0,
      //   //   //     color: 'rgb(128, 255, 165)'
      //   //   //   },
      //   //   //   {
      //   //   //     offset: 1,
      //   //   //     color: 'rgb(1, 191, 236)'
      //   //   //   }
      //   //   // ])
      //   // },
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: newexpected2
      // },
      {
        name: '实际',
        type: 'bar',
        // stack: 'Total',
        symbol: 'diamond',
        barGap: '80%', // 设置柱形图之间的间隙
        smooth: true, //平滑
        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度
        clickable: true,
        onclick: function(params) {
          // 在这里实现点击事件的逻辑
          //console.log('点击了实际系列');
        },
        lineStyle: {
          width: 2,
          color: '#31F6B8'
        },
        itemStyle: {
          // 设置柱状图的样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#21FFFF' },
            { offset: 1, color: 'rgba(30,231,231,0.3)' }
          ])
        },
        label: {
          show: false, // 显示数据标签
          position: 'top', // 数据标签显示位置，可以根据需求调整
          color: 'white' // 数据标签文字颜色
          // formatter: function(params) {
          //   ////console.log(newannualprice, params);
          //   // params.value 是当前柱状图的值
          //   // 这里可以根据需要返回一个新的值作为数据标签
          //   // const customData = [50, 60, 70, 90, 150]; // 新的数据数组

          //   return newvalueex2[params.dataIndex].toFixed(2) + '万';
          // }
          // formatter: function(params) {
          //   //console.log(params.name, '//////');
          //   ////console.log(newrealityprice, params);
          //   // params.value 是当前柱状图的值
          //   // 这里可以根据需要返回一个新的值作为数据标签
          //   // const customData = [50, 60, 70, 90, 150]; // 新的数据数组
          //   if (params.name == '营收' || params.name == '利润') {
          //     return newrealityprice[params.dataIndex].toFixed(2) + '万';
          //   }

          //   return newrealityprice[params.dataIndex].toFixed(2) + '吨';
          // }
        },
        // itemStyle: {
        //   // 设置柱状图的样式
        //   color: '#6E9DFF;' // 指定柱状图的颜色
        // },
        showSymbol: true,
        // areaStyle: {
        //   opacity: 0.8
        //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   //   {
        //   //     offset: 0,
        //   //     color: 'rgb(128, 255, 165)'
        //   //   },
        //   //   {
        //   //     offset: 1,
        //   //     color: 'rgb(1, 191, 236)'
        //   //   }
        //   // ])
        // },
        emphasis: {
          focus: 'series'
        },
        data: newvalueex
      }

      // {
      //   name: '氢氧化钴',
      //   type: 'line',
      //   // stack: 'Total',
      //   symbol: 'diamond',
      //   smooth: true, //平滑
      //   lineStyle: {
      //     width: 2,
      //     color: '#21FFFF'
      //   },
      //   showSymbol: true,
      //   // areaStyle: {
      //   //   opacity: 0.8
      //   //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //   //   //   {
      //   //   //     offset: 0,
      //   //   //     color: 'rgb(128, 255, 165)'
      //   //   //   },
      //   //   //   {
      //   //   //     offset: 1,
      //   //   //     color: 'rgb(1, 191, 236)'
      //   //   //   }
      //   //   // ])
      //   // },
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: value2
      // }
    ]
  };
  //////console.log(type, '555');
  if (newvalueX.length > 6) {
    //////console.log('aaa');

    option.dataZoom = [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        maxValueSpan: 4, //显示数据的条数(默认显示10个)
        // start: 0, //默认为0  可设置滚动条从在后进行展示
        // end: listend, //默认为100
        show: true,
        xAxisIndex: [0],
        handleSize: 0, //滑动条的 左右2个滑动条的大小
        height: 2, //组件高度
        left: '5%', //左边的距离
        right: '5%', //右边的距离
        bottom: -2, //右边的距离
        borderColor: '#eee',
        fillerColor: '#E7E7E7',
        backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        filterMode: 'filter',
        handleStyle: {
          borderRadius: '20'
        }
      },
      //下面这个属性是里面拖到
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0, //默认为1
        end: 100, //默认为100
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false
      }
    ];
  } else {
    //////////console.log('mmm');
    delete option.dataZoom;
  }
  return option;
};
export const getRightFirstecharts = (value, value2, value3, value4, type) => {
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////console.log(listnumber, 'oooooo');
  //   type = [listnumber];
  //   value = [0];
  //   value2 = [0];
  // }
  // if (value.length == 0 || value == null) {
  //   value = [0, 0, 0, 0, 0, 0];
  // }

  // const option = {
  //   backgroundColor: '',
  //   tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {
  //       lineStyle: {
  //         color: {
  //           type: 'linear',
  //           x: 0,
  //           y: 0,
  //           x2: 0,
  //           y2: 1,
  //           colorStops: [
  //             {
  //               offset: 0,
  //               color: 'rgba(0, 255, 233,0)'
  //             },
  //             {
  //               offset: 0.5,
  //               color: 'rgba(255, 255, 255,1)'
  //             },
  //             {
  //               offset: 1,
  //               color: 'rgba(0, 255, 233,0)'
  //             }
  //           ],
  //           global: false
  //         }
  //       }
  //     },
  //     renderMode: 'html',
  //     backgroundColor: 'rgba(15, 45, 83, 0.9)',
  //     borderWidth: 0,
  //     borderColor: 'rgba(15, 45, 83, 0.9)',
  //     textStyle: {
  //       color: '#fff'
  //     }
  //     // formatter: val => {
  //     //   const style =
  //     //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
  //     //   const tooltip = val
  //     //     .map(i => {
  //     //       const { seriesName, color, value } = i;
  //     //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
  //     //     })
  //     //     .join('<br />');
  //     //   return tooltip;
  //     // }
  //   },
  //   legend: {
  //     data: ['硫酸钴', '硫酸锰', '硫酸镍', '硫酸锂'],
  //     right: '5%',
  //     top: '5%',
  //     textStyle: {
  //       color: '#fff',
  //       fontSize: 2.4 * window.rem + 'px'
  //     }
  //   },
  //   grid: {
  //     top: '20%',
  //     // left: '13%',
  //     // right: '12%',
  //     bottom: '16%'
  //     // containLabel: false
  //   },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       // name: '(天)',
  //       axisLine: {
  //         show: true,
  //         lineStyle: {
  //           color: '#d1e6eb'
  //         }
  //       },
  //       splitArea: {
  //         color: '#f00',
  //         lineStyle: {
  //           color: '#f00'
  //         }
  //       },
  //       // axisLabel: {
  //       //   // 设置 interval
  //       //   interval: (index, value) => {
  //       //     return type.length > 12 ? index % Math.ceil(type.length / 12) === 0 : true;
  //       //   },
  //       //   color: '#d1e6eb'
  //       // },
  //       splitLine: {
  //         show: false
  //       },
  //       axisTick: {
  //         show: false
  //       },
  //       boundaryGap: true,
  //       data: type
  //     }
  //   ],

  //   yAxis: {
  //     type: 'value',
  //     name: '单位:t',
  //     splitNumber: 4,
  //     axisLine: {
  //       show: false, //y轴竖线去掉
  //       lineStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisLabel: {
  //       show: true,
  //       textStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     splitLine: {
  //       lineStyle: {
  //         type: 'dashed',
  //         color: '#39608F'
  //       }
  //     }
  //   },
  //   series: [
  //     {
  //       name: '硫酸钴',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#2DE7E7'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value
  //     },
  //     {
  //       name: '硫酸锰',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#FF6C32'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value2
  //     },
  //     {
  //       name: '硫酸镍',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#FFBA32'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value3
  //     },
  //     {
  //       name: '硫酸锂',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#6E9DFF'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value4
  //     }
  //   ]
  // };
  // //////console.log(type, '555');
  // if (type.length > 12) {
  //   //////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////console.log(listnumber, '天数');

  //   let listoverstart = 0;
  //   let listoverend = 0;
  //   // if (listnumber < 25) {
  //   //   listoverstart = lastmouth - 25 + listnumber - 6;
  //   //   listoverend = lastmouth - 25 + listnumber - 1;
  //   //   // liststart = 0;
  //   //   // listend = 0;
  //   // }
  //   if (listnumber < 25) {
  //     listoverstart = lastmouth - 25 + listnumber - 6;
  //     listoverend = lastmouth - 25 + listnumber;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   if (listnumber >= 25) {
  //     listoverstart = 0;
  //     listoverend = 6;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   option.dataZoom = [
  //     //给x轴设置滚动条
  //     {
  //       type: 'slider', //slider表示有滑动块的，inside表示内置的
  //       startValue: listoverstart, // 开始列的索引
  //       endValue: listoverend, // 结束列的索引
  //       // start: 0, //默认为0  可设置滚动条从在后进行展示
  //       // end: listend, //默认为100
  //       show: true,
  //       xAxisIndex: [0],
  //       handleSize: 0, //滑动条的 左右2个滑动条的大小
  //       height: 2, //组件高度
  //       left: '5%', //左边的距离
  //       right: '5%', //右边的距离
  //       bottom: -2, //右边的距离
  //       borderColor: '#eee',
  //       fillerColor: '#E7E7E7',
  //       backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
  //       showDataShadow: false, //是否显示数据阴影 默认auto
  //       showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
  //       realtime: true, //是否实时更新
  //       filterMode: 'filter',
  //       handleStyle: {
  //         borderRadius: '20'
  //       }
  //     },
  //     //下面这个属性是里面拖到
  //     {
  //       type: 'inside',
  //       show: true,
  //       xAxisIndex: [0],
  //       start: 0, //默认为1
  //       end: 100, //默认为100
  //       moveOnMouseWheel: false,
  //       preventDefaultMouseMove: false
  //     }
  //   ];
  // } else {
  //   //////////console.log('mmm');
  //   delete option.dataZoom;
  // }
  const color = [];
  const servalue = [];
  console.log(value, '利润饼状图');
  value.sort((a, b) => {
    return a.profitValue - b.profitValue;
  });
  const newvalue = value.filter(item => {
    if (item.companyName != '总利润' && item.profitValue > 0) {
      color.push(item.profitColor);
      servalue.push({
        name: item.companyName,
        value: Number(item.profitValue).toFixed(0)
      });
    }
    return item.companyName != '总利润' && item.profitValue > 0;
  });
  console.log(color, '利润饼状图颜色');
  // //console.log(servalue, '9999');
  // var data4 = [
  //   { name: '利润1', value: 20, amount: '2600万元' },
  //   { name: '利润2', value: 17, amount: '2500万元' },
  //   { name: '利润3', value: 18, amount: '2400万元' },
  //   { name: '利润4', value: 20, amount: '2600万元' },
  //   { name: '利润5', value: 20, amount: '2600万元' }
  // ];
  // //////console.log(window.rem, '111');
  var option = {
    // 图例放置在右侧
    // legend: {
    //   type: 'scroll',
    //   orient: 'vertical',
    //   pageIconSize: [10, 10], // 设置切换页图标的大小
    //   right: 0,
    //   top: 70,
    //   height: 'auto',
    //   //inactiveColor: 'red', // 翻页按钮未激活状态颜色
    //   pageIconColor: '#3E88FF', // 翻页下一页的三角按钮颜色
    //   pageIconInactiveColor: '#333', // 翻页（即翻页到头时）按钮颜色
    //   pageTextStyle: {
    //     color: 'transparent' // 设置文本颜色为透明，隐藏文本内容
    //     // height: '10'
    //   },
    //   // data: newvalue,
    //   formatter: function(params) {
    //     var profitValue = 0;
    //     var profitProportion = 0;
    //     // //console.log(newvalue, '*****');

    //     newvalue.map(item => {
    //       if (item.companyName == params) {
    //         profitValue = item.profitValue;
    //         profitProportion = item.profitProportion == null ? 0 : item.profitProportion;
    //       }
    //     });
    //     return params + '   ' + profitProportion + '% ' + '  ' + profitValue;
    //     // const a = data5.map(item => {
    //     //   return item.name + ' ' + item.value + '% ' + item.amount;
    //     // });
    //     // return a;
    //   },
    //   textStyle: {
    //     fontSize: 3 * window.rem + 'px',
    //     color: 'white'
    //   }
    //   // graphic: {
    //   //   elements: [
    //   //     {
    //   //       type: 'image',
    //   //       style: {
    //   //         image: 'your_image_url_here', // 图片的URL地址
    //   //         width: 100, // 图片宽度
    //   //         height: 100, // 图片高度
    //   //         x: 'center', // 图片的水平位置
    //   //         y: 'center' // 图片的垂直位置
    //   //       }
    //   //     }
    //   //   ]
    //   // },
    // },

    // grid: {
    //   top: '20%',
    //   // left: '13%',
    //   // right: '12%',
    //   bottom: '16%'
    //   // containLabel: false
    // },
    series: [
      {
        name: '利润',
        type: 'pie',
        radius: ['50%', '70%'],
        color: color,
        // label: {
        //   show: false,
        //   position: 'top'
        // },
        // emphasis: {
        //   label: {
        //     show: true,
        //     // fontSize: 2.4 * window.rem + 'px',
        //     fontWeight: 'bold',
        //     position: 'top',
        //     formatter: '{b}: {c}' // {b} 表示名称，{c} 表示值
        //   }
        // },
        // labelLine: {
        //   show: false
        // },
        label: {
          normal: {
            position: 'outside',
            // formatter: '{bb|{b}}\n{dd|{d}%}',
            formatter: params => {
              // //console.log(params, '????');
              // if (params.name !== '') {
              //   // return `{name|${name}: ${params.value} 万元}` + `\n占比{value|${params.percent === undefined ? 0 : params.percent}%}`
              // }
              return `{name|${params.name}: ${params.value} }` + `\n占比{value|${params.percent}%}`;
              // return + '  ' +  + '%' + '  ' + ;
            },
            textStyle: {
              color: '#FFFFFF',
              fontWeight: 'normal',
              fontSize: 2.4 * window.rem + 'px'
            },
            rich: {
              bb: {
                fontWeight: 'normal',
                align: 'center',
                fontSize: 2.4 * window.rem + 'px'
              },
              dd: {
                fontWeight: 'normal',
                align: 'center',
                fontSize: 2.4 * window.rem + 'px'
              }
            }
          }
        },
        data: servalue
        // graphic: [
        //   {
        //     type: 'image',
        //     id: 'logo',
        //     left: 'center',
        //     top: 'center',
        //     z: 10,
        //     bounding: 'raw',
        //     origin: [75, 75], // 原点位置，与半径相等
        //     style: {
        //       // image: Imageredio, // 图片的 URL
        //       width: 150,
        //       height: 150
        //     }
        //   }
        // ]
        // 其他配置项
      }
    ]
  };
  return option;
};
export const getRightFirstechartsb = (xData, LegendData, SeriesData) => {
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      },
      renderMode: 'html',
      backgroundColor: 'rgba(15, 45, 83, 0.9)',
      borderWidth: 0,
      borderColor: 'rgba(15, 45, 83, 0.9)',
      textStyle: {
        color: '#fff'
      }
      // formatter: val => {
      //   const style =
      //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
      //   const tooltip = val
      //     .map(i => {
      //       const { seriesName, color, value } = i;
      //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
      //     })
      //     .join('<br />');
      //   return tooltip;
      // }
    },
    legend: {
      data: LegendData,
      right: '5%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      left: '15%',
      top: '20%',
      bottom: '16%'
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d1e6eb'
          }
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: true,
        data: xData
      }
    ],

    yAxis: {
      type: 'value',
      // name: '单位:元',
      splitNumber: 4,
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#d1e6eb'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#39608F'
        }
      }
    },
    series: SeriesData
    // series: [
    //   {
    //     name: '水电气',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#31F6B8'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value
    //   }
    //   // {
    //   //   name: '氢氧化钴',
    //   //   type: 'line',
    //   //   // stack: 'Total',
    //   //   symbol: 'diamond',
    //   //   smooth: true, //平滑
    //   //   lineStyle: {
    //   //     width: 2,
    //   //     color: '#21FFFF'
    //   //   },
    //   //   showSymbol: true,
    //   //   // areaStyle: {
    //   //   //   opacity: 0.8
    //   //   //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //   //   //   //   {
    //   //   //   //     offset: 0,
    //   //   //   //     color: 'rgb(128, 255, 165)'
    //   //   //   //   },
    //   //   //   //   {
    //   //   //   //     offset: 1,
    //   //   //   //     color: 'rgb(1, 191, 236)'
    //   //   //   //   }
    //   //   //   // ])
    //   //   // },
    //   //   emphasis: {
    //   //     focus: 'series'
    //   //   },
    //   //   data: value2
    //   // }
    // ]
  };

  if (xData.length > 12) {
    const listnumber = Number(moment(new Date()).format('DD'));
    const lastmouth = moment(new Date())
      .subtract(1, 'month')
      .daysInMonth();
    let listoverstart = 0;
    let listoverend = 0;

    if (listnumber < 25) {
      listoverstart = lastmouth - 25 + listnumber - 6;
      listoverend = lastmouth - 25 + listnumber;
      // liststart = 0;
      // listend = 0;
    }
    if (listnumber >= 25) {
      listoverstart = 0;
      listoverend = 6;
      // liststart = 0;
      // listend = 0;
    }
    option.dataZoom = [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        startValue: listoverstart, // 开始列的索引
        endValue: listoverend, // 结束列的索引
        // start: 0, //默认为0  可设置滚动条从在后进行展示
        // end: listend, //默认为100
        show: true,
        xAxisIndex: [0],
        handleSize: 0, //滑动条的 左右2个滑动条的大小
        height: 2, //组件高度
        left: '5%', //左边的距离
        right: '5%', //右边的距离
        bottom: -2, //右边的距离
        borderColor: '#eee',
        fillerColor: '#E7E7E7',
        backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        filterMode: 'filter',
        handleStyle: {
          borderRadius: '20'
        }
      },
      //下面这个属性是里面拖到
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0, //默认为1
        end: 100, //默认为100
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false
      }
    ];
  } else {
    delete option.dataZoom;
  }

  return option;
};
export const getRightThirdecharts = (value, value2, type) => {
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////console.log(listnumber, 'oooooo');
  //   type = [listnumber];
  //   value = [0];
  //   value2 = [0];
  // }
  // if (value.length == 0 || value == null) {
  //   value = [0, 0, 0, 0, 0, 0];
  // }

  // const option = {
  //   backgroundColor: '',
  //   tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {
  //       lineStyle: {
  //         color: {
  //           type: 'linear',
  //           x: 0,
  //           y: 0,
  //           x2: 0,
  //           y2: 1,
  //           colorStops: [
  //             {
  //               offset: 0,
  //               color: 'rgba(0, 255, 233,0)'
  //             },
  //             {
  //               offset: 0.5,
  //               color: 'rgba(255, 255, 255,1)'
  //             },
  //             {
  //               offset: 1,
  //               color: 'rgba(0, 255, 233,0)'
  //             }
  //           ],
  //           global: false
  //         }
  //       }
  //     },
  //     renderMode: 'html',
  //     backgroundColor: 'rgba(15, 45, 83, 0.9)',
  //     borderWidth: 0,
  //     borderColor: 'rgba(15, 45, 83, 0.9)',
  //     textStyle: {
  //       color: '#fff'
  //     }
  //     // formatter: val => {
  //     //   const style =
  //     //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
  //     //   const tooltip = val
  //     //     .map(i => {
  //     //       const { seriesName, color, value } = i;
  //     //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
  //     //     })
  //     //     .join('<br />');
  //     //   return tooltip;
  //     // }
  //   },
  //   legend: {
  //     data: ['硫酸钴', '硫酸锰', '硫酸镍', '硫酸锂'],
  //     right: '5%',
  //     top: '5%',
  //     textStyle: {
  //       color: '#fff',
  //       fontSize: 2.4 * window.rem + 'px'
  //     }
  //   },
  //   grid: {
  //     top: '20%',
  //     // left: '13%',
  //     // right: '12%',
  //     bottom: '16%'
  //     // containLabel: false
  //   },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       // name: '(天)',
  //       axisLine: {
  //         show: true,
  //         lineStyle: {
  //           color: '#d1e6eb'
  //         }
  //       },
  //       splitArea: {
  //         color: '#f00',
  //         lineStyle: {
  //           color: '#f00'
  //         }
  //       },
  //       // axisLabel: {
  //       //   // 设置 interval
  //       //   interval: (index, value) => {
  //       //     return type.length > 12 ? index % Math.ceil(type.length / 12) === 0 : true;
  //       //   },
  //       //   color: '#d1e6eb'
  //       // },
  //       splitLine: {
  //         show: false
  //       },
  //       axisTick: {
  //         show: false
  //       },
  //       boundaryGap: true,
  //       data: type
  //     }
  //   ],

  //   yAxis: {
  //     type: 'value',
  //     name: '单位:t',
  //     splitNumber: 4,
  //     axisLine: {
  //       show: false, //y轴竖线去掉
  //       lineStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisLabel: {
  //       show: true,
  //       textStyle: {
  //         color: '#d1e6eb'
  //       }
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     splitLine: {
  //       lineStyle: {
  //         type: 'dashed',
  //         color: '#39608F'
  //       }
  //     }
  //   },
  //   series: [
  //     {
  //       name: '硫酸钴',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#21FFFF'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value
  //     },
  //     {
  //       name: '硫酸锰',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#6E9DFF'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value2
  //     },
  //     {
  //       name: '硫酸镍',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#FFBA32'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value3
  //     },
  //     {
  //       name: '硫酸锂',
  //       type: 'line',
  //       // stack: 'Total',
  //       symbol: 'diamond',
  //       smooth: true, //平滑
  //       lineStyle: {
  //         width: 2,
  //         color: '#31F6B8'
  //       },
  //       showSymbol: true,
  //       // areaStyle: {
  //       //   opacity: 0.8
  //       //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //       //   //   {
  //       //   //     offset: 0,
  //       //   //     color: 'rgb(128, 255, 165)'
  //       //   //   },
  //       //   //   {
  //       //   //     offset: 1,
  //       //   //     color: 'rgb(1, 191, 236)'
  //       //   //   }
  //       //   // ])
  //       // },
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: value4
  //     }
  //   ]
  // };
  // //////console.log(type, '555');
  // if (type.length > 12) {
  //   //////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////console.log(listnumber, '天数');

  //   let listoverstart = 0;
  //   let listoverend = 0;
  //   // if (listnumber < 25) {
  //   //   listoverstart = lastmouth - 25 + listnumber - 6;
  //   //   listoverend = lastmouth - 25 + listnumber - 1;
  //   //   // liststart = 0;
  //   //   // listend = 0;
  //   // }
  //   if (listnumber < 25) {
  //     listoverstart = lastmouth - 25 + listnumber - 6;
  //     listoverend = lastmouth - 25 + listnumber;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   if (listnumber >= 25) {
  //     listoverstart = 0;
  //     listoverend = 6;
  //     // liststart = 0;
  //     // listend = 0;
  //   }
  //   option.dataZoom = [
  //     //给x轴设置滚动条
  //     {
  //       type: 'slider', //slider表示有滑动块的，inside表示内置的
  //       startValue: listoverstart, // 开始列的索引
  //       endValue: listoverend, // 结束列的索引
  //       // start: 0, //默认为0  可设置滚动条从在后进行展示
  //       // end: listend, //默认为100
  //       show: true,
  //       xAxisIndex: [0],
  //       handleSize: 0, //滑动条的 左右2个滑动条的大小
  //       height: 2, //组件高度
  //       left: '5%', //左边的距离
  //       right: '5%', //右边的距离
  //       bottom: -2, //右边的距离
  //       borderColor: '#eee',
  //       fillerColor: '#E7E7E7',
  //       backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
  //       showDataShadow: false, //是否显示数据阴影 默认auto
  //       showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
  //       realtime: true, //是否实时更新
  //       filterMode: 'filter',
  //       handleStyle: {
  //         borderRadius: '20'
  //       }
  //     },
  //     //下面这个属性是里面拖到
  //     {
  //       type: 'inside',
  //       show: true,
  //       xAxisIndex: [0],
  //       start: 0, //默认为1
  //       end: 100, //默认为100
  //       moveOnMouseWheel: false,
  //       preventDefaultMouseMove: false
  //     }
  //   ];
  // } else {
  //   //////////console.log('mmm');
  //   delete option.dataZoom;
  // }
  // var data4 = [
  //   { name: '备品备件', value: 20, amount: '2600万元' },
  //   { name: '产成本  ', value: 17, amount: '2500万元' },
  //   { name: '其他     ', value: 18, amount: '2400万元' },
  //   { name: '其他项1 ', value: 20, amount: '2600万元' },
  //   { name: '其他项2 ', value: 20, amount: '2600万元' },
  //   { name: '其他项3 ', value: 20, amount: '2600万元' },
  //   { name: '其他项4 ', value: 20, amount: '2600万元' },
  //   { name: '其他项5 ', value: 20, amount: '2600万元' }
  // ];

  // //////console.log(window.rem, '111');
  var option = {
    // 图例放置在右侧
    legend: {
      type: 'scroll',
      pageIconSize: [10, 10], // 设置切换页图标的大小
      // pageButtonItemGap: 5,

      // pageIconSize: false, // 隐藏切换页图标
      orient: 'vertical',
      right: 0,
      top: 40,
      height: 'auto', // 设置图例的高度为自适应
      //inactiveColor: 'red', // 翻页按钮未激活状态颜色
      pageIconColor: '#3E88FF', // 翻页下一页的三角按钮颜色
      pageIconInactiveColor: '#333', // 翻页（即翻页到头时）按钮颜色
      // data: data4,
      pageTextStyle: {
        color: 'transparent' // 设置文本颜色为透明，隐藏文本内容
        // height: '10'
      },

      // pageButtonGap: 5,
      textStyle: {
        fontSize: 2.8 * window.rem + 'px',
        color: 'white'
      },
      formatter: function(params) {
        //console.log(value, '------');
        var inventoryAmount = 0;
        var inProportion = 0;
        value.map(item => {
          if (item.projectName == params) {
            inventoryAmount = item.inventoryAmount;
            inProportion = item.inProportion;
          }
        });
        return (
          params +
          '     ' +
          inProportion +
          '% ' +
          '    ' +
          (inventoryAmount / 10000).toFixed(2) +
          '万元'
        );
        // const a = data5.map(item => {
        //   return item.name + ' ' + item.value + '% ' + item.amount;
        // });
        // return a;
      }
      // graphic: {
      //   elements: [
      //     {
      //       type: 'image',
      //       style: {
      //         image: 'your_image_url_here', // 图片的URL地址
      //         width: 100, // 图片宽度
      //         height: 100, // 图片高度
      //         x: 'center', // 图片的水平位置
      //         y: 'center' // 图片的垂直位置
      //       }
      //     }
      //   ]
      // },
      // formatter: function(params) {
      //   var value = 0;
      //   var amount = 0;
      //   data4.map(item => {
      //     if (item.name == params) {
      //       value = item.value;
      //       amount = item.amount;
      //     }
      //   });
      //   return params + '   ' + value + '% ' + '    ' + amount;
      //   // const a = data5.map(item => {
      //   //   return item.name + ' ' + item.value + '% ' + item.amount;
      //   // });
      //   // return a;
      // }
    },
    // grid: {
    //   top: '20%',
    //   // left: '13%',
    //   // right: '12%',
    //   bottom: '16%'
    //   // containLabel: false
    // },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        label: {
          show: false,
          position: 'top'
        },
        emphasis: {
          label: {
            show: true,
            // fontSize: 2.4 * window.rem + 'px',
            fontWeight: 'bold',
            position: 'top',
            formatter: '{b}: {c}' // {b} 表示名称，{c} 表示值
          }
        },
        labelLine: {
          show: false
        },
        data: value2
        // graphic: [
        //   {
        //     type: 'image',
        //     id: 'logo',
        //     left: 'center',
        //     top: 'center',
        //     z: 10,
        //     bounding: 'raw',
        //     origin: [75, 75], // 原点位置，与半径相等
        //     style: {
        //       image: Imageredio, // 图片的 URL
        //       width: 150,
        //       height: 150
        //     }
        //   }
        // ]
        // 其他配置项
      }
    ]
  };

  return option;
};
export const getRightThirdechartsb = (xData, LegendData, SeriesData) => {
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      },
      renderMode: 'html',
      backgroundColor: 'rgba(15, 45, 83, 0.9)',
      borderWidth: 0,
      borderColor: 'rgba(15, 45, 83, 0.9)',
      textStyle: {
        color: '#fff'
      }
      // formatter: val => {
      //   const style =
      //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
      //   const tooltip = val
      //     .map(i => {
      //       const { seriesName, color, value } = i;
      //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
      //     })
      //     .join('<br />');
      //   return tooltip;
      // }
    },
    legend: {
      data: LegendData,
      right: '5%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      left: '15%',
      top: '20%',
      bottom: '16%'
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d1e6eb'
          }
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: true,
        data: xData
      }
    ],

    yAxis: {
      type: 'value',
      // name: '单位:kg',
      name: '单位:t',
      splitNumber: 4,
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#d1e6eb'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#39608F'
        }
      }
    },
    series: SeriesData
    // series: [
    //   {
    //     name: '硫酸钴',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#2DE7E7'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value
    //   },
    //   {
    //     name: '硫酸锰',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#FFBA32'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value2
    //   },
    //   {
    //     name: '硫酸镍',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#FFBA32'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value3
    //   },
    //   {
    //     name: '硫酸锂',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#6E9DFF'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value4
    //   }
    // ]
  };

  if (xData.length > 12) {
    const listnumber = Number(moment(new Date()).format('DD'));
    const lastmouth = moment(new Date())
      .subtract(1, 'month')
      .daysInMonth();

    let listoverstart = 0;
    let listoverend = 0;
    if (listnumber < 25) {
      listoverstart = lastmouth - 25 + listnumber - 6;
      listoverend = lastmouth - 25 + listnumber;
    }
    if (listnumber >= 25) {
      listoverstart = 0;
      listoverend = 6;
    }
    option.dataZoom = [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        startValue: listoverstart, // 开始列的索引
        endValue: listoverend, // 结束列的索引
        // start: 0, //默认为0  可设置滚动条从在后进行展示
        // end: listend, //默认为100
        show: true,
        xAxisIndex: [0],
        handleSize: 0, //滑动条的 左右2个滑动条的大小
        height: 2, //组件高度
        left: '5%', //左边的距离
        right: '5%', //右边的距离
        bottom: -2, //右边的距离
        borderColor: '#eee',
        fillerColor: '#E7E7E7',
        backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        filterMode: 'filter',
        handleStyle: {
          borderRadius: '20'
        }
      },
      //下面这个属性是里面拖到
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0, //默认为1
        end: 100, //默认为100
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false
      }
    ];
  } else {
    ////console.log('mmm');
    delete option.dataZoom;
  }

  return option;
};
export const getRightThirdechartsb2 = (xData, LegendData, SeriesData, dataIsEmpty) => {
  const YData = dataIsEmpty ? { min: 0, max: 120 } : {};
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      },
      renderMode: 'html',
      backgroundColor: 'rgba(15, 45, 83, 0.9)',
      borderWidth: 0,
      borderColor: 'rgba(15, 45, 83, 0.9)',
      textStyle: {
        color: '#fff'
      }
      // formatter: val => {
      //   const style =
      //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
      //   const tooltip = val
      //     .map(i => {
      //       const { seriesName, color, value } = i;
      //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
      //     })
      //     .join('<br />');
      //   return tooltip;
      // }
    },
    legend: {
      data: LegendData,
      right: '5%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      left: '15%',
      top: '20%',
      bottom: '16%'
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d1e6eb'
          }
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: true,
        data: xData
      }
    ],

    yAxis: {
      type: 'value',
      ...YData,
      name: '单位:kg',
      splitNumber: 4,
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#d1e6eb'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#39608F'
        }
      }
    },
    series: SeriesData
  };

  if (xData.length > 12) {
    const listnumber = Number(moment(new Date()).format('DD'));
    const lastmouth = moment(new Date())
      .subtract(1, 'month')
      .daysInMonth();

    let listoverstart = 0;
    let listoverend = 0;
    if (listnumber < 25) {
      listoverstart = lastmouth - 25 + listnumber - 6;
      listoverend = lastmouth - 25 + listnumber;
    }
    if (listnumber >= 25) {
      listoverstart = 0;
      listoverend = 6;
    }
    option.dataZoom = [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        startValue: listoverstart, // 开始列的索引
        endValue: listoverend, // 结束列的索引
        // start: 0, //默认为0  可设置滚动条从在后进行展示
        // end: listend, //默认为100
        show: true,
        xAxisIndex: [0],
        handleSize: 0, //滑动条的 左右2个滑动条的大小
        height: 2, //组件高度
        left: '5%', //左边的距离
        right: '5%', //右边的距离
        bottom: -2, //右边的距离
        borderColor: '#eee',
        fillerColor: '#E7E7E7',
        backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        filterMode: 'filter',
        handleStyle: {
          borderRadius: '20'
        }
      },
      //下面这个属性是里面拖到
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0, //默认为1
        end: 100, //默认为100
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false
      }
    ];
  } else {
    delete option.dataZoom;
  }

  return option;
};

export const getRightSecondecharts = (xData, LegendData, SeriesData) => {
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      },
      renderMode: 'html',
      backgroundColor: 'rgba(15, 45, 83, 0.9)',
      borderWidth: 0,
      borderColor: 'rgba(15, 45, 83, 0.9)',
      textStyle: {
        color: '#fff'
      }
      // formatter: val => {
      //   const style =
      //     'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
      //   const tooltip = val
      //     .map(i => {
      //       const { seriesName, color, value } = i;
      //       return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
      //     })
      //     .join('<br />');
      //   return tooltip;
      // }
    },
    legend: {
      data: LegendData,
      right: '5%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      left: '15%',
      top: '20%',
      bottom: '16%'
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d1e6eb'
          }
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: true,
        data: xData
      }
    ],

    yAxis: {
      type: 'value',
      // name: '单位:kg',
      name: '单位:t',
      splitNumber: 4,
      axisLine: {
        show: false, //y轴竖线去掉
        lineStyle: {
          color: '#d1e6eb'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#d1e6eb'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#39608F'
        }
      }
    },
    series: SeriesData
    // series: [
    //   {
    //     name: '硫酸钴',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#2DE7E7'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value
    //   },
    //   {
    //     name: '硫酸锰',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#FFBA32'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value2
    //   },
    //   {
    //     name: '硫酸镍',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#FFBA32'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value3
    //   },
    //   {
    //     name: '硫酸锂',
    //     type: 'line',
    //     // stack: 'Total',
    //     symbol: 'diamond',
    //     smooth: true, //平滑
    //     lineStyle: {
    //       width: 2,
    //       color: '#6E9DFF'
    //     },
    //     showSymbol: true,
    //     // areaStyle: {
    //     //   opacity: 0.8
    //     //   // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //     //   //   {
    //     //   //     offset: 0,
    //     //   //     color: 'rgb(128, 255, 165)'
    //     //   //   },
    //     //   //   {
    //     //   //     offset: 1,
    //     //   //     color: 'rgb(1, 191, 236)'
    //     //   //   }
    //     //   // ])
    //     // },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     data: value4
    //   }
    // ]
  };

  if (xData.length > 12) {
    const listnumber = Number(moment(new Date()).format('DD'));
    const lastmouth = moment(new Date())
      .subtract(1, 'month')
      .daysInMonth();

    let listoverstart = 0;
    let listoverend = 0;
    if (listnumber < 25) {
      listoverstart = lastmouth - 25 + listnumber - 6;
      listoverend = lastmouth - 25 + listnumber;
    }
    if (listnumber >= 25) {
      listoverstart = 0;
      listoverend = 6;
    }
    option.dataZoom = [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        startValue: listoverstart, // 开始列的索引
        endValue: listoverend, // 结束列的索引
        // start: 0, //默认为0  可设置滚动条从在后进行展示
        // end: listend, //默认为100
        show: true,
        xAxisIndex: [0],
        handleSize: 0, //滑动条的 左右2个滑动条的大小
        height: 2, //组件高度
        left: '5%', //左边的距离
        right: '5%', //右边的距离
        bottom: -2, //右边的距离
        borderColor: '#eee',
        fillerColor: '#E7E7E7',
        backgroundColor: '#eee', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        filterMode: 'filter',
        handleStyle: {
          borderRadius: '20'
        }
      },
      //下面这个属性是里面拖到
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0, //默认为1
        end: 100, //默认为100
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false
      }
    ];
  } else {
    ////console.log('mmm');
    delete option.dataZoom;
  }

  return option;
};
