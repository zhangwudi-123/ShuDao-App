import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import MinescreenApi from '~/api/Screen/Minescreen2';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Middlefirst from '../../../EachertsJC/Middlefirst';
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
        营收利润
      </div>
      <div style={{ height: high, width: wide }}>
        <Middlefirst MiddleThird={middleThird} high={high} wide={wide} />
      </div>
    </div>
  );
};

export default UnitCost;
