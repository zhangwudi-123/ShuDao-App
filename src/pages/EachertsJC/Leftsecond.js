import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getLeftSecondecharts } from './options';
import React, { useState, useEffect } from 'react';
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
import './style.css';
// import warehouseScreenService from '~/api/warehouseScreen';
import moment from 'moment';
// import { notification, Button } from '@hvisions/h-ui';
const Leftsecond = forwardRef(({ high, wide }, ref) => {
  const [elect, setElect] = useState(null);
  const [type, setType] = useState([]);
  const [value, setValue] = useState(null);
  const [week, setWeek] = useState([]);
  const [mouth, setMouth] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    27,
    28
  ]);
  const [year, setYear] = useState([]);
  const [weekvalue, setWeekvalue] = useState();
  const [monthvalue, setMonthvalue] = useState([
    13020.5,
    11050.2,
    14800.6,
    15002.6,
    19200.7,
    13020.5,
    11050.2,
    14800.6,
    15002.6,
    19200.7,
    13020.5,
    11050.2,
    14800.6,
    15002.6,
    19200.7,
    13020.5,
    11050.2,
    14800.6,
    15002.6,
    19200.7,
    13020.5,
    11050.2,
    14800.6,
    15002.6,
    19200.7
  ]); //
  const [yearvalue, setYearvalue] = useState([132000.5, 115000.2, 148000.6, 152000.6, 192000.7]);
  const [weekback, setWeekback] = useState(true);
  const [mouthback, setMouthback] = useState(true);
  const [yearback, setYearback] = useState(false);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
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

  //console.log(props);
  const showModalweek = () => {
    setType(week);
    setValue(weekvalue);
    setWeekback(true);
    setMouthback(false);
    setYearback(false);
  };
  const showModalmouth = () => {
    setType(mouth);
    setValue(monthvalue);
    setWeekback(false);
    setMouthback(true);
    setYearback(false);
  };
  const showModalyear = () => {
    setType(year);
    setValue(yearvalue);
    setWeekback(false);
    setMouthback(false);
    setYearback(true);
  };
  //   const onEvents = {
  //     click: onChartClick
  //   };
  useEffect(() => {
    warehouseScreenService
      .gettopValue()
      .then(res => {
        // console.log(res);
        setWeekvalue(res.electric);
        setMonthvalue(res.electricmonth);
        setYearvalue(res.electricyear);
        setType(res.electrictimemonth);
        setWeek(convertToWeekdays(res.electrictime));

        setMouth(res.electrictimemonth);
        setYear(res.electrictimeyear);
        setValue(res.electricmonth);
        // setElect(res.electric);
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
  }, []);
  useEffect(() => {
    // 通过改变 key 强制 ReactECharts 重新挂载
    setChartKey(prevKey => prevKey + 1);
  }, [value]);
  return (
    <>
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
            option={getLeftSecondecharts(value, type)}
            style={{ width: '100%', height: high * 0.8 }}
            key={chartKey} // 使用 key 强制重新挂载
            // onEvents={onEvents}
          ></ReactECharts>
        </div>
      </div>
    </>
  );
});
export default Leftsecond;
