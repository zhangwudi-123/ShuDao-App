import * as echarts from 'echarts';
import { isElement, isNull } from 'lodash';
// import Imageredio from '../../../../asserts/image/编组 11.png';
import moment from 'moment';
import './style.css';
// const namesort = {
//   新理想: 1,
//   蜀能矿产: 2,
//   蜀矿环锂: 3,
//   三晟公司: 4,
//   金川公司:5,
//   清平公司:6,
//   三晟
// }
export const getLeftFirstecharts = (value, value2, type) => {
  // //////////console.log(value2);
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
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
  ////console.log(value, '9999999');
  // value.sort((a, b) => {
  //   return a.revenueValue - b.revenueValue;
  // });
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

  ////console.log(color, '99999999');
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
    //   trigger: 'item',
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
    //   // formatter: function(params) {
    //   //   // ////console.log(params);
    //   //   let content = '';
    //   //   let name = '';

    //   //   // let value = 500;
    //   //   params.forEach(function(item) {
    //   //     ////console.log(item, '*****');
    //   //     name = item.axisValue;
    //   //     if (item.seriesName == '实际') {
    //   //       content +=
    //   //         item.marker +
    //   //         item.seriesName +
    //   //         '：' +
    //   //         numberFormatter2.format(newrevenueReality2[item.axisValue]) +
    //   //         '吨' +
    //   //         '<br>';
    //   //     } else {
    //   //       content +=
    //   //         item.marker +
    //   //         item.seriesName +
    //   //         '：' +
    //   //         numberFormatter2.format(newrevenueExpected2[item.axisValue]) +
    //   //         '吨' +
    //   //         '<br>';
    //   //     }

    //   //     // if (value < 0) {
    //   //     //   item.value = 0;
    //   //     // }
    //   //     //////console.log(newrealvaluezhanshiquanyuji, '--++');
    //   //     // for (const key in newrealvaluezhanshi) {
    //   //     //   //////console.log(item.seriesName, '--++');
    //   //     //   if (key === item.seriesName) {
    //   //     //     value = 0;
    //   //     //   }
    //   //     // }
    //   //     // ////console.log(name, content); // formatter: params => {)
    //   //     // formatter: params => {
    //   //     //   params.forEach(item => {
    //   //     //     return item.marker + item.seriesName + ':' + item.data + '%';
    //   //     //   });
    //   //     // }
    //   //   });
    //   //   return name + '<br>' + content;
    //   // }
    //   formatter: function(params) {
    //     //console.log(params, '8888');
    //     var data = params.data; // 获取当前鼠标悬停的数据项
    //     // 返回一个格式化后的字符串，包括数据项的名称、值等信息
    //     return (
    //       params.marker +
    //       data.name +
    //       ': ' +
    //       data.value +
    //       '<br/> ' +
    //       '占比：' +
    //       data.revenueProportion
    //     );
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
    //     //////console.log(newvalue, '55555');
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
        // emphasis: {
        //   disable: false, //是否关闭扇区高亮效果
        //   scale: false, //扇区是否缩放
        //   scaleSize: 0 //放大的尺寸，这里为了保证不放大扇区设置的，可要可不要
        //   // show: true,
        //   // textStyle: {
        //   //   fontSize: '13',
        //   //   fontWeight: 'normal'
        //   // },
        //   // formatter: function(params) {
        //   //   return params.name + ' (' + params.percent + '%)';
        //   // }
        // },
        label: {
          normal: {
            position: 'outside',

            // formatter: '{bb|{b}}\n{dd|{d}%}',
            formatter: params => {
              //////console.log(params, '????');
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
          // emphasis: {
          //   position: 'outside',

          //   // formatter: '{bb|{b}}\n{dd|{d}%}',
          //   // formatter: params => {
          //   //   //////console.log(params, '????');
          //   //   // if (params.name !== '') {
          //   //   //   // return `{name|${name}: ${params.value} 万元}` + `\n占比{value|${params.percent === undefined ? 0 : params.percent}%}`
          //   //   // }
          //   //   return `{name|${params.name}: ${params.value} }` + `\n占比{value|${params.percent}%}`;
          //   //   // return + '  ' +  + '%' + '  ' + ;
          //   // },
          //   textStyle: {
          //     color: 'red',
          //     fontWeight: 'normal',
          //     fontSize: 2.4 * window.rem + 'px'
          //   },
          //   rich: {
          //     bb: {
          //       fontWeight: 'normal',
          //       align: 'center',
          //       fontSize: 3 * window.rem + 'px'
          //     },
          //     dd: {
          //       fontWeight: 'normal',
          //       align: 'center',
          //       fontSize: 3 * window.rem + 'px'
          //     }
          //   }
          // }
        },
        data: servalue
        // formatter: function(params) {
        //   var revenueValue = 0;
        //   var revenueProportion = 0;
        //   //////console.log(newvalue, '55555');
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
  // //////////console.log(type, '555');
  // if (type.length > 12) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //   //////////////console.log('mmm');
  //   delete option.dataZoom;
  // }

  return option;
};
export const getLeftSecondecharts = (value, value2, type) => {
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
  //   type = [listnumber];
  //   value = [0];
  //   value2 = [0];
  // }
  // if (value.length == 0 || value == null) {
  //   value = [0, 0, 0, 0, 0, 0];
  // }
  const newX = [];
  const newrevenueReality = []; //实际
  const newrevenueExpected = []; //预计
  const newrevenueReality2 = {}; //实际
  const newrevenueExpected2 = {}; //预计
  ////console.log(value, '****');
  value.forEach(item => {
    newX.push(item.companyName);
    if (item.revenueExpected == 0) {
      newrevenueReality.push(
        ((Number(item.revenueReality) / Number(item.revenueReality)) * 100).toFixed(1)
      );
      newrevenueExpected.push(0);
    } else {
      newrevenueReality.push(
        ((Number(item.revenueReality) / Number(item.revenueExpected)) * 100).toFixed(1)
      );
      newrevenueExpected.push((Number(item.revenueExpected) / Number(item.revenueExpected)) * 100);
    }

    // newrevenueExpected2.push(item.revenueExpected);
    newrevenueReality2[item.companyName] = Number(item.revenueReality).toFixed(2);
    newrevenueExpected2[item.companyName] = Number(item.revenueExpected).toFixed(2);
  });
  ////console.log(newrevenueReality, '++++', newrevenueExpected);
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
        // ////console.log(params);
        let content = '';
        let name = '';

        // let value = 500;
        params.forEach(function(item) {
          ////console.log(item, '*****');
          name = item.axisValue;
          if (item.seriesName == '实际') {
            content +=
              item.marker +
              item.seriesName +
              '：' +
              numberFormatter2.format(newrevenueReality2[item.axisValue]) +
              '<br>';
          } else {
            content +=
              item.marker +
              item.seriesName +
              '：' +
              numberFormatter2.format(newrevenueExpected2[item.axisValue]) +
              '<br>';
          }

          // if (value < 0) {
          //   item.value = 0;
          // }
          //////console.log(newrealvaluezhanshiquanyuji, '--++');
          // for (const key in newrealvaluezhanshi) {
          //   //////console.log(item.seriesName, '--++');
          //   if (key === item.seriesName) {
          //     value = 0;
          //   }
          // }
          // ////console.log(name, content); // formatter: params => {)
          // formatter: params => {
          //   params.forEach(item => {
          //     return item.marker + item.seriesName + ':' + item.data + '%';
          //   });
          // }
        });
        return name + '<br>' + content;
      }
    },
    // legend: {
    //   data: ['水电气'],
    //   right: '5%',
    //   top: '5%',
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: 2.4 * window.rem + 'px'
    //   }
    // },
    grid: {
      top: '16%',
      left: '13%',
      // // right: '12%',
      bottom: '40%'
      // containLabel: false
    },
    xAxis: [
      {
        type: 'category',
        // name: '(天)',
        splitNumber: 9,
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
        data: newX,
        axisLabel: {
          interval: 0, // 显示所有标签
          rotate: -45, // 旋转标签为45度
          // margin: 20, // 增加标签之间的距离
          color: '#d1e6eb'
        }
      }
    ],

    yAxis: {
      type: 'value',
      name: '单位:万元',
      splitNumber: 4,
      show: false,
      axisLine: {
        show: true, //y轴竖线去掉
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
        show: true
      },
      // splitLine: {
      //   lineStyle: {
      //     type: 'dashed',
      //     color: '#39608F'
      //   }
      // }
      formatter: function(value, index) {
        ////console.log(value, '888');
        // // 您可以在这里自定义 X 轴显示的标签内容
        // const customLabels = [0, 20, 40, 60, 80, 100, 120, 140]; // 您希望显示的数据
        return value + '%'; // 返回自定义标签值
      }
    },
    series: [
      {
        name: '预计',
        type: 'bar',
        // stack: 'Total',
        symbol: 'diamond',
        smooth: true, //平滑
        lineStyle: {
          width: 2,

          color: '#31F6B8'
        },
        barWidth: 10, // 设置柱状图的宽度，单位为像素
        barGap: 0, // 设置柱子之间的间距
        // barCategoryGap: 10, // 设置组内柱子之间的间距
        itemStyle: {
          // 设置柱状图的样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#6E9DFF' },
            { offset: 1, color: 'rgba(110,157,255,0.3)' }
          ])
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
        data: newrevenueExpected
      },
      {
        name: '实际',
        type: 'bar',
        // stack: 'Total',
        symbol: 'diamond',
        smooth: true, //平滑
        lineStyle: {
          width: 2,
          color: '#31F6B8'
        },
        barWidth: 10, // 设置柱状图的宽度，单位为像素
        barGap: 0, // 设置柱子之间的间距
        // barCategoryGap: 10, // 设置组内柱子之间的间距
        itemStyle: {
          // 设置柱状图的样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#21FFFF' },
            { offset: 1, color: 'rgba(30,231,231,0.3)' }
          ])
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
        data: newrevenueReality
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
  //////////console.log(type, '555');
  // if (newX.length > 6) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //       maxValueSpan: 5, //显示数据的条数(默认显示10个)
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
  //   //////////////console.log('mmm');
  //   delete option.dataZoom;
  // }

  return option;
};
export const getLeftThirdecharts = (value, value2, value3, value4, type) => {
  //console.log(value, '+++');
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
  //   type = [listnumber];
  //   value = [0];
  //   value2 = [0];
  // }
  // if (value.length == 0 || value == null) {
  //   value = [0, 0, 0, 0, 0, 0];
  // }
  // 定义一个存储月份和对应属性值的数组

  // 定义一个存储月份和对应属性值的数组
  // let newname = '';
  let lowvalue = Number.MAX_VALUE;
  let topvalue = 0;
  // const endPrices = [];
  // const endPricesall = [];
  // const endPrices2 = [];
  // const endPricesall2 = [];
  // const threeYearHigh = [];
  // const threeYearLow = [];
  // const months = [
  //   'january',
  //   'february',
  //   'march',
  //   'april',
  //   'may',
  //   'june',
  //   'july',
  //   'august',
  //   'september',
  //   'october',
  //   'november',
  //   'december'
  // ];
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // const cnMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  // ////console.log(value, value2, '2222222222');
  // // 遍历每个数据对象
  // if (value != null) {
  ////console.log('进入判断value');
  // value.forEach(item => {
  //   // 遍历对象的属性
  // });
  //   for (const key in value) {
  //     if (key == 'materialName') {
  //       // //////console.log(value[key], '555');
  //       newname = value[key];
  //     }
  //     // 检查属性名是否包含 "End"
  //     if (key == 'threeYearHigh') {
  //       for (let i = 0; i < 12; i++) {
  //         threeYearHigh.push(value[key]);
  //       }
  //     }
  //     if (key == 'threeYearLow') {
  //       for (let i = 0; i < 12; i++) {
  //         threeYearLow.push(value[key]);
  //       }
  //     }
  //     if (key.includes('End')) {
  //       // 提取月份信息
  //       const month = key.slice(0, -8); // 去除属性名中的 "End"，剩下的部分即为月份
  //       // 将月份和对应的属性值存储到数组中
  //       endPrices.push({ month: month, value: value[key] });
  //     }
  //   }
  //   //////console.log(threeYearHigh, threeYearLow, '00000000');
  //   // 按照月份进行排序
  //   endPrices.sort((a, b) => {
  //     // 将月份名称转换为对应的数字进行比较
  //     return months.indexOf(a.month.toLowerCase()) - months.indexOf(b.month.toLowerCase());
  //   });
  //   ////console.log(endPrices, '|||');
  //   endPrices.forEach(item => {
  //     // //////console.log(lowvalue, '====');
  //     if (item.value < lowvalue && item.value != null) {
  //       lowvalue = item.value;
  //     }
  //     if (item.value > topvalue && item.value != null) {
  //       topvalue = item.value;
  //     }
  //     endPricesall.push(item.value);
  //   });
  // }
  // if (value2 != null) {
  //   ////console.log('进入判断');
  //   // value.forEach(item => {
  //   //   // 遍历对象的属性
  //   // });
  //   for (const key in value2) {
  //     // if (key == 'materialName') {
  //     //   // //////console.log(value[key], '555');
  //     //   newname = value[key];
  //     // }
  //     // // 检查属性名是否包含 "End"
  //     // if (key == 'threeYearHigh') {
  //     //   for (let i = 0; i < 12; i++) {
  //     //     threeYearHigh.push(value[key]);
  //     //   }
  //     // }
  //     // if (key == 'threeYearLow') {
  //     //   for (let i = 0; i < 12; i++) {
  //     //     threeYearLow.push(value[key]);
  //     //   }
  //     // }
  //     if (key.includes('UnitPrice')) {
  //       // 提取月份信息
  //       const month2 = key.slice(0, -9); // 去除属性名中的 "End"，剩下的部分即为月份
  //       // ////console.log(month2);
  //       // 将月份和对应的属性值存储到数组中
  //       endPrices2.push({ month: month2, value: value2[key] });
  //     }
  //   }
  //////console.log(threeYearHigh, threeYearLow, '00000000');
  // 按照月份进行排序
  ////console.log(endPrices2, '++++++');
  // endPrices2.sort((a, b) => {
  //   // 将月份名称转换为对应的数字进行比较
  //   return months.indexOf(a.month.toLowerCase()) - months.indexOf(b.month.toLowerCase());
  // });
  // ////console.log(endPrices2, '|||');
  const threeYearHigh = [];
  const threeYearLow = [];
  const mounth = moment(new Date()).format('MM');
  if (value != null) {
    if (value.threeYearHigh != null) {
      for (let i = 0; i < Number(mounth); i++) {
        if (value.threeYearHigh == 0) {
          threeYearHigh.push('-');
        } else {
          threeYearHigh.push(value.threeYearHigh);
        }
      }
    }
    if (value.threeYearLow != null) {
      for (let i = 0; i < Number(mounth); i++) {
        if (value.threeYearLow == 9999999) {
          threeYearLow.push('-');
        } else {
          threeYearLow.push(value.threeYearLow);
        }
      }
    }
    if (value.marketPriceList != null) {
      value.marketPriceList.forEach(item => {
        // //////console.log(lowvalue, '====');
        if (item.value < lowvalue && item.value != null) {
          lowvalue = item.value;
        }
        if (item.value > topvalue && item.value != null) {
          topvalue = item.value;
        }
        // endPricesall.push(item.value);
      });
    } else {
      if (value.unitPriceList != null) {
        value.unitPriceList.forEach(item => {
          // //////console.log(lowvalue, '====');
          if (item.value < lowvalue && item.value != null) {
            lowvalue = item.value;
          }
          if (item.value > topvalue && item.value != null) {
            topvalue = item.value;
          }
          // endPricesall.push(item.value);
        });
      }
    }
  }

  ////console.log(endPrices2, '{{{{{');
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
    data: value != null ? (value.unitPriceList != null ? value.unitPriceList : []) : []
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
      data: [
        `市场价格`,
        value != null
          ? value.unitPriceList != null && value.unitPriceList.length > 0
            ? '销售价格'
            : ''
          : ''
      ],
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
        data: value != null ? (value.monthtime != null ? value.monthtime : month) : month
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
      }
      // interval: (topvalue * 1.1 - lowvalue * 0.5).toFixed(0) / 4, // 手动设置刻度线间隔
      // // splitLine: {
      // //   lineStyle: {
      // //     type: 'dashed',
      // //     color: '#39608F'
      // //   },

      // // },
      // min: (lowvalue * 0.5).toFixed(0), // 最小值
      // max: (topvalue * 1.1).toFixed(0) // 最大值，根据实际情况调整
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
        data:
          value != null
            ? value.marketPriceList != null && value.marketPriceList.length > 0
              ? value.marketPriceList
              : []
            : []
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
  if (value != null && value.unitPriceList != null && value.unitPriceList.length > 0) {
    option['series'].push(outPrice);
  }
  //////////console.log(type, '555');
  // if (cnMonths.length > 6) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //   //////////////console.log('mmm');
  //   delete option.dataZoom;
  // }

  return option;
};
export const getMiddleFirstecharts = (value, value2, type) => {
  // //////////console.log(value2);
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
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
  // //////////console.log(window.rem, '111');
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
  // //////////console.log(type, '555');
  // if (type.length > 12) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //   //////////////console.log('mmm');
  //   delete option.dataZoom;
  // }

  return option;
};
export const getMiddleFirstechartsb = (value, value2, type, unit) => {
  // //////////console.log(value2);
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
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
  // 给定的对象
  // const data = {
  //   "aprilCost": "AprilData",
  //   "augustCost": "AugustData",
  //   "decemberCost": "DecemberData",
  //   "februaryCost": "FebruaryData",
  //   "januaryCost": "JanuaryData",
  //   "julyCost": "JulyData",
  //   "juneCost": "JuneData",
  //   "marchCost": "MarchData",
  //   "mayCost": "MayData",
  //   "novemberCost": "NovemberData",
  //   "octoberCost": "OctoberData",
  //   "septemberCost": "SeptemberData"
  // };

  // 定义一个空数组，用于存储数据
  const dataArray = [];
  function getMonthName(monthNumber) {
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
    return months[monthNumber - 1];
  }

  ////console.log(value, '333333333');
  // 遍历对象的属性
  if (value != null) {
    for (let i = 1; i <= 12; i++) {
      const propName = `${getMonthName(i)}Cost`; // 构造属性名
      const propValue = value[propName]; // 获取属性值
      dataArray.push(propValue); // 将属性值添加到数组中
    }
  }
  const a = dataArray.filter(item => {
    return item != 0 || Number(item) != 0;
  });
  //console.log(dataArray, '444444');
  // // 输出数组
  // //////console.log(dataArray);

  // let allsumin = 0;
  // const servalue = [];
  // let newvalue = [];
  // if (value != null) {
  //   value.forEach(item => {
  //     allsumin += item.costValue;
  //   });

  //   newvalue = value.map(item => {
  //     servalue.push({ name: item.projectName, value: item.costValue });
  //     item.inProportion = ((item.costValue / allsumin) * 100).toFixed(2);
  //     return item;
  //   });
  // }
  // var data5 = [
  //   { name: '直接材料', value: 20, amount: '2600万元' },
  //   { name: '辅助材料', value: 17, amount: '2500万元' },
  //   { name: '人工成本', value: 18, amount: '2400万元' },
  //   { name: '燃料动力', value: 20, amount: '2600万元' },
  //   { name: '折旧摊销', value: 20, amount: '2600万元' },
  //   { name: '制造费用', value: 20, amount: '2600万元' },
  //   { name: '期间费用', value: 20, amount: '2600万元' }
  // ];
  // //////////console.log(window.rem, '111');
  const cnMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  var option = {
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
    // 图例放置在右侧
    // legend: {
    //   type: 'scroll',
    //   pageIconSize: [10, 10], // 设置切换页图标的大小
    //   // pageButtonItemGap: 5,

    //   // pageIconSize: false, // 隐藏切换页图标
    //   orient: 'vertical',
    //   right: 0,
    //   top: 60,
    //   //inactiveColor: 'red', // 翻页按钮未激活状态颜色
    //   pageIconColor: '#3E88FF', // 翻页下一页的三角按钮颜色
    //   pageIconInactiveColor: '#333', // 翻页（即翻页到头时）按钮颜色
    //   height: 'auto', // 设置图例的高度为自适应
    //   // data: newvalue,
    //   pageTextStyle: {
    //     color: 'transparent' // 设置文本颜色为透明，隐藏文本内容
    //     // height: '10'
    //   },

    //   // pageButtonGap: 5,
    //   textStyle: {
    //     fontSize: 2.8 * window.rem + 'px',
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
    //   // // },
    //   // formatter: function(params) {
    //   //   var costValue = 0;
    //   //   var inProportion = 0;
    //   //   newvalue.map(item => {
    //   //     if (item.projectName == params) {
    //   //       costValue = isNull(item.costValue) ? 0 : item.costValue;
    //   //       inProportion = isNaN(item.inProportion) ? 0 : item.inProportion;
    //   //     }
    //   //   });
    //   //   return params + '   ' + inProportion + '% ' + '    ' + costValue + '元';
    //   // }
    // },
    legend: {
      data: ['成本'],
      right: '15%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    xAxis: [
      {
        type: 'category',
        splitNumber: 12,
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
      name: unit,
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
    grid: {
      top: '20%',
      left: '13%',
      // right: '12%',
      bottom: '20%'
      // containLabel: false
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
        name: '成本',
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
        data: a
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
  // //////////console.log(type, '555');
  // if (cnMonths.length > 6) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //   //////////////console.log('mmm');
  //   delete option.dataZoom;
  // }

  return option;
};
const numberFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
const numberFormatter2 = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
export const getMiddleSecendecharts = (value, value2, type) => {
  //console.log(value, '提交');
  // //////////console.log(value2);
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
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
  const newY = [];
  const newX = [];
  const newannual = []; //全年
  const newannual2 = []; //全年
  const newreality = []; //实际
  const newreality2 = []; //实际
  const newrealvaluezhanshi = {};
  const newrealvaluezhanshiquan = {};
  const newrealvaluezhanshiquanyuji = {};
  const newexpected = []; //预计
  const newexpected2 = []; //预计
  const newannualprice = []; //全年
  const newrealityprice = []; //实际
  const newexpectedprice = []; //预计
  //////console.log(value, '8888');
  value.forEach(item => {
    newY.push(item.projectName);
    if (item.projectName != '营收' && item.projectName != '利润') {
      newannualprice.push(null);
      newexpectedprice.push(null);
      newrealityprice.push(item.reality);
      newexpected.push(null);
      // newexpected2.push(null);
      newannual.push(null);
      newannual2.push(null);
      newreality.push(((item.reality / item.reality) * 100).toFixed(2));
      newreality2.push(((item.reality / item.reality) * 100).toFixed(2));
      //////console.log(((item.reality / item.reality) * 100).toFixed(2), '----');
      if (((item.reality / item.reality) * 100).toFixed(2) < 0) {
        newrealvaluezhanshi[item.projectName] = ((item.reality / item.reality) * 100).toFixed(2);
      }
      // newrealvaluezhanshi.push(((item.reality / item.reality) * 100).toFixed(2));
    } else {
      newannualprice.push(item.annual);
      newexpectedprice.push(item.expected);
      newrealityprice.push(item.reality);

      newannual.push((item.annual / item.annual) * 100);
      newannual2.push((item.annual / item.annual) * 100);
      newexpected.push(((item.expected / item.annual) * 100).toFixed(2));
      // newexpected2.push(((item.expected / item.annual) * 100).toFixed(2));

      newexpected2.push(((item.expected / item.annual) * 100).toFixed(2));
      // } else {
      //   newexpected2.push(null);
      // }

      newreality.push(((item.reality / item.annual) * 100).toFixed(2));
      newreality2.push(((item.reality / item.annual) * 100).toFixed(2));
      //////console.log(((item.reality / item.annual) * 100).toFixed(2), '----');
      if (((item.reality / item.annual) * 100).toFixed(2) < 0) {
        newrealvaluezhanshi[item.projectName] = ((item.reality / item.annual) * 100).toFixed(2);
      }
      if ((item.annual / item.annual).toFixed(2) < 0) {
        newrealvaluezhanshiquan[item.projectName] = ((item.annual / item.annual) * 100).toFixed(2);
      }
      if (((item.expected / item.annual) * 100).toFixed(2) < 0) {
        newrealvaluezhanshiquanyuji[item.projectName] = (
          (item.expected / item.annual) *
          100
        ).toFixed(2);
      }
      // newrealvaluezhanshi.push(((item.reality / item.annual) * 100).toFixed(2));
    }
    // if (item.annual == null) {

    // } else {

    // }
  });
  console.log(newreality2, '**');
  newreality2.forEach((value, index) => {
    if (value < 0) {
      newreality2[index] = Math.abs(Number(newreality2[index]));
    }
  });
  newexpected2.forEach((value, index) => {
    if (value < 0) {
      newexpected2[index] = Math.abs(Number(newexpected2[index]));
    }
  });
  newannual2.forEach((value, index) => {
    if (value < 0) {
      newannual2[index] = Math.abs(Number(newannual2[index]));
    }
  });
  // newexpectedprice = [newexpectedprice];
  //console.log(newreality2, newannual2, newexpected2, '<<<<');
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
        //////console.log(params);
        let content = '';
        let name = '';
        let newname = '';
        // let value = 500;
        params.forEach(function(item) {
          // //console.log(item, '555');
          if (item.value == '') {
            item = {};
          }
          // if (value < 0) {
          //   item.value = 0;
          // }
          //////console.log(newrealvaluezhanshiquanyuji, '--++');
          // for (const key in newrealvaluezhanshi) {
          //   //////console.log(item.seriesName, '--++');
          //   if (key === item.seriesName) {
          //     value = 0;
          //   }
          // }
          if (item.value == null) {
            return content;
          } else {
            // //////console.log(
            //   Object.keys(newrealvaluezhanshi).length,
            //   Object.keys(newrealvaluezhanshiquan).length,
            //   newrealvaluezhanshiquanyuji,
            //   '???'
            // );
            // if (
            //   item.name in newrealvaluezhanshi ||
            //   item.name in newrealvaluezhanshiquan ||
            //   item.name in newrealvaluezhanshiquanyuji
            // ) {
            //   //console.log(item.name, item.seriesName);
            //   if (item.name in newrealvaluezhanshi && item.seriesName == '实际') {
            //     console.log(item.name, '55');
            //     if (item.name == '利润') {
            //       console.log('55');
            //       content +=
            //         item.marker +
            //         '直属企业实际' +
            //         '：' +
            //         newrealvaluezhanshi[item.name] +
            //         '%' +
            //         '<br>';
            //     } else {
            //       content +=
            //         item.marker +
            //         item.seriesName +
            //         '：' +
            //         newrealvaluezhanshi[item.name] +
            //         '%' +
            //         '<br>';
            //     }
            //   } else if (item.name in newrealvaluezhanshiquan && item.seriesName == '全年') {
            //     if (item.name == '利润') {
            //       content +=
            //         item.marker +
            //         '集团整体目标' +
            //         '：' +
            //         newrealvaluezhanshiquan[item.name] +
            //         '%' +
            //         '<br>';
            //     } else {
            //       content +=
            //         item.marker +
            //         item.seriesName +
            //         '：' +
            //         newrealvaluezhanshiquan[item.name] +
            //         '%' +
            //         '<br>';
            //     }
            //   } else if (item.name in newrealvaluezhanshiquanyuji && item.seriesName == '预计') {
            //     if (item.name == '利润') {
            //       content +=
            //         item.marker +
            //         '直属企业目标' +
            //         '：' +
            //         newrealvaluezhanshiquanyuji[item.name] +
            //         '%' +
            //         '++++' +
            //         '<br>';
            //     } else {
            //       content +=
            //         item.marker +
            //         item.seriesName +
            //         '：' +
            //         newrealvaluezhanshiquanyuji[item.name] +
            //         '%' +
            //         '++++' +
            //         '<br>';
            //     }
            //   } else {
            //     name = item.axisValue;
            //     content += item.marker + item.seriesName + '：' + item.value + '%' + '<br>';
            //   }
            // } else {
            console.log(item);
            newname = item.seriesName;
            if (item.axisValue == '利润') {
              switch (item.seriesName) {
                case '全年':
                  newname = '集团整体目标';
                  break;
                case '阶段':
                  newname = '直属企业目标';
                  break;
                case '实际':
                  newname = '直属企业实际';
                  break;
              }
              name = item.axisValue;
              content += item.marker + newname + '<br>';
              return name + '<br>' + content;
            }
            name = item.axisValue;
            content += item.marker + newname + '：' + item.value + '%' + '<br>';
          }
          // }d
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
    legend: {
      data: ['全年', '阶段', '实际'],
      right: '5%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      top: '20%',
      // // left: '13%',
      right: '18%',
      bottom: '15%'
      // containLabel: false
    },
    xAxis: {
      type: 'value',
      splitNumber: 6,
      // name: '%',
      axisLine: {
        show: false,
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
      axisLabel: {
        show: false,
        color: '#d1e6eb',
        formatter: function(value, index) {
          // //console.log(value,'2')
          // // 您可以在这里自定义 X 轴显示的标签内容
          // const customLabels = [0, 20, 40, 60, 80, 100, 120, 140]; // 您希望显示的数据
          return value + '%'; // 返回自定义标签值
        },
        interval: -1 // 让 ECharts 自动计算最佳的标签间隔
      }
      // data: [20, 20, 20, 20, 20]
    },

    // yAxis: {
    //   type: 'category',
    //   name: '单位:万元',
    //   // splitNumber: 6,
    //   axisLine: {
    //     show: false, //y轴竖线去掉
    //     lineStyle: {
    //       color: '#d1e6eb'
    //     }
    //   },
    //   axisLabel: {
    //     show: true,
    //     textStyle: {
    //       color: '#d1e6eb'
    //     },
    //     interval: 0 // 将标签的间隔设置为 0，使得所有标签都显示出来
    //   },

    //   axisTick: {
    //     show: false
    //   },
    //   splitLine: {
    //     lineStyle: {
    //       type: 'dashed',
    //       color: '#39608F'
    //     }
    //   },
    //   data: newY
    // },
    yAxis: [
      {
        type: 'category',
        name: '单位:万元',
        position: 'left',
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
          interval: 0 // 将标签的间隔设置为 0，使得所有标签都显示出来
        },

        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#39608F'
          }
        },
        data: newY
      },
      {
        type: 'category',
        name: '单位:万元',
        position: 'left',
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
          interval: 0 // 将标签的间隔设置为 0，使得所有标签都显示出来
        },

        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#39608F'
          }
        },
        data: newY
      }
    ],
    series: [
      {
        name: '全年',
        type: 'bar',
        yAxisIndex: 0,
        // stack: 'Total',
        symbol: 'diamond',
        barGap: '80%', // 设置柱形图之间的间隙
        smooth: true, //平滑
        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度
        clickable: true,
        onclick: function(params) {
          // 在这里实现点击事件的逻辑
          //////console.log('点击了实际系列');
        },
        lineStyle: {
          width: 2,
          color: '#31F6B8'
        },
        itemStyle: {
          // 设置柱状图的样式
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: 'rgba(41,101,227,0.3)' },
            { offset: 1, color: '#6E9DFF' }
          ])
        },
        label: {
          show: true, // 显示数据标签
          position: 'right', // 数据标签显示位置，可以根据需求调整
          color: 'white', // 数据标签文字颜色
          formatter: function(params) {
            ////////console.log(newannualprice, params);
            // params.value 是当前柱状图的值
            // 这里可以根据需要返回一个新的值作为数据标签
            // const customData = [50, 60, 70, 90, 150]; // 新的数据数组
            // ////console.log(newannualprice[params.dataIndex].toFixed(0).toLocaleString(), '1111');

            return numberFormatter.format(newannualprice[params.dataIndex].toFixed(0));
          }
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
        data: [newannual2[0]]
      },
      {
        name: '阶段',
        type: 'bar',
        yAxisIndex: 0,
        // stack: 'Total',
        symbol: 'diamond',
        barGap: '80%', // 设置柱形图之间的间隙
        smooth: true, //平滑
        lineStyle: {
          width: 2,
          color: '#31F6B8'
        },

        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度

        itemStyle: {
          normal: {
            // 设置柱状图的样式
            color: function(params) {
              //console.log(params);
              return params.data == null
                ? 'transparent'
                : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(41,219,227,0.3)' },
                    { offset: 1, color: '#6EE0FF' }
                  ]);
            },
            emphasis: {
              color: function(params) {
                return params.data === 0 ? 'transparent' : 'blue';
              }
            }
          }
        },
        showSymbol: true,
        label: {
          show: true, // 显示数据标签
          position: 'right', // 数据标签显示位置，可以根据需求调整
          color: 'white', // 数据标签文字颜色
          formatter: function(params) {
            // params.value 是当前柱状图的值
            // 这里可以根据需要返回一个新的值作为数据标签
            // const customData = [50, 60, 70, 90, 150]; // 新的数据数组
            // if () {

            // }
            return numberFormatter.format(newexpectedprice[params.dataIndex].toFixed(0));
          }
        },

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
        data: [newexpected2[0]]
      },
      {
        name: '实际',
        type: 'bar',
        yAxisIndex: 0,
        // stack: 'Total',
        symbol: 'diamond',
        barGap: '80%', // 设置柱形图之间的间隙
        smooth: true, //平滑
        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度
        clickable: true,
        onclick: function(params) {
          // 在这里实现点击事件的逻辑
          //////console.log('点击了实际系列');
        },
        lineStyle: {
          width: 2,
          color: '#31F6B8'
        },
        itemStyle: {
          // 设置柱状图的样式
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: 'rgba(0,180,135,0.3)' },
            { offset: 1, color: '#31F6B8' }
          ])
        },
        label: {
          show: true, // 显示数据标签
          position: 'right', // 数据标签显示位置，可以根据需求调整
          color: 'white', // 数据标签文字颜色
          formatter: function(params) {
            //////console.log(params.name, '//////');
            ////////console.log(newrealityprice, params);
            // params.value 是当前柱状图的值
            // 这里可以根据需要返回一个新的值作为数据标签
            // const customData = [50, 60, 70, 90, 150]; // 新的数据数组
            if (params.name == '营收' || params.name == '利润') {
              return numberFormatter.format(newrealityprice[params.dataIndex].toFixed(0));
              // return newrealityprice[params.dataIndex].toFixed(0).toLocaleString();
            }
            return numberFormatter.format(newrealityprice[params.dataIndex].toFixed(0));
            // return newrealityprice[params.dataIndex].toFixed(0).toLocaleString() + '吨';
          }
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
        data: [newreality2[0]]
      },
      {
        name: '全年',
        type: 'bar',
        yAxisIndex: 1,
        // stack: 'Total',
        symbol: 'diamond',
        barGap: '80%', // 设置柱形图之间的间隙
        smooth: true, //平滑
        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度
        clickable: true,
        onclick: function(params) {
          // 在这里实现点击事件的逻辑
          //////console.log('点击了实际系列');
        },
        lineStyle: {
          width: 2,
          color: '#31F6B8'
        },
        itemStyle: {
          // 设置柱状图的样式
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: 'rgba(41,101,227,0.3)' },
            { offset: 1, color: '#6E9DFF' }
          ])
        },
        label: {
          show: true, // 显示数据标签
          position: 'right', // 数据标签显示位置，可以根据需求调整
          color: 'white', // 数据标签文字颜色
          formatter: function(params) {
            ////////console.log(newannualprice, params);
            // params.value 是当前柱状图的值
            // 这里可以根据需要返回一个新的值作为数据标签
            // const customData = [50, 60, 70, 90, 150]; // 新的数据数组
            // ////console.log(newannualprice[params.dataIndex].toFixed(0).toLocaleString(), '1111');

            return numberFormatter.format(newannualprice[params.dataIndex].toFixed(0));
          }
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
        data: ['', newannual2[1]]
      },
      {
        name: '阶段',
        type: 'bar',
        yAxisIndex: 1,
        // stack: 'Total',
        symbol: 'diamond',
        barGap: '80%', // 设置柱形图之间的间隙
        smooth: true, //平滑
        lineStyle: {
          width: 2,
          color: '#31F6B8'
        },

        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度

        itemStyle: {
          normal: {
            // 设置柱状图的样式
            color: function(params) {
              //console.log(params);
              return params.data == null
                ? 'transparent'
                : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(41,219,227,0.3)' },
                    { offset: 1, color: '#6EE0FF' }
                  ]);
            },
            emphasis: {
              color: function(params) {
                return params.data === 0 ? 'transparent' : 'blue';
              }
            }
          }
        },
        showSymbol: true,
        label: {
          show: true, // 显示数据标签
          position: 'right', // 数据标签显示位置，可以根据需求调整
          color: 'white', // 数据标签文字颜色
          formatter: function(params) {
            // params.value 是当前柱状图的值
            // 这里可以根据需要返回一个新的值作为数据标签
            // const customData = [50, 60, 70, 90, 150]; // 新的数据数组
            // if () {

            // }
            return numberFormatter.format(newexpectedprice[params.dataIndex].toFixed(0));
          }
        },

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
        data: ['', newexpected2[1]]
      },
      // {
      //   name: '阶段',
      //   type: 'bar',
      //   yAxisIndex:0,
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
      //     normal: {
      //         // 设置柱状图的样式
      //       color: function (params) {
      //          //console.log(params)
      //         return params.data==null?'transparent': new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //           { offset: 0, color: 'rgba(41,219,227,0.3)' },
      //           { offset: 1, color: '#6EE0FF' }
      //         ])
      //       },
      //       emphasis: {
      //           color: function(params) {
      //               return params.data === 0 ? 'transparent' : 'blue';
      //           }
      //       }
      //     }
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
      //       return numberFormatter.format(newexpectedprice[params.dataIndex].toFixed(0));
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
        yAxisIndex: 1,
        // stack: 'Total',
        symbol: 'diamond',
        barGap: '80%', // 设置柱形图之间的间隙
        smooth: true, //平滑
        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度
        clickable: true,
        onclick: function(params) {
          // 在这里实现点击事件的逻辑
          //////console.log('点击了实际系列');
        },
        lineStyle: {
          width: 2,
          color: '#31F6B8'
        },
        itemStyle: {
          // 设置柱状图的样式
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: 'rgba(0,180,135,0.3)' },
            { offset: 1, color: '#31F6B8' }
          ])
        },
        label: {
          show: true, // 显示数据标签
          position: 'right', // 数据标签显示位置，可以根据需求调整
          color: 'white', // 数据标签文字颜色
          formatter: function(params) {
            //////console.log(params.name, '//////');
            ////////console.log(newrealityprice, params);
            // params.value 是当前柱状图的值
            // 这里可以根据需要返回一个新的值作为数据标签
            // const customData = [50, 60, 70, 90, 150]; // 新的数据数组
            if (params.name == '营收' || params.name == '利润') {
              return numberFormatter.format(newrealityprice[params.dataIndex].toFixed(0));
              // return newrealityprice[params.dataIndex].toFixed(0).toLocaleString();
            }
            return numberFormatter.format(newrealityprice[params.dataIndex].toFixed(0));
            // return newrealityprice[params.dataIndex].toFixed(0).toLocaleString() + '吨';
          }
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
        data: ['', newreality2[1]]
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
  //////////console.log(type, '555');
  // if (type.length > 2) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //     {
  //       type: 'slider',
  //       maxValueSpan: 5, //显示数据的条数(默认显示10个)
  //       show: false,
  //       yAxisIndex: [0],
  //       left: '93%', //滑动条位置
  //       start: 200, //默认为0
  //       end: 70, //默认为100
  //       orient: 'vertical',
  //       width: 5, // 组件宽度
  //       filterMode: 'empty',
  //       zoomLock: false
  //     },
  //     {
  //       type: 'inside', //内置滑动，随鼠标滚轮展示
  //       yAxisIndex: [0],
  //       start: 1, //初始化时，滑动条宽度开始标度
  //       end: 100, //初始化时，滑动条宽度结束标度
  //       zoomOnMouseWheel: false, //如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。。
  //       moveOnMouseMove: true,
  //       moveOnMouseWheel: true //鼠标滚轮实现移动
  //     }
  //   ];
  // } else {
  //   //////////////console.log('mmm');
  //   delete option.dataZoom;
  // }
  return option;
};
export const getMiddleThirdecharts = (value, value2, type) => {
  //////////console.log(value, type);
  // //////////console.log(value2);
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
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
  ////console.log(value, 'wowoowowowo');
  const newvalueX = [];
  const newvalueex = [];
  const newvaluean = [];
  const newvalueex2 = [];
  const newvaluean2 = [];
  const newvalueex3 = {};
  const newvaluean3 = {};
  value.forEach(item => {
    // newvalueex3.push(item.reality);
    if (item.annual != 0 && item.reality != 0) {
      newvaluean.push(((item.annual / item.annual) * 100).toFixed(0));
      newvalueex.push(((item.reality / item.annual) * 100).toFixed(2));
      newvaluean2.push(item.annual);
      newvalueex2.push(item.reality);
      newvaluean3[item.projectName] = Number(item.annual).toFixed(2);
      newvalueex3[item.projectName] = Number(item.reality).toFixed(2);
      newvalueX.push(item.projectName);
    }
  });
  // //////console.log(newreality2, newrealvaluezhanshi, '<<<<');
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
        // ////console.log(params);
        let content = '';
        let name = '';

        // let value = 500;
        params.forEach(function(item) {
          ////console.log(item, '*****');
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
          //////console.log(newrealvaluezhanshiquanyuji, '--++');
          // for (const key in newrealvaluezhanshi) {
          //   //////console.log(item.seriesName, '--++');
          //   if (key === item.seriesName) {
          //     value = 0;
          //   }
          // }
          // ////console.log(name, content); // formatter: params => {)
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
    //     // ////console.log(params);
    //     let content = '';
    //     let name = '';
    //     // let value = 500;
    //     params.forEach(function(item) {
    //       // ////console.log(item, '*****');
    //       name = item.axisValue;
    //       content = item.marker + item.seriesName + ':' + item.value + '%';
    //       // if (value < 0) {
    //       //   item.value = 0;
    //       // }
    //       //////console.log(newrealvaluezhanshiquanyuji, '--++');
    //       // for (const key in newrealvaluezhanshi) {
    //       //   //////console.log(item.seriesName, '--++');
    //       //   if (key === item.seriesName) {
    //       //     value = 0;
    //       //   }
    //       // }
    //       // ////console.log(name, content); // formatter: params => {)
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
      bottom: '35%'
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
        barGap: 0, // 设置柱形图之间的间隙
        smooth: true, //平滑
        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度
        clickable: true,
        // onclick: function(params) {
        //   // 在这里实现点击事件的逻辑
        //   //////console.log('点击了实际系列');
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
          //   ////////console.log(newannualprice, params);
          //   // params.value 是当前柱状图的值
          //   // 这里可以根据需要返回一个新的值作为数据标签
          //   // const customData = [50, 60, 70, 90, 150]; // 新的数据数组

          //   return newvaluean2[params.dataIndex].toFixed(2) + '万';
          // }
          // formatter: function(params) {
          //   ////////console.log(newannualprice, params);
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
        barGap: 0, // 设置柱形图之间的间隙
        smooth: true, //平滑
        barWidth: 10, // 减小柱形图的宽度
        barHeight: 10, // 减小柱形图的高度
        clickable: true,
        onclick: function(params) {
          // 在这里实现点击事件的逻辑
          //////console.log('点击了实际系列');
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
          //   ////////console.log(newannualprice, params);
          //   // params.value 是当前柱状图的值
          //   // 这里可以根据需要返回一个新的值作为数据标签
          //   // const customData = [50, 60, 70, 90, 150]; // 新的数据数组

          //   return newvalueex2[params.dataIndex].toFixed(2) + '万';
          // }
          // formatter: function(params) {
          //   //////console.log(params.name, '//////');
          //   ////////console.log(newrealityprice, params);
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
  //////////console.log(type, '555');
  if (newvalueX.length > 6) {
    //////////console.log('aaa');

    option.dataZoom = [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        maxValueSpan: 7, //显示数据的条数(默认显示10个)
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
    //////////////console.log('mmm');
    delete option.dataZoom;
  }
  return option;
};
export const getRightFirstecharts = (value, value2, value3, value4, type) => {
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
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
  // //////////console.log(type, '555');
  // if (type.length > 12) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //   //////////////console.log('mmm');
  //   delete option.dataZoom;
  // }
  const color = [];
  const servalue = [];
  ////console.log(value, '利润饼状图');
  // value.sort((a, b) => {
  //   return a.profitValue - b.profitValue;
  // });
  const newvalue = value.filter(item => {
    if (item.companyName != '总利润' && item.profitValue >= 0) {
      color.push(item.profitColor);
      servalue.push({
        name: item.companyName,
        value: Number(item.profitValue).toFixed(0)
      });
    }
    return item.companyName != '总利润' && item.profitValue >= 0;
  });
  ////console.log(color, '利润饼状图颜色');
  // //////console.log(servalue, '9999');
  // var data4 = [
  //   { name: '利润1', value: 20, amount: '2600万元' },
  //   { name: '利润2', value: 17, amount: '2500万元' },
  //   { name: '利润3', value: 18, amount: '2400万元' },
  //   { name: '利润4', value: 20, amount: '2600万元' },
  //   { name: '利润5', value: 20, amount: '2600万元' }
  // ];
  // //////////console.log(window.rem, '111');
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
    //     // //////console.log(newvalue, '*****');

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
              // //////console.log(params, '????');
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
export const getRightFirstechartsb = (value, value2, value3, value4, type) => {
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
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
  // //////////console.log(type, '555');
  // if (type.length > 12) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //   //////////////console.log('mmm');
  //   delete option.dataZoom;
  // }
  const color = [];
  const servalue = [];
  // value.sort((a, b) => {
  //   return -a.profitValue - -b.profitValue;
  // });
  const newvalue = value.filter(item => {
    if (item.companyName != '总利润' && item.profitValue < 0) {
      color.push(item.profitColor);
      servalue.push({
        name: item.companyName,
        value: Number(-item.profitValue).toFixed(0)
      });
    }
    return item.companyName != '总利润' && item.profitValue < 0;
  });
  //////console.log(servalue, '9999');
  // var data4 = [
  //   { name: '利润1', value: 20, amount: '2600万元' },
  //   { name: '利润2', value: 17, amount: '2500万元' },
  //   { name: '利润3', value: 18, amount: '2400万元' },
  //   { name: '利润4', value: 20, amount: '2600万元' },
  //   { name: '利润5', value: 20, amount: '2600万元' }
  // ];
  // //////////console.log(window.rem, '111');
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
    //     // //////console.log(newvalue, '*****');

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
              // //////console.log(params, '????');
              // if (params.name !== '') {
              //   // return `{name|${name}: ${params.value} 万元}` + `\n占比{value|${params.percent === undefined ? 0 : params.percent}%}`
              // }
              return (
                `{name|${params.name}: -${params.value} }` + `\n占比{value|${params.percent}%}`
              );
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
export const getRightSecondecharts = (value, value2, type) => {
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
  //   type = [listnumber];
  //   value = [0];
  //   value2 = [0];
  // }
  // if (value.length == 0 || value == null) {
  //   value = [0, 0, 0, 0, 0, 0];
  // }
  const newX = [];
  const newprofitReality = []; //实际
  const newprofitExpected = []; //预计
  value.forEach(item => {
    newX.push(item.companyName);
    newprofitReality.push(item.profitReality);
    newprofitExpected.push(item.profitExpected);
  });
  ////////console.log(newprofitExpected, newprofitReality, '111');
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
    // legend: {
    //   data: ['水电气'],
    //   right: '5%',
    //   top: '5%',
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: 2.4 * window.rem + 'px'
    //   }
    // },
    grid: {
      top: '16%',
      // // left: '13%',
      // // right: '12%',
      bottom: '18%'
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
        axisLabel: {
          // // 设置 interval
          // interval: (index, value) => {
          //   // 如果标签文字长度大于12，则设置间隔显示
          //   return value.length > 12 ? 'auto' : true;
          // },
          rotate: -45, // 尝试将标签旋转为45度
          color: '#d1e6eb'
        },
        data: newX
      }
    ],

    yAxis: {
      type: 'value',
      name: '单位:万元',
      splitNumber: 6,
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
        name: '预计',
        type: 'bar',
        // stack: 'Total',
        symbol: 'diamond',
        smooth: true, //平滑
        barWidth: 'auto', // 设置柱形图宽度自适应
        // barWidth: 1, // 设置柱状图的宽度，单位为像素

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
        data: newprofitExpected
      },
      {
        name: '实际',
        type: 'bar',
        // stack: 'Total',
        symbol: 'diamond',
        smooth: true, //平滑
        barWidth: 'auto', // 设置柱形图宽度自适应
        boundaryGap: 'true',
        // barWidth: 1, // 设置柱状图的宽度，单位为像素
        // barHeight: 5, // 减小柱形图的高度
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
        data: newprofitReality
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
  //////////console.log(type, '555');
  if (newX.length > 6) {
    //////////console.log('aaa');
    const listnumber = Number(moment(new Date()).format('DD'));
    const lastmouth = moment(new Date())
      .subtract(1, 'month')
      .daysInMonth();
    //////////console.log(listnumber, '天数');

    let listoverstart = 0;
    let listoverend = 0;
    // if (listnumber < 25) {
    //   listoverstart = lastmouth - 25 + listnumber - 6;
    //   listoverend = lastmouth - 25 + listnumber - 1;
    //   // liststart = 0;
    //   // listend = 0;
    // }
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
        maxValueSpan: 5, //显示数据的条数(默认显示10个)
        // startValue: 0, // 开始列的索引
        // endValue: 6, // 结束列的索引
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
    //////////////console.log('mmm');
    delete option.dataZoom;
  }

  return option;
};
export const getRightThirdecharts = (value, value2, type) => {
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
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
  // //////////console.log(type, '555');
  // if (type.length > 12) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //   //////////////console.log('mmm');
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

  // //////////console.log(window.rem, '111');
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
        //////console.log(value, '------');
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
        data: value2,
        graphic: [
          {
            type: 'image',
            id: 'logo',
            left: 'center',
            top: 'center',
            z: 10,
            bounding: 'raw',
            origin: [75, 75], // 原点位置，与半径相等
            style: {
              // image: Imageredio, // 图片的 URL
              width: 150,
              height: 150
            }
          }
        ]
        // 其他配置项
      }
    ]
  };

  return option;
};
export const getRightThirdechartsb = (value, value2, type) => {
  // if (type.length == 0 || type == null) {
  //   const listnumber = moment(new Date()).format('dddd');
  //   //////////console.log(listnumber, 'oooooo');
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
  // //////////console.log(type, '555');
  // if (type.length > 12) {
  //   //////////console.log('aaa');
  //   const listnumber = Number(moment(new Date()).format('DD'));
  //   const lastmouth = moment(new Date())
  //     .subtract(1, 'month')
  //     .daysInMonth();
  //   //////////console.log(listnumber, '天数');

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
  //   //////////////console.log('mmm');
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

  ////console.log(value, '111111');
  function getDateRangeArray(startDate, endDate) {
    const dateRangeArray = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dateRangeArray.push(currentDate.getDate());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateRangeArray;
  }
  // 根据 projectName 分成两个数组
  let groupedData = [];
  let groupedData2 = [];
  const groupedByDate = {};
  const groupedByPrice = {};

  if (value != null) {
    ////console.log(value, '=====');
    // 根据 projectName 分成两个数组
    groupedData = value.reduce((acc, obj) => {
      if (!acc[obj.projectName]) {
        acc[obj.projectName] = {
          data: [],
          timeRange: []
        };
      }
      acc[obj.projectName].data.push(obj);
      return acc;
    }, {});

    // 分别对每个数组中的对象根据 ledgerdate 进行排序，并计算时间范围数组
    for (const key in groupedData) {
      if (Object.hasOwnProperty.call(groupedData, key)) {
        groupedData[key].data.sort((a, b) => new Date(a.ledgerdate) - new Date(b.ledgerdate));

        // 提取日期范围数组
        const startDate = new Date(groupedData[key].data[0].ledgerdate);
        const endDate = new Date(
          groupedData[key].data[groupedData[key].data.length - 1].ledgerdate
        );
        const dateRange = getDateRangeArray(startDate, endDate);
        groupedData[key].timeRange = dateRange;
      }
    }

    // 为每个项目添加时间范围属性
    for (const key in groupedData) {
      if (Object.hasOwnProperty.call(groupedData, key)) {
        groupedData[key + '时间'] = groupedData[key].timeRange;
      }
    }
    // 根据 projectName 分成两个数组
    groupedData2 = value.reduce((acc, obj) => {
      if (!acc[obj.projectName]) {
        acc[obj.projectName] = [];
      }
      acc[obj.projectName].push(obj);
      return acc;
    }, {});

    // 分别对每个数组中的对象根据 ledgerdate 进行排序
    for (const key in groupedData2) {
      if (Object.hasOwnProperty.call(groupedData, key)) {
        groupedData2[key].sort((a, b) => new Date(a.ledgerdate) - new Date(b.ledgerdate));

        // 提取并排序 inventoryAmount
        groupedData2[key] = groupedData2[key].map(obj => obj.inventoryAmountNo);
      }
    }
    // groupedData2.forEach(item => {
    //   // if (item==) {

    //   // }
    // })
    // 创建一个空对象来存储按日期分组的结果

    // 遍历数据数组并按日期分组
    if (groupedData != null && groupedData['产成品总额'] != null && type == '月') {
      groupedData['产成品总额'].data.forEach(obj => {
        // 获取 ledgerdate 字段的日期部分，即几号的最后一个数字
        const date = parseInt(obj.ledgerdate.slice(-2), 10);

        // 如果已经存在该日期的键，则将当前对象推送到该键对应的数组中，否则创建一个新的数组
        if (groupedByDate[date]) {
          groupedByDate[date].push(obj.realInventoryDetialDTO);
        } else {
          groupedByDate[date] = [obj.realInventoryDetialDTO];
        }
      });
    }
    if (groupedData != null && groupedData['产成品总额'] != null && type == '年') {
      groupedData['产成品总额'].data.forEach(obj => {
        // 获取 ledgerdate 字段的日期部分，即几号的最后一个数字
        const date = parseInt(obj.ledgerdate.slice(5, 7), 10);

        // 如果已经存在该日期的键，则将当前对象推送到该键对应的数组中，否则创建一个新的数组
        if (groupedByDate[date]) {
          groupedByDate[date].push(obj.realInventoryDetialDTO);
        } else {
          groupedByDate[date] = [obj.realInventoryDetialDTO];
        }
      });
    }
    if (groupedData != null && groupedData['库房存货'] != null && type == '月') {
      groupedData['库房存货'].data.forEach(obj => {
        // 获取 ledgerdate 字段的日期部分，即几号的最后一个数字
        const date = parseInt(obj.ledgerdate.slice(-2), 10);

        // 如果已经存在该日期的键，则将当前对象推送到该键对应的数组中，否则创建一个新的数组
        if (groupedByPrice[date]) {
          groupedByPrice[date].push(obj.realInventoryDetialDTO);
        } else {
          groupedByPrice[date] = [obj.realInventoryDetialDTO];
        }
      });
    }
    if (groupedData != null && groupedData['库房存货'] != null && type == '年') {
      groupedData['库房存货'].data.forEach(obj => {
        // 获取 ledgerdate 字段的日期部分，即几号的最后一个数字
        const date = parseInt(obj.ledgerdate.slice(5, 7), 10);

        // 如果已经存在该日期的键，则将当前对象推送到该键对应的数组中，否则创建一个新的数组
        if (groupedByPrice[date]) {
          groupedByPrice[date].push(obj.realInventoryDetialDTO);
        } else {
          groupedByPrice[date] = [obj.realInventoryDetialDTO];
        }
      });
    }
  }

  ////console.log(groupedData, '33333333');
  ////console.log(groupedData2, '44444444');
  ////console.log(groupedByDate, '555');
  ////console.log(groupedByPrice, '666');
  if (type == '年') {
    // ////console.log(groupedData, '33333333');
    // ////console.log(groupedData2, '44444444');
    groupedData['库房存货时间'] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
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
        ////console.log(params, '||');
        let content = '';
        let name = '';

        // let value = 500;
        params.forEach(function(item) {
          ////console.log(item, '*****');
          name = item.axisValue;

          if (item.seriesName == '库房存货') {
            content +=
              item.marker +
              item.seriesName +
              '：' +
              '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +
              item.value +
              '万元' +
              '<br>';
          }
          // else {
          //   content +=
          //     item.marker +
          //     item.seriesName +
          //     '：' +
          //     '&nbsp&nbsp&nbsp&nbsp' +
          //     item.value +
          //     '万元' +
          //     '<br>';
          // }
          ////console.log(groupedByDate, 'QQQQ');
          if (item.seriesName == '产成品总额') {
            for (const key in groupedByDate) {
              if (key == Number(item.axisValueLabel) && groupedByDate[key].length > 0) {
                ////console.log(groupedByDate[key], '?????????');
                groupedByDate[key][0].forEach(item => {
                  if (item.projectName != undefined && item.inventoryValue != undefined) {
                    content +=
                      '&nbsp&nbsp&nbsp&nbsp' +
                      item.projectName +
                      '：' +
                      '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +
                      (item.inventoryValue / 1000).toFixed(2) +
                      '吨' +
                      '<br>';
                  }
                });
              }
            }
          }
          if (item.seriesName == '库房存货') {
            for (const key in groupedByPrice) {
              if (
                key == Number(item.axisValueLabel) &&
                groupedByPrice[key].length > 0 &&
                groupedByPrice[key] != null
              ) {
                // ////console.log(groupedByPrice[key], '?????????');
                groupedByPrice[key][0].forEach(item => {
                  if (item.projectName != undefined && item.inventoryAmountNo != undefined) {
                    content +=
                      '&nbsp&nbsp&nbsp&nbsp' +
                      item.projectName +
                      '：' +
                      '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +
                      (item.inventoryAmountNo / 10000).toFixed(2) +
                      '万元' +
                      '<br>';
                  }
                });
              }
            }
          }
          // if (item.seriesName == '实际') {
          //   content +=
          //     item.marker + item.seriesName + '：' +'    '+item.value + '<br>';
          // }
          // else {
          //   content +=
          //     item.marker + item.seriesName + '：' +'   '+item.value + '<br>';
          // }

          // if (value < 0) {
          //   item.value = 0;
          // }
          //////console.log(newrealvaluezhanshiquanyuji, '--++');
          // for (const key in newrealvaluezhanshi) {
          //   //////console.log(item.seriesName, '--++');
          //   if (key === item.seriesName) {
          //     value = 0;
          //   }
          // }
          // ////console.log(name, content); // formatter: params => {)
          // formatter: params => {
          //   params.forEach(item => {
          //     return item.marker + item.seriesName + ':' + item.data + '%';
          //   });
          // }
        });
        return name + '<br>' + content;
      }
    },
    legend: {
      data: ['产成品总额', '库房存货'],
      right: '5%',
      top: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 2.4 * window.rem + 'px'
      }
    },
    grid: {
      top: '20%',
      left: '15%',
      right: '12%',
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
        data:
          groupedData != null
            ? groupedData['产成品总额时间'] != null || groupedData['库房存货时间'] != null
              ? groupedData['库房存货时间']
              : []
            : []
      }
    ],

    yAxis: {
      type: 'value',
      name: '单位:万元',
      splitNumber: 6,
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
        name: '产成品总额',
        type: 'line',
        // stack: 'Total',
        symbol: 'diamond',
        // smooth: true, //平滑
        lineStyle: {
          width: 2,
          color: '#6E9DFF'
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
        data:
          groupedData2 != null
            ? groupedData2['产成品总额'] != null
              ? groupedData2['产成品总额']
              : []
            : []
      },
      {
        name: '库房存货',
        type: 'line',
        // stack: 'Total',
        symbol: 'diamond',
        // smooth: true, //平滑
        lineStyle: {
          width: 2,
          color: '#21FFFF'
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
        data:
          groupedData2 != null
            ? groupedData2['库房存货'] != null
              ? groupedData2['库房存货']
              : []
            : []
      }
    ]
  };
  // ////console.log(groupedData.length, groupedData['库房存货时间'].length, '555');
  if (groupedData != '{}' && groupedData['库房存货时间'] != null && type != '年') {
    ////console.log('aaa', groupedData['库房存货时间'].length);
    const listnumber = Number(moment(new Date()).format('DD'));
    const lastmouth = moment(new Date())
      .subtract(1, 'month')
      .daysInMonth();
    ////console.log(listnumber, '天数');

    let listoverstart = 0;
    let listoverend = 0;
    // if (listnumber < 25) {
    //   listoverstart = lastmouth - 25 + listnumber - 6;
    //   listoverend = lastmouth - 25 + listnumber - 1;
    //   // liststart = 0;
    //   // listend = 0;
    // }
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
    if (groupedData['库房存货时间'].length > 7) {
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
  }

  return option;
};
