import ReactECharts from 'echarts-for-react';
import { forwardRef, useImperativeHandle } from 'react';
import { getMiddleFirstechartsb } from './options';
import React, { useState, useEffect } from 'react';
import stylemodule from './style.module.scss';
import { generateNewColor } from './generateNewColor';
import MinescreenApi from '~/api/Minescreen';
import { isEmpty } from 'lodash';
// import warehouseScreenService from '~/api/warehouseScreen';
// import { notification, Button } from '@hvisions/h-ui';
const Middlefirst = forwardRef(({ high, wide, ...props }, ref) => {
  const [type, setType] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12]);
  const [value, setValue] = useState([]);

  const [xData, setXData] = useState(type);
  const [LegendData, setLegendData] = useState([]);
  const [SeriesData1, setSeriesData1] = useState([]);
  const [SeriesData2, setSeriesData2] = useState([]);
  const [dataIsEmpty, setDataIsEmpty] = useState(false);

  const [chartKey, setChartKey] = useState(0); // 用于强制重新挂载组件
  useImperativeHandle(ref, () => ({
    showModalGu: showModalGu,
    showModalNi: showModalNi,
    showModalMn: showModalMn,
    showModalLi: showModalLi
  }));
  const showModalGu = () => {
    const data = value.filter(item => item.materialName == '硫酸钴')[0];
    setChartKey(Math.random());
    if (!isEmpty(data)) {
      setXData(type);
      setSeriesData1(data.unitCosts);
      setSeriesData2(data.prices);
      setDataIsEmpty(isEmpty(data.unitCosts) && isEmpty(data.prices));
    } else {
      setXData([]);
      setSeriesData1([]);
      setSeriesData2([]);
      setDataIsEmpty(true);
    }
  };
  const showModalNi = () => {
    const data = value.filter(item => item.materialName == '硫酸镍')[0];
    setChartKey(Math.random());
    if (!isEmpty(data)) {
      setXData(type);
      setSeriesData1(data.unitCosts);
      setSeriesData2(data.prices);
      setDataIsEmpty(isEmpty(data.unitCosts) && isEmpty(data.prices));
    } else {
      setXData([]);
      setSeriesData1([]);
      setSeriesData2([]);
      setDataIsEmpty(true);
    }
  };
  const showModalMn = () => {
    const data = value.filter(item => item.materialName == '硫酸锰')[0];
    setChartKey(Math.random());
    if (!isEmpty(data)) {
      setXData(type);
      setSeriesData1(data.unitCosts);
      setSeriesData2(data.prices);
      setDataIsEmpty(isEmpty(data.unitCosts) && isEmpty(data.prices));
    } else {
      setXData([]);
      setSeriesData1([]);
      setSeriesData2([]);
      setDataIsEmpty(true);
    }
  };
  const showModalLi = () => {
    const data = value.filter(item => item.materialName == '碳酸锂')[0];
    setChartKey(Math.random());
    if (!isEmpty(data)) {
      setXData(type);
      setSeriesData1(data.unitCosts);
      setSeriesData2(data.prices);
      setDataIsEmpty(isEmpty(data.unitCosts) && isEmpty(data.prices));
    } else {
      setXData([]);
      setSeriesData1([]);
      setSeriesData2([]);
      setDataIsEmpty(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await MinescreenApi.executionCost()
      .then(res => {
        setValue(res);
        const data = res.filter(item => item.materialName == '硫酸钴')[0];
        setChartKey(Math.random());
        if (!isEmpty(data)) {
          setXData(type);
          setSeriesData1(data.unitCosts);
          setSeriesData2(data.prices);
          setDataIsEmpty(isEmpty(data.unitCosts) && isEmpty(data.prices));
        } else {
          setXData([]);
          setSeriesData1([]);
          setSeriesData2([]);
          setDataIsEmpty(true);
        }
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
        option={getMiddleFirstechartsb(xData, SeriesData1, SeriesData2, dataIsEmpty)}
        style={{ width: wide, height: high * 0.6 }}
        className={stylemodule.leftfirst}
        key={chartKey} // 使用 key 强制重新挂载
        // onEvents={onEvents}
      ></ReactECharts>
      {/* <div className={stylemodule.leftfirstphoto}>
        <div className={stylemodule.leftfirstphotodiv}></div>
      </div> */}
    </div>
  );
});
export default Middlefirst;
