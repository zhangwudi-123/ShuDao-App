import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getMiddleSecendecharts } from './options';
import React, { useState, useEffect } from 'react';
// import warehouseScreenService from '~/api/warehouseScreen';
import stylemodule from './style.module.scss';
import MinescreenApi from '~/api/Screen/Minescreen';
// import { notification, Button } from '@hvisions/h-ui';
import moment from 'moment';
const MiddleSecond = forwardRef(({ high, wide }, ref) => {
  const [value, setValue] = useState([0, 20, 40, 60, 80, 100, 120, 140, 160]);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件

  useEffect(() => {
    MinescreenApi.getFinishHistogram(moment(new Date(), 'YYYY').format('YYYY'))
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
      option={getMiddleSecendecharts(value, '', '')}
      style={{ width: '100%', height: high * 0.6, marginTop: high * 0.08 }}
      key={chartKey} // 使用 key 强制重新挂载
      className={stylemodule.middlefirst}
    ></ReactECharts>
  );
});
export default MiddleSecond;
