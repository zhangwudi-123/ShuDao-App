import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import Rightthird from '../../../EachertsHL/Rightthird';
import MinescreenApi from '~/api/Screen/Minescreen';
import './index.css';
import moment from 'moment';

const Stocks = ({ high, wide }) => {
  const [comname, setComname] = useState(['环锂']);
  const [buttonCom, setButtonCom] = useState(null);
  const [buttonStyle, setButtonStyle] = useState('月');
  const [detalMouth, setDetalMouth] = useState(null);
  const [visable, setVisable] = useState(false);
  const [costname, setCostname] = useState(null);
  const [middleThird, setMiddleThird] = useState(null);
  const getInventoryDetails = () => {
    MinescreenApi.getInventoryDetails2()
      .then(res => {})
      .catch(err => {});
    MinescreenApi.getInventoryDetailsCcp()
      .then(res => {})
      .catch(err => {});
  };
  useEffect(() => {
    MinescreenApi.getCostProportionName(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        const array = res;

        // 使用 Set 对象来存储唯一值
        const uniqueArray = [...new Set(array)];

        // console.log(uniqueArray); // 输出: ["磷矿石"]

        setCostname(uniqueArray);
      })
      .catch(err => {});

    MinescreenApi.getCostProportion(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
      .then(res => {
        // console.log(res, '===');
        // let allsumin = 0;
        // res.forEach(item => {
        //   allsumin += item.costValue;
        // });
        // setAllsumPrice(allsumin);
        // setPricename(res);
        setMiddleThird(res);
      })
      .catch(err => {});
  }, []);
  const handleChangecostCom = event => {
    setButtonCom(event.target.value);
  };
  const handleBlurCom = () => {};
  const getMonth = () => {
    setButtonStyle('月');
    MinescreenApi.getInventoryDetails(moment(new Date(), 'YYYY-MM').format('YYYY-MM'), comname)
      .then(res => {
        setDetalMouth(res);
      })
      .catch(err => {});
  };
  const getYear = () => {
    setButtonStyle('年');
    MinescreenApi.getInventoryDetailsByYear(moment(new Date(), 'YYYY').format('YYYY'), comname)
      .then(res => {
        setDetalMouth(res);
      })
      .catch(err => {});
  };
  useEffect(() => {
    MinescreenApi.getInventoryDetails(moment(new Date(), 'YYYY-MM').format('YYYY'), '环锂')
      .then(res => {
        setDetalMouth(res);
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
        成本产量
      </div>
      <div style={{ height: high, width: wide }}>
        <Rightthird detalMouth={detalMouth} name={buttonStyle} high={high} wide={wide} />
      </div>
    </div>
  );
};

export default Stocks;
