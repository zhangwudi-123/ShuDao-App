import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import MinescreenApi from '~/api/Screen/Minescreen';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Middlefirst from '../../../EachertsHL/Middlefirst';
import moment from 'moment';
import './index.css';
const UnitCost = ({ high, wide }) => {
  const [visable, setVisable] = useState(false);
  const [costname, setCostname] = useState(null);
  const handleFullScreen = useFullScreenHandle();
  const [middleThird, setMiddleThird] = useState(null);
  const rightfirstref = useRef(null);
  const [rightfirstbutton, setRightfirstbutton] = useState('gu');
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
  const rightfirstGu = () => {
    rightfirstref.current.showModalGu();
    setRightfirstbutton('gu');
  };

  const rightfirstNi = () => {
    rightfirstref.current.showModalNi();
    setRightfirstbutton('nie');
  };

  const rightfirstMn = () => {
    rightfirstref.current.showModalMn();
    setRightfirstbutton('meng');
  };

  const rightfirstLi = () => {
    rightfirstref.current.showModalLi();
    setRightfirstbutton('li');
  };
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
        执行成本
      </div>

      {/* <div
        style={{
          height: '10%',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
          // backgroundColor: 'red'
        }}
      ></div> */}
      <div
        style={{
          height: high * 0.03,
          width: wide,
          display: 'flex',
          // position: 'absolute',
          // marginLeft: '30rem',
          marginTop: high * 0.05
          // backgroundColor: 'red',
          // zIndex: 10000
        }}
      >
        <div
          style={{
            width: wide * 0.3,
            height: high * 0.03,
            margin: '0 auto',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            marginRight: '2rem',
            fontFamily: 'PingFangSC, PingFang SC'
          }}
          onClick={rightfirstGu}
          className={`textButton ${rightfirstbutton == 'gu' ? 'textButton2' : ''}`}
        >
          硫酸钴
        </div>
        <div
          style={{
            width: wide * 0.3,
            height: high * 0.03,
            margin: '0',
            padding: '0',
            marginRight: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}
          onClick={rightfirstNi}
          className={`textButton ${rightfirstbutton == 'nie' ? 'textButton2' : ''}`}
        >
          硫酸镍
        </div>
        <div
          style={{
            width: wide * 0.3,
            height: high * 0.03,
            margin: '0',
            padding: '0',
            marginRight: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}
          onClick={rightfirstMn}
          className={`textButton ${rightfirstbutton == 'meng' ? 'textButton2' : ''}`}
        >
          硫酸锰
        </div>
        <div
          style={{
            width: wide * 0.3,
            height: high * 0.03,
            margin: '0',
            padding: '0',
            marginRight: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}
          onClick={rightfirstLi}
          className={`textButton ${rightfirstbutton == 'li' ? 'textButton2' : ''}`}
        >
          碳酸锂
        </div>
      </div>
      <div style={{ height: high, width: wide }}>
        <Middlefirst ref={rightfirstref} high={high} wide={wide} />
      </div>
    </div>
  );
};

export default UnitCost;
