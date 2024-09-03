import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getRightFirstechartsb } from './options';
import React, { useState, useEffect } from 'react';
import stylemodule from './style.module.scss';
import MinescreenApi from '~/api/Screen/Minescreen';
import moment from 'moment';
const Rightfirstb = forwardRef(({ high, wide }, ref) => {
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
    MinescreenApi.getProfitPieChart(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        let allsumin = 0;
        res.forEach(item => {
          if (item.profitValue < 0 && item.companyName != '总利润') {
            allsumin += item.profitValue;
          }
        });
        setAllsum(allsumin.toFixed(2));
        setValue(res);
      })
      .catch(err => {});
  }, []);

  useEffect(() => {
    // 通过改变 key 强制 ReactECharts 重新挂载
    setChartKey(prevKey => prevKey + 1);
  }, [value]);

  return (
    <div style={{}}>
      <ReactECharts
        option={getRightFirstechartsb(value, '', '')}
        style={{ width: '100%', height: high * 0.45 }}
        className={stylemodule.rightfirst}
        key={chartKey} // 使用 key 强制重新挂载
      ></ReactECharts>
      <div
        className={stylemodule.rightfirstphoto}
        style={{
          position: 'relative',
          width: wide,
          height: high * 0.45
        }}
      >
        <div
          className={stylemodule.rightfirstphotodiv}
          style={{
            position: 'absolute',
            margin: 'auto',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: wide / 3,
            height: wide / 3
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
              bottom: 0
            }}
          >
            <span
              className={stylemodule.rightthirdphotodivsumfirst2}
              style={{
                fontSize: wide / 40,
                margin: 'auto'
              }}
            >
              {allsum != null && allsum}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Rightfirstb;
