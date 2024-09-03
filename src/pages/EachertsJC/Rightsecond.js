import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getRightSecondecharts } from './options';
import React, { useState, useEffect } from 'react';
// import warehouseScreenService from '~/api/warehouseScreen';
// import { notification, Button } from '@hvisions/h-ui';
import MinescreenApi from '~/api/Screen/Minescreen2';
import moment from 'moment';
import { notification, Button } from '@hvisions/h-ui';
const Rightsecond = forwardRef(({ ...props }, ref) => {
  const [type, setType] = useState([
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
  const [value, setValue] = useState([
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
  ]);
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
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  useImperativeHandle(ref, () => ({
    showModalmouth: showModalmouth,
    showModalyear: showModalyear
  }));
  const showModalmouth = () => {
    console.log('888');
    setType(mouth);
    setValue(monthvalue);
    setValue2(monthvalue2);
    //   setWeekback(false);
    //   setMouthback(true);
    //   setYearback(false);
  };
  const showModalyear = () => {
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
  // useEffect(() => {
  //   warehouseScreenService
  //     .gettopValue()
  //     .then(res => {
  //       //   console.log(res);
  //       //   setWeekvalue(res.electric);
  //       //   setMonthvalue(res.electricmonth);
  //       //   setYearvalue(res.electricyear);
  //       // setType(res.electrictimemonth);
  //       //   setWeek(convertToWeekdays(res.electrictime));
  //       //   setMouth(res.electrictimemonth);
  //       setYear(res.electrictimeyear);
  //       //   setValue(res.electric);
  //       // setElect(res.electric);
  //     })
  //     .catch(err => {
  //       notification.warning({
  //         description: err.message
  //       });
  //     });
  // }, []);
  // useEffect(() => {
  //   if (week.length > 0) {
  //     // 执行转换
  //     const weekdaysList = convertToWeekdays(week);
  //     setWeek(weekdaysList);
  //     setType(weekdaysList);
  //   }
  // }, [week]);
  useEffect(() => {
    MinescreenApi.getProfitHistogram(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        setValue(res);
      })
      .catch(err => {
        notification.warning({
          description: err.message
        });
      });
  }, []);
  useEffect(() => {
    // 通过改变 key 强制 ReactECharts 重新挂载
    setChartKey(prevKey => prevKey + 1);
  }, [value]);
  return (
    <ReactECharts
      option={getRightSecondecharts(value, value2, type)}
      style={{ width: '100% ', height: '180%' }}
      key={chartKey} // 使用 key 强制重新挂载
      // onEvents={onEvents}
    ></ReactECharts>
  );
});
export default Rightsecond;
