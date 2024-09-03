import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getRightFirstechartsb } from './options';
import React, { useState, useEffect } from 'react';
import stylemodule from './style.module.scss';
// import warehouseScreenService from '~/api/warehouseScreen';
import MinescreenApi from '~/api/Screen/Minescreen2';
import warehouseScreenService from '~/api/warehouseScreen';
import moment from 'moment';
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
// import { notification, Button } from '@hvisions/h-ui';
const Rightfirstb = forwardRef(({ high, wide }, ref) => {
  const [allsum, setAllsum] = useState(null);
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
  const [value, setValue] = useState([]);
  const [value2, setValue2] = useState([]);
  const [value3, setValue3] = useState([]);
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

  const [weekvalue3, setWeekvalue3] = useState();
  const [monthvalue3, setMonthvalue3] = useState([3906.8, 33060.2, 4460.5, 45203.5, 57820.6]); //总量
  const [yearvalue3, setYearvalue3] = useState([336000.5, 334500.2, 458230.6, 502303.6, 642030.7]);
  const [weekback, setWeekback] = useState(true);
  const [mouthback, setMouthback] = useState(true);
  const [yearback, setYearback] = useState(false);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  const [middledata, setMiddledata] = useState({});
  useImperativeHandle(ref, () => ({
    showModalmouth: showModalmouth,
    showModalyear: showModalyear
  }));
  function convertToWeekdays(numbers) {
    const weekdaysMap = {
      '1': '星期一',
      '2': '星期二',
      '3': '星期三',
      '4': '星期四',
      '5': '星期五',
      '6': '星期六',
      '7': '星期日'
    };
    return numbers.map(num => weekdaysMap[num]);
  }
  const showModalmouth = () => {
    // console.log('888');
    setType(mouth);
    setValue(monthvalue);
    setValue2(monthvalue2);
    setValue3(monthvalue3);
    //   setWeekback(false);
    setMouthback(true);
    setYearback(false);
  };
  const showModalyear = () => {
    console.log('888888888888');
    setType(year);
    setValue(yearvalue);
    setValue2(yearvalue2);
    setValue3(yearvalue3);
    // setWeekback(false);
    setMouthback(false);
    setYearback(true);
  };
  //   const onEvents = {
  //     click: onChartClick
  //   };
  useEffect(() => {
    warehouseScreenService
      .getMiddleValue()
      .then(res => {
        console.log(res.consumptionList.consumptionCoke, '}}}');
        // setWeekvalue(res.consumptionList.consumptionOre);
        // setWeekvalue2(res.consumptionList.consumptionOreBlending);
        // setWeekvalue3(res.consumptionList.consumptionCoke);
        setMonthvalue(res.consumptionListmonth.consumptionOre);
        setMonthvalue2(res.consumptionListmonth.consumptionOreBlending);
        setMonthvalue3(res.consumptionListmonth.consumptionCoke);
        setYearvalue(res.consumptionListyear.consumptionOre);
        setYearvalue2(res.consumptionListyear.consumptionOreBlending);
        setYearvalue3(res.consumptionListyear.consumptionCoke);
        setType(res.consumptionListmonth.oretime);
        // setWeek(convertToWeekdays(res.consumptionList.oretime));
        // setMouth(res.consumptionListmonth.oretime);
        setMouth(res.consumptionListmonth.oretime);
        setYear(res.consumptionListyear.oretime);
        // setStartdata(res.failure);
        // setSumdata(res.failuretotal);
        // setEnddata(res.phosphrus);
        setValue(res.consumptionList.consumptionOre);
        setValue2(res.consumptionList.consumptionOreBlending);
        setValue3(res.consumptionList.consumptionCoke);

        if (res.middlePlc != null) {
          setMiddledata(res.middlePlc);
        }
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
  }, []);
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

  useEffect(() => {
    // 通过改变 key 强制 ReactECharts 重新挂载
    setChartKey(prevKey => prevKey + 1);
  }, [value]);
  return (
    <div>
      <div
        className={style2.topleftmy}
        style={{ height: high * 0.06, width: '100%', marginTop: high * 0.02 }}
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
          option={getRightFirstechartsb(value, value2, value3, type)}
          style={{ width: '100%', height: high * 0.8 }}
          className={stylemodule.rightfirst}
          key={chartKey} // 使用 key 强制重新挂载
          // onEvents={onEvents}
        ></ReactECharts>
      </div>
    </div>
  );
});
export default Rightfirstb;
