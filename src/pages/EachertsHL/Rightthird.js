import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getRightThirdechartsb } from './options';
import React, { useState, useEffect, useRef } from 'react';
import stylemodule from './style.module.scss';
// import warehouseScreenService from '~/api/warehouseScreen';
import MinescreenApi from '~/api/Minescreen';
// import { notification, Button } from '@hvisions/h-ui';
import moment from 'moment';
const Rightsecond = forwardRef(({ high, wide, ...props }, ref) => {
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
    MinescreenApi.output()
      .then(res => {
        const days = res.days;
        const daysLegendData = res.daysInfos.map(i => i.materialName);
        const daysSeriesData = res.daysInfos.map(i => {
          let color = '';
          switch (i.materialName) {
            case '硫酸镍':
              color = '#008000';
              break;
            case '硫酸钴':
              color = '#00FFFF';
              break;
            case '硫酸锂':
              color = '#FF00FF';
              break;
            case '硫酸锰':
              color = '#D35400';
              break;
          }
          const dataArr = i.valueArr.map(item => item / 1000);

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
            // data: i.valueArr
            data: dataArr
          };
          return data;
        });

        const months = res.months;
        const monthsLegendData = res.monthsInfos.map(i => i.materialName);
        const monthsSeriesData = res.monthsInfos.map(i => {
          let color = '';
          switch (i.materialName) {
            case '硫酸镍':
              color = '#008000';
              break;
            case '硫酸钴':
              color = '#00FFFF';
              break;
            case '硫酸锂':
              color = '#FF00FF';
              break;
            case '硫酸锰':
              color = '#D35400';
              break;
          }
          const dataArr = i.valueArr.map(item => item / 1000);

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
            // data: i.valueArr
            data: dataArr
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
        option={getRightThirdechartsb(xData, LegendData, SeriesData)}
        style={{ width: wide, height: high * 0.6, marginTop: high * 0.05 }}
        className={stylemodule.rightthird}
        key={chartKey} // 使用 key 强制重新挂载
        // ref={chartRef}
        // onEvents={onEvents}
      ></ReactECharts>
      {/* <div className={stylemodule.rightthirdphoto}>
        <div className={stylemodule.rightthirdphotodiv}>
          <div className={stylemodule.rightthirdphotodivsum}>
            <span className={stylemodule.rightthirdphotodivsumfirst}>
              {allsum != null && allsum}
            </span>
            <span className={stylemodule.rightthirdphotodivsumsecond}>库存总数</span>
          </div>
        </div>
      </div> */}
    </div>
  );
});
export default Rightsecond;
