import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getLeftThirdecharts } from './options';
import stylemodule from './style.module.scss';
import React, { useState, useEffect } from 'react';
// import warehouseScreenService from '~/api/warehouseScreen';
import MinescreenApi from '~/api/Screen/Minescreen2';
// import { notification, Button } from '@hvisions/h-ui';
import moment from 'moment';
const Leftthird = forwardRef(({ ...props }, ref) => {
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
  const [value, setValue] = useState(props.LeftThird);

  const [value2, setValue2] = useState(props.LeftThird2);
  const [value3, setValue3] = useState([
    20,
    16,
    19,
    15,
    17,
    16,
    13,
    12,
    10,
    15,
    12,
    15,
    16,
    13,
    15,
    18,
    15,
    18
  ]);
  const [value4, setValue4] = useState([
    13,
    12,
    15,
    18,
    15,
    17,
    16,
    15,
    16,

    10,
    15,
    20,
    16,
    19,
    13,
    15,
    18,
    12
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
  const [monthvalue3, setMonthvalue3] = useState([
    15,
    17,
    16,
    13,

    15,
    16,
    13,
    12,
    15,
    18,
    15,
    18,
    12,
    20,
    16,
    19,
    10,
    15
  ]);
  const [monthvalue4, setMonthvalue4] = useState([
    12,
    15,
    18,
    15,
    16,
    13,

    10,
    15,
    20,
    15,
    18,
    12,
    16,
    19,
    15,
    17,
    16,
    13
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
  const [yearvalue3, setYearvalue3] = useState([
    120,
    150,
    180,
    150,
    160,
    150,
    170,
    160,
    130,
    130,
    150,
    180
  ]);
  const [yearvalue4, setYearvalue4] = useState([
    180,
    150,
    160,
    130,
    120,
    150,

    130,
    150,
    180,
    150,
    170,
    160
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
    setValue3(monthvalue3);
    setValue4(monthvalue4);
    //   setWeekback(false);
    //   setMouthback(true);
    //   setYearback(false);
  };
  const showModalyear = () => {
    setType(year);
    setValue(yearvalue);
    setValue2(yearvalue2);
    setValue3(yearvalue3);
    setValue4(yearvalue4);
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
  // useEffect(() => {
  //   MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'))
  //     .then(res => {
  //       setValue(res);
  //     })
  //     .catch(err => {
  //       notification.warning({
  //         description: err.message
  //       });
  //     });
  // }, []);
  useEffect(() => {
    // 通过改变 key 强制 ReactECharts 重新挂载
    setChartKey(prevKey => prevKey + 1);
  }, [value]);
  useEffect(() => {
    setValue(props.LeftThird);
  }, [props.LeftThird]);
  useEffect(() => {
    setValue2(props.LeftThird2);
  }, [props.LeftThird2]);
  return (
    <ReactECharts
      option={getLeftThirdecharts(value, value2, value3, value4, type)}
      style={{ width: '100%', height: '80rem' }}
      className={stylemodule.leftthird}
      key={chartKey} // 使用 key 强制重新挂载
      // onEvents={onEvents}
    ></ReactECharts>
  );
});
export default Leftthird;
