import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getMiddleSecendecharts } from './options';
import React, { useState, useEffect } from 'react';
// import warehouseScreenService from '~/api/warehouseScreen';
import stylemodule from './style.module.scss';
import { generateNewColor } from './generateNewColor';
import MinescreenApi from '~/api/Minescreen';
import { isEmpty } from 'lodash';
import warehouseScreenService from '~/api/warehouseScreen';
// import { notification, Button } from '@hvisions/h-ui';
import moment from 'moment';
const MiddleSecond = forwardRef(({ high, wide, ...props }, ref) => {
  const [xData, setXData] = useState([]);
  const [LegendData, setLegendData] = useState([]);
  const [SeriesData, setSeriesData] = useState([]);
  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  useImperativeHandle(ref, () => ({
    showModalmouth: showModalmouth,
    showModalyear: showModalyear
  }));
  const showModalmouth = () => {};
  const showModalyear = () => {};
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    MinescreenApi.metalBalance()
      .then(res => {
        const months = res.months;
        const monthsLegendData = res.monthsInfos.map(i => i.materialName);
        const monthsSeriesData = res.monthsInfos.map(i => {
          let color = '';
          switch (i.materialName) {
            case 'Ni':
              color = '#008000';
              break;
            case 'Gu':
              color = '#00FFFF';
              break;
            case 'Li':
              color = '#FF00FF';
              break;
            case 'Mn':
              color = '#D35400';
              break;
          }

          const data = {
            name: i.materialName,
            type: 'line',
            symbol: 'diamond',
            // smooth: true, //平滑
            lineStyle: {
              width: 2,
              color: color
            },
            showSymbol: true,
            emphasis: {
              focus: 'series'
            },
            data: i.valueArr
          };
          return data;
        });
        setXData(months);
        setLegendData(monthsLegendData);
        // setLegendData2(monthsLegendData)
        setSeriesData(monthsSeriesData);
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
  };
  return (
    <ReactECharts
      option={getMiddleSecendecharts(xData, LegendData, SeriesData)}
      style={{ width: wide, height: high * 0.6, marginTop: high * 0.08 }}
      key={chartKey} // 使用 key 强制重新挂载
      className={stylemodule.middlefirst}
      // onEvents={onEvents}
    ></ReactECharts>
  );
});
export default MiddleSecond;
