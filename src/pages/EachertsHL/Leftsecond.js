import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getLeftSecondecharts } from './options';
import React, { useState, useEffect } from 'react';
// import MinescreenApi from '~/api/Screen/Minescreen';
import warehouseScreenService from '~/api/warehouseScreen';
import { generateNewColor } from './generateNewColor';
import MinescreenApi from '~/api/Minescreen';
import { isEmpty } from 'lodash';
// import warehouseScreenService from '~/api/warehouseScreen';
import moment from 'moment';
// import { notification, Button } from '@hvisions/h-ui';
const Leftsecond = forwardRef(({ high, wide, ...props }, ref) => {
  const [days, setDays] = useState([]);
  const [daysLegendData, setDaysLegendData] = useState([]);
  const [daysSeriesData, setDaysSeriesData] = useState([]);
  const [months, setMonths] = useState([]);
  const [monthsLegendData, setMonthsLegendData] = useState([]);
  const [monthsSeriesData, setMonthsSeriesData] = useState([]);

  const [xData, setXData] = useState([]);
  const [LegendData, setLegendData] = useState([]);
  const [SeriesData, setSeriesData] = useState([]);
  const [dataIsEmpty, setDataIsEmpty] = useState(true);
  const [dataIsEmpty1, setDataIsEmpty1] = useState(true);
  const [dataIsEmpty2, setDataIsEmpty2] = useState(true);

  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  useImperativeHandle(ref, () => ({
    showModalmouth: showModalmouth,
    showModalyear: showModalyear
  }));

  const showModalmouth = () => {
    setXData(days);
    setLegendData(daysLegendData);
    setSeriesData(daysSeriesData);
    setDataIsEmpty(dataIsEmpty1);

    setChartKey(prevKey => prevKey + 1);
  };

  const showModalyear = () => {
    setXData(months);
    setLegendData(monthsLegendData);
    setSeriesData(monthsSeriesData);
    setDataIsEmpty(dataIsEmpty2);

    setChartKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await MinescreenApi.mainConsumption()
      .then(res => {
        const days = res.days;
        const daysLegendData = res.daysInfos.map(i => i.materialName);
        const daysSeriesData = res.daysInfos.map(i => {
          if (!isEmpty(i.valueArr)) {
            setDataIsEmpty1(false);
          }
          const data = {
            name: i.materialName,
            type: 'line',
            symbol: 'diamond',
            // smooth: true, //平滑
            lineStyle: {
              width: 2,
              color: generateNewColor()
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
          if (!isEmpty(i.valueArr)) {
            setDataIsEmpty2(false);
          }
          const data = {
            name: i.materialName,
            type: 'line',
            symbol: 'diamond',
            // smooth: true, //平滑
            lineStyle: {
              width: 2
              // color: generateNewColor()
            },
            showSymbol: true,
            emphasis: {
              focus: 'series'
            },
            data: i.valueArr
          };
          return data;
        });
        console.log(daysSeriesData, '111');
        console.log(monthsSeriesData, '222');
        setDays(days);
        setDaysLegendData(daysLegendData);
        setDaysSeriesData(daysSeriesData);
        setMonths(months);
        setMonthsLegendData(monthsLegendData);
        setMonthsSeriesData(monthsSeriesData);
        // setDataIsEmpty(dataIsEmpty2);
        setXData(months);
        setLegendData(monthsLegendData);
        setSeriesData(monthsSeriesData);
        // setDataIsEmpty(dataIsEmpty2);
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
  };

  return (
    <>
      <ReactECharts
        option={getLeftSecondecharts(xData, LegendData, SeriesData, false)}
        style={{ width: wide, height: high * 0.8 }}
        key={chartKey} // 使用 key 强制重新挂载
        // onEvents={onEvents}
      ></ReactECharts>
    </>
  );
});
export default Leftsecond;
