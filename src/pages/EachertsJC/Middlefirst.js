import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getMiddleFirstechartsb } from './options';
import React, { useState, useEffect } from 'react';
import stylemodule from './style.module.scss';
import MinescreenApi from '~/api/Screen/Minescreen2';
import style2 from './style2.scss';
import './style.css';
import {
  Link,
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Searchbar,
  BlockTitle,
  ListInput,
  List,
  Icon,
  PageContent,
  Button,
  ListItem,
  Card
} from '@hvisions/f-ui';
// import warehouseScreenService from '~/api/warehouseScreen';
// import { notification, Button } from '@hvisions/h-ui';
const Middlefirst = forwardRef(({ ...props }, ref) => {
  const [enddata, setEnddata] = useState([
    13564.3,
    23453.6,
    24536.2,
    45236.2,
    45623.2,
    35463.2,
    56345.2
  ]);
  const [valuewiR, setValuewinR] = useState();
  const [monthvaluewinR, setMonthvaluewinR] = useState([
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
  const [yearvaluewinR, setYearvaluewinR] = useState([
    112000.5,
    105000.2,
    128000.6,
    102000.6,
    152000.7
  ]);
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
  const [value, setValue] = useState(props.MiddleThird);
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
  const [yearback, setYearback] = useState(true);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  useImperativeHandle(ref, () => ({
    showModalmouth: showModalmouth,
    showModalyear: showModalyear
  }));
  const showModalmouth = () => {
    // console.log('888');
    setType(mouth);
    setValue(monthvalue);
    setValue2(monthvaluewinR);
    setValuewinR(monthvaluewinR);
    //   setWeekback(false);
    setMouthback(true);
    setYearback(false);
  };
  const showModalyear = () => {
    console.log('888888888888');
    setType(year);
    setValue(yearvalue);
    setValue2(yearvaluewinR);
    setValuewinR(yearvaluewinR);
    // setWeekback(false);
    setMouthback(false);
    setYearback(true);
  };
  //   const onEvents = {
  //     click: onChartClick
  //   };
  useEffect(() => {
    MinescreenApi.getRevenueMonthDay()
      .then(res => {
        setValue(res.revenuelistyear);
        setValue2(res.porintlistyear);
        setMonthvalue(res.revenuelist);
        setYearvalue(res.revenuelistyear);
        setValuewinR(res.porintlistyear);
        setMonthvaluewinR(res.porintlist);
        setYearvaluewinR(res.porintlistyear);
        // setType(res.electrictimemonth);
        //   setWeek(convertToWeekdays(res.electrictime));
        setMouth(res.timelist);
        setYear(res.timelistyear);
        // setValue2()
        setType(res.timelist);
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
  useEffect(() => {
    setValue(props.MiddleThird);
  }, [props.MiddleThird]);
  useEffect(() => {
    // 通过改变 key 强制 ReactECharts 重新挂载
    setChartKey(prevKey => prevKey + 1);
  }, [value]);
  return (
    <div>
      <div
        className={style2.topleftmy}
        style={{ height: props.high * 0.06, width: '100%', marginTop: props.high * 0.02 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '20%' }}>
          {/* <Button
        key="save"
        onClick={showModalweek}
        className={`textButton ${weekback ? 'textButton2' : ''}`}
      >
        周
      </Button> */}
          <Button
            key="save"
            onClick={showModalmouth}
            className={`textButton ${mouthback ? 'textButton2' : ''}`}
          >
            月
          </Button>
          <Button
            key="save"
            onClick={showModalyear}
            className={`textButton ${yearback ? 'textButton2' : ''}`}
          >
            年
          </Button>
        </div>
      </div>
      <div>
        <ReactECharts
          option={getMiddleFirstechartsb(value, value2, type)}
          style={{ width: '100%', height: props.high * 0.8 }}
          className={stylemodule.leftfirst}
          key={chartKey} // 使用 key 强制重新挂载
          // onEvents={onEvents}
        ></ReactECharts>
        {/* <div className={stylemodule.leftfirstphoto}>
        <div className={stylemodule.leftfirstphotodiv}></div>
      </div> */}
      </div>
    </div>
  );
});
export default Middlefirst;
