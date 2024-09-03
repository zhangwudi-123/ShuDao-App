import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getLeftFirstecharts } from './options';
import React, { useState, useEffect } from 'react';
import stylemodule from './style.module.scss';
import MinescreenApi from '~/api/Screen/Minescreen';
// import { notification, Button } from '@hvisions/h-ui';
import moment from 'moment';
const Leftfirst = forwardRef(({ high, wide }, ref) => {
  const [allsum, setAllsum] = useState(null);
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

  useEffect(() => {
    MinescreenApi.getRevenuePieChart(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        let allsumin = 0;
        res.forEach(item => {
          if (item.companyName == '总营收') {
            allsumin = item.revenueValue;
          }
        });

        setAllsum(allsumin.toFixed(2));
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
    <>
      <ReactECharts
        option={getLeftFirstecharts(value, '', '')}
        style={{ width: '100%', height: high / 2, }}
        className={stylemodule.leftfirst}
        key={chartKey} // 使用 key 强制重新挂载
      ></ReactECharts>
      <div
        className={stylemodule.leftfirstphoto}
        style={{
          position: 'relative',
          width: wide,
          height: high / 2,
        }}
      >
        <div
          className={stylemodule.leftfirstphotodiv}
          style={{
            position: 'absolute',
            margin: 'auto',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: wide / 3,
            height: wide / 3,
          }}
        >
          <div 
          className={stylemodule.rightthirdphotodivsum}
          style={{
            position: 'absolute',
            margin: 'auto',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          >
            <span
              className={stylemodule.rightthirdphotodivsumfirst}
              style={{
                fontSize: wide / 40,
              }}
            >
              {allsum != null && allsum}
            </span>
            <span
              className={stylemodule.rightthirdphotodivsumsecond}
              style={{
                fontSize: wide / 38
              }}
            >
              总营收
            </span>
          </div>
        </div>
      </div>
    </>
  );
});
export default Leftfirst;
