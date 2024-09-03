import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getLeftSecondecharts } from './options';
import React, { useState, useEffect } from 'react';
import MinescreenApi from '~/api/Screen/Minescreen';
// import warehouseScreenService from '~/api/warehouseScreen';
import moment from 'moment';
// import { notification, Button } from '@hvisions/h-ui';
const Leftsecond = forwardRef(({ high, wide }, ref) => {
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
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  // const [chartKey2,setChartKey2] = useState(2)
  useEffect(() => {
    MinescreenApi.getRevenueHistogram(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        setValue(res);
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
  }, []);
  useEffect(() => {
    MinescreenApi.getRevenueHistogram(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        setValue(res);
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
    <ReactECharts
      option={getLeftSecondecharts(value, '', '')}
      style={{ width: wide, height: high, marginTop: -high * 0.22 }}
      key={chartKey} // 使用 key 强制重新挂载
    ></ReactECharts>
  );
});
export default Leftsecond;
