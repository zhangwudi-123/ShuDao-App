import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getRightFirstechartsb } from './options';
import React, { useState, useEffect } from 'react';
import stylemodule from './style.module.scss';
// import warehouseScreenService from '~/api/warehouseScreen';
// import MinescreenApi from '~/api/Screen/Minescreen';
import { generateNewColor } from './generateNewColor';
import MinescreenApi from '~/api/Minescreen';
import { isEmpty } from 'lodash';
import warehouseScreenService from '~/api/warehouseScreen';
import moment from 'moment';
// import { notification, Button } from '@hvisions/h-ui';
const Rightfirstb = forwardRef(({ high, wide, ...props }, ref) => {
  const [days, setDays] = useState([]);
  const [daysLegendData, setDaysLegendData] = useState([]);
  const [daysSeriesData, setDaysSeriesData] = useState([]);
  const [months, setMonths] = useState([]);
  const [monthsLegendData, setMonthsLegendData] = useState([]);
  const [monthsSeriesData, setMonthsSeriesData] = useState([]);

  const [xData, setXData] = useState([]);
  const [LegendData, setLegendData] = useState([]);
  const [SeriesData, setSeriesData] = useState([]);

  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  useImperativeHandle(ref, () => ({
    showModalmouth: showModalmouth,
    showModalyear: showModalyear
  }));

  const showModalmouth = () => {
    setXData(days);
    setLegendData(daysLegendData);
    setSeriesData(daysSeriesData);
    setChartKey(prevKey => prevKey + 1);
  };

  const showModalyear = () => {
    setXData(months);
    setLegendData(monthsLegendData);
    setSeriesData(monthsSeriesData);
    setChartKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await MinescreenApi.energyConsumption()
      .then(res => {
        const days = res.days;
        const daysLegendData = res.daysInfos.map(i => i.materialName);
        const daysSeriesData = res.daysInfos.map(i => {
          let color = '';
          switch (i.materialName) {
            case '水':
              color = '#0000FF';
              break;
            case '电':
              color = '#FFFF00';
              break;
            case '燃气':
              color = '#00FF00';
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

        const months = res.months;
        const monthsLegendData = res.monthsInfos.map(i => i.materialName);
        const monthsSeriesData = res.monthsInfos.map(i => {
          let color = '';
          switch (i.materialName) {
            case '水':
              color = '#0000FF';
              break;
            case '电':
              color = '#FFFF00';
              break;
            case '燃气':
              color = '#00FF00';
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

        setDays(days);
        setDaysLegendData(daysLegendData);
        setDaysSeriesData(daysSeriesData);
        setMonths(months);
        setMonthsLegendData(monthsLegendData);
        setMonthsSeriesData(monthsSeriesData);
        setXData(months);
        setLegendData(monthsLegendData);
        setSeriesData(monthsSeriesData);
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
  };
  return (
    <div>
      <ReactECharts
        option={getRightFirstechartsb(xData, LegendData, SeriesData)}
        style={{ width: wide, height: high * 0.6, marginTop: high * 0.05 }}
        className={stylemodule.rightfirst}
        key={chartKey} // 使用 key 强制重新挂载
        // onEvents={onEvents}
      ></ReactECharts>
    </div>
  );
});
export default Rightfirstb;
