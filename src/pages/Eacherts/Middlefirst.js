import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getMiddleFirstechartsb } from './options';
import React, { useState, useEffect } from 'react';
import stylemodule from './style.module.scss';
const Middlefirst = forwardRef(({ high, wide,...props }, ref) => {
  const [value, setValue] = useState(props.MiddleThird);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件

  useEffect(() => {
    setValue(props.MiddleThird);
  }, [props.MiddleThird]);

  useEffect(() => {
    // 通过改变 key 强制 ReactECharts 重新挂载
    setChartKey(prevKey => prevKey + 1);
  }, [value]);

  return (
    <div>
      <ReactECharts
        option={getMiddleFirstechartsb(value, '', '')}
        style={{ width: '100%', height: high*0.85  }}
        className={stylemodule.leftfirst}
        key={chartKey} // 使用 key 强制重新挂载
      ></ReactECharts>
    </div>
  );
});
export default Middlefirst;
