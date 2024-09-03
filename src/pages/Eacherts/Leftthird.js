import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getLeftThirdecharts } from './options';
import stylemodule from './style.module.scss';
import React, { useState, useEffect } from 'react';
// import warehouseScreenService from '~/api/warehouseScreen';
import MinescreenApi from '~/api/Screen/Minescreen';
// import { notification, Button } from '@hvisions/h-ui';
import moment from 'moment';
const Leftthird = forwardRef(({ high, wide,...props }, ref) => {
  const [value, setValue] = useState(props.LeftThird);
  const [value2, setValue2] = useState(props.LeftThird2);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件

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
      option={getLeftThirdecharts(value, value2, '', '', '')}
      style={{ width: '100%', height: high*0.85 }}
      className={stylemodule.leftthird}
      key={chartKey} // 使用 key 强制重新挂载
    ></ReactECharts>
  );
});
export default Leftthird;
