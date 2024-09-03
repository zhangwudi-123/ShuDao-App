import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import MinescreenApi from '~/api/Screen/Minescreen';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Middlefirst from '../../../Eacherts/Middlefirst';
import moment from 'moment';

const UnitCost = ({ high, wide }) => {
  const [visable, setVisable] = useState(false);
  const [costname, setCostname] = useState(null);
  const handleFullScreen = useFullScreenHandle();
  const [middleThird, setMiddleThird] = useState(null);
  const handleChangecost = event => {
    MinescreenApi.getCostProportion(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
      .then(res => {
        setMiddleThird(res);
      })
      .catch(err => {});
  };
  const handleBlurcost = event => {};
  useEffect(() => {
    MinescreenApi.getCostProportionName(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        const array = res;
        // 使用 Set 对象来存储唯一值
        const uniqueArray = [...new Set(array)];
        setCostname(uniqueArray);
      })
      .catch(err => {});

    MinescreenApi.getCostProportion(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
      .then(res => {
        setMiddleThird(res);
      })
      .catch(err => {});
  }, []);

  return (
    <div className={stylemodule.backdiv}>
      <div
        className={stylemodule.leftbackdivfirstovertext}
        style={{
          width: wide,
          height: high * 0.03,
          fontSize: `${high * 0.03 * 0.8}px`
        }}
      >
        成本趋势
      </div>
      <div
        style={{
          width: wide,
          height: high,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            height: high * 0.1,
            width: wide,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row-reverse'
          }}
        >
          <div className={stylemodule.leftbackdivsecondselecttext}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{}}>物料:</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <select
                defaultValue={costname != null && costname[0]}
                className={stylemodule.leftbackdivsecondselectdiv}
                onChange={handleChangecost}
                onBlur={handleBlurcost}
                style={{
                  height: high * 0.05,
                  width: wide * 0.3
                }}
              >
                {costname != null &&
                  costname.map((value, index) => {
                    return (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        </div>
        <div
          style={{
            height: high * 0.85,
            width: wide
          }}
        >
          <Middlefirst MiddleThird={middleThird} high={high} wide={wide} />
        </div>
      </div>
    </div>
  );
};

export default UnitCost;
