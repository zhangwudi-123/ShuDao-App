import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getRightThirdechartsb } from './options';
import React, { useState, useEffect, useRef } from 'react';
import stylemodule from './style.module.scss';
// import warehouseScreenService from '~/api/warehouseScreen';
import MinescreenApi from '~/api/Screen/Minescreen2';
// import { notification, Button } from '@hvisions/h-ui';
import moment from 'moment';
const Rightsecond = forwardRef(({ ...props }, ref) => {
  const [allsum, setAllsum] = useState(null);
  const [type, setType] = useState(props.name);
  const [value, setValue] = useState(props.detalMouth);
  const [value2, setValue2] = useState([
    15,
    17,
    16,
    13,
    12,
    15,
    18,
    15,
    16,
    13,
    15,
    18,
    12,
    10,
    15,
    20,
    16,
    19
  ]);
  const [mouth, setMouth] = useState([
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    1,
    11,
    12,
    13,
    14,
    15
  ]);
  const [year, setYear] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [monthvalue, setMonthvalue] = useState([
    12,
    10,
    15,
    20,
    16,
    19,
    15,
    17,
    16,
    13,
    12,
    15,
    18,
    15,
    16,
    13,
    15,
    18
  ]); //
  const [monthvalue2, setMonthvalue2] = useState([
    15,
    17,
    16,
    13,
    12,
    15,
    18,
    15,
    16,
    13,
    15,
    18,
    12,
    10,
    15,
    20,
    16,
    19
  ]);
  const [yearvalue, setYearvalue] = useState([
    120,
    100,
    150,
    200,
    160,
    190,
    150,
    170,
    160,
    130,
    120,
    150
  ]);
  const [yearvalue2, setYearvalue2] = useState([
    150,
    170,
    160,
    130,
    120,
    150,
    180,
    150,
    160,
    130,
    150,
    180
  ]);
  const [weekback, setWeekback] = useState(true);
  const [mouthback, setMouthback] = useState(false);
  const [yearback, setYearback] = useState(false);
  const [detalMouth, setDetalMouth] = useState(null);
  const [outvalue, setOutvalue] = useState([10000.2, 10203.5, 12003.4, 15630.2, 12450.3]);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  const chartRef = useRef(null);
  useImperativeHandle(ref, () => ({
    showModalmouth: showModalmouth,
    showModalyear: showModalyear
  }));
  const showModalmouth = () => {
    // console.log('888');
    setType(mouth);
    setValue(monthvalue);
    setValue2(monthvalue2);
    //   setWeekback(false);
    //   setMouthback(true);
    //   setYearback(false);
  };
  const showModalyear = () => {
    console.log('888888888888');
    setType(year);
    setValue(yearvalue);
    setValue2(yearvalue2);
    // setWeekback(false);
    // setMouthback(false);
    // setYearback(true);
  };
  //   const onEvents = {
  //     click: onChartClick
  //   };
  useEffect(() => {
    // warehouseScreenService
    //   .gettopValue()
    //   .then(res => {
    //     //   console.log(res);
    //     //   setWeekvalue(res.electric);
    //     //   setMonthvalue(res.electricmonth);
    //     //   setYearvalue(res.electricyear);
    //     // setType(res.electrictimemonth);
    //     //   setWeek(convertToWeekdays(res.electrictime));
    //     //   setMouth(res.electrictimemonth);
    //     setYear(res.electrictimeyear);
    //     //   setValue(res.electric);
    //     // setElect(res.electric);
    //   })
    //   .catch(err => {
    //     notification.warning({
    //       description: err.message
    //     });
    //   });
  }, []);
  // useEffect(() => {
  //   if (week.length > 0) {
  //     // 执行转换
  //     const weekdaysList = convertToWeekdays(week);
  //     setWeek(weekdaysList);
  //     setType(weekdaysList);
  //   }
  // }, [week]);
  // 处理图例翻页的事件
  // const handlePrevPage = () => {
  //   // console.log(chartRef.current.getEchartsInstance());
  //   chartRef.current.getEchartsInstance().dispatchAction({
  //     type: 'legendScroll',
  //     scrollDataIndex: -1 // 向前翻一页
  //   }); // 向前翻一页
  // };

  // const handleNextPage = () => {
  //   chartRef.current
  //     .getEchartsInstance()
  //     .getEchartsInstance()
  //     .dispatchAction({
  //       type: 'legendScroll',
  //       scrollDataIndex: 1 // 向后翻一页
  //     }); // 向后翻一页
  // };
  // const handleScroll = event => {
  //   if (event.deltaY > 0) {
  //     // 向下滚动
  //     console.log(chartRef.current.getEchartsInstance());
  //     handlePrevPage();
  //   } else {
  //     // 向上滚动
  //     handleNextPage();
  //   }
  // };
  useEffect(() => {
    MinescreenApi.getFactoryCostAuto(moment(new Date(), 'YYYY-MM').format('YYYY'), '环锂')
      .then(res => {
        setDetalMouth(res);
        setValue(res.costlistyear);
        setType(res.timelistyear);
        // console.log(res, '===');
        // setPricename(res);
        // setMiddleThird(res);
        // let allsumin = 0;
        // res.forEach(item => {
        //   allsumin += item.costValue;
        // });
        // setAllsumPrice(allsumin);
      })
      .catch(err => {});
    // MinescreenApi.getInventoryDetails(moment(new Date(), 'YYYY').format('YYYY'))
    //   .then(res => {
    //     let allsumin = 0;

    //     res.forEach(item => {
    //       allsumin += item.inventoryAmount / 10000;
    //     });

    //     setAllsum(allsumin.toFixed(2));
    //     const servalue = [];
    //     const newvalue = res.map(item => {
    //       servalue.push({
    //         name: item.projectName,
    //         value: (item.inventoryAmount / 10000).toFixed(2)
    //       });

    //       item.inProportion = ((item.inventoryAmount / 10000 / allsumin) * 100).toFixed(2);
    //       // console.log(item.inProportion, '===');
    //       return item;
    //     });
    //     // // 计算总的百分比
    //     // const totalProportion = res.reduce((total, item) => total + item.inProportion, 0);

    //     // // 如果总百分比超过 100，则对每个项目的百分比进行调整
    //     // if (totalProportion > 100) {
    //     //   const adjustment = 100 / totalProportion;
    //     //   res.forEach(item => {
    //     //     item.inProportion *= adjustment;
    //     //   });
    //     // }
    //     setValue(newvalue);
    //     setValue2(servalue);
    //   })
    //   .catch(err => {
    //     // notification.warning({
    //     //   description: err.message
    //     // });
    //   });
  }, []);
  useEffect(() => {
    // 通过改变 key 强制 ReactECharts 重新挂载
    setChartKey(prevKey => prevKey + 1);
  }, [value]);
  useEffect(() => {
    setValue(props.detalMouth);
  }, [props.detalMouth]);
  useEffect(() => {
    setType(props.name);
  }, [props.name]);
  return (
    <div>
      <ReactECharts
        option={getRightThirdechartsb(value, type)}
        style={{ width: '100%', height: props.high * 0.8 }}
        className={stylemodule.rightthird}
        key={chartKey} // 使用 key 强制重新挂载
        ref={chartRef}
        // onEvents={onEvents}
      ></ReactECharts>
      {/* <div className={stylemodule.rightthirdphoto}>
        <div className={stylemodule.rightthirdphotodiv}>
          <div className={stylemodule.rightthirdphotodivsum}>
            <span className={stylemodule.rightthirdphotodivsumfirst}>
              {allsum != null && allsum}
            </span>
            <span className={stylemodule.rightthirdphotodivsumsecond}>库存总数</span>
          </div>
        </div>
      </div> */}
    </div>
  );
});
export default Rightsecond;
