import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getMiddleSecendecharts } from './options';
import React, { useState, useEffect } from 'react';
// import warehouseScreenService from '~/api/warehouseScreen';
import stylemodule from './style.module.scss';
import MinescreenApi from '~/api/Screen/Minescreen2';
import warehouseScreenService from '~/api/warehouseScreen';
import style2 from './style2.scss';
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
import moment from 'moment';
const MiddleSecond = forwardRef(({ high, wide }, ref) => {
  const [type, setType] = useState([
    '黄磷',
    '硫酸镍',
    '某矿',
    '某矿',
    '某矿',
    '某矿',
    '某矿',
    '某矿',
    '某矿',
    '某矿',
    '营收',
    '利润'
  ]);
  const [value, setValue] = useState([0, 20, 40, 60, 80, 100, 120, 140, 160]);
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
  const [mouthback, setMouthback] = useState(true);
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
    warehouseScreenService
      .getBottomValue()
      .then(res => {
        // setOutfactory(res.outfactory);
        // setOutphosphorusStorage(res.outphosphorusStorage);
        // setWeekvalue(res.phosphrus.prouduct);
        // setWeekvalue2(res.phosphrus.dayDelivery);
        setMonthvalue(res.phosphrusmonth.prouduct);
        setMonthvalue2(res.phosphrusmonth.dayDelivery);
        setYearvalue(res.phosphrusyear.prouduct);
        setYearvalue2(res.phosphrusyear.dayDelivery);
        setType(res.phosphrusmonth.prouducttime);
        // setWeek(convertToWeekdays(res.phosphrus.prouducttime));
        setMouth(res.phosphrusmonth.prouducttime);
        setYear(res.phosphrusyear.prouducttime);
        setValue(res.phosphrus.prouduct);
        setValue2(res.phosphrus.dayDelivery);
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
  }, []);
  // useEffect(() => {
  //   MinescreenApi.getFinishHistogram(moment(new Date(), 'YYYY').format('YYYY'))
  //     .then(res => {
  //       setValue(res);
  //     })
  //     .catch(err => {
  //       // notification.warning({
  //       //   description: err.message
  //       // });
  //     });
  // }, []);
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
          option={getMiddleSecendecharts(value, value2, type)}
          style={{ width: '100%', height: high * 0.8 }}
          key={chartKey} // 使用 key 强制重新挂载
          className={stylemodule.middlefirst}
          // onEvents={onEvents}
        ></ReactECharts>
      </div>
    </div>
  );
});
export default MiddleSecond;
