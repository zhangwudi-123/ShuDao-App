import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getRightThirdechartsb } from './options';
import React, { useState, useEffect, useRef } from 'react';
import stylemodule from './style.module.scss';
// import warehouseScreenService from '~/api/warehouseScreen';
import MinescreenApi from '~/api/Screen/Minescreen';
// import { notification, Button } from '@hvisions/h-ui';
import moment from 'moment';
const Rightsecond = forwardRef(({ high, wide,...props }, ref) => {
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
  const [detalMouth, setDetalMouth] = useState(null);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  const chartRef = useRef(null);
  useImperativeHandle(ref, () => ({
    showModalmouth: showModalmouth,
    showModalyear: showModalyear
  }));
  const showModalmouth = () => {
    setType(mouth);
    setValue(monthvalue);
    setValue2(monthvalue2);
  };
  const showModalyear = () => {
    setType(year);
    setValue(yearvalue);
    setValue2(yearvalue2);
  };

  useEffect(() => {
    MinescreenApi.getInventoryDetails(moment(new Date(), 'YYYY-MM').format('YYYY'), '环锂')
      .then(res => {
        setDetalMouth(res);
      })
      .catch(err => {});
    MinescreenApi.getInventoryDetails(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        let allsumin = 0;

        res.forEach(item => {
          allsumin += item.inventoryAmount / 10000;
        });

        setAllsum(allsumin.toFixed(2));
        const servalue = [];
        const newvalue = res.map(item => {
          servalue.push({
            name: item.projectName,
            value: (item.inventoryAmount / 10000).toFixed(2)
          });

          item.inProportion = ((item.inventoryAmount / 10000 / allsumin) * 100).toFixed(2);
          // console.log(item.inProportion, '===');
          return item;
        });
        // // 计算总的百分比
        // const totalProportion = res.reduce((total, item) => total + item.inProportion, 0);

        // // 如果总百分比超过 100，则对每个项目的百分比进行调整
        // if (totalProportion > 100) {
        //   const adjustment = 100 / totalProportion;
        //   res.forEach(item => {
        //     item.inProportion *= adjustment;
        //   });
        // }
        setValue(newvalue);
        setValue2(servalue);
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
  useEffect(() => {
    setValue(props.detalMouth);
  }, [props.detalMouth]);
  useEffect(() => {
    setType(props.name);
  }, [props.name]);
  return (
    <div>
      <ReactECharts
        option={getRightThirdechartsb(value, value2, type)}
        style={{ width: '100%', height: high*0.85 }}
        className={stylemodule.rightthird}
        key={chartKey} // 使用 key 强制重新挂载
        ref={chartRef}
        // onEvents={onEvents}
      ></ReactECharts>
    </div>
  );
});
export default Rightsecond;
